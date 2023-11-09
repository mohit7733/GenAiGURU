import React from "react";
import { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ArticleBasedInterest = () => {
  const sliderRef = useRef();

  var settings2 = {
    dots: false,
    infinite: true,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.03,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="home-interest">
        <div className="heading-link flex">
          <h3>Articles based on your interest</h3>
          <a href="#">View all</a>
        </div>
        <div className="interest-slider">
          <Slider ref={sliderRef} {...settings2} id="Slider-4" className='slider_test'>
            <div>
              <div className="wrap flex">
                <figure>
                  <img
                    src="app/images/interestSliderImg.png"
                    alt="Genaiguru interestSliderImg"
                    title="Genaiguru interestSliderImg"
                  />
                </figure>
                <div className="content">
                  <div className="wrapper flex">
                    <figure>
                      <img
                        src="app/images/authorImg.png"
                        alt="Genaiguru authorImg"
                        title="Genaiguru authorImg"
                      />
                    </figure>
                    <div className="innerContent">
                      <h6>Alex Smih</h6>
                      <p> Sep 15, 2023. 11:05 pm</p>
                    </div>
                  </div>
                  <p>
                    Navigating the World of ChatGPT and Its Open-source
                    Adversaries
                  </p>
                  <ul className="flex">
                    <li>
                      <a href="#">
                        <img
                          src="app/images/bookmarkIcon.png"
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
            <div>
              <div className="wrap flex">
                <figure>
                  <img
                    src="app/images/interestSliderImg.png"
                    alt="Genaiguru interestSliderImg"
                    title="Genaiguru interestSliderImg"
                  />
                </figure>
                <div className="content">
                  <div className="wrapper flex">
                    <figure>
                      <img
                        src="app/images/authorImg.png"
                        alt="Genaiguru authorImg"
                        title="Genaiguru authorImg"
                      />
                    </figure>
                    <div className="innerContent">
                      <h6>Alex Smih</h6>
                      <p>Sep 15, 2023. 11:05 pm</p>
                    </div>
                  </div>
                  <p>
                    Navigating the World of ChatGPT and Its Open-source
                    Adversaries
                  </p>
                  <ul className="flex">
                    <li>
                      <a href="#">
                        <img
                          src="app/images/bookmarkIcon.png"
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
            <div>
              <div className="wrap flex">
                <figure>
                  <img
                    src="app/images/interestSliderImg.png"
                    alt="Genaiguru interestSliderImg"
                    title="Genaiguru interestSliderImg"
                  />
                </figure>
                <div className="content">
                  <div className="wrapper flex">
                    <figure>
                      <img
                        src="app/images/authorImg.png"
                        alt="Genaiguru authorImg"
                        title="Genaiguru authorImg"
                      />
                    </figure>
                    <div className="innerContent">
                      <h6>Alex Smih</h6>
                      <p>Sep 15, 2023. 11:05 pm</p>
                    </div>
                  </div>
                  <p>
                    Navigating the World of ChatGPT and Its Open-source
                    Adversaries
                  </p>
                  <ul className="flex">
                    <li>
                      <a href="#">
                        <img
                          src="app/images/bookmarkIcon.png"
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
            <div>
              <div className="wrap flex">
                <figure>
                  <img
                    src="app/images/interestSliderImg.png"
                    alt="Genaiguru interestSliderImg"
                    title="Genaiguru interestSliderImg"
                  />
                </figure>
                <div className="content">
                  <div className="wrapper flex">
                    <figure>
                      <img
                        src="app/images/authorImg.png"
                        alt="Genaiguru authorImg"
                        title="Genaiguru authorImg"
                      />
                    </figure>
                    <div className="innerContent">
                      <h6>Alex Smih</h6>
                      <p>Sep 15, 2023. 11:05 pm</p>
                    </div>
                  </div>
                  <p>
                    Navigating the World of ChatGPT and Its Open-source
                    Adversaries
                  </p>
                  <ul className="flex">
                    <li>
                      <a href="#">
                        <img
                          src="app/images/bookmarkIcon.png"
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
            <div>
              <div className="wrap flex">
                <figure>
                  <img
                    src="app/images/interestSliderImg.png"
                    alt="Genaiguru interestSliderImg"
                    title="Genaiguru interestSliderImg"
                  />
                </figure>
                <div className="content">
                  <div className="wrapper flex">
                    <figure>
                      <img
                        src="app/images/authorImg.png"
                        alt="Genaiguru authorImg"
                        title="Genaiguru authorImg"
                      />
                    </figure>
                    <div className="innerContent">
                      <h6>Alex Smih</h6>
                      <p>Sep 15, 2023. 11:05 pm</p>
                    </div>
                  </div>
                  <p>
                    Navigating the World of ChatGPT and Its Open-source
                    Adversaries
                  </p>
                  <ul className="flex">
                    <li>
                      <a href="#">
                        <img
                          src="app/images/bookmarkIcon.png"
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
          </Slider>
        </div>
        <a href="#" className="viewAll">
          View all
        </a>
      </div>
    </>
  );
};

export default ArticleBasedInterest;
