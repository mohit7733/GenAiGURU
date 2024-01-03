import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getBaseURL } from "../../api/config";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import { BASE_PATH, PATH_FEATURED_ARTICLES } from "../../routes";
import WithAuth from "../Authentication/WithAuth";

const ArticlesDetails = () => {
  const [articleDetail, setArticleDetail] = useState({
    author: "",
    author_profile_image: "",
    content: "",
    title: "",
    banner_image: "",
    creation_date: "",
    article_id: "",
    articleSaved: "",
  });
  const [relatedArticle, setRelatedArticle] = useState([]);
  const [relatedArticlesId, setRelatedArticlesId] = useState();

  const [buttonClicked, setButtonClicked] = useState(false);

  const token = JSON.parse(localStorage.getItem("token"));
  const userId = JSON.parse(localStorage.getItem("UserId"));

  // useLocation to get id from url
  let location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const articleId = queryParam.get("id");

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(
        `${getBaseURL()}/articles?user_id=${userId}&id=${
          articleId ? articleId : relatedArticlesId
        }`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setArticleDetail({
          author: response?.data?.article_details?.author,
          author_profile_image:
            response?.data?.article_details?.author_profile_image,
          content: response?.data?.article_details?.content,
          title: response?.data?.article_details?.title,
          banner_image: response?.data?.article_details?.banner_image,
          creation_date: response?.data?.article_details?.creation_date,
          article_id: response?.data?.article_details?.id,
          articleSaved: response?.data?.article_details?.saved,
        });
        // console.log(response?.data?.article_details);
        setRelatedArticle(response?.data?.related_articles);
        console.log(relatedArticle);
      })
      .catch((err) => {
        console.log(err.message);
      });
    setButtonClicked(false);
  }, [relatedArticlesId, buttonClicked]);

  const onArticleClick = (articleId) => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);
    setRelatedArticlesId(articleId);
  };

  const onArticleSave = (articleID) => {
    axios
      .post(`${getBaseURL()}/save-article`, {
        user_id: userId,
        article_id: articleID,
      })
      .then((res) => {
        console.log(res?.data);
        setArticleDetail({ ...articleDetail, articleSaved: res?.data?.Saved });
        toast.success("Article Saved", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  const onArticleUnSave = (articleID) => {
    axios
      .post(`${getBaseURL()}/unsave-article`, {
        user_id: userId,
        article_id: articleID,
      })
      .then((res) => {
        console.log(res?.data);
        setArticleDetail({ ...articleDetail, articleSaved: res?.data?.Saved });
        toast.success("Article Unsaved", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  return (
    <div>
      <ToastContainer autoClose={1000} pauseOnHover={false} />

      <MobileHeader />
      {/* <!-- main section start here --> */}
      <section className="mainWrapper flex hideMob">
        <Sidebar />
        <div className="rightSection">
          <div className="full-width">
            <div className="keeps-container blogDetails">
              <div className="gurukeeps-wrapper">
                <div className="row flex space-between">
                  <div className="blog-box">
                    <div className="innerBreadcrumb">
                      <p>
                        <Link to={BASE_PATH}>Home</Link>{" "}
                        <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                        Article details
                      </p>
                    </div>
                    {/* <h1>Blog details</h1> */}
                  </div>
                  <div className="connect-box">
                    <WithAuth
                      callBack={(e) => {
                        console.log("dd");
                      }}
                    >
                      <ul className="flex">
                        {articleDetail.articleSaved == "yes" ? (
                          <li
                            onClick={() =>
                              onArticleUnSave(articleDetail.article_id)
                            }
                          >
                            <a>
                              <figure>
                                <img
                                  src="app/images/color-bookmarks.png"
                                  alt=""
                                />
                              </figure>
                            </a>
                          </li>
                        ) : (
                          <li
                            onClick={() =>
                              onArticleSave(articleDetail.article_id)
                            }
                          >
                            <a>
                              <figure>
                                <img
                                  src="./app/images/bookmarkIcon.png"
                                  alt=""
                                />
                              </figure>
                            </a>
                          </li>
                        )}
                        <li>
                          <a>
                            <figure>
                              <img src="./app/images/share-icon.png" alt="" />
                            </figure>
                          </a>
                        </li>
                      </ul>
                    </WithAuth>
                  </div>
                </div>
              </div>
              <div className="blog-details">
                <h2>{articleDetail.title}</h2>
                <div className="blogger flex">
                  <div className="blogger-profile">
                    <figure>
                      <img
                        src={articleDetail.author_profile_image}
                        alt="Genaiguru blog-img"
                        title="Genaiguru blog-img"
                      />
                    </figure>
                  </div>
                  <div className="content-box">
                    <p>
                      By <a>{articleDetail.author}</a>
                    </p>
                    <p>{articleDetail.creation_date}</p>
                  </div>
                  <div className="blog-img">
                    <figure>
                      <img
                        src={articleDetail.banner_image}
                        alt="Genaiguru web-deigner-learn-book"
                        title="Genaiguru web-deigner-learn-book"
                      />
                    </figure>
                    {/* <span>Photo by jan maelstrom on Unsplash</span> */}
                  </div>
                  <div className="blog-txt">
                    <div
                      className="blog-txt"
                      dangerouslySetInnerHTML={{
                        __html: articleDetail.content,
                      }}
                    />
                    <div className="comment-box">
                      <ul className="flex">
                        <li>
                          <a href="#">
                            <figure>
                              <img
                                src="./app/images/comment-01.png"
                                alt="Genaiguru comment-01"
                                title="Genaiguru comment-01"
                              />
                            </figure>
                            <span>Comment</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <figure>
                              <img
                                src="./app/images/help-circle.png"
                                alt="Genaiguru help-circle"
                                title="Genaiguru help-circle"
                              />
                            </figure>{" "}
                            <Link to="/contact"><span>Ask question</span></Link>
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* <!-- home interest section start here --> */}
                    <div className="home-interest">
                      <div className="heading-link flex">
                        <h3>Related posts</h3>
                      </div>
                      {relatedArticle.map((article, Index) => {
                        return (
                          <div className="interest-sliders" key={Index}>
                            <div className="wrap flex">
                              <figure>
                                <img
                                  src={article.banner_image}
                                  alt="Genaiguru interestSliderImg"
                                  title="Genaiguru interestSliderImg"
                                />
                              </figure>
                              <div className="content">
                                <div className="wrapper flex">
                                  <figure>
                                    <img
                                      src={article.author_profile_image}
                                      alt="Genaiguru authorImg"
                                      title="Genaiguru authorImg"
                                    />
                                  </figure>
                                  <div className="innerContent">
                                    <h6>{article.author}</h6>
                                    <p> {article.creation_date}</p>
                                  </div>
                                </div>
                                <p>
                                  <Link
                                    onClick={() => onArticleClick(article.id)}
                                  >
                                    {article.title}
                                  </Link>
                                </p>
                                <WithAuth
                                  callBack={(e) => {
                                    console.log("dd");
                                  }}
                                >
                                  <ul className="flex">
                                    <li
                                      onClick={() => {
                                        article.saved === "yes"
                                          ? onArticleUnSave(article.id)
                                          : onArticleSave(article.id);
                                        setButtonClicked(!buttonClicked);
                                      }}
                                    >
                                      <a>
                                        <img
                                          src={
                                            article.saved === "yes"
                                              ? "app/images/color-bookmarks.png"
                                              : "./app/images/bookmarkIcon.png"
                                          }
                                          alt={
                                            article.saved === "yes"
                                              ? "coloredbookmarkIcon"
                                              : "bookmarkIcon"
                                          }
                                          title={
                                            article.saved === "yes"
                                              ? "coloredbookmarkIcon"
                                              : "bookmarkIcon"
                                          }
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
                                </WithAuth>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      <a href="#" className="viewAll">
                        View all
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- mobile section start here --> */}
      <div className="mob_profile commanMobHead hideDes">
        <div className="mobileHead flex">
          <Link to={PATH_FEATURED_ARTICLES} className="hamburger">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </Link>
          <h2>Blog Details</h2>
          <div className="connect-box">
            <ul className="flex">
              <li>
                <a href="#">
                  <figure>
                    <img src="./app/images/sorting-icon.png" alt="" />
                  </figure>
                </a>
              </li>
              <li>
                <a href="#">
                  <figure>
                    <img src="./app/images/filter-icon.png" alt="" />
                  </figure>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="innerCommanContent">
          <div className="rightSection">
            <div className="keeps-container blogDetails">
              {/* <!-- blog-start --> */}
              <div className="blog-details">
                <h2>{articleDetail.title}</h2>
                <div className="blogger flex">
                  <div className="blogger-profile">
                    <figure>
                      <img
                        src="./app/images/blog-img.png"
                        alt="Genaiguru blog-img"
                        title="Genaiguru blog-img"
                      />
                    </figure>
                  </div>
                  <div className="content-box">
                    <p>
                      By <a href="#">{articleDetail.author}</a>
                    </p>
                    <p>{articleDetail.creation_date}</p>
                  </div>
                  <div className="blog-img">
                    <figure>
                      <img
                        src={articleDetail.banner_image}
                        alt="Genaiguru web-deigner-learn-book"
                        title="Genaiguru web-deigner-learn-book"
                      />
                    </figure>
                    {/* <span>Photo by jan maelstrom on Unsplash</span> */}
                  </div>
                  <div className="blog-txt">
                    <div
                      className="blog-txt"
                      dangerouslySetInnerHTML={{
                        __html: articleDetail.content,
                      }}
                    />

                    <div className="comment-box">
                      <ul className="flex">
                        <li>
                          <a href="#">
                            <figure>
                              <img
                                src="./app/images/comment-01.png"
                                alt="Genaiguru comment-01"
                                title="Genaiguru comment-01"
                              />
                            </figure>
                            <span>Comment</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <figure>
                              <img
                                src="./app/images/help-circle.png"
                                alt="Genaiguru help-circle"
                                title="Genaiguru help-circle"
                              />
                            </figure>{" "}
                            <span>Ask question</span>
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* <!-- home interest section start here --> */}
                    <div className="home-interest">
                      <div className="heading-link flex">
                        <h3>Related posts</h3>
                      </div>
                      {relatedArticle.map((article, Index) => {
                        return (
                          <div className="interest-sliders">
                            <div className="wrap flex">
                              <figure>
                                <img
                                  src={article.banner_image}
                                  alt="Genaiguru interestSliderImg"
                                  title="Genaiguru interestSliderImg"
                                />
                              </figure>
                              <div className="content">
                                <div className="wrapper flex">
                                  <figure>
                                    <img
                                      src={article.photo}
                                      alt="Genaiguru authorImg"
                                      title="Genaiguru authorImg"
                                    />
                                  </figure>
                                  <div className="innerContent">
                                    <h6>{article.author}</h6>
                                    <p> {article.creation_date}</p>
                                  </div>
                                </div>
                                <p>{article.title}</p>
                                <ul className="flex">
                                  <li>
                                    <a href="#">
                                      <img
                                        src="app/images/color-bookmarks.png"
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
                        );
                      })}
                      <a href="#" className="viewAll">
                        View all
                      </a>
                    </div>
                    {/* <!-- home interest section end here --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- mobile section end here --> */}
        </div>
      </div>
    </div>
  );
};

export default ArticlesDetails;
