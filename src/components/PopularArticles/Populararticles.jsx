import React from "react";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Populararticles = () => {
  const sliderRef = useRef();

  var settings2 = {
    dots: false,
    infinite: true,
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
  return (
    <>
      <div className="video-section second">
        <div className="heading-link flex">
          <h3>Popular articles</h3>
          <Link to="/featuredcontent">View all</Link>
        </div>
        <div className="article-slider">
          <Slider
            ref={sliderRef}
            {...settings2}
            id="Slider-4"
            className="slider_test"
          >
            <div>
              <div className="wrap">
                <Link to="/blogdetails">
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
                              alt="Genaiguru authorImg"
                              title="Genaiguru authorImg"
                            />
                          </figure>
                          <div className="content">
                            <h6>Alex Smih</h6>
                            <p>24 M view . 3 month ago</p>
                          </div>
                        </div>
                        <ul className="flex">
                          <li>#finance</li>
                          <li>#crypto</li>
                          <li>#economy</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div>
              <div className="wrap">
                <Link to="/blogdetails">
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
                              alt="Genaiguru authorImg"
                              title="Genaiguru authorImg"
                            />
                          </figure>
                          <div className="content">
                            <h6>Alex Smih</h6>
                            <p>24 M view . 3 month ago</p>
                          </div>
                        </div>
                        <ul className="flex">
                          <li>#finance</li>
                          <li>#crypto</li>
                          <li>#economy</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div>
              <div className="wrap">
                <Link to="/blogdetails">
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
                              alt="Genaiguru authorImg"
                              title="Genaiguru authorImg"
                            />
                          </figure>
                          <div className="content">
                            <h6>Alex Smih</h6>
                            <p>24 M view . 3 month ago</p>
                          </div>
                        </div>
                        <ul className="flex">
                          <li>#finance</li>
                          <li>#crypto</li>
                          <li>#economy</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div>
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
                              alt="Genaiguru authorImg"
                              title="Genaiguru authorImg"
                            />
                          </figure>
                          <div className="content">
                            <h6>Alex Smih</h6>
                            <p>24 M view . 3 month ago</p>
                          </div>
                        </div>
                        <ul className="flex">
                          <li>#finance</li>
                          <li>#crypto</li>
                          <li>#economy</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div>
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
                              alt="Genaiguru authorImg"
                              title="Genaiguru authorImg"
                            />
                          </figure>
                          <div className="content">
                            <h6>Alex Smih</h6>
                            <p>24 M view . 3 month ago</p>
                          </div>
                        </div>
                        <ul className="flex">
                          <li>#finance</li>
                          <li>#crypto</li>
                          <li>#economy</li>
                        </ul>
                      </div>
                      <div className="col_right flex">
                        <img
                          src="app/images/videoIcon.png"
                          alt="Genaiguru videoIcon"
                          title="Genaiguru videoIcon"
                        />
                        3:38
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Populararticles;
