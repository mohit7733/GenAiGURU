import React, { useEffect, useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import axios from "axios";
import { getBaseURL } from "../../api/config";
import { BASE_PATH } from "../../routes";
import Index from "../Authentication/Index";
import ReactPlayer from "react-player";
import {PATH_VIDEO_PLAY} from "../../routes";

const FeaturedContent = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [popularVideos, setPopularVideos] = useState([]);

  const sliderRef = useRef();
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();
  // Get API for Popular Videos
  useEffect(() => {
    axios
      .get(`${getBaseURL()}/popular-latest-videos`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log(response.data.videos);
        setPopularVideos(response.data.videos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // Function to handle tab click
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  // Slider Code
  var settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
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
  const onVideoClick = (VideoId) => {
    navigate(`${PATH_VIDEO_PLAY}?id=${VideoId}`);
    console.log(VideoId);
  };
  return (
    <div>
      <MobileHeader />
      <section class="mainWrapper flex hideMob">
        <Sidebar />
        <div className="rightSection">
          <div class="">
            <div class="keeps-container featuredConatiner">
              <div class="gurukeeps-wrapper">
                <div class="innerBreadcrumb">
                  <p>
                    <Link to={BASE_PATH}>Home</Link>{" "}
                    <i class="fa fa-angle-right" aria-hidden="true"></i>{" "}
                    Featured Video
                  </p>
                </div>
                {/* <h1>Featured Video</h1> */}
                {/* <!-- tab-link start here --> */}
                <div class="row flex space-between align-center">
                  <ul class="connect-link flex">
                    <li className={activeTab === 1 ? "active" : ""}>
                      <Link
                        onClick={() => handleTabClick(1)}
                        className={activeTab === 1 ? "tab active" : ""}
                        data-toggle-target=".tab-content-1"
                      >
                        All
                      </Link>
                    </li>
                    <li className={activeTab === 2 ? "active" : ""}>
                      <Link
                        onClick={() => handleTabClick(2)}
                        className={activeTab === 2 ? "tab active" : ""}
                        data-toggle-target=".tab-content-2"
                      >
                        Ai in healthcare
                      </Link>
                    </li>
                    <li className={activeTab === 3 ? "active" : ""}>
                      <Link
                        onClick={() => handleTabClick(3)}
                        className={activeTab === 3 ? "tab active" : ""}
                        data-toggle-target=".tab-content-3"
                      >
                        ML in finance
                      </Link>
                    </li>
                    <li className={activeTab === 4 ? "active" : ""}>
                      <Link
                        onClick={() => handleTabClick(4)}
                        className={activeTab === 4 ? "tab active" : ""}
                        data-toggle-target=".tab-content-4"
                      >
                        Crypto
                      </Link>
                    </li>
                    <li className={activeTab === 5 ? "active" : ""}>
                      <Link
                        onClick={() => handleTabClick(5)}
                        className={activeTab === 5 ? "tab active" : ""}
                        data-toggle-target=".tab-content-5"
                      >
                        Bitcoin
                      </Link>
                    </li>
                  </ul>
                  <div class="connect-box">
                    <ul class="flex">
                      <li>
                        <Link to="/sortbydate">
                          <figure>
                            <img src="./app/images/sorting-icon.png" alt="" />
                          </figure>
                        </Link>
                      </li>
                      <li>
                        <Link to="/featuredpopup">
                          <figure>
                            <img src="./app/images/filter-icon.png" alt="" />
                          </figure>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- tab-link start here --> */}
              </div>
              {/* <!-- tab-content here --> */}
              {activeTab === 1 && (
                <div
                  className={
                    activeTab === 1 && "tab-content tab-content-1 active"
                  }
                >
                  <div class="interest-guru ">
                    {popularVideos.map((video, index) => {
                      return (
                        <div
                          class="wrap flex"
                          key={index}
                          onClick={() => onVideoClick(video.id)}
                        >
                          <a
                            onClick={() => {
                              navigate(`${PATH_VIDEO_PLAY}`);
                            }}
                            target="_blank"
                          >
                            <figure>
                              <ReactPlayer
                                url={video.youtube_link}
                                width="100%"
                                height="100%"
                              />
                            </figure>
                          </a>
                          <div class="content">
                            <div class="flex space-between">
                              <div class="wrapper flex">
                                <figure>
                                  <img
                                    src={video.author_profile_image}
                                    alt="Genaiguru user-icon"
                                    title="Genaiguru user-icon"
                                  />
                                </figure>
                                <div class="innerContent">
                                  <h5>{video.author}</h5>
                                  <h6> {video.creation_date}</h6>
                                </div>
                              </div>
                              <ul class="flex">
                                <li>
                                  <a href="#">
                                    <img
                                      src="app/images/color-bookmarks.png"
                                      alt="Genaiguru color-bookmarks"
                                      title="Genaiguru color-bookmarks"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      src="app/images/dotsIcons.png"
                                      alt="Genaiguru dotsIcons"
                                      title="Genaiguru dotsIcons"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h5>{video.title}</h5>
                            {/* <ul className="flex">
                            {video?.tags?.map((tag, index) => {
                              return <li key={index}>#{tag}</li>;
                            })}
                          </ul> */}
                            {/* <h5>
                          Navigating the World of ChatGPT and Its Open-source
                          Adversaries
                        </h5>
                        <p>
                          Looking to upgrade your salary in the uk? Get the
                          salary you’re worth by learning to code. 98% employed
                          within 12 months of qualifying....
                        </p> */}
                          </div>
                        </div>
                      );
                    })}

                    {/* <div class="wrap flex">
                      <figure>
                        <img
                          src="app/images/gureu-keeps-1.png"
                          alt="Genaiguru gureu-keeps-1"
                          title="Genaiguru gureu-keeps-1"
                        />
                      </figure>
                      <div class="content">
                        <div class="flex space-between">
                          <div class="wrapper flex">
                            <figure>
                              <img
                                src="app/images/userIcon.png"
                                alt="Genaiguru user-icon"
                                title="Genaiguru user-icon"
                              />
                            </figure>
                            <div class="innerContent">
                              <h6>Esther Howard</h6>
                              <p>Sep 15, 2023. 11:05 pm</p>
                            </div>
                          </div>
                          <ul class="flex">
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/color-bookmarks.png"
                                  alt="Genaiguru color-bookmarks"
                                  title="genaiguru color-bookmarks"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/dotsIcons.png"
                                  alt="Genaiguru dots-icon"
                                  title="Genaiguru dots-icon"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h5>
                          Navigating the World of ChatGPT and Its Open-source
                          Adversaries
                        </h5>
                        <p>
                          Looking to upgrade your salary in the uk? Get the
                          salary you’re worth by learning to code. 98% employed
                          within 12 months of qualifying....
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>
              )}
              {/* <!-- 2nd --> */}
              {activeTab === 2 && (
                <div
                  className={
                    activeTab === 2 && "tab-content tab-content-2 active"
                  }
                >
                  {" "}
                  <div class="interest-guru ">
                    <div class="wrap flex">
                      <figure>
                        <img
                          src="app/images/guru-keeps-2.png"
                          alt="Genaiguru guru-keeps-2"
                          title="Genaiguru guru-keeps-2"
                        />
                      </figure>
                      <div class="content">
                        <div class="flex space-between">
                          <div class="wrapper flex">
                            <figure>
                              <img
                                src="app/images/userIcon.png"
                                alt=" Genaiguru userIcon"
                                title="Genaiguru userIcon"
                              />
                            </figure>
                            <div class="innerContent">
                              <h6>AEsther Howard</h6>
                              <p>Sep 15, 2023. 11:05 pm</p>
                            </div>
                          </div>
                          <ul class="flex">
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/color-bookmarks.png"
                                  alt="Genaiguru color-bookmarks"
                                  title="Genaiguru color-bookmarks"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/dotsIcons.png"
                                  alt="Genaiguru dotsIcons"
                                  title="Genaiguru dotsIcons"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h5>
                          Navigating the World of ChatGPT and Its Open-source
                          Adversaries
                        </h5>
                        <p>
                          Looking to upgrade your salary in the uk? Get the
                          salary you’re worth by learning to code. 98% employed
                          within 12 months of qualifying....
                        </p>
                      </div>
                    </div>
                    <div class="wrap flex">
                      <figure>
                        <img
                          src="app/images/guru-keeps-3.png"
                          alt="Genaiguru guru-keeps-3"
                          title="Genaiguru guru-keeps-3"
                        />
                      </figure>
                      <div class="content">
                        <div class="flex space-between">
                          <div class="wrapper flex">
                            <figure>
                              <img
                                src="app/images/userIcon.png"
                                alt="Genaiguru userIcon"
                                title="Genaiguru userIcon"
                              />
                            </figure>
                            <div class="innerContent">
                              <h6>Esther Howard</h6>
                              <p>Sep 15, 2023. 11:05 pm</p>
                            </div>
                          </div>
                          <ul class="flex">
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/color-bookmarks.png"
                                  alt="Genaiguru color-bookmarks"
                                  title="Genaiguru color-bookmarks"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/dotsIcons.png"
                                  alt="Genaiguru dotsIcons"
                                  title="Genaiguru dotsIcons"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h5>
                          Navigating the World of ChatGPT and Its Open-source
                          Adversaries
                        </h5>
                        <p>
                          Looking to upgrade your salary in the uk? Get the
                          salary you’re worth by learning to code. 98% employed
                          within 12 months of qualifying....
                        </p>
                      </div>
                    </div>
                    <div class="wrap flex">
                      <figure>
                        <img
                          src="app/images/gureu-keeps-1.png"
                          alt="Genaiguru gureu-keeps-1"
                          title="Genaiguru gureu-keeps-1"
                        />
                      </figure>
                      <div class="content">
                        <div class="flex space-between">
                          <div class="wrapper flex">
                            <figure>
                              <img
                                src="app/images/userIcon.png"
                                alt="Genaiguru userIcon"
                                title="Genaiguru userIcon"
                              />
                            </figure>
                            <div class="innerContent">
                              <h6>Esther Howard</h6>
                              <p>Sep 15, 2023. 11:05 pm</p>
                            </div>
                          </div>
                          <ul class="flex">
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/color-bookmarks.png"
                                  alt="Genaiguru color-bookmarks"
                                  title="Genaiguru color-bookmarks"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/dotsIcons.png"
                                  alt="Genaiguru dotsIcons"
                                  title="Genaiguru dotsIcons"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h5>
                          Navigating the World of ChatGPT and Its Open-source
                          Adversaries
                        </h5>
                        <p>
                          Looking to upgrade your salary in the uk? Get the
                          salary you’re worth by learning to code. 98% employed
                          within 12 months of qualifying....
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* <!-- 3rd --> */}
              {activeTab === 3 && (
                <div
                  className={
                    activeTab === 3 && "tab-content tab-content-3 active"
                  }
                >
                  <div class="interest-guru ">
                    <div class="wrap flex">
                      <figure>
                        <img
                          src="app/images/guru-keeps-3.png"
                          alt="Genaiguru guru-keeps-3"
                          title="Genaiguru guru-keeps-3"
                        />
                      </figure>
                      <div class="content">
                        <div class="flex space-between">
                          <div class="wrapper flex">
                            <figure>
                              <img
                                src="app/images/userIcon.png"
                                alt="Genaiguru userIcon"
                                title="Genaiguru userIcon"
                              />
                            </figure>
                            <div class="innerContent">
                              <h6>Esther Howard</h6>
                              <p>Sep 15, 2023. 11:05 pm</p>
                            </div>
                          </div>
                          <ul class="flex">
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/color-bookmarks.png"
                                  alt="Genaiguru color-bookmarks"
                                  title="Genaiguru color-bookmarks"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/dotsIcons.png"
                                  alt="Genaiguru dotsIcons"
                                  title="Genaiguru dotsIcons"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h5>
                          Navigating the World of ChatGPT and Its Open-source
                          Adversaries
                        </h5>
                        <p>
                          Looking to upgrade your salary in the uk? Get the
                          salary you’re worth by learning to code. 98% employed
                          within 12 months of qualifying....
                        </p>
                      </div>
                    </div>
                    <div class="wrap flex">
                      <figure>
                        <img
                          src="app/images/gureu-keeps-1.png"
                          alt="Genaiguru gureu-keeps-1"
                          title="Genaiguru gureu-keeps-1"
                        />
                      </figure>
                      <div class="content">
                        <div class="flex space-between">
                          <div class="wrapper flex">
                            <figure>
                              <img
                                src="app/images/userIcon.png"
                                alt="Genaiguru userIcon"
                                title="Genaiguru userIcon"
                              />
                            </figure>
                            <div class="innerContent">
                              <h6>Esther Howard</h6>
                              <p>Sep 15, 2023. 11:05 pm</p>
                            </div>
                          </div>
                          <ul class="flex">
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/color-bookmarks.png"
                                  alt="Genaiguru color-bookmarks"
                                  title=" Genaiguru color-bookmarks"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/dotsIcons.png"
                                  alt="Genaiguru dots-icon"
                                  title="Genaiguru dotsIcons"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h5>
                          Navigating the World of ChatGPT and Its Open-source
                          Adversaries
                        </h5>
                        <p>
                          Looking to upgrade your salary in the uk? Get the
                          salary you’re worth by learning to code. 98% employed
                          within 12 months of qualifying....
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* <!-- 4th --> */}
              {activeTab === 4 && (
                <div
                  className={
                    activeTab === 4 && "tab-content tab-content-4 active"
                  }
                >
                  <div class="interest-guru ">
                    <div class="wrap flex">
                      <figure>
                        <img
                          src="app/images/gureu-keeps-1.png"
                          alt="Genaiguru gureu-keeps-1"
                          title="Genaiguru gureu-keeps-1"
                        />
                      </figure>
                      <div class="content">
                        <div class="flex space-between">
                          <div class="wrapper flex">
                            <figure>
                              <img
                                src="app/images/userIcon.png"
                                alt="Genaiguru userIcon"
                                title=" Genaiguru userIcon"
                              />
                            </figure>
                            <div class="innerContent">
                              <h6>Esther Howard</h6>
                              <p>Sep 15, 2023. 11:05 pm</p>
                            </div>
                          </div>
                          <ul class="flex">
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/color-bookmarks.png"
                                  alt="Genaiguru color-bookmarks"
                                  title="Genaiguru color-bookmarks"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/dotsIcons.png"
                                  alt="Genaiguru  dotsIcons"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h5>
                          Navigating the World of ChatGPT and Its Open-source
                          Adversaries
                        </h5>
                        <p>
                          Looking to upgrade your salary in the uk? Get the
                          salary you’re worth by learning to code. 98% employed
                          within 12 months of qualifying....
                        </p>
                      </div>
                    </div>
                    <div class="wrap flex">
                      <figure>
                        <img
                          src="app/images/guru-keeps-2.png"
                          alt="Genaiguru guru-keeps-2"
                          title=" Genaiguru guru-keeps-2"
                        />
                      </figure>
                      <div class="content">
                        <div class="flex space-between">
                          <div class="wrapper flex">
                            <figure>
                              <img
                                src="app/images/userIcon.png"
                                alt="Genaiguru usericon"
                                title="Genaiguru userIcon"
                              />
                            </figure>
                            <div class="innerContent">
                              <h6>AEsther Howard</h6>
                              <p>Sep 15, 2023. 11:05 pm</p>
                            </div>
                          </div>
                          <ul class="flex">
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/color-bookmarks.png"
                                  alt="Genaiguru color-bookmarks"
                                  title="Genaiguru color-bookmarks"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/dotsIcons.png"
                                  alt="Genaiguru dotsIcons"
                                  title="Genaiguru dotsIcons"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h5>
                          Navigating the World of ChatGPT and Its Open-source
                          Adversaries
                        </h5>
                        <p>
                          Looking to upgrade your salary in the uk? Get the
                          salary you’re worth by learning to code. 98% employed
                          within 12 months of qualifying....
                        </p>
                      </div>
                    </div>
                    <div class="wrap flex">
                      <figure>
                        <img
                          src="app/images/guru-keeps-3.png"
                          alt="Genaiguru guru-keeps-3"
                        />
                      </figure>
                      <div class="content">
                        <div class="flex space-between">
                          <div class="wrapper flex">
                            <figure>
                              <img
                                src="app/images/userIcon.png"
                                alt="Genaiguru user-icon"
                                title="Genaiguru userIcon "
                              />
                            </figure>
                            <div class="innerContent">
                              <h6>Esther Howard</h6>
                              <p>Sep 15, 2023. 11:05 pm</p>
                            </div>
                          </div>
                          <ul class="flex">
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/color-bookmarks.png"
                                  alt="Genaiguru color-bookmarks "
                                  title="Genaiguru color-bookmarks"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/dotsIcons.png"
                                  alt="Genaiguru dotsIcons"
                                  title="Genaiguru dotsIcons"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h5>
                          Navigating the World of ChatGPT and Its Open-source
                          Adversaries
                        </h5>
                        <p>
                          Looking to upgrade your salary in the uk? Get the
                          salary you’re worth by learning to code. 98% employed
                          within 12 months of qualifying....
                        </p>
                      </div>
                    </div>
                    <div class="wrap flex">
                      <figure>
                        <img
                          src="app/images/gureu-keeps-1.png"
                          alt="Genaiguru gureu-keeps-1"
                          title="Genaiguru gureu-keeps-1 "
                        />
                      </figure>
                      <div class="content">
                        <div class="flex space-between">
                          <div class="wrapper flex">
                            <figure>
                              <img
                                src="app/images/userIcon.png"
                                alt="Genaiguru userIcon"
                                title="Genaiguru userIcon"
                              />
                            </figure>
                            <div class="innerContent">
                              <h6>Esther Howard</h6>
                              <p>Sep 15, 2023. 11:05 pm</p>
                            </div>
                          </div>
                          <ul class="flex">
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/color-bookmarks.png"
                                  alt="Genaiguru color-bookmarks"
                                  title="Genaiguru color-bookmarks"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/dotsIcons.png"
                                  alt="Genaiguru dotsIcons"
                                  title="Genaiguru dotsIcons"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h5>
                          Navigating the World of ChatGPT and Its Open-source
                          Adversaries
                        </h5>
                        <p>
                          Looking to upgrade your salary in the uk? Get the
                          salary you’re worth by learning to code. 98% employed
                          within 12 months of qualifying....
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* <!-- 5th --> */}
              {activeTab === 5 && (
                <div
                  className={
                    activeTab === 5 && "tab-content tab-content-5 active"
                  }
                >
                  <div class="interest-guru ">
                    <div class="wrap flex">
                      <figure>
                        <img
                          src="app/images/guru-keeps-2.png"
                          alt="Genaiguru guru-keeps-2"
                        />
                      </figure>
                      <div class="content">
                        <div class="flex space-between">
                          <div class="wrapper flex">
                            <figure>
                              <img
                                src="app/images/userIcon.png"
                                alt="Genaiguru user-icon"
                                title="Genaiguru user-icon"
                              />
                            </figure>
                            <div class="innerContent">
                              <h6>AEsther Howard</h6>
                              <p>Sep 15, 2023. 11:05 pm</p>
                            </div>
                          </div>
                          <ul class="flex">
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/color-bookmarks.png"
                                  alt="Genaiguru color-bookmarks"
                                  title="Genaiguru color-bookmarks"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/dotsIcons.png"
                                  alt="Genaiguru dotsIcons"
                                  title="Genaiguru dotsIcons"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h5>
                          Navigating the World of ChatGPT and Its Open-source
                          Adversaries
                        </h5>
                        <p>
                          Looking to upgrade your salary in the uk? Get the
                          salary you’re worth by learning to code. 98% employed
                          within 12 months of qualifying....
                        </p>
                      </div>
                    </div>
                    <div class="wrap flex">
                      <figure>
                        <img
                          src="app/images/guru-keeps-3.png"
                          alt="Genaiguru guru-keeps-3"
                          title="Genaiguru guru-keeps-3"
                        />
                      </figure>
                      <div class="content">
                        <div class="flex space-between">
                          <div class="wrapper flex">
                            <figure>
                              <img
                                src="app/images/userIcon.png"
                                alt="Genaiguru usericon"
                              />
                            </figure>
                            <div class="innerContent">
                              <h6>Esther Howard</h6>
                              <p>Sep 15, 2023. 11:05 pm</p>
                            </div>
                          </div>
                          <ul class="flex">
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/color-bookmarks.png"
                                  alt="Genaiguru color-bookmarks"
                                  title="Genaiguru color-bookmarks"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/dotsIcons.png"
                                  alt="Genaiguru dotsIcons "
                                  title="Genaiguru dotsIcons"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h5>
                          Navigating the World of ChatGPT and Its Open-source
                          Adversaries
                        </h5>
                        <p>
                          Looking to upgrade your salary in the uk? Get the
                          salary you’re worth by learning to code. 98% employed
                          within 12 months of qualifying....
                        </p>
                      </div>
                    </div>
                    <div class="wrap flex">
                      <figure>
                        <img
                          src="app/images/gureu-keeps-1.png"
                          alt="Genaiguru gureu-keeps-1"
                          title="Genaiguru gureu-keeps-1"
                        />
                      </figure>
                      <div class="content">
                        <div class="flex space-between">
                          <div class="wrapper flex">
                            <figure>
                              <img
                                src="app/images/userIcon.png"
                                alt="Genaiguru userIcon"
                                title="Genaiguru userIcon"
                              />
                            </figure>
                            <div class="innerContent">
                              <h6>Esther Howard</h6>
                              <p>Sep 15, 2023. 11:05 pm</p>
                            </div>
                          </div>
                          <ul class="flex">
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/color-bookmarks.png"
                                  alt="Genaiguru color-bookmarks"
                                  title="Genaiguru color-bookmarks"
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
                          Navigating the World of ChatGPT and Its Open-source
                          Adversaries
                        </h5>
                        <p>
                          Looking to upgrade your salary in the uk? Get the
                          salary you’re worth by learning to code. 98% employed
                          within 12 months of qualifying....
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- mobile section start here --> */}
      <div class="mob_profile commanMobHead hideDes">
        <div class="mobileHead flex">
          <Link to={BASE_PATH} class="hamburger">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
          </Link>
          <h2>Featured video</h2>
          <div class="connect-box">
            <ul class="flex">
              <li>
                <Link to="/sortbydate">
                  <figure>
                    <img src="./app/images/sorting-icon.png" alt="" />
                  </figure>
                </Link>
              </li>
              <li>
                <Link to="/featuredpopup">
                  <figure>
                    <img src="./app/images/filter-icon.png" alt="" />
                  </figure>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="innerCommanContent">
          <div class="mob_tab_list">
            <div class="rightSection">
              <div class="keeps-container">
                <div class="gurukeeps-wrapper">
                  {/* <!-- tab-link start here --> */}
                  <ul class="connect-link flex">
                    <li>
                      <a
                        href="#"
                        class="tab active"
                        data-toggle-target=".tab-content-1"
                      >
                        All
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="tab "
                        data-toggle-target=".tab-content-2"
                      >
                        Ai in healthcare
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="tab "
                        data-toggle-target=".tab-content-3"
                      >
                        ML in finance
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="tab "
                        data-toggle-target=".tab-content-4"
                      >
                        Crypto
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="tab "
                        data-toggle-target=".tab-content-5"
                      >
                        Bitcoin
                      </a>
                    </li>
                  </ul>
                  {/* <!-- tab-link start here --> */}
                </div>
                {/* <!-- tab-content here --> */}
                <div class="tab-content tab-content-1 active">
                  <div class="interest-guru ">
                    <div class="interest-sliders">
                      <div class="wrap flex">
                        <figure>
                          <a href="#">
                            <img
                              src="app/images/gureu-keeps-1.png"
                              alt="Genaiguru Guru-keeps"
                              title="Genaiguru Guru-keeps"
                            />
                          </a>
                        </figure>
                        <div class="content">
                          <div class="wrapper flex">
                            <figure>
                              <img
                                src="app/images/authorImg.png"
                                alt="Genaiguru authorImg"
                                title="Genaiguru authorImg"
                              />
                            </figure>
                            <div class="innerContent">
                              <h6>Alex Smih</h6>
                              <p> Sep 15, 2023. 11:05 pm</p>
                            </div>
                          </div>
                          <p>
                            Navigating the World of ChatGPT and Its Open-source
                            Adversaries
                          </p>
                          <ul class="flex">
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/color-bookmarks.png"
                                  alt="Genaiguru bookmarkIcon"
                                  title="Genaiguru bookmarkIcon"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/dotsIcons.png"
                                  alt="Genaiguru dotsIcons"
                                  title="Genaiguru dotsIcons"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="wrap flex">
                        <figure>
                          <a href="#">
                            <img
                              src="app/images/gureu-keeps-1.png"
                              alt="Genaiguru Guru-keeps"
                              title="Genaiguru Guru-keeps"
                            />
                          </a>
                        </figure>
                        <div class="content">
                          <div class="wrapper flex">
                            <figure>
                              <img
                                src="app/images/authorImg.png"
                                alt="Genaiguru authorImg"
                                title="Genaiguru authorImg"
                              />
                            </figure>
                            <div class="innerContent">
                              <h6>Alex Smih</h6>
                              <p> Sep 15, 2023. 11:05 pm</p>
                            </div>
                          </div>
                          <p>
                            Navigating the World of ChatGPT and Its Open-source
                            Adversaries
                          </p>
                          <ul class="flex">
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/color-bookmarks.png"
                                  alt="Genaiguru bookmarkIcon"
                                  title="Genaiguru bookmarkIcon"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/dotsIcons.png"
                                  alt="Genaiguru dotsIcons"
                                  title="Genaiguru dotsIcons"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="wrap flex">
                        <figure>
                          <a href="#">
                            <img
                              src="app/images/gureu-keeps-1.png"
                              alt="Genaiguru Guru-keeps"
                              title="Genaiguru Guru-keeps"
                            />
                          </a>
                        </figure>
                        <div class="content">
                          <div class="wrapper flex">
                            <figure>
                              <img
                                src="app/images/authorImg.png"
                                alt="Genaiguru authorImg"
                                title="Genaiguru authorImg"
                              />
                            </figure>
                            <div class="innerContent">
                              <h6>Alex Smih</h6>
                              <p> Sep 15, 2023. 11:05 pm</p>
                            </div>
                          </div>
                          <p>
                            Navigating the World of ChatGPT and Its Open-source
                            Adversaries
                          </p>
                          <ul class="flex">
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/color-bookmarks.png"
                                  alt="Genaiguru bookmarkIcon"
                                  title="Genaiguru bookmarkIcon"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/dotsIcons.png"
                                  alt="Genaiguru dotsIcons"
                                  title="Genaiguru dotsIcons"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="wrap flex">
                        <figure>
                          <a href="#">
                            <img
                              src="app/images/gureu-keeps-1.png"
                              alt="Genaiguru Guru-keeps"
                              title="Genaiguru Guru-keeps"
                            />
                          </a>
                        </figure>
                        <div class="content">
                          <div class="wrapper flex">
                            <figure>
                              <img
                                src="app/images/authorImg.png"
                                alt="Genaiguru authorImg"
                                title="Genaiguru authorImg"
                              />
                            </figure>
                            <div class="innerContent">
                              <h6>Alex Smih</h6>
                              <p> Sep 15, 2023. 11:05 pm</p>
                            </div>
                          </div>
                          <p>
                            Navigating the World of ChatGPT and Its Open-source
                            Adversaries
                          </p>
                          <ul class="flex">
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/color-bookmarks.png"
                                  alt="Genaiguru bookmarkIcon"
                                  title="Genaiguru bookmarkIcon"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/dotsIcons.png"
                                  alt="Genaiguru dotsIcons"
                                  title="Genaiguru dotsIcons"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="wrap flex">
                        <figure>
                          <a href="#">
                            <img
                              src="app/images/gureu-keeps-1.png"
                              alt="Genaiguru Guru-keeps"
                              title="Genaiguru Guru-keeps"
                            />
                          </a>
                        </figure>
                        <div class="content">
                          <div class="wrapper flex">
                            <figure>
                              <img
                                src="app/images/authorImg.png"
                                alt="Genaiguru authorImg"
                                title="Genaiguru authorImg"
                              />
                            </figure>
                            <div class="innerContent">
                              <h6>Alex Smih</h6>
                              <p> Sep 15, 2023. 11:05 pm</p>
                            </div>
                          </div>
                          <p>
                            Navigating the World of ChatGPT and Its Open-source
                            Adversaries
                          </p>
                          <ul class="flex">
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/color-bookmarks.png"
                                  alt="Genaiguru bookmarkIcon"
                                  title="Genaiguru bookmarkIcon"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/dotsIcons.png"
                                  alt="Genaiguru dotsIcons"
                                  title="Genaiguru dotsIcons"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="wrap flex">
                        <figure>
                          <a href="#">
                            <img
                              src="app/images/gureu-keeps-1.png"
                              alt="Genaiguru Guru-keeps"
                              title="Genaiguru Guru-keeps"
                            />
                          </a>
                        </figure>
                        <div class="content">
                          <div class="wrapper flex">
                            <figure>
                              <img
                                src="app/images/authorImg.png"
                                alt="Genaiguru authorImg"
                                title="Genaiguru authorImg"
                              />
                            </figure>
                            <div class="innerContent">
                              <h6>Alex Smih</h6>
                              <p> Sep 15, 2023. 11:05 pm</p>
                            </div>
                          </div>
                          <p>
                            Navigating the World of ChatGPT and Its Open-source
                            Adversaries
                          </p>
                          <ul class="flex">
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/color-bookmarks.png"
                                  alt="Genaiguru bookmarkIcon"
                                  title="Genaiguru bookmarkIcon"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/dotsIcons.png"
                                  alt="Genaiguru dotsIcons"
                                  title="Genaiguru dotsIcons"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- 2nd --> */}
                <div class="tab-content tab-content-2 ">
                  <div class="interest-guru ">
                    <div class="interest-sliders">
                      <div class="wrap flex">
                        <figure>
                          <a href="#">
                            <img
                              src="app/images/gureu-keeps-1.png"
                              alt="Genaiguru Guru-keeps"
                              title="Genaiguru Guru-keeps"
                            />
                          </a>
                        </figure>
                        <div class="content">
                          <div class="wrapper flex">
                            <figure>
                              <img
                                src="app/images/authorImg.png"
                                alt="Genaiguru authorImg"
                                title="Genaiguru authorImg"
                              />
                            </figure>
                            <div class="innerContent">
                              <h6>Alex Smih</h6>
                              <p> Sep 15, 2023. 11:05 pm</p>
                            </div>
                          </div>
                          <p>
                            Navigating the World of ChatGPT and Its Open-source
                            Adversaries
                          </p>
                          <ul class="flex">
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/color-bookmarks.png"
                                  alt="Genaiguru bookmarkIcon"
                                  title="Genaiguru bookmarkIcon"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/dotsIcons.png"
                                  alt="Genaiguru dotsIcons"
                                  title="Genaiguru dotsIcons"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- 3rd --> */}
                <div class="tab-content tab-content-3">
                  <div class="interest-guru ">
                    <div class="interest-sliders">
                      <div class="wrap flex">
                        <figure>
                          <img
                            src="app/images/interestSliderImg.png"
                            alt="Genaiguru interestSliderImg"
                            title="Genaiguru interestSliderImg"
                          />
                        </figure>
                        <div class="content">
                          <div class="wrapper flex">
                            <figure>
                              <img
                                src="app/images/authorImg.png"
                                alt="Genaiguru authorImg"
                                title="Genaiguru authorImg"
                              />
                            </figure>
                            <div class="innerContent">
                              <h6>Alex Smih</h6>
                              <p>Sep 15, 2023. 11:05 pm</p>
                            </div>
                          </div>
                          <p>
                            Navigating the World of ChatGPT and Its Open-source
                            Adversaries
                          </p>
                          <ul class="flex">
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/color-bookmarks.png"
                                  alt="Genaiguru bookmarkIcon"
                                  title="Genaiguru bookmarkIcon"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/dotsIcons.png"
                                  alt="Genaiguru dotsIcons"
                                  title="Genaiguru dotsIcons"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- 4th --> */}
                <div class="tab-content tab-content-4">
                  <div class="interest-guru ">
                    <div class="interest-sliders">
                      <div class="wrap flex">
                        <figure>
                          <a href="#">
                            <img
                              src="app/images/gureu-keeps-1.png"
                              alt="Genaiguru Guru-keeps"
                              title="Genaiguru Guru-keeps"
                            />
                          </a>
                        </figure>
                        <div class="content">
                          <div class="wrapper flex">
                            <figure>
                              <img
                                src="app/images/authorImg.png"
                                alt="Genaiguru authorImg"
                                title="Genaiguru authorImg"
                              />
                            </figure>
                            <div class="innerContent">
                              <h6>Alex Smih</h6>
                              <p> Sep 15, 2023. 11:05 pm</p>
                            </div>
                          </div>
                          <p>
                            Navigating the World of ChatGPT and Its Open-source
                            Adversaries
                          </p>
                          <ul class="flex">
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/color-bookmarks.png"
                                  alt="Genaiguru bookmarkIcon"
                                  title="Genaiguru bookmarkIcon"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/dotsIcons.png"
                                  alt="Genaiguru dotsIcons"
                                  title="Genaiguru dotsIcons"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- 5th --> */}
                <div class="tab-content tab-content-5">
                  <div class="interest-guru ">
                    <div class="interest-sliders">
                      <div class="wrap flex">
                        <figure>
                          <a href="#">
                            <img
                              src="app/images/gureu-keeps-1.png"
                              alt="Genaiguru Guru-keeps"
                              title="Genaiguru Guru-keeps"
                            />
                          </a>
                        </figure>
                        <div class="content">
                          <div class="wrapper flex">
                            <figure>
                              <img
                                src="app/images/authorImg.png"
                                alt="Genaiguru authorImg"
                                title="Genaiguru authorImg"
                              />
                            </figure>
                            <div class="innerContent">
                              <h6>Alex Smih</h6>
                              <p> Sep 15, 2023. 11:05 pm</p>
                            </div>
                          </div>
                          <p>
                            Navigating the World of ChatGPT and Its Open-source
                            Adversaries
                          </p>
                          <ul class="flex">
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/color-bookmarks.png"
                                  alt="Genaiguru bookmarkIcon"
                                  title="Genaiguru bookmarkIcon"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/dotsIcons.png"
                                  alt="Genaiguru dotsIcons"
                                  title="Genaiguru dotsIcons"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
