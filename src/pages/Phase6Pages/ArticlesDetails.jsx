import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getBaseURL } from "../../api/config";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import { BASE_PATH, PATH_FEATURED_ARTICLES } from "../../routes";
import WithAuth from "../Authentication/WithAuth";
import Sharebtn from "./sharebtn";

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
  const [displayCommentModel, setDisplayCommentModel] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [getarticleComments, setGetarticleComments] = useState([]);
  const [getReplyArticleComments, setGetReplyArticleComments] = useState([]);
  const [profileImage, setProfileImage] = useState({
    profile_image: "",
    name: "",
  });
  const [comment, setComment] = useState("");
  const [replyCommentModels, setReplyCommentModels] = useState([]);
  const [displayRepliesCommentModel, setDisplayRepliesCommentModel] =
    useState(false);
  const [replyComment, setReplyComment] = useState("");

  const token = JSON.parse(localStorage.getItem("token"));
  const userId = JSON.parse(localStorage.getItem("UserId"));

  // useLocation to get id from url
  let location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const articleId = queryParam.get("id");

  const toggleReplyCommentModel = (commentId) => {
    const updatedModels = [...replyCommentModels];
    const index = updatedModels.indexOf(commentId);

    if (index === -1) {
      updatedModels.push(commentId);
    } else {
      updatedModels.splice(index, 1);
    }

    setReplyCommentModels(updatedModels);
  };

  useEffect(() => {
    // window.scrollTo(0, 0);
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
    getComments();
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
  const getComments = () => {
    axios
      .get(`${getBaseURL()}/article-comment?article_id=${articleId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        //  console.log(res?.data);
        setGetarticleComments(res?.data?.comments);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const getReplyComments = (id) => {
    axios
      .get(`${getBaseURL()}/article-comment-reply?comment_id=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res?.data?.replies);
        setGetReplyArticleComments(res?.data?.replies);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  // get user details api..........
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`${getBaseURL()}/auth/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setProfileImage({
          profile_image: response.data.profile_image,
          name: response.data.name,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const postArticleComment = () => {
    axios
      .post(`${getBaseURL()}/article-comment`, {
        user_id: userId,
        article_id: articleDetail.article_id,
        content: comment,
      })
      .then((res) => {
        console.log(res.data);
        setComment("");
        setButtonClicked(!buttonClicked);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const postArticleReplyComment = (commentId, replyCommentt) => {
    axios
      .post(`${getBaseURL()}/article-comment-reply`, {
        user_id: userId,
        comment_id: commentId,
        content: replyCommentt,
      })
      .then((res) => {
        console.log(res.data);
        setReplyComment("");
        setButtonClicked(!buttonClicked);
      })
      .catch((err) => {
        console.log(err.message);
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
                          <Sharebtn
                            title={articleDetail.title}
                            id={articleDetail.article_id}
                            url={
                              window.location.origin +
                              "/articledetails?id=" +
                              articleDetail.article_id
                            }
                          />
                          {/* <a>
                            <figure>
                              <img src="./app/images/share-icon.png" alt="" />
                            </figure>
                          </a> */}
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
                          <a
                            onClick={() =>
                              setDisplayCommentModel(!displayCommentModel)
                            }
                            style={{ cursor: "pointer" }}
                          >
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
                            <Link to="/contact">
                              <span>Ask question</span>
                            </Link>
                          </a>
                        </li>
                      </ul>
                      {displayCommentModel && (
                        <>
                          <div className="review">
                            <ul>
                              <li>
                                <a>
                                  <figure>
                                    <img
                                      src={profileImage.profile_image}
                                      alt="Genaiguru review"
                                      title="Genaiguru review"
                                    />
                                  </figure>
                                  <span>
                                    <span>{profileImage.name} </span>
                                    <br />
                                    <small>
                                      <input
                                        type="text"
                                        placeholder="Comment Here......"
                                        value={comment}
                                        onChange={(e) =>
                                          setComment(e.target.value)
                                        }
                                      />
                                      <button onClick={postArticleComment}>
                                        Post
                                      </button>
                                    </small>
                                    <br />
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* Get Comments */}
                          {getarticleComments.map((comment, index) => {
                            const isReplyBoxOpen = replyCommentModels.includes(
                              comment.id
                            );

                            return (
                              <div className="review" key={index}>
                                <ul>
                                  <li>
                                    <a>
                                      <figure>
                                        <img
                                          src={
                                            comment?.user_details?.profile_image
                                          }
                                          alt="Genaiguru review"
                                          title="Genaiguru review"
                                        />
                                      </figure>
                                      <span>
                                        <span>
                                          {comment?.user_details?.name}{" "}
                                        </span>
                                        <br />
                                        <small>
                                          {comment.content}
                                        </small>
                                        <br />
                                        <img
                                          src="/app/images/thumbs-up.png"
                                          alt=""
                                        />
                                        <img
                                          src="/app/images/thumbs-down.png"
                                          alt=""
                                        />
                                        <span
                                          style={{ cursor: "pointer" }}
                                          onClick={() =>
                                            toggleReplyCommentModel(comment.id)
                                          }
                                        >
                                          Reply
                                        </span>
                                        <span
                                          style={{ cursor: "pointer" }}
                                          onClick={() => {
                                            getReplyComments(comment.id);
                                            setDisplayRepliesCommentModel(
                                              !displayRepliesCommentModel
                                            );
                                          }}
                                        >
                                          Replies
                                        </span>
                                      </span>
                                    </a>
                                  </li>
                                  {displayRepliesCommentModel && (
                                    <li>
                                      {getReplyArticleComments?.map(
                                        (reply, index) => {
                                          return (
                                            <div key={index}>
                                              {reply.comment_id ===
                                                comment.id && (
                                                <>
                                                  <figure>
                                                    <img
                                                      src={
                                                        reply?.user_details
                                                          ?.profile_image
                                                      }
                                                      alt="repliedUserIcon"
                                                      title="repliedUserIcon"
                                                    />
                                                  </figure>
                                                  <span>
                                                    {reply?.user_details?.name}
                                                  </span>
                                                  <br/>
                                                  <span>{reply.content}</span>
                                                </>
                                              )}
                                            </div>
                                          );
                                        }
                                      )}
                                    </li>
                                  )}
                                </ul>
                                {isReplyBoxOpen && (
                                  <div className="review">
                                    <ul>
                                      <li>
                                        <a>
                                          <figure>
                                            <img
                                              src={profileImage.profile_image}
                                              alt="Genaiguru review"
                                              title="Genaiguru review"
                                            />
                                          </figure>
                                          <span>
                                            <span>{profileImage.name}</span>
                                            <br />
                                            <small>
                                              <input
                                                type="text"
                                                placeholder="Reply Here......"
                                                value={replyComment}
                                                onChange={(e) =>
                                                  setReplyComment(
                                                    e.target.value
                                                  )
                                                }
                                              />
                                              <button
                                                onClick={() =>
                                                  postArticleReplyComment(
                                                    comment.id,
                                                    replyComment
                                                  )
                                                }
                                              >
                                                Post
                                              </button>
                                            </small>
                                            <br />
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </>
                      )}
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
