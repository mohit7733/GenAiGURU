import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { ToastContainer, toast } from "react-toastify";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { getBaseURL } from "../../api/config";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import { BASE_PATH, PATH_VIDEO_PLAY } from "../../routes";
import WithAuth from "../Authentication/WithAuth";
import FeaturedContentPopup from "./FeaturedContentPopup";
import Pagination from "./Pagination";
import userimageIcon from "../../assets/images/person.png";

const FeaturedContent = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const [indexTab, setIndexTab] = useState();
  const [filter, setFilter] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const [popularVideos, setPopularVideos] = useState([]);
  const [myInterests, setMyInterests] = useState();
  const [userSelectedIneterests, setUserSelectedIneterests] = useState([]);
  const [mergedInterests1, setMergedInterests] = useState([]);
  const [interestVideos, setInterestVideos] = useState([]);
  const [interestid, setInterestid] = useState("");
  const [totalVideos, setTotalVideos] = useState("");

  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));
  const userId = JSON.parse(localStorage.getItem("UserId"));

  const date = new Date();
  const data = date.setDate(date.getDate());
  const dateObject = new Date(data);
  const currentTime = dateObject.toISOString().split("T")[0];

  //Pagination code Starts here
  const videosPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  // const indexOfLastVideo = currentPage * videosPerPage;
  // const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = popularVideos;

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

  const Featuredpopup = (popularity, sortby, currentDate) => {
    console.log(popularity, sortby, currentDate, currentTime);

    axios
      .get(
        `${getBaseURL()}/popular-latest-videos?from_date=${currentDate}&to_date=${currentTime}&filter_by:=` +
          popularity,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setPopularVideos(response?.data?.videos);
        console.log(response?.data, "shjgfd");
        setFilter(false);
      })
      .catch(
        (err) => {
          console.log(err.message, " popular-latest-videos api error");
          toast.error("No data found.", {
            position: toast.POSITION.TOP_CENTER,
          });
          <ToastContainer autoClose={1000} />;
          setFilter(false);
        },
        [currentDate]
      );
  };

  // Get API for Popular Videos
  useEffect(() => {
    axios
      .get(
        `${getBaseURL()}/popular-latest-videos?user_id=${userId}&page_number=${currentPage}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        window.scrollTo(0, 0);
        // console.log(response.data);
        setTotalVideos(response.data.total_count);
        setPopularVideos(response?.data?.videos);
        setButtonClicked(false);
        if (interestid != "") {
          onInterestClick(interestid);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [buttonClicked, currentPage]);

  // Get API for interests
  const getAllInterests = () => {
    axios
      .get(`${getBaseURL()}/interests`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMyInterests(response?.data?.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const getSelectedInterest = () => {
    axios
      .get(`${getBaseURL()}/auth/userinterests`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserSelectedIneterests(response?.data?.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    // Get API for ALL interests and User Selected Interset
    getAllInterests();
    getSelectedInterest();
  }, []);

  // Function to merge and remove duplicates based on interest_id and id
  const mergeAndRemoveDuplicates = (arr1, arr2, key1, key2) => {
    const uniqueMap = new Map();

    // Add items from arr1 to uniqueMap
    arr1.forEach((item) => uniqueMap.set(item[key1], item));

    // Add items from arr2 to uniqueMap, overwriting duplicates
    arr2.forEach((item) => uniqueMap.set(item[key2], item));

    // Convert uniqueMap values back to an array
    const mergedInterests = Array.from(uniqueMap.values());

    return mergedInterests;
  };

  // Specify the key names to use for comparison
  const keyForUserSelected = "interest_id";
  const keyForMyInterests = "id";
  // ...
  useEffect(() => {
    if (myInterests?.length > 0) {
      const mergedInterests = mergeAndRemoveDuplicates(
        userSelectedIneterests,
        myInterests,
        keyForUserSelected,
        keyForMyInterests
      );
      setMergedInterests(mergedInterests);
    }
  }, [myInterests, userSelectedIneterests]);

  // Function to handle tab click
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  // API for Videos on Clinking Interest in Slider
  const onInterestClick = (interestid, e) => {
    const array = [interestid];
    axios
      .post(`${getBaseURL()}/videos-by-interests`, {
        interest_id: array,
        user_id: userId,
      })
      .then((response) => {
        console.log(response?.data, "test");
        setInterestVideos(response?.data?.videos);
      })
      .catch((err) => {
        console.log(err.message);
      });
    setButtonClicked(false);
  };
  // Slider Code
  var settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    arrows: true,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  var sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const onVideoClick = (VideoId,titles) => {
    const trimmedTitle = titles.trim(); 
    console.log("Trimmed title:", trimmedTitle);
    const replacedTitle = trimmedTitle.replace(/\s+/g, '-');
    console.log("Replaced title:", replacedTitle);
    navigate(`${PATH_VIDEO_PLAY}?id=${VideoId}?title=${replacedTitle}`);
    console.log(VideoId);
  };

  const onVideoSave = (videoID) => {
    axios
      .post(`${getBaseURL()}/save-video`, {
        user_id: userId,
        video_id: videoID,
      })
      .then((res) => {
        console.log(res?.data);
        toast.success("Video Saved", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  const onVideoUnSave = (videoID) => {
    axios
      .post(`${getBaseURL()}/unsave-video`, {
        user_id: userId,
        video_id: videoID,
      })
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

  return (
    <div>
      <ToastContainer autoClose={1000} pauseOnHover={false} />

      <MobileHeader />
      <section className="mainWrapper flex hideMob">
        <Sidebar />
        <div className="rightSection">
          <div className="">
            <div className="keeps-container featuredConatiner">
              <div className="gurukeeps-wrapper">
                <div className="innerBreadcrumb">
                  <p>
                    <Link to={BASE_PATH}>Home</Link>{" "}
                    <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                    Featured Video
                  </p>
                </div>
                {/* <h1>Featured Video</h1> */}
                {/* <!-- tab-link start here --> */}
                <div className="row space-between align-center">
                  <div className="connect-link flex align-center">
                    {/* All Tab div */}
                    <div style={{ width: "2%" }}>
                      <li className={activeTab === 0 ? "active" : ""}>
                        <Link
                          onClick={() => handleTabClick(0)}
                          className={activeTab === 0 ? "tab active" : ""}
                          data-toggle-target=".tab-content-0"
                        >
                          All
                        </Link>
                      </li>
                    </div>
                    {/* Slider Div */}
                    <div
                      style={{
                        width: "85%",
                        paddingLeft: "46px",
                        paddingRight: "46px",
                      }}
                    >
                      <Slider {...sliderSettings}>
                        {mergedInterests1?.map((interest, index) => (
                          <li
                            key={index}
                            className={activeTab === index + 1 ? "active" : ""}
                          >
                            <div
                              style={{
                                marginLeft: "5px",
                                marginRight: "5px",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <Link
                                onClick={() => {
                                  handleTabClick(index + 1);
                                  setIndexTab(index + 1);
                                  onInterestClick(interest.id);
                                  setInterestid(interest.id);
                                }}
                                className={
                                  activeTab === index + 1 ? "tab active" : ""
                                }
                                data-toggle-target={`.tab-content-${index + 1}`}
                              >
                                {interest?.interestName}
                              </Link>
                            </div>
                          </li>
                        ))}
                      </Slider>
                    </div>
                    {/* Sort by and Filter By Div  */}
                    <div className="connect-box" style={{ width: "11%" }}>
                      <ul className="flex">
                        {/* <li>
                          <Link to="/sortbydate">
                            <figure>
                              <img src="./app/images/sorting-icon.png" alt="" />
                            </figure>
                          </Link>
                        </li> */}
                        <li>
                          <Link to="" onClick={(e) => setFilter(true)}>
                            <figure>
                              <img src="./app/images/filter-icon.png" alt="" />
                            </figure>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- tab-link start here --> */}
              </div>
              {/* <!-- tab-content here --> */}
              {activeTab === 0 && (
                <div
                  className={
                    activeTab === 0 && "tab-content tab-content-0 active"
                  }
                >
                  <div className="interest-guru ">
                    {currentVideos.map((video, index) => {
                      return (
                        <div className="wrap flex" key={index}>
                          <a>
                            <figure>
                              <img
                                src={`https://img.youtube.com/vi/${video?.youtube_link.slice(
                                  -11
                                )}/sddefault.jpg`}
                                alt={""}
                              />
                              {/* <ReactPlayer
                                url={video.youtube_link}
                                width="100%"
                                height="100%"
                              /> */}
                            </figure>
                          </a>
                          <div className="content">
                            <div className="flex space-between">
                              <div className="wrapper flex">
                                <figure>
                                  <img
                                    src={video.author_profile_image || userimageIcon}
                                    alt="Genaiguru user-icon"
                                  />
                                </figure>
                                <div className="innerContent">
                                  <h6>{video.author}</h6>
                                  <p> {video.creation_date}</p>
                                </div>
                              </div>
                              <WithAuth
                                callBack={(e) => {
                                  console.log("dd");
                                }}
                              >
                                <ul className="flex">
                                  <li
                                    onClick={() => {
                                      video.saved === "yes"
                                        ? onVideoUnSave(video.id)
                                        : onVideoSave(video.id);
                                      setButtonClicked(!buttonClicked);
                                    }}
                                  >
                                    <a>
                                      <img
                                        src={
                                          video.saved === "yes"
                                            ? "app/images/color-bookmarks.png"
                                            : "./app/images/bookmarkIcon.png"
                                        }
                                        alt={
                                          video.saved === "yes"
                                            ? "coloredbookmarkIcon"
                                            : "bookmarkIcon"
                                        }
                                        // title={
                                        //   video.saved === "yes"
                                        //     ? "coloredbookmarkIcon"
                                        //     : "bookmarkIcon"
                                        // }
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a>
                                      <img
                                        src="app/images/dotsIcons.png"
                                        alt="Genaiguru dotsIcons"
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </WithAuth>
                            </div>
                            <h5 onClick={() => onVideoClick(video.id,video.title)}>
                              {video.title}
                            </h5>
                          </div>
                        </div>
                      );
                    })}
                    <Pagination
                      token="Videos"
                      totalItems={totalVideos}
                      itemsPerPage={videosPerPage}
                      currentPage={currentPage}
                      onPageChange={handlePageChange}
                    />
                  </div>
                </div>
              )}
              {/* <!-- 2nd --> */}
              {activeTab === indexTab && (
                <div
                  className={
                    activeTab === indexTab &&
                    `tab-content tab-content-${indexTab} active`
                  }
                >
                  {interestVideos.length < 1 ? (
                    <h1>Data Not Found</h1>
                  ) : (
                    <div className="interest-guru ">
                      {interestVideos.map((interest, index) => {
                        return (
                          <div className="wrap flex">
                            <figure>
                              <img
                                src={`https://img.youtube.com/vi/${interest?.youtube_link.slice(
                                  -11
                                )}/sddefault.jpg`}
                                alt={""}
                              />
                            </figure>
                            <div className="content">
                              <div className="flex space-between">
                                <div className="wrapper flex">
                                  <figure>
                                    <img
                                      src={interest.author_profile_image ||userimageIcon}
                                      alt="Genaiguru userIcon"
                                    />
                                  </figure>
                                  <div className="innerContent">
                                    <h6>{interest.author}</h6>
                                    <p>{interest.creation_date}</p>
                                  </div>
                                </div>
                                <ul className="flex">
                                  <li
                                    onClick={() => {
                                      interest.saved === "yes"
                                        ? onVideoUnSave(interest.id)
                                        : onVideoSave(interest.id);
                                      setButtonClicked(!buttonClicked);
                                    }}
                                  >
                                    <a>
                                      <img
                                        src={
                                          interest.saved === "yes"
                                            ? "app/images/color-bookmarks.png"
                                            : "./app/images/bookmarkIcon.png"
                                        }
                                        alt={
                                          interest.saved === "yes"
                                            ? "coloredbookmarkIcon"
                                            : "bookmarkIcon"
                                        }
                                        // title={
                                        //   video.saved === "yes"
                                        //     ? "coloredbookmarkIcon"
                                        //     : "bookmarkIcon"
                                        // }
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
                              <h5
                                onClick={() => onVideoClick(interest.id,interest.title)}
                                style={{ cursor: "pointer" }}
                              >
                                {interest.title}
                              </h5>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {filter ? <FeaturedContentPopup Featuredpopup={Featuredpopup} /> : ""}
      {/* <!-- mobile section start here --> */}
      <div className="mob_profile commanMobHead hideDes">
        <div className="mobileHead flex">
          <Link to={BASE_PATH} className="hamburger">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </Link>
          <h2>Featured video</h2>
          <div className="connect-box">
            <ul className="flex">
              {/* <li>
                <Link to="/sortbydate">
                  <figure>
                    <img src="./app/images/sorting-icon.png" alt="" />
                  </figure>
                </Link>
              </li> */}
              <li>
                <Link to="" onClick={(e) => setFilter(true)}>
                  <figure>
                    <img src="./app/images/filter-icon.png" alt="" />
                  </figure>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="innerCommanContent">
          <div className="mob_tab_list">
            <div className="rightSection">
              <div className="keeps-container">
                <div className="gurukeeps-wrapper">
                  {/* <!-- tab-link start here --> */}

                  <div className="connect-link flex align-center">
                    {/* All Tab div */}
                    <div style={{ width: "2%" }}>
                      <li className={activeTab === 0 ? "active" : ""}>
                        <Link
                          onClick={() => handleTabClick(0)}
                          className={activeTab === 0 ? "tab active" : ""}
                          data-toggle-target=".tab-content-0"
                        >
                          All
                        </Link>
                      </li>
                    </div>
                    {/* Slider Div */}
                    <div
                      style={{
                        width: "85%",
                        paddingLeft: "46px",
                        paddingRight: "46px",
                      }}
                    >
                      <Slider {...settings2}>
                        {mergedInterests1?.map((interest, index) => (
                          <li
                            key={index}
                            className={activeTab === index + 1 ? "active" : ""}
                          >
                            <div
                              style={{
                                marginLeft: "5px",
                                marginRight: "5px",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <Link
                                onClick={() => {
                                  handleTabClick(index + 1);
                                  setIndexTab(index + 1);
                                  onInterestClick(interest.id);
                                  setInterestid(interest.id);
                                }}
                                className={
                                  activeTab === index + 1 ? "tab active" : ""
                                }
                                data-toggle-target={`.tab-content-${index + 1}`}
                              >
                                {interest?.interestName}
                              </Link>
                            </div>
                          </li>
                        ))}
                      </Slider>
                    </div>
                  </div>
                  {/* <!-- tab-link start here --> */}
                </div>
                {/* <!-- tab-content here --> */}
                {activeTab === 0 && (
                  <div
                    className={
                      activeTab === 0 && "tab-content tab-content-0 active"
                    }
                  >
                    <div className="interest-guru ">
                      <div className="interest-sliders">
                        {currentVideos.map((video, index) => {
                          return (
                            <div className="wrap flex" key={index}>
                              <figure>
                                <a>
                                  <figure>
                                    <img
                                      src={`https://img.youtube.com/vi/${video?.youtube_link.slice(
                                        -11
                                      )}/sddefault.jpg`}
                                      alt={""}
                                    />
                                  </figure>
                                </a>
                              </figure>
                              <div className="content">
                                <div className="wrapper flex">
                                  <figure>
                                    <img
                                      src={video.author_profile_image || userimageIcon}
                                      alt="Genaiguru authorImg"
                                    />
                                  </figure>
                                  <div className="innerContent">
                                    <h6>{video.author}</h6>
                                    <p> {video.creation_date}</p>
                                  </div>
                                </div>
                                <p onClick={() => onVideoClick(video.id,video.title)}>
                                  {video.title}
                                </p>
                                <ul className="flex">
                                  <li
                                    onClick={() => {
                                      video.saved === "yes"
                                        ? onVideoUnSave(video.id)
                                        : onVideoSave(video.id);
                                      setButtonClicked(!buttonClicked);
                                    }}
                                  >
                                    <a>
                                      <img
                                        src={
                                          video.saved === "yes"
                                            ? "app/images/color-bookmarks.png"
                                            : "./app/images/bookmarkIcon.png"
                                        }
                                        alt={
                                          video.saved === "yes"
                                            ? "coloredbookmarkIcon"
                                            : "bookmarkIcon"
                                        }
                                        // title={
                                        //   video.saved === "yes"
                                        //     ? "coloredbookmarkIcon"
                                        //     : "bookmarkIcon"
                                        // }
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
                        {isMobile && (
                          <Pagination
                            token="Videos"
                            totalItems={totalVideos}
                            itemsPerPage={videosPerPage}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                )}
                {/* <!-- 2nd --> */}
                {activeTab === indexTab && (
                  <div
                    className={
                      activeTab === indexTab &&
                      `tab-content tab-content-${indexTab} active`
                    }
                  >
                    {interestVideos.length < 1 ? (
                      <h1>Data Not Found</h1>
                    ) : (
                      <div className="interest-guru ">
                        {interestVideos.map((interest, index) => {
                          return (
                            <div className="wrap flex">
                              <figure>
                                <img
                                  src={`https://img.youtube.com/vi/${interest?.youtube_link.slice(
                                    -11
                                  )}/sddefault.jpg`}
                                  alt={""}
                                />
                              </figure>
                              <div className="content">
                                <div className="flex space-between">
                                  <div className="wrapper flex">
                                    <figure>
                                      <img
                                        src={interest.author_profile_image || userimageIcon}
                                        alt="Genaiguru userIcon"
                                      />
                                    </figure>
                                    <div className="innerContent">
                                      <h6>{interest.author}</h6>
                                      <p>{interest.creation_date}</p>
                                    </div>
                                  </div>
                                  <ul className="flex">
                                    <li
                                      onClick={() => {
                                        interest.saved === "yes"
                                          ? onVideoUnSave(interest.id)
                                          : onVideoSave(interest.id);
                                        setButtonClicked(!buttonClicked);
                                      }}
                                    >
                                      <a>
                                        <img
                                          src={
                                            interest.saved === "yes"
                                              ? "app/images/color-bookmarks.png"
                                              : "./app/images/bookmarkIcon.png"
                                          }
                                          alt={
                                            interest.saved === "yes"
                                              ? "coloredbookmarkIcon"
                                              : "bookmarkIcon"
                                          }
                                          // title={
                                          //   video.saved === "yes"
                                          //     ? "coloredbookmarkIcon"
                                          //     : "bookmarkIcon"
                                          // }
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
                                <p
                                  onClick={() => onVideoClick(interest.id,interest.title)}
                                  style={{ cursor: "pointer" }}
                                >
                                  {interest.title}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- mobile section end here --> */}
    </div>
  );
};

export default FeaturedContent;
