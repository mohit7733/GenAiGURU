import React, { useEffect, useState } from "react";
import { Link, NavLink, useActionData } from "react-router-dom";
import userimageIcon from "../../../src/assets/images/person.png";
import { RouterElement } from "../../routes";
import FixedAIButtonLogo from "../../components/FixedAIButton/FixedAIButtonLogo";
import Latestblog from "../../components/LatestBlog/Latestblog";
import Popularvideos from "../../components/PopularVideos/Popularvideos";
import Populararticles from "../../components/PopularArticles/Populararticles";
import ArticleBasedInterest from "../../components/ArticlesBasedInterest/ArticleBasedInterest";
import Categories from "../../components/Categories/Categories";
import Header from "../../components/Layout/Header";
import Sidebar from "../../components/Layout/Sidebar";
import Footer from "../../components/Layout/Footer";
import { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Index = () => {
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
      <Header />
      <section className="mainWrapper flex">
        <Sidebar />
        <div className="rightSection">
          <div className="">
            <Latestblog />
            <Popularvideos />
            <Populararticles />
            <div className="featuredArticle">
              <div className="heading-link flex">
                <h3>
                  <span className="destop-view">Featured articles</span>{" "}
                  <span className="mobile-view">Popular article</span>
                </h3>
              </div>
              <div className="featuredSlider">
                <Slider ref={sliderRef} {...settings2} id="Slider-4" className='slider_test'>
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
                                  />
                                </figure>
                                <div className="content">
                                  <h6>Alex Smih</h6>
                                  <p>24 M view . 3 month ago</p>
                                </div>
                              </div>
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
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="boxWrap flex">
                <div className="box">
                  <figure>
                    <img
                      src="app/images/featuredArticleImgMobile.jpg"
                      alt="Genaiguru featured article image"
                      title="Genaiguru featured article image"
                    />
                  </figure>
                  <h5>It’s a catch-22 for young s: how do you ... </h5>
                  <ul>
                    <li>Alex Smith</li>
                    <li>24 M Views</li>
                    <li>3 months</li>
                  </ul>
                  <p className="tags">#finance #crypto #economy</p>
                </div>
                <div className="box">
                  <figure>
                    <img
                      src="app/images/featuredArticleImgMobile.jpg"
                      alt="Genaiguru featured article image"
                      title="Genaiguru featured article image"
                    />
                  </figure>
                  <h5>It’s a catch-22 for young s: how do you ... </h5>
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
            <Categories />
            <ArticleBasedInterest />
          </div>
          <FixedAIButtonLogo />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Index;
