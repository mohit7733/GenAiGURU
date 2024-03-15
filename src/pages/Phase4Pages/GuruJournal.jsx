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

const GuruJournal = () => {
  const [savedData, setSavedData] = useState([]);

  const navigate = useNavigate();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const userId = JSON.parse(localStorage.getItem("UserId"));
  const token = JSON.parse(localStorage.getItem("token"));

  // Get API
  const getData = () => {
    axios
      .get(`${getBaseURL()}/get-user-created-blogs?user_id=${userId}`)
      .then((response) => {
        console.log(response, "Res");
        setSavedData(response?.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    setButtonClicked(false);
  };

  const onBlogSave = (blogID) => {
    axios
      .post(
        `${getBaseURL()}/save-blog`,
        {
          user_id: userId,
          blog_id: blogID,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res?.data);
        toast.success("Blog Saved", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  const onBlogUnSave = (blogID) => {
    axios
      .post(
        `${getBaseURL()}/unsave-blog`,
        {
          user_id: userId,
          blog_id: blogID,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
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

  const onBlogClick = (BlogId) => {
    navigate(`${PATH_BLOG_DETAILS}?id=${BlogId}`);
  };
  //Pagination code Starts here
  const keepsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastkeep = currentPage * keepsPerPage;
  const indexOfFirstkeep = indexOfLastkeep - keepsPerPage;
  const currentJournal = savedData?.blogs?.slice(
    indexOfFirstkeep,
    indexOfLastkeep
  );
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  //Optional used only when mobile have different UI
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    getData();
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
                <h1>Guru Journal</h1>
              </div>
              <div className="interest-guru ">
                {currentJournal?.map((data, index) => {
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
                                src={savedData?.user?.profile_image}
                                alt="Genaiguru user-icon"
                              />
                            </figure>
                            <div className="innerContent">
                              <h6>{savedData?.user?.name}</h6>
                              <p>{data.creation_date}</p>
                            </div>
                          </div>
                          {/* <ul className="flex">
                            <li
                              onClick={() => {
                                onBlogUnSave(data.id);
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
                          </ul> */}
                        </div>
                        <h5>
                          <a
                            onClick={() => {
                              onBlogClick(data.id);
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
                  token="journal"
                  totalItems={savedData?.Blogs?.length}
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
        </div>
        <div className="innerCommanContent">
          <div className="interest-sliders">
            {currentJournal?.map((data, index) => {
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
                          src={savedData?.user?.profile_image}
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
                        onBlogClick(data.id);
                      }}
                    >
                      {data.title}
                    </p>
                    {/* <ul className="flex">
                      <li
                        onClick={() => {
                          onBlogUnSave(data?.id);
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
                    </ul> */}
                  </div>
                </div>
              );
            })}
            {isMobile ? (
              <Pagination
                token="journal"
                totalItems={savedData?.Blogs?.length}
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

export default GuruJournal;
