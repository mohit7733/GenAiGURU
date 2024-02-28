import React, { useEffect, useState } from "react";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getBaseURL } from "../../api/config";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import { PATH_FEATURED_VIDEO, PATH_VIDEO_PLAY } from "../../routes";

const Popularvideos = () => {
  const sliderRef = useRef();
  const [popularVideos, setPopularVideos] = useState([]);
  const [videoPoints, setVideoPoints] = useState();

  const token = JSON.parse(localStorage.getItem("token"));
  const userId = JSON.parse(localStorage.getItem("UserId"));

  const MAX_DISPLAY_ARTICLES = 2;
  const MAX_DISPLAY_VIDEOS = 2;
  const MAX_DISPLAY = 1;
  const navigate = useNavigate();

  // Get API for Popular Videos
  useEffect(() => {
    axios
      .get(`${getBaseURL()}/featured-post?type=video&user_id=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPopularVideos(response?.data?.data);
        setVideoPoints(response?.data?.videos_points);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userId]);

  var settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
  const onVideoClick = (VideoId, titles) => {
    const trimmedTitle = titles.trim();
    const replacedTitle = trimmedTitle.replace(/\s+/g, "-");
    navigate(`${PATH_VIDEO_PLAY}?id=${VideoId}?title=${replacedTitle}`);
  };
  return (
    <>
      <div className="video-section">
        <div className="heading-link flex">
          <h3>Popular youtube videos</h3>
          <Link to={PATH_FEATURED_VIDEO}>View all</Link>
        </div>
        <div className="mobileVideoSection">
          <div className="wrap">
            {/* <Slider */}
            {/* <Slider
              ref={sliderRef}
              // {...settings2}
              id="Slider-4"
              className="slider_test"
            > */}
            {popularVideos.map((video, index) => {
              if (index < MAX_DISPLAY) {
                return (
                  <div
                    className="wrap"
                    key={index}
                    onClick={() => onVideoClick(video.id, video.title)}
                  >
                    <a
                      onClick={() => {
                        navigate(`${PATH_VIDEO_PLAY}`);
                      }}
                      target="_blank"
                    >
                      <div className="youtube-icon">
                        <figure
                          src={`https://img.youtube.com/vi/${video?.youtube_link.slice(
                            -11
                          )}/sddefault.jpg`}
                        >
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
                        <img src="app/images/youtube.png" alt={""} />
                      </div>
                      <div className="layer">
                        <div className="price flex">
                          <img
                            src="app/images/orangeStrike.png"
                            alt="Genaiguru orangeStrike"
                          />
                          {videoPoints}
                        </div>
                        <h5>{video.title}</h5>
                        <div className="author-tag flex">
                          <div className="col_left">
                            <div className="wrapper flex">
                              <figure>
                                <img
                                  src={video.author_profile_image}
                                  alt="Genaiguru authorImg"
                                />
                              </figure>
                              <div className="content">
                                <h6>{video.author}</h6>
                              </div>
                            </div>
                            <ul className="flex">
                              {video?.tags?.map((tag, index) => {
                                return <li key={index}>#{tag}</li>;
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              }
            })}
            {/* </Slider> */}
          </div>
          {popularVideos.map((video, index) => {
            if (index < MAX_DISPLAY_VIDEOS) {
              return (
                <div
                  className="videoBoxes flex"
                  key={index}
                  onClick={() => onVideoClick(video.id, video.title)}
                >
                  <figure>
                    <a
                      onClick={() => {
                        navigate(`${PATH_VIDEO_PLAY}`);
                      }}
                      target="_blank"
                    >
                      <div className="youtube-icon">
                        <figure
                          src={`https://img.youtube.com/vi/${video?.youtube_link.slice(
                            -11
                          )}/sddefault.jpg`}
                        >
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
                        <img src="app/images/youtube.png" alt={""} />
                      </div>
                    </a>
                  </figure>
                  <div className="content">
                    <p>
                      <a href="#">{video.title}</a>
                    </p>
                    <ul>
                      <li>{video.author}</li>
                      {/* <li>{video.creation_date}</li> */}
                    </ul>
                    <ul className="flex">
                      <li>
                        <a>
                          {video.tags.map((tag, index) => {
                            return (
                              <React.Fragment key={index}>
                                <span style={{ color: "#325fff" }}>#{tag}</span>
                                {index !== video.tags.length - 1 && " "}
                              </React.Fragment>
                            );
                          })}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            }
          })}
          <Link to={PATH_FEATURED_VIDEO} className="viewAll">
            View all
          </Link>
        </div>
        <div className="video-slider">
          <Slider
            ref={sliderRef}
            {...settings2}
            id="Slider-4"
            className="slider_test"
          >
            {popularVideos.map((video, index) => {
              return (
                <div
                  className="wrap"
                  key={index}
                  onClick={() => onVideoClick(video.id, video.title)}
                >
                  <a
                    onClick={() => {
                      navigate(`${PATH_VIDEO_PLAY}`);
                    }}
                    target="_blank"
                  >
                    <div className="youtube-icon">
                      <figure
                        src={`https://img.youtube.com/vi/${video?.youtube_link.slice(
                          -11
                        )}/sddefault.jpg`}
                      >
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
                      <img src="app/images/youtube.png" alt={""} />
                    </div>
                    <div className="layer">
                      {video.watched == "no" && (
                        <div className="price flex">
                          <img
                            src="app/images/orangeStrike.png"
                            alt="Genaiguru orangeStrike"
                          />
                          {videoPoints}
                        </div>
                      )}
                      <h5>{video.title}</h5>
                      <div className="author-tag flex">
                        <div className="col_left">
                          <div className="wrapper flex">
                            <figure>
                              <img
                                src={video.author_profile_image}
                                alt="Genaiguru authorImg"
                              />
                            </figure>
                            <div className="content">
                              <h6>{video.author}</h6>
                            </div>
                          </div>
                          <ul className="flex">
                            {video?.tags?.map((tag, index) => {
                              return <li key={index}>#{tag}</li>;
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Popularvideos;
