import React from "react";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Latestblog = () => {
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
      <div className="blog-wrap">
        <h1>Latest blog</h1>
        <div className="blog-slider ">
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
                      src="app/images/blogImgOne.png"
                      alt="Genaiguru blog image"
                      title="Genaiguru blog image"
                    />
                  </figure>
                  <div className="layer">
                    <h5>
                      Discover the Latest <br /> Breakthroughs in AI{" "}
                    </h5>
                    <button type="button">
                      <img
                        src="app/images/blogArrowBtnImg.png"
                        alt="Genaiguru arrow button"
                        title="Genaiguru arrow button"
                      />
                    </button>
                  </div>
                </Link>
              </div>
            </div>
            <div>
              <div className="wrap">
                <Link to="/blogdetails">
                  <figure>
                    <img
                      src="app/images/blogImgTwo.png"
                      alt="Genaiguru blog image"
                      title="Genaiguru blog image"
                    />
                  </figure>
                  <div className="layer">
                    <h5>
                      Discover the Latest <br /> Breakthroughs in AI{" "}
                    </h5>
                    <button type="button">
                      <img
                        src="app/images/blogArrowBtnImg.png"
                        alt="Genaiguru arrow button"
                        title="Genaiguru arrow button"
                      />
                    </button>
                  </div>
                </Link>
              </div>
            </div>
            <div>
              <div className="wrap">
                <Link to="/blogdetails">
                  <figure>
                    <img
                      src="app/images/blogImgOne.png"
                      alt="Genaiguru blog image"
                      title="Genaiguru blog image"
                    />
                  </figure>
                  <div className="layer">
                    <h5>
                      Discover the Latest <br /> Breakthroughs in AI{" "}
                    </h5>
                    <button type="button">
                      <img
                        src="app/images/blogArrowBtnImg.png"
                        alt="Genaiguru arrow button"
                        title="Genaiguru arrow button"
                      />
                    </button>
                  </div>
                </Link>
              </div>
            </div>
            <div>
              <div className="wrap">
                <a href="#">
                  <figure>
                    <img
                      src="app/images/blogImgTwo.png"
                      alt="Genaiguru blog image"
                      title="Genaiguru blog image"
                    />
                  </figure>
                  <div className="layer">
                    <h5>
                      Discover the Latest <br /> Breakthroughs in AI{" "}
                    </h5>
                    <button type="button">
                      <img
                        src="app/images/blogArrowBtnImg.png"
                        alt="Genaiguru arrow button"
                        title="Genaiguru arrow button"
                      />
                    </button>
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

export default Latestblog;
