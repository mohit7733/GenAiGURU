import React, { useEffect, useState } from "react";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getBaseURL } from "../../api/config";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import {
  PATH_FEATURED_CONTENT,
  PATH_FEATURED_VIDEO,
  PATH_VIDEO_PLAY,
} from "../../routes";

const Popularvideos = () => {
  const sliderRef = useRef();
  const [popularVideos, setPopularVideos] = useState([]);
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

  var settings2 = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
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
  const onVideoClick = (VideoId) => {
    navigate(`${PATH_VIDEO_PLAY}?id=${VideoId}`);
    console.log(VideoId);
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
            <a href="#">
              <figure>
                <img
                  src="app/images/videoImg.png"
                  alt="Genaiguru video image"
                  title="Genaiguru video image"
                />
              </figure>
              <div className="layer">
                <div className="price flex">
                  <img
                    src="app/images/orangeStrike.png"
                    alt="Genaiguru orangeStrike"
                    title="Genaiguru orangeStrike"
                  />
                  17
                </div>
                <h5>
                  It’s a catch-22 for young startups: How do you attract
                  investors?{" "}
                </h5>
                <div className="author-tag flex">
                  <div className="col_left">
                    <div className="wrapper flex">
                      <figure>
                        <img
                          src="app/images/authorImg.png"
                          alt="Genaiguru author image"
                          title="Genaiguru author image"
                        />
                      </figure>
                      <div className="content">
                        <h6>Alex Smih</h6>
                        <p>24 M view . 3 month ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="col_right flex">
                    <img
                      src="app/images/videoIcon.png"
                      alt="Genaiguru video button"
                      title="Genaiguru video button"
                    />
                    3:38
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="videoBoxes flex">
            <figure>
              <a href="#">
                <img
                  src="app/images/interestSliderImg.png"
                  alt="Genaiguru video image"
                  title="Genaiguru video image"
                />
                <div className="timing flex">
                  <img
                    src="app/images/videoIcon.png"
                    alt="Genaiguru videoIcon"
                    title="Genaiguru videoIcon"
                  />
                  3:38
                </div>
              </a>
            </figure>
            <div className="content">
              <p>
                <a href="#">
                  It’s a catch-22 for young startups: how do you attract
                  investors?{" "}
                </a>
              </p>
              <ul>
                <li>Alex Smith</li>
                <li>24 M Views</li>
                <li>3 months</li>
              </ul>
              <p className="tags">#finance #crypto #economy</p>
            </div>
          </div>
          <div className="videoBoxes flex">
            <figure>
              <a href="#">
                <img
                  src="app/images/interestSliderImg.png"
                  alt="Genaiguru video image"
                  title="Genaiguru video image"
                />
                <div className="timing flex">
                  <img
                    src="app/images/videoIcon.png"
                    alt="Genaiguru videoIcon"
                    title="Genaiguru videoIcon"
                  />
                  3:38
                </div>
              </a>
            </figure>
            <div className="content">
              <p>
                <a href="#">
                  It’s a catch-22 for young startups: how do you attract
                  investors?{" "}
                </a>
              </p>
              <ul>
                <li>Alex Smith</li>
                <li>24 M Views</li>
                <li>3 months</li>
              </ul>
              <p className="tags">#finance #crypto #economy</p>
            </div>
          </div>
          <a href={PATH_FEATURED_CONTENT} className="viewAll">
            View all
          </a>
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
                    <div className="layer">
                      <div className="price flex">
                        <img
                          src="app/images/orangeStrike.png"
                          alt="Genaiguru orangeStrike"
                          title="Genaiguru orangeStrike"
                        />
                        17
                      </div>
                      <h5>{video.title}</h5>
                      <div className="author-tag flex">
                        <div className="col_left">
                          <div className="wrapper flex">
                            <figure>
                              <img
                                src={video.author_profile_image}
                                alt="Genaiguru authorImg"
                                title="Genaiguru authorImg"
                              />
                            </figure>
                            <div className="content">
                              <h6>{video.author}</h6>
                              {/* <p>24 M view . 3 month ago</p> */}
                            </div>
                          </div>
                          <ul className="flex">
                            {video?.tags?.map((tag, index) => {
                              return <li key={index}>#{tag}</li>;
                            })}
                          </ul>
                        </div>
                        {/* <div className="col_right flex">
                                <img
                                  src="app/images/videoIcon.png"
                                  alt="Genaiguru videoIcon"
                                  title="Genaiguru videoIcon"
                                />
                                3:38
                              </div> */}
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
