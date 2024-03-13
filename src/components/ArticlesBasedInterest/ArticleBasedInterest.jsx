import React, { useEffect } from "react";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PATH_ARTICLE_DETAILS, PATH_FEATURED_ARTICLES } from "../../routes";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { getBaseURL } from "../../api/config";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import userimageIcon from "../../assets/images/person.png";

const ArticleBasedInterest = ({ reloadParent, articlesOnInterest }) => {
  const sliderRef = useRef();
  const navigate = useNavigate();
  const userId = JSON.parse(localStorage.getItem("UserId"));

  const onArticleSaveUnSave = (e, type, articleID) => {
    e.preventDefault();
    if (type == "unsave") {
      axios
        .post(`${getBaseURL()}/unsave-article`, {
          user_id: userId,
          article_id: articleID,
        })
        .then((res) => {
          reloadParent(true);
          toast.success("Article Unsaved", {
            position: toast.POSITION.TOP_CENTER,
          });
        })
        .catch((errors) => {
          console.log(errors);
        });
    } else if (type == "save") {
      axios
        .post(`${getBaseURL()}/save-article`, {
          user_id: userId,
          article_id: articleID,
        })
        .then((res) => {
          reloadParent(true);
          toast.success("Article Saved", {
            position: toast.POSITION.TOP_CENTER,
          });
        })
        .catch((errors) => {
          console.log(errors);
        });
    }
  };
  const onArticleClick = (AricleID, titles) => {
    const trimmedTitle = titles.trim();
    console.log("Trimmed title:", trimmedTitle);
    const replacedTitle = trimmedTitle.replace(/\s+/g, "-");
    console.log("Replaced title:", replacedTitle);
    navigate(`${PATH_ARTICLE_DETAILS}?id=${AricleID}?title=${replacedTitle}`);
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
      <div className="home-interest">
        <div className="heading-link flex">
          <h3>Articles based on your interest</h3>
          <Link to={PATH_FEATURED_ARTICLES}>View all</Link>
        </div>
        <div className="interest-slider">
          <Slider
            ref={sliderRef}
            {...settings2}
            id="Slider-4"
            className="slider_test"
          >
            {articlesOnInterest?.map((aricles, index) => {
              return (
                <div key={index}>
                  <div className="wrap flex">
                    <figure>
                      <img src={aricles.photo} alt="interestSliderImg" />
                    </figure>
                    <div className="content">
                      <div className="wrapper flex">
                        <figure>
                          <img
                            src={aricles.author_profile_image ||userimageIcon }
                            alt="author"
                          />
                        </figure>
                        <div className="innerContent">
                          <h6>{aricles.author}</h6>
                          <p> {aricles.creation_date}</p>
                        </div>
                      </div>
                      <p
                        onClick={() => {
                          onArticleClick(aricles.id, aricles.title);
                        }}
                        style={{ cursor: "  pointer" }}
                      >
                        {aricles.title}
                      </p>
                      <ul className="flex">
                        <li>
                          <a href="#">
                            {aricles.saved == "no" ? (
                              <img
                                onClick={(e) =>
                                  onArticleSaveUnSave(e, "save", aricles?.id)
                                }
                                src="app/images/bookmarkIcon.png"
                                alt="Genaiguru bookmarkIcon"
                              />
                            ) : (
                              <img
                                onClick={(e) =>
                                  onArticleSaveUnSave(e, "unsave", aricles?.id)
                                }
                                src="app/images/color-bookmarks.png"
                                alt=""
                              />
                            )}
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
                </div>
              );
            })}
          </Slider>
          <div id="artilceBasesOnInterest"></div>
        </div>
        <a href={PATH_FEATURED_ARTICLES} className="viewAll">
          View all
        </a>
      </div>
    </>
  );
};

export default ArticleBasedInterest;
