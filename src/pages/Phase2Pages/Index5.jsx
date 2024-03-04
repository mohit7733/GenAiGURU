import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Layout/Header";
import Sidebar from "../../components/Layout/Sidebar";
import MobileHeader from "../../components/Layout/MobileHeader";
import { BASE_PATH } from "../../routes";
import { toast, ToastContainer } from "react-toastify";
import { getBaseURL } from "../../api/config";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const token = JSON.parse(localStorage.getItem("token"));

const Index5 = () => {
  const navigate = useNavigate();
  const [local, setLocal] = useState(JSON.parse(localStorage.getItem("Data")));
  const [displaySeePost, setDisplaySeePost] = useState(
    local != null ? true : false
    // true
  );
  const [search, toSearch] = useState("");
  const [titlehasset, setTitlehasset] = useState(false);
  const ClearIndicator = () => null;
  const [data, setData] = useState({
    title: local ? local.title : "",
    // descriptions: "",
    shortdesc: local ? local.shortdesc : "",
    interests: local ? local.interests : [],
    thumbnail: local ? local.thumbnail : null,
    banner: null,
  });
  const [value, setValue] = useState(
    local ? JSON.parse(localStorage.getItem("value")) : ""
  );
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [interestData, setInterestData] = useState([]);
  const [topic, setTopic] = useState();
  const [selectOptions, setSelectOptions] = useState(
    JSON.parse(localStorage.getItem("Interests")) || []
  );
  const [selectTopic, setSelectTopic] = useState([]);
  useEffect(() => {
    setData({ ...data, banner: local?.banner || null });
    axios
      .get(`${getBaseURL()}/interests`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setInterestData(response.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    axios
      .get(`${getBaseURL()}/blog-styles`)
      .then((res) => {
        setTopic(res.data.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  let interested = [];
  interestData?.map((item) => {
    interested.push({
      value: item?.interestName,
      label: item?.interestName,
      id: item.id,
    });
  });
  let topics = [];
  topic?.map((data) => {
    topics.push({
      value: data?.name,
      label: data?.name,
      id: data?.id,
    });
  });
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ["clean"],
    ],
  };

  const dataChange = (key, value) => {
    switch (key) {
      case "title":
        setData({ ...data, title: value });
        break;
      // case "desc":
      //   setData({ ...data, descriptions: value });
      //   break;
      case "short":
        setData({ ...data, shortdesc: value });
        break;
      case "thumb":
        if (value) {
          const allowedImageTypes = ["image/jpeg", "image/png", "image/gif"];
          const maxImageSizeMB = 2;
          if (allowedImageTypes.includes(value.type)) {
            if (value.size <= maxImageSizeMB * 1024 * 1024) {
              setData({ ...data, thumbnail: value });
            } else {
              toast.warn("Image size should not be more than 2MB", {
                position: toast.POSITION.TOP_CENTER,
              });
            }
          } else {
            toast.warn("Please select JPEG, PNG, GIF.", {
              position: toast.POSITION.TOP_CENTER,
            });
            <ToastContainer autoClose={1000} />;
          }
        }
        break;
      case "banner":
        if (value) {
          const allowedImageTypes = ["image/jpeg", "image/png", "image/gif"];
          const maxImageSizeMB = 2;
          if (allowedImageTypes.includes(value.type)) {
            if (value.size <= maxImageSizeMB * 1024 * 1024) {
              setData({ ...data, banner: value });
            } else {
              toast.warn("Image size should not be more than 2MB", {
                position: toast.POSITION.TOP_CENTER,
              });
            }
          } else {
            toast.warn("Please select JPEG, PNG, GIF.", {
              position: toast.POSITION.TOP_CENTER,
            });
            <ToastContainer autoClose={1000} />;
          }
        }
        break;
      case "interests":
        setData({ ...data, interests: value });
        break;
      default:
        break;
    }
  };
  let string = selectOptions.map((data) => data.value);

  const chatGPTApi = () => {
    toSearch("");
    setLoadingStatus(true);
    let message = `Give me a Title, Short Description(max 200 letters) and Description( min 500 words) based on 
    Interests:${string.slice(0, 3).join(", ")}
    Style:${selectTopic[0].value},
    ${search}. 
    I want Description in HTML format and dont mention html or Description in HTML format`;
    axios
      .post(
        `${getBaseURL()}/auth/send-chat-message`,
        {
          message: message,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.success == false) {
          toast.error("Free Subscription has Ended.", {
            position: toast.POSITION.TOP_CENTER,
          });
           setLoadingStatus(false);
        } else {
          const resdata = response?.data?.[0]?.choices?.[0]?.message?.content;
          const titleRegex = /Title:\s*(.*)/i;
          const shortDescRegex = /Short Description:\s*(.*)/i;
          const descRegex = /Description:\s*([\s\S]*)/i;
          const descMatch = resdata.match(descRegex)[1];
          const shortMatch = resdata.match(shortDescRegex)[1];
          const titleMatch = resdata.match(titleRegex)[1];
          // generateAIimage(titleMatch.replace(/"/g, ""));
          setData({
            ...data,
            title: titleMatch.replace(/"/g, ""),
            shortdesc: shortMatch,
          });
          setValue(descMatch.slice(shortMatch.length));
          setLoadingStatus(false);
        }
      })
      .catch((error) => {
        if (!search) {
          toast.error("Please Type Antything...", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        console.error("Error chatGPTApi:", error.message);
      });
  };

  const generateAIimage = async () => {
    try {
      const thumbnailPromise = axios.post(
        `${getBaseURL()}/auth/generate-image`,
        {
          message: data.title,
          type: "thumbnail",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const bannerPromise = axios.post(
        `${getBaseURL()}/auth/generate-image`,
        {
          message: data.title,
          type: "banner",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const [thumbnailRes, bannerRes] = await Promise.all([
        thumbnailPromise,
        bannerPromise,
      ]);

      setData({
        ...data,
        thumbnail: thumbnailRes.data[0].data[0].url,
        banner: bannerRes.data[0].data[0].url,
      });
      setDisplaySeePost(true);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (data.title && !titlehasset && !local) {
      setTitlehasset(true);
      generateAIimage();
    }
  }, [data.title, titlehasset]);

  function navigateToNextPage() {
    navigate("/preview", {
      state: {
        data: data,
        desc: value,
        // imageData: imageData,
      },
    });
    // const input = document.getElementById("banner");
    // if (input.files && input.files[0]) {
    //   const reader = new FileReader();
    //   reader.onload = function (event) {
    //     const imageData = event.target.result;

    //     localStorage.setItem("banner", imageData);
    //   };
    //   reader.readAsDataURL(input.files[0]);
    // }
    localStorage.setItem("Data", JSON.stringify(data));
    localStorage.setItem("Interests", JSON.stringify(selectOptions));
    localStorage.setItem("value", JSON.stringify(value));
  }

  return (
    <div>
      <MobileHeader />
      <section className="mainWrapper mobileMainWrap flex desktopPostCreate">
        <Sidebar />
        <div className="rightSection PostWrapper">
          <div className="full-width">
            <div className="profile-edit socialLinkEdit flex">
              <p>
                <Link to={BASE_PATH}>Home</Link>{" "}
                <i className="fa fa-angle-right" aria-hidden="true"></i>Write
                with AI{" "}
              </p>
            </div>
            <div className="profile-img-box postWrapper_inner">
              <form className="help-section">
                <div
                  style={
                    displaySeePost == false
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  <span>How to:</span>
                  <p
                    style={{
                      marginTop: "0px",
                      marginBottom: "60px",
                      color: "white",
                    }}
                  >
                    Choose a topic, pick a blog style, and give a creative
                    prompt, Genaiguru will generate a title, blog article,
                    banner image and thumbnail ready for publication to your
                    page on the site.
                  </p>
                  <p
                    style={{
                      display: "flex",
                      color: "#fff",
                      margin: "12px 0 8px",
                      fontSize: "18px",
                    }}
                  >
                    Choose a topic for your post *
                  </p>

                  {selectOptions.length == 3 && (
                    <p
                      style={{
                        color: "#fff",
                        margin: "12px 0 8px",
                        fontSize: "18px",
                      }}
                    >
                      Maximun 3 Interests only
                    </p>
                  )}

                  <Select
                    isObject={false}
                    isMulti
                    isOptionDisabled={() => selectOptions?.length >= 1}
                    options={interested}
                    value={selectOptions}
                    placeholder="Interests"
                    onChange={(Option) => {
                      if (selectOptions.length <= 1) {
                        setSelectOptions(Option);
                        dataChange(
                          "interests",
                          Option.map((option) => option.id)
                        );
                      }
                    }}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        background: "transparent",
                        border: "none",
                        boxShadow: state.isFocused
                          ? "transparent"
                          : "transparent",
                        width: "100%",
                      }),
                      singleValue: (baseStyles) => ({
                        ...baseStyles,
                        color: "white",
                      }),

                      input: (baseStyles) => ({
                        ...baseStyles,
                        color: "white", // Change text color to white
                      }),
                      

                      option: (baseStyles, state) => ({
                        ...baseStyles,
                        background: state.isFocused ? "purple" : "none",
                        border: "none",
                        color: "black",
                        // boxShadow: state.isFocused
                        //   ? "transparent"
                        //   : "transparent",
                      }),
                    }}
                    components={{
                      ClearIndicator: ClearIndicator,
                    }}
                    className="genaiguruSelect flex"
                  />
                  <div style={{ marginTop: "30px" }}>
                    <p
                      style={{
                        color: "#fff",
                        margin: "12px 0 8px",
                        fontSize: "18px",
                      }}
                    >
                      Choose a Blog Article Content Style *
                    </p>
                    <Select
                      isObject={false}
                      isMulti
                      isOptionDisabled={() => selectTopic?.length >= 1}
                      options={topics}
                      value={selectTopic}
                      placeholder="Blog Styles"
                      onChange={(Option) => {
                        setSelectTopic(Option);
                      }}
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          background: "transparent",
                          border: "none",
                          boxShadow: state.isFocused
                            ? "transparent"
                            : "transparent",
                          width: "100%",
                        }),
                        singleValue: (baseStyles) => ({
                          ...baseStyles,
                          color: "white",
                        }),

                        input: (baseStyles) => ({
                          ...baseStyles,
                          color: "white", // Change text color to white
                        }),
                        option: (baseStyles, state) => ({
                          ...baseStyles,
                          background: state.isFocused ? "purple" : "none",
                          border: "none",
                          color: "black",
                          boxShadow: state.isFocused
                            ? "transparent"
                            : "transparent",
                        }),
                      }}
                      components={{
                        ClearIndicator: ClearIndicator,
                      }}
                      className="genaiguruSelect flex"
                    />
                  </div>
                  <div style={{ marginTop: "30px" }}>
                    <p
                      style={{
                        color: "#fff",
                        margin: "12px 0 8px",
                        fontSize: "18px",
                      }}
                    >
                      Give GenaiGuru a creative prompt to write about the topic
                      *
                    </p>
                    <div className="innerSearchForm flex">
                      <figure className="logoIcon">
                        <img
                          src="app/images/searchIconLogoInner.png"
                          alt="Genaiguru search icon image"
                        />
                      </figure>
                      <div className="flex searchFormLong">
                        <div className="form_group">
                          <input
                            type="text"
                            placeholder="Type here"
                            value={search}
                            onChange={(e) => toSearch(e?.target?.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(data.interests, selectTopic, search, "test1");
                      if (
                        data.interests != "" &&
                        selectTopic.length > 0 &&
                        search.length > 0
                      ) {
                        chatGPTApi();
                      } else {
                        toast.error("Please Fill all required fields!", {
                          position: toast.POSITION.TOP_CENTER,
                          autoClose: 1000,
                        });
                      }
                    }}
                  >
                    <button disabled={loadingStatus} className="loginBtn">
                      {loadingStatus ? "" : "Generate"}
                      {loadingStatus && (
                        <div
                          className="typing"
                          style={{ justifyContent: "center" }}
                        >
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              </form>

              <div
                style={
                  displaySeePost == true
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <form>
                  <div className="profile-edit ">
                    <label htmlFor="name">Blog Title</label>
                    <input
                      value={data?.title}
                      onChange={(e) => {
                        dataChange("title", e.target.value);
                      }}
                      type="text"
                      placeholder="Type here"
                      name="title"
                    />
                  </div>
                  <div className="profile-edit custom-file-button">
                    <label htmlFor="name">AI generated Thumbnail Image</label>
                    <img
                      style={{
                        objectFit: "cover",
                        height: "100px",
                        width: "100px",
                        borderRadius: "15px",
                      }}
                      src={data?.thumbnail}
                      alt="thumb"
                    />

                    {/* <input
                      id="banner"
                      type="file"
                      onChange={(e) => {
                        dataChange("thumb", e?.target?.files[0]);
                      }}
                    /> */}
                  </div>
                  <div className="profile-edit input-group custom-file-button">
                    {/* <input
                      type="file"
                      className="form-control"
                      defaultValue={data.banner}
                      onChange={(e) => {
                        dataChange("banner", e?.target?.files[0]);
                      }}
                    /> */}
                    <label
                      className="input-group-text"
                      htmlFor="inputGroupFile"
                    >
                      AI generated Banner Image
                    </label>
                    <img
                      style={{
                        objectFit: "cover",
                        height: "calc(200px - 40px)",
                        width: "300px",
                        borderRadius: "25px",
                      }}
                      src={data?.banner}
                      alt="banner"
                    />
                  </div>

                  <div className="profile-edit">
                    <label htmlFor="name">Short Description</label>
                    <textarea
                      value={data?.shortdesc}
                      onChange={(e) => {
                        dataChange("short", e?.target?.value);
                      }}
                      name="bio"
                      id=""
                      cols="3"
                      rows="6"
                      maxLength={200}
                      placeholder="Text here..."
                    ></textarea>
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >{`${
                      data?.shortdesc ? data?.shortdesc.length : "0"
                    } of 200 Characters`}</p>
                  </div>
                </form>

                <div style={{ marginTop: "50px" }}>
                  {" "}
                  <div
                    style={{
                      marginBottom: "20px",
                      color: "white",
                      fontSize: "19px",
                    }}
                  >
                    <label htmlFor="name">Description</label>{" "}
                  </div>
                  <ReactQuill
                    theme="snow"
                    value={value}
                    onChange={setValue}
                    className="editor-input"
                    modules={modules}
                  />
                </div>

                <form>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        if (
                          data?.title != "" &&
                          data?.shortdesc != "" &&
                          data?.banner != null &&
                          data?.thumbnail != null &&
                          data?.interests != "" &&
                          value != ""
                        ) {
                          navigateToNextPage();
                        } else {
                          toast.error("Please Fill all required fields!", {
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 1000,
                          });
                        }
                      }}
                      style={{ padding: "20px !important", maxWidth: "200px" }}
                    >
                      Preview
                    </button>
                    <button
                      onClick={() => {
                        localStorage.removeItem("Data");
                        localStorage.removeItem("banner");
                        localStorage.removeItem("Interests");
                        localStorage.removeItem("value");
                      }}
                      style={{ padding: "20px !important", maxWidth: "200px" }}
                    >
                      Try Again
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mobile Code Starts Here */}
      <div className="mobilePost">
        <div className="postHead flex">
          <div className="col_left flex">
            <Link to={BASE_PATH}>
              <div className="backBtns">
                <i className="fa fa-angle-left" aria-hidden="true"></i>
              </div>
            </Link>{" "}
            <p>Write with AI</p>
          </div>
        </div>
        <div className="rightSection PostWrapper">
          <div className="full-width">
            <div className="profile-img-box postWrapper_inner">
              <form className="help-section">
                <span>How to:</span>
                <div
                  style={
                    displaySeePost == false
                      ? { display: "block", marginLeft: "20px" }
                      : { display: "none" }
                  }
                >
                  <p
                    style={{
                      marginTop: "0px",
                      marginBottom: "60px",
                      color: "white",
                    }}
                  >
                    Choose a topic, pick a blog style, and give a creative
                    prompt, Genaiguru will generate a title, blog article,
                    banner image and thumbnail ready for publication to your
                    page on the site.
                  </p>
                  <p
                    style={{
                      display: "flex",
                      color: "#fff",
                      margin: "12px 0 8px",
                      fontSize: "18px",
                    }}
                  >
                    Choose a topic for your post *
                  </p>

                  {selectOptions.length == 3 && (
                    <p
                      style={{
                        color: "#fff",
                        margin: "12px 0 8px",
                        fontSize: "18px",
                      }}
                    >
                      Maximun 3 Interests only
                    </p>
                  )}

                  <Select
                    isObject={false}
                    isMulti
                    isOptionDisabled={() => selectOptions?.length >= 1}
                    options={interested}
                    value={selectOptions}
                    placeholder="Interests"
                    onChange={(Option) => {
                      if (selectOptions.length <= 1) {
                        setSelectOptions(Option);
                        dataChange(
                          "interests",
                          Option.map((option) => option.id)
                        );
                      }
                    }}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        background: "transparent",
                        border: "none",
                        boxShadow: state.isFocused
                          ? "transparent"
                          : "transparent",
                        width: "100%",
                      }),
                      singleValue: (baseStyles) => ({
                        ...baseStyles,
                        color: "white",
                      }),

                      option: (baseStyles, state) => ({
                        ...baseStyles,
                        background: state.isFocused ? "purple" : "none",
                        border: "none",
                        color: "black",
                        boxShadow: state.isFocused
                          ? "transparent"
                          : "transparent",
                      }),
                    }}
                    components={{
                        ClearIndicator: ClearIndicator,
                      }}
                    className="genaiguruSelect flex"
                  />
                  <div style={{ marginTop: "30px" }}>
                    <p
                      style={{
                        color: "#fff",
                        margin: "12px 0 8px",
                        fontSize: "18px",
                      }}
                    >
                      Choose a Blog Article Content Style *
                    </p>
                    <Select
                      isObject={false}
                      isMulti
                      isOptionDisabled={() => selectTopic?.length >= 1}
                      options={topics}
                      value={selectTopic}
                      placeholder="Blog Styles"
                      onChange={(Option) => {
                        setSelectTopic(Option);
                      }}
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          background: "transparent",
                          border: "none",
                          boxShadow: state.isFocused
                            ? "transparent"
                            : "transparent",
                          width: "100%",
                        }),
                        singleValue: (baseStyles) => ({
                          ...baseStyles,
                          color: "white",
                        }),

                        option: (baseStyles, state) => ({
                          ...baseStyles,
                          background: state.isFocused ? "purple" : "none",
                          border: "none",
                          color: "black",
                          boxShadow: state.isFocused
                            ? "transparent"
                            : "transparent",
                        }),
                      }}
                      components={{
                        ClearIndicator: ClearIndicator,
                      }}
                      className="genaiguruSelect flex"
                    />
                  </div>
                  <div style={{ marginTop: "30px" }}>
                    <p
                      style={{
                        color: "#fff",
                        margin: "12px 0 8px",
                        fontSize: "18px",
                      }}
                    >
                      Give GenaiGuru a creative prompt to write about the topic
                      *
                    </p>
                    <div className="innerSearchForm flex">
                      <figure className="logoIcon">
                        <img
                          src="app/images/searchIconLogoInner.png"
                          alt="Genaiguru search icon image"
                        />
                      </figure>
                      <div className="flex searchFormLong">
                        <div className="form_group">
                          <input
                            type="text"
                            placeholder="Type here"
                            value={search}
                            onChange={(e) => toSearch(e?.target?.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(data.interests, selectTopic, search, "test");
                      if (
                        data.interests != "" &&
                        selectTopic.length > 0 &&
                        search.length > 0
                      ) {
                        chatGPTApi();
                      } else {
                        toast.error("Please Fill all required fields!", {
                          position: toast.POSITION.TOP_CENTER,
                          autoClose: 1000,
                        });
                      }
                    }}
                  >
                    <button disabled={loadingStatus} className="loginBtn" >
                      {loadingStatus ? "" : "Generate"}
                      {loadingStatus && (
                        <div
                          className="typing"
                          style={{ justifyContent: "center" }}
                        >
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                        </div>
                      )}
                    </button>
                    <ToastContainer autoClose = {1000} closeButton = {false} />
                  </div>
                </div>
              </form>
              <div
                style={
                  displaySeePost == true
                    ? { display: "block", marginLeft: "20px" }
                    : { display: "none" }
                }
              >
                <form>
                  <div className="profile-edit ">
                    <label htmlFor="name">Blog Title</label>
                    <input
                      value={data?.title}
                      onChange={(e) => {
                        dataChange("title", e.target.value);
                      }}
                      type="text"
                      placeholder="Type here"
                      name="title"
                    />
                  </div>
                  <div className="profile-edit custom-file-button">
                    <label htmlFor="name">
                      Upload Thumbnail Image (Recommended Size: 350*184px)
                    </label>
                    <input
                      id="banner2"
                      type="file"
                      onChange={(e) => {
                        dataChange("thumb", e?.target?.files[0]);
                      }}
                    />
                  </div>
                  <div className="profile-edit input-group custom-file-button">
                    <label
                      className="input-group-text"
                      htmlFor="inputGroupFile"
                    >
                      Upload Banner Image (Recommended Size: 568*295px)
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      defaultValue={data.banner}
                      onChange={(e) => {
                        dataChange("banner", e?.target?.files[0]);
                      }}
                    />
                  </div>

                  <div className="profile-edit">
                    <label htmlFor="name">Short Description</label>
                    <textarea
                      value={data?.shortdesc}
                      onChange={(e) => {
                        dataChange("short", e?.target?.value);
                      }}
                      name="bio"
                      id=""
                      cols="3"
                      rows="6"
                      maxLength={200}
                      placeholder="Text here..."
                    ></textarea>
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >{`${
                      data?.shortdesc ? data?.shortdesc.length : "0"
                    } of 200 Characters`}</p>
                  </div>
                </form>
                <div style={{ marginTop: "50px" }}>
                  {" "}
                  <div
                    style={{
                      marginBottom: "20px",
                      color: "white",
                      fontSize: "19px",
                    }}
                  >
                    <label htmlFor="name">Description</label>{" "}
                  </div>
                  <ReactQuill
                    theme="snow"
                    value={value}
                    onChange={setValue}
                    className="editor-input"
                    modules={modules}
                  />
                </div>

                <form>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        if (
                          data?.title != "" &&
                          data?.shortdesc != "" &&
                          data?.banner != null &&
                          data?.thumbnail != null &&
                          data?.interests != "" &&
                          value != ""
                        ) {
                          navigateToNextPage();
                        } else {
                          toast.error("Please Fill all required fields!", {
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 1000,
                          });
                          console.log("click2");
                        }
                      }}
                      style={{ padding: "15px !important", maxWidth: "150px" }}
                    >
                      Preview
                    </button>
                    <button
                      onClick={() => {
                        localStorage.removeItem("Data");
                        localStorage.removeItem("banner");
                        localStorage.removeItem("Interests");
                        localStorage.removeItem("value");
                      }}
                      style={{ padding: "15px !important", maxWidth: "150px" }}
                    >
                      Try Again
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index5;
