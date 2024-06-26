import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { getBaseURL } from "../../api/config";
import Categories from "../../components/Categories/Categories";
import Latestblog from "../../components/LatestBlog/Latestblog";
import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import Sidebar from "../../components/Layout/Sidebar";
import Populararticles from "../../components/PopularArticles/Populararticles";
import Popularvideos from "../../components/PopularVideos/Popularvideos";
import { PATH_ARTICLE_DETAILS, PATH_FEATURED_ARTICLES } from "../../routes";
import SilverPopup from "../Phase5Pages/SilverPopup";

const Index = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [claimedBadges, setClaimedBadges] = useState([]);

  const [articles, setArticles] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  const [articlePoints, setArticlePoints] = useState("");

  const sliderRef = useRef();

  const navigate = useNavigate();
  const [userId, setuserId] = useState(
    localStorage.getItem("UserId") ? localStorage.getItem("UserId") : ""
  );
  const [token, settoken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  const MAX_DISPLAY_ARTICLES = 2;
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
  // Get API for Popular Articles View ALL

  useEffect(() => {
    if (token != "") {
      axios
        .get(`${getBaseURL()}/articles`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // console.log(response?.data?.articles);
          setAllArticles(response?.data?.articles);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, []);

  // Get API for Popular articles
  useEffect(() => {
    axios
      .get(`${getBaseURL()}/featured-post?type=article&user_id=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setArticles(response?.data?.data);
        setArticlePoints(response?.data?.article_points);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userId]);

  // const onArticleClick = (AricleID,titles) => {
  //   console.log(AricleID,titles,"sertyjkjhgfdsa")
  //   navigate(`${PATH_ARTICLE_DETAILS}?id=${AricleID}`);

  // };
  const onArticleClick = (AricleID, titles) => {
    const trimmedTitle = titles.trim();
    console.log("Trimmed title:", trimmedTitle);
    const replacedTitle = trimmedTitle.replace(/\s+/g, "-");
    console.log("Replaced title:", replacedTitle);
    navigate(`${PATH_ARTICLE_DETAILS}?id=${AricleID}?title=${replacedTitle}`);
  };

  // fetchBadges API
  useEffect(() => {
    if (token != "" && userId != "") {
      const fetchBadges = async () => {
        try {
          const response = await axios.get(`${getBaseURL()}/game-badges`, {
            params: {
              user_id: userId,
              claimed: "no",
            },
          });
          setClaimedBadges(response?.data?.data);
          if (response?.data?.data.length > 0) {
            setShowPopUp(true);
          }
        } catch (error) {
          console.error("Error fetching user points:", error.message);
        }
      };
      fetchBadges();
    }
  }, [userId]);

  return (
    <>
      {showPopUp && (
        <SilverPopup
          claimedBadges={claimedBadges}
          onClose={() => setShowPopUp(false)}
        />
      )}
      <Header />
      <section className="mainWrapper flex">
        <Sidebar />
        <div className="rightSection">
          <Latestblog />
          <Popularvideos />
          <Populararticles />
          {/* Slider Code Inside this div */}
          <div className="featuredArticle">
            <div className="heading-link flex">
              <h3>
                <span className="destop-view">Featured articles</span>{" "}
                <span className="mobile-view">Popular article</span>
              </h3>
            </div>
            <div className="featuredSlider">
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
                          onArticleClick(article.id, article.title);
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
                          {token && (
                            <span>
                              {article.read == "no" && (
                                <div className="price flex">
                                  <img
                                    src="app/images/orangeStrike.png"
                                    alt="Genaiguru orangeStrike"
                                  />
                                  {articlePoints}
                                </div>
                              )}
                            </span>
                          )}
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
            {allArticles?.map((Article, index) => {
              if (index < MAX_DISPLAY_ARTICLES) {
                return (
                  <div key={index} className="boxWrap flex">
                    <div className="box">
                      <figure>
                        <img
                          src={Article.photo}
                          alt="Genaiguru featured article image"
                          title="Genaiguru featured article image"
                        />
                      </figure>
                      <h5
                        onClick={() =>
                          onArticleClick(Article.id, Article.title)
                        }
                      >
                        {Article.title}
                      </h5>
                      <ul>
                        <li>{Article.author}</li>
                        <li>{Article.creation_date}</li>
                        {/* <li>3 months</li> */}
                      </ul>
                      {/* <p className="tags">#finance #crypto #economy</p> */}
                    </div>
                  </div>
                );
              }
            })}
            <Link to={PATH_FEATURED_ARTICLES} className="viewAll">
              View all
            </Link>
          </div>
          {token != "" && <Categories />}
          {/* {token && <ArticleBasedInterest />} */}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Index;
