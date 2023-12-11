import React, { useEffect, useState } from "react";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getBaseURL } from "../../api/config";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const Popularvideos = () => {
  const sliderRef = useRef();
  const [popularVideos, setPopularVideos] = useState([]);
  const [userID, setuserID] = useState();
  const token = JSON.parse(localStorage.getItem("token"));

  // Get API for Popular Videos
  useEffect(() => {
    axios
      .get(`${getBaseURL()}/auth/popular-latest-videos`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log(response.data.videos);
        setPopularVideos(response.data.videos);
        // console.log(popularVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  var settings2 = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    arrows: true,
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

  return (
    <>
      <div className="video-section">
        <div className="heading-link flex">
          <h3>Popular youtube videos</h3>
          <Link to="/featuredcontent">View all</Link>
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
          <a href="#" className="viewAll">
            View all
          </a>
        </div>
        {token ? (
          <div className="video-slider">
            <Slider
              ref={sliderRef}
              {...settings2}
              id="Slider-4"
              className="slider_test"
            >
              {popularVideos.map((video, index) => {
                return (
                  <div key={index}>
                    <div className="wrap">
                      <a href="#">
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
                                {/* <figure>
                                    <img
                                      src="app/images/authorImg.png"
                                      alt="Genaiguru authorImg"
                                      title="Genaiguru authorImg"
                                    />
                                  </figure> */}
                                {/* <div className="content">
                                    <h6>Alex Smih</h6>
                                    <p>24 M view . 3 month ago</p>
                                  </div> */}
                              </div>
                              <ul className="flex">
                                {video?.tags?.map((tag, index) => {
                                  return <li>#{tag}</li>;
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
                  </div>
                );
              })}
            </Slider>
          </div>
        ) : (
          <div className="video-slider">
            <Slider
              ref={sliderRef}
              {...settings2}
              id="Slider-4"
              className="slider_test"
            >
              <div>
                <div className="wrap">
                  <a href="#">
                    <figure>
                      <img
                        src="app/images/interestSliderImg.png"
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
                        investors?
                      </h5>
                      <div className="author-tag flex">
                        <div className="col_left">
                          <div className="wrapper flex">
                            {/* <figure>
                              <img
                                src="app/images/authorImg.png"
                                alt="Genaiguru authorImg"
                                title="Genaiguru authorImg"
                              />
                            </figure> */}
                            {/* <div className="content">
                              <h6>Alex Smih</h6>
                              <p>24 M view . 3 month ago</p>
                            </div> */}
                          </div>
                          <ul className="flex">
                            <li>#finance</li>
                            <li>#History</li>
                            <li>#Development</li>
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
              </div>
            </Slider>
          </div>
        )}
      </div>
    </>
  );
};

export default Popularvideos;
