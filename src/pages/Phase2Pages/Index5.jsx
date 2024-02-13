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
const token = JSON.parse(localStorage.getItem("token"));

const Index5 = () => {
  const navigate = useNavigate();
  const [displaySeePost, setDisplaySeePost] = useState(false);
  const [search, toSearch] = useState("");
  const [data, setData] = useState({
    title: "",
    descriptions: "",
    shortdesc: "",
    interests: "",
    thumbnail: null,
    banner: null,
  });
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [interestData, setInterestData] = useState([]);
  const [selectOptions, setSelectOptions] = useState([]);
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

  const dataChange = (key, value) => {
    switch (key) {
      case "title":
        setData({ ...data, title: value });
        break;
      case "desc":
        setData({ ...data, descriptions: value });
        break;
      case "short":
        setData({ ...data, shortdesc: value });
        break;
      case "thumb":
        if (value) {
          const allowedImageTypes = ["image/jpeg", "image/png", "image/gif"];
          if (allowedImageTypes.includes(value.type)) {
            setData({ ...data, thumbnail: value });
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
          if (allowedImageTypes.includes(value.type)) {
            setData({ ...data, banner: value });
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
      default:
        break;
    }
  };
  const chatGPTApi = (input) => {
    toSearch("");
    setLoadingStatus(true);
    axios
      .post(
        `${getBaseURL()}/auth/send-chat-message`,
        {
          message: input,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setData({
          ...data,
          descriptions: response?.data?.[0]?.choices?.[0]?.message?.content,
        });
        setLoadingStatus(false);
      })
      .catch((error) => {
        if (!input) {
          alert("Please Type Antything...");
        }
        console.error("Error chatGPTApi:", error.message);
      });
  };
  const sendPost = () => {
    if (token != "") {
      axios
        .post(
          `${getBaseURL()}/auth/blog-create`,
          {
            title: data?.title,
            description: data?.descriptions,
            short_description: data?.shortdesc,
            interest_ids: data?.interests,
            banner_image: data?.banner,
            thumbnail_image: data?.thumbnail,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          if (res?.data?.success == true) {
            console.log(res?.data);
          } else {
            console.log(res.data.error, "error");
          }
        })
        .catch((err) => console.log(err, "Err"));
    }
  };

  return (
    <div>
      <MobileHeader />
      <section class="mainWrapper mobileMainWrap flex desktopPostCreate">
        <Sidebar />
        <div className="rightSection PostWrapper">
          <div className="full-width">
            <div className="profile-edit socialLinkEdit flex">
              <p>
                <a href="#">Home</a>{" "}
                <i className="fa fa-angle-right" aria-hidden="true"></i>Write a
                post{" "}
              </p>
            </div>
            <div className="profile-img-box postWrapper_inner">
              <p>
                <a href="#">Write with AI</a>
              </p>
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
                  <div class="typing">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
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
                <button
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
                </button>
                <div className="Toastify"></div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Mobile Code Starts Here */}
      <div class="mobilePost">
        <div class="postHead flex">
          <div class="col_left flex">
            <div class="backBtns">
              <Link to={BASE_PATH}>
                <i class="fa fa-angle-left" aria-hidden="true"></i>
              </Link>{" "}
            </div>
            <p>Write a post</p>
          </div>
          <div class="col_right">
            <button
              type="button"
              class="loginBtn"
              onClick={() => {
                navigate("/index6");
              }}
            >
              Post
            </button>
          </div>
        </div>
        <div class="help-section writePost flex">
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
        </div>
      </div>
      {displaySeePost && (
        <section class="loginPopup postPopup">
          <div class="wrapper">
            <figure>
              <img src="app/images/tickIcon.png" alt="" />
            </figure>
            <h2>Post successful</h2>
            <a href="#">See your post</a>
          </div>
        </section>
      )}
    </div>
  );
};

export default Index5;
