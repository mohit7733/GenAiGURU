import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getBaseURL } from "../../api/config";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import {
  PATH_ARTICLE_DETAILS,
  PATH_BLOG_DETAILS,
  PATH_VIDEO_PLAY,
} from "../../routes";
import Pagination from "../Phase6Pages/Pagination";
import MobileSideBar from "../../components/Layout/MobileSideBar";

const GuruKeeps = () => {
  const [savedData, setSavedData] = useState([]);

  const navigate = useNavigate();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const token = JSON.parse(localStorage.getItem("token"));
  const userId = JSON.parse(localStorage.getItem("UserId"));

  // Get API
  useEffect(() => {
    axios
      .get(`${getBaseURL()}/saved-items?user_id=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setSavedData(response?.data?.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    setButtonClicked(false);
  }, [buttonClicked]);

  const onBlogUnSave = (blogID) => {
    axios
      .post(
        `${getBaseURL()}/unsave-blog`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        {
          user_id: userId,
          blog_id: blogID,
        }
      )
      .then((res) => {
        console.log(res?.data);
        toast.success("Blog Unsaved", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const onArticleUnSave = (articleID) => {
    axios
      .post(
        `${getBaseURL()}/unsave-article`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        {
          user_id: userId,
          article_id: articleID,
        }
      )
      .then((res) => {
        console.log(res?.data);
        toast.success("Article Unsaved", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  const onVideoUnSave = (videoID) => {
    axios
      .post(
        `${getBaseURL()}/unsave-video`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        {
          user_id: userId,
          video_id: videoID,
        }
      )
      .then((res) => {
        console.log(res?.data);
        toast.success("Video Unsaved", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  const onBlogClick = (BlogID, titles) => {
    const trimmedTitle = titles.trim();
    console.log("Trimmed title:", trimmedTitle);
    const replacedTitle = trimmedTitle.replace(/\s+/g, "-");
    console.log("Replaced title:", replacedTitle);
    navigate(`${PATH_BLOG_DETAILS}?id=${BlogID}?title=${replacedTitle}`);
  };
  const onArticleClick = (AricleID, titles) => {
    const trimmedTitle = titles.trim();
    console.log("Trimmed title:", trimmedTitle);
    const replacedTitle = trimmedTitle.replace(/\s+/g, "-");
    console.log("Replaced title:", replacedTitle);
    navigate(`${PATH_ARTICLE_DETAILS}?id=${AricleID}&title=${replacedTitle}`);
  };
  const onVideoClick = (VideoId, titles) => {
    const trimmedTitle = titles.trim();
    console.log("Trimmed title:", trimmedTitle);
    const replacedTitle = trimmedTitle.replace(/\s+/g, "-");
    console.log("Replaced title:", replacedTitle);
    navigate(`${PATH_VIDEO_PLAY}?id=${VideoId}?title=${replacedTitle}`);
    console.log(VideoId);
  };
  //Pagination code Starts here
  const keepsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastkeep = currentPage * keepsPerPage;
  const indexOfFirstkeep = indexOfLastkeep - keepsPerPage;
  const currentkeeps = savedData.slice(indexOfFirstkeep, indexOfLastkeep);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  //Optional used only when mobile have different UI
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  //Pagination ends

  return (
    <div>
      <ToastContainer autoClose={1000} pauseOnHover={false} />

      <MobileHeader />
      <section className="mainWrapper flex hideMob">
        <Sidebar />
        <div className="rightSection">
          <div className="full-width">
            <div className="keeps-container">
              <div className="gurukeeps-wrapper flex align-center space-between">
                <h1>Guru Keeps</h1>
                <span>{savedData.length} Saved</span>
              </div>
              <div className="interest-guru ">
                {currentkeeps.map((data, index) => {
                  return (
                    <div className="wrap flex" key={index}>
                      {data.youtube_link ? (
                        <figure>
                          <ReactPlayer
                            url={data.youtube_link}
                            width="100%"
                            height="100%"
                          />
                        </figure>
                      ) : (
                        <figure>
                          <img src={data.photo} alt="Genaiguru Guru-keeps" />
                        </figure>
                      )}

                      <div className="content">
                        <div className="flex space-between">
                          <div className="wrapper flex">
                            <figure>
                              <img
                                src={data.author_profile_image}
                                alt="Genaiguru user-icon"
                              />
                            </figure>
                            <div className="innerContent">
                              <h6>{data.author}</h6>
                              <p>{data.creation_date}</p>
                            </div>
                          </div>
                          <ul className="flex">
                            <li
                              onClick={() => {
                                if (data.type === "blog") {
                                  onBlogUnSave(data.id);
                                } else if (data.type === "article") {
                                  onArticleUnSave(data.id);
                                } else if (data.type === "video") {
                                  onVideoUnSave(data.id);
                                }
                                setButtonClicked(!buttonClicked);
                              }}
                            >
                              <a>
                                <img
                                  src="app/images/color-bookmarks.png"
                                  alt=" coloredbookmarkIcon"
                                />
                              </a>
                            </li>

                            <li>
                              <a href="#">
                                <img
                                  src="app/images/dotsIcons.png"
                                  alt="Genaiguru dotsIcons"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h5>
                          <a
                            onClick={() => {
                              if (data.type === "blog") {
                                onBlogClick(data.id, data.title);
                              } else if (data.type === "article") {
                                onArticleClick(data.id, data.title);
                              } else if (data.type === "video") {
                                onVideoClick(data.id, data.title);
                              }
                            }}
                          >
                            {data.title}
                          </a>
                        </h5>
                        <p>{data.short_description}</p>
                      </div>
                    </div>
                  );
                })}
                <Pagination
                  token="keeps"
                  totalItems={savedData.length}
                  itemsPerPage={keepsPerPage}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- main section end here --> */}
      <div className="mob_profile commanMobHead hideDes">
        <div className="mobileHead flex">
          <div className="hamburger" onClick={toggleMobileSidebar}>
            <img src="app/images/hamburgerIcon.png" alt="Genaiguru hamburger" />
          </div>
          <h2>Guru keeps</h2>
          <p>{savedData.length} Saved</p>
        </div>
        <div className="innerCommanContent">
          <div className="interest-sliders">
            {savedData.map((data, index) => {
              return (
                <div className="wrap flex" key={index}>
                  {data.youtube_link ? (
                    <a>
                      <figure>
                        <ReactPlayer
                          url={data.youtube_link}
                          width="100%"
                          height="100%"
                        />
                      </figure>
                    </a>
                  ) : (
                    <figure>
                      <a href="#">
                        <img src={data.photo} alt="Genaiguru Guru-keeps" />
                      </a>
                    </figure>
                  )}
                  <div className="content">
                    <div className="wrapper flex">
                      <figure>
                        <img
                          src={data.author_profile_image}
                          alt="Genaiguru authorImg"
                        />
                      </figure>
                      <div className="innerContent">
                        <h6>{data.author}</h6>
                        <p> {data.creation_date}</p>
                      </div>
                    </div>
                    <p
                      onClick={() => {
                        if (data.type === "blog") {
                          onBlogClick(data.id, data.title);
                        } else if (data.type === "article") {
                          onArticleClick(data.id, data.title);
                        } else if (data.type === "video") {
                          onVideoClick(data.id, data.title);
                        }
                      }}
                    >
                      {data.title}
                    </p>
                    <ul className="flex">
                      <li
                        onClick={() => {
                          if (data.type === "blog") {
                            onBlogUnSave(data.id);
                          } else if (data.type === "article") {
                            onArticleUnSave(data.id);
                          } else if (data.type === "video") {
                            onVideoUnSave(data.id);
                          }
                          setButtonClicked(!buttonClicked);
                        }}
                      >
                        <a>
                          <img
                            src="app/images/color-bookmarks.png"
                            alt="Genaiguru bookmarkIcon"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="app/images/dotsIcons.png"
                            alt="Genaiguru dotsIcons"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
            {isMobile ? (
              <Pagination
                token="keeps"
                totalItems={savedData.length}
                itemsPerPage={keepsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {isMobileSidebarOpen && (
        <MobileSideBar toggleMobileSidebar={toggleMobileSidebar} />
      )}
    </div>
  );
};

export default GuruKeeps;
