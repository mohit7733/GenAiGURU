import React, { useEffect, useState } from "react";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import { getBaseURL } from "../../api/config";
import axios from "axios";
import {
  PATH_ARTICLE_DETAILS,
  PATH_FEATURED_ARTICLES,
  PATH_FEATURED_CONTENT,
} from "../../routes";

const Populararticles = () => {
  const [articles, setArticles] = useState([]);
  const sliderRef = useRef();

  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("token"));

  // Get API for Popular Articles

  useEffect(() => {
    axios
      .get(`${getBaseURL()}/articles`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log(response?.data?.articles);
        setArticles(response?.data?.articles);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const onArticleClick = (AricleID) => {
    navigate(`${PATH_ARTICLE_DETAILS}?id=${AricleID}`);
  };

  // Slide code
  var settings2 = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
      <div className="video-section second">
        <div className="heading-link flex">
          <h3>Popular articles</h3>
          <Link to={PATH_FEATURED_ARTICLES}>View all</Link>
        </div>
        <div className="article-slider">
          <Slider
            ref={sliderRef}
            {...settings2}
            id="Slider-4"
            className="slider_test"
          >
            {articles?.map(
              (article, index) =>
                article.featured == "yes" && (
                  <div
                    className="wrap"
                    key={index}
                    onClick={() => {
                      onArticleClick(article.id);
                    }}
                  >
                    <figure>
                      <img
                        src={article.photo}
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
                      <h5>{article.title}</h5>
                      <div className="author-tag flex">
                        <div className="col_left">
                          <div className="wrapper flex">
                            <figure>
                              <img
                                src={article.author_profile_image}
                                alt="authorImg"
                                title="authorImg"
                              />
                            </figure>
                            <div className="content">
                              <h6>{article.author}</h6>
                              {/* <p>24 M view . 3 month ago</p> */}
                            </div>
                          </div>
                          {/* <ul className="flex">
                            <li>#finance</li>
                            <li>#crypto</li>
                            <li>#economy</li>
                          </ul> */}
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Populararticles;
