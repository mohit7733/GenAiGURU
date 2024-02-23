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
  const [displaySeePost, setDisplaySeePost] = useState(
    JSON.parse(localStorage.getItem("Data")) != null ? true : false
    // true
  );
  const [search, toSearch] = useState("");
  const [data, setData] = useState({
    title: localStorage.getItem("Data")
      ? JSON.parse(localStorage.getItem("Data")).title
      : "",
    // descriptions: "",
    shortdesc: localStorage.getItem("Data")
      ? JSON.parse(localStorage.getItem("Data")).shortdesc
      : "",
    interests: localStorage.getItem("Data")
      ? JSON.parse(localStorage.getItem("Data")).interests
      : [],
    thumbnail: null,
    banner: null,
  });
  const [value, setValue] = useState(
    localStorage.getItem("Data")
      ? JSON.parse(localStorage.getItem("value"))
      : ""
  );
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [interestData, setInterestData] = useState([]);
  const [selectOptions, setSelectOptions] = useState(
    JSON.parse(localStorage.getItem("Interests")) || []
  );
  const [selectTopic, setSelectTopic] = useState([
    {
      value: "Blogstyle",
      label: "Blogstyle",
      id: "1",
    },
  ]);
  useEffect(() => {
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
  }, []);

  let interested = [];
  interestData?.map((item) => {
    interested.push({
      value: item?.interestName,
      label: item?.interestName,
      id: item.id,
    });
  });

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6] }],
      [{ font: [] }][{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
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
    let message = `Give me a Title, Short Description and Description based on 
    Interests:${string.slice(0, 3).join(", ")}
    Style:Blog Style,
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
        setDisplaySeePost(true);
        const resdata = response?.data?.[0]?.choices?.[0]?.message?.content;
        const titleRegex = /Title:\s*(.*)/i;
        const shortDescRegex = /Short Description:\s*(.*)/i;
        const descRegex = /Description:\s*([\s\S]*)/i;
        const descMatch = resdata.match(descRegex)[1];
        const shortMatch = resdata.match(shortDescRegex)[1];
        const titleMatch = resdata.match(titleRegex)[1];
        setData({
          ...data,
          title: titleMatch.replace(/"/g, ""),
          shortdesc: shortMatch,
        });
        setValue(descMatch.slice(shortMatch.length + 14));
        console.log(titleMatch, "title");
        setLoadingStatus(false);
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

  // useEffect(() => {
  //   if (checked === true) {
  //     chatGPTApi2();
  //   } else {
  //     return;
  //   }
  // }, [string.length, checked]);
  // const chatGPTApi2 = () => {
  //   if (string.length == 0) {
  //     setData({ ...data, title: "", shortdesc: "", descriptions: "" });
  //     return;
  //   } else {
  //     setData({ ...data, title: "", shortdesc: "", descriptions: "" });
  //     let searching = `Give me a Title, Short Description, Description(800 words) based on  ${string
  //       .slice(0, 3)
  //       .join(", ")} without double quote in array`;
  //     axios
  //       .post(
  //         `${getBaseURL()}/auth/send-chat-message`,
  //         {
  //           message: searching,
  //         },
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       )
  //       .then((response) => {
  //         const titleRegex = /Title:\s*(.*)/i;
  //         const shortDescRegex = /Short Description:\s*(.*)/i;
  //         const descRegex = /Description:\s*([\s\S]*)/i;
  //         const resdata = response?.data?.[0]?.choices?.[0]?.message?.content;
  // const titleMatch = resdata.match(titleRegex)[1];
  //         const shortMatch = resdata.match(shortDescRegex)[1];
  //         const descMatch = resdata.match(descRegex)[1];
  //         setData({
  //           ...data,
  //           title: titleMatch,
  //           shortdesc: shortMatch,
  //           descriptions: descMatch,
  //         });
  //       })
  //       .catch((error) => {
  //         console.error("Error chatGPTApi:", error.message);
  //       });
  //   }
  // };

  function navigateToNextPage() {
    const input = document.getElementById("banner");
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const imageData = event.target.result;
        navigate("/preview", {
          state: {
            data: data,
            desc: value,
            imageData: imageData,
          },
        });
        localStorage.setItem("banner", imageData);
      };
      reader.readAsDataURL(input.files[0]);
      localStorage.setItem("Data", JSON.stringify(data));
      localStorage.setItem("Interests", JSON.stringify(selectOptions));
      localStorage.setItem("value", JSON.stringify(value));
    }
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
              {/* <p>
                <a href="#">Write with AI</a>
              </p> */}
              <form className="help-section">
                <div
                  style={
                    displaySeePost == false
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  <p
                    style={{
                      marginTop: "20px",
                      marginBottom: "60px",
                      color: "white",
                    }}
                  >
                    How to: Choose a topic, pick a blog style, and give a
                    creative prompt, Genaiguru will generate a title, blog
                    article, banner image and thumbnail ready for publication to
                    your page on the site.
                  </p>
                  <p
                    style={{
                      display: "flex",
                      color: "#fff",
                      margin: "12px 0 8px",
                      fontSize: "18px",
                    }}
                  >
                    Choose a topic for your post
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
                    isOptionDisabled={() => selectOptions?.length >= 3}
                    options={interested}
                    value={selectOptions}
                    placeholder="Interests"
                    onChange={(Option) => {
                      if (selectOptions.length <= 3) {
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
                      Choose a Blog Article Content Style
                    </p>
                    <Select
                      isObject={false}
                      isMulti
                      // isOptionDisabled={() => selectOptions?.length >= 3}
                      options={selectTopic}
                      // value={selectOptions}
                      placeholder="Blog Styles"
                      // onChange={(Option) => {
                      //   if (selectOptions.length <= 3) {
                      //     setSelectOptions(Option);
                      //     dataChange(
                      //       "interests",
                      //       Option.map((option) => option.id)
                      //     );
                      //   }
                      // }}
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
                      if (data.interests != "") {
                        chatGPTApi();
                      } else {
                        toast.error("Please Fill all required fields!", {
                          position: toast.POSITION.TOP_CENTER,
                          autoClose: 1000,
                        });
                      }
                    }}
                    // className="form_group buttonGroup"
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
                    <label htmlFor="name">
                      Upload Thumbnail Image (Recommended Size: 350*184px)
                    </label>
                    <input
                      id="banner"
                      type="file"
                      onChange={(e) => {
                        dataChange("thumb", e?.target?.files[0]);
                      }}
                    />
                    {/* <a class="btn btn-file" type="file">Choose File</a> */}
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
                    {/* <a class="btn btn-file" type="file">Choose File</a> */}
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
                  {/* 
                  <div className="profile-edit">
                    <label htmlFor="name">Description</label>
                    <textarea
                      value={data?.descriptions}
                      onChange={(e) => {
                        dataChange("desc", e?.target?.value);
                      }}
                      name="bio"
                      id=""
                      cols="6"
                      rows="12"
                      placeholder="Text here... "
                    ></textarea>
                  </div> */}
                </form>
                {/* <form>
                  <div className="profile-edit ">
                    <label htmlFor="name">New Des</label>
                    <textarea
                      rows="6"
                      // value={data?.title}
                      // onChange={(e) => {
                      //   dataChange("title", e.target.value);
                      // }}
                      type="text"
                      placeholder="Type here"
                      name="title"
                    />
                  </div>
                </form> */}
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
            <div className="backBtns">
              <Link to={BASE_PATH}>
                <i className="fa fa-angle-left" aria-hidden="true"></i>
              </Link>{" "}
            </div>
            <p>Write a post</p>
          </div>
          <div className="col_right">
            <button
              type="button"
              className="loginBtn"
              onClick={() => {
                navigate("/index6");
              }}
            >
              Post
            </button>
          </div>
        </div>
        <div className="rightSection PostWrapper">
          <div className="full-width">
            {/* <div className="profile-edit socialLinkEdit flex">
              <p>
                <a href="#">Home</a>{" "}
                <i className="fa fa-angle-right" aria-hidden="true"></i>Write
                with AI{" "}
              </p>
            </div> */}
            <div className="profile-img-box postWrapper_inner">
              {/* <p>
                <a href="#">Write with AI</a>
              </p> */}
              <form className="help-section">
                <div className="profile-edit">
                  <label htmlFor="name">Blog Title</label>
                  <input
                    value={data?.title}
                    onChange={(e) => {
                      dataChange("title", e.target.value);
                    }}
                    type="text"
                    placeholder="Type here"
                    name="name"
                  />
                </div>
                <div className="profile-edit">
                  <label htmlFor="name">Upload Thumbnail Image</label>
                  <input
                    type="file"
                    onChange={(e) => {
                      dataChange("thumb", e?.target?.files[0]);
                    }}
                  />
                </div>
                <div className="profile-edit input-group custom-file-button">
                  <label className="input-group-text" htmlFor="inputGroupFile">
                    Upload Banner Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => {
                      dataChange("banner", e?.target?.files[0]);
                    }}
                  />
                </div>
                <p
                  style={{
                    color: "#fff",
                    margin: "12px 0 8px",
                    fontSize: "18px",
                  }}
                >
                  Select Interest
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
                  isOptionDisabled={() => selectOptions?.length >= 3}
                  options={interested}
                  value={selectOptions}
                  placeholder="Interests"
                  onChange={(Option) => {
                    if (selectOptions.length <= 3) {
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
                  className="genaiguruSelect flex"
                />
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
                    placeholder="Maximum 200 letters... "
                  ></textarea>
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >{`${
                    data?.shortdesc ? data?.shortdesc.length : "0"
                  } of 200 Charachters`}</p>
                </div>
                <div className="wrapperSearchs" style={{ marginTop: "30px" }}>
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
                          placeholder="Search here"
                          value={search}
                          onChange={(e) => toSearch(e?.target?.value)}
                        />
                      </div>
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          chatGPTApi(search);
                        }}
                        className="form_group buttonGroup"
                      >
                        <button
                          style={{
                            width: "75%",
                            margin: "0",
                            background: "none",
                            cursor: "pointer",
                          }}
                        >
                          <img
                            style={{
                              height: "20px",
                              width: "40px",
                            }}
                            src="app/images/sendButtonIcon.png"
                            alt="Genaiguru sendButtonIcon"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {loadingStatus && (
                  <div className="typing">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                )}
                <div className="profile-edit">
                  <label htmlFor="name">Description</label>
                  <textarea
                    value={data?.descriptions}
                    onChange={(e) => {
                      dataChange("desc", e?.target?.value);
                    }}
                    name="bio"
                    id=""
                    cols="6"
                    rows="12"
                    placeholder="Text here... "
                  ></textarea>
                </div>
                {/* <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (
                      data?.title != "" &&
                      data?.descriptions != "" &&
                      data?.shortdesc != "" &&
                      data?.banner != "" &&
                      data?.thumbnail != "" &&
                      data?.interests != ""
                    ) {
                      sendPost();
                    } else {
                      toast.error("Please Fill all required fields!", {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 1000,
                      });
                    }
                  }}
                  type="submit"
                  style={{ padding: "20px !important" }}
                >
                  Post
                </button> */}
              </form>
            </div>
          </div>
        </div>
        {/* <div class="help-section writePost flex">
          <div class="wrap">
            <h1>What would you like to write a blog article about</h1>
            <div class="createPostForm">
              <div class="searchResults">
                <div class="headings flex">
                  <h5>
                    It’s a catch-22 for young startups: how do you attract
                    investors?
                  </h5>
                </div>
                <div class="form_group">
                  <span
                    class="textarea"
                    id="postContent"
                    role="textbox"
                    contenteditable
                  ></span>
                </div>
                <div class="form_group videoShow">
                  <figure>
                    <img src="app/images/postCreateImg.jpg" alt="" />
                    <div class="timing flex">
                      <img src="app/images/videoIcon.png" alt="" />
                      3:38
                    </div>
                  </figure>
                </div>
                <div class="form_group imageIcons">
                  <figure>
                    <img src="app/images/imageIcon.png" alt="" />
                  </figure>
                </div>
              </div>
              <p class="tags">#finance #crypto #economy</p>
            </div>
            <div class="wrapperSearchs">
              <div class="innerSearchForm flex">
                <figure class="logoIcon">
                  <img src="app/images/searchIconLogoInner.png" alt="" />
                </figure>
                <div class="flex searchFormLong">
                  <div class="form_group">
                    <input type="text" placeholder="Ask me anything..." />
                  </div>
                  <div class="form_group micBtns">
                    <button type="button">
                      <img src="app/images/micIcon.png" />
                    </button>
                  </div>
                  <div class="form_group">
                    <button type="submit">
                      <img src="app/images/sendButtonIcon.png" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Index5;
