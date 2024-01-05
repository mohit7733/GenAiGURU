import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getBaseURL } from "../../api/config";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import { BASE_PATH, PATH_FEATURED_CONTENT } from "../../routes";
import WithAuth from "../Authentication/WithAuth";
import Sharebtn from "./sharebtn";

const BlogDetails = ({ likes, dislikes }) => {
  const [blogDetail, setBlogDetail] = useState({
    author: "",
    profilePhoto: "",
    content: "",
    title: "",
    banner_image: "",
    creation_date: "",
    blog_id: "",
    blogSaved: "",
  });
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [getBlogComments, setGetBlogComments] = useState([]);
  const [getReplyBlogComments, setGetReplyBlogComments] = useState([]);
  const [profileImage, setProfileImage] = useState({
    profile_image: "",
    name: "",
  });
  const [blogCommentLike, setBlogCommentLike] = useState({ likes, dislikes });
  const [blogCommentLikeReply, setBlogCommentLikeReply] = useState({
    likes,
    dislikes,
  });

  const [replyCommentModels, setReplyCommentModels] = useState([]);

  const [relatedBlogId, setRelatedBlogId] = useState();
  const [buttonClicked, setButtonClicked] = useState(false);

  const [comment, setComment] = useState("");
  const [replyComment, setReplyComment] = useState("");
  const [displayCommentModel, setDisplayCommentModel] = useState(false);
  const [displayRepliesCommentModel, setDisplayRepliesCommentModel] =
    useState(false);

  const token = JSON.parse(localStorage.getItem("token"));
  const userId = JSON.parse(localStorage.getItem("UserId"));

  // useLocation to get id from url
  let location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const blogId = queryParam.get("id");

  // Useeffect for API of blogOpened Points

  useEffect(() => {
    axios
      .post(`${getBaseURL()}/read-article`, {
        user_id: userId,
        post_id: blogId,
        post_type: "blog",
      })
      .then((res) => {
        console.log(res?.data);
      })
      .catch((errors) => {
        console.log(errors);
      });
  }, []);

  useEffect(() => {
    // window.scrollTo(0, 0);
    axios
      .get(
        `${getBaseURL()}/latest-blogs?user_id=${userId}&id=${
          blogId ? blogId : relatedBlogId
        }`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setBlogDetail({
          author: response?.data?.blog_details?.author,
          profilePhoto: response?.data?.blog_details?.author_profile_image,
          content: response?.data?.blog_details?.content,
          title: response?.data?.blog_details?.title,
          banner_image: response?.data?.blog_details?.banner_image,
          creation_date: response?.data?.blog_details?.creation_date,
          blog_id: response?.data?.blog_details?.id,
          blogSaved: response?.data?.blog_details?.saved,
        });
        setRelatedBlogs(response?.data?.related_blogs);
      })
      .catch((err) => {
        console.log(err.message);
      });
    setButtonClicked(false);
    getComments();
  }, [relatedBlogId, buttonClicked]);

  const onBlogClick = (blogId) => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);
    setRelatedBlogId(blogId);
  };

  // Save And Unsave API's
  const onBlogSave = (blogID) => {
    axios
      .post(`${getBaseURL()}/save-blog`, {
        user_id: userId,
        blog_id: blogID,
      })
      .then((res) => {
        console.log(res?.data);

        setBlogDetail({ ...blogDetail, blogSaved: res?.data?.Saved });
        toast.success("Blog Saved", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
  const onBlogUnSave = (blogID) => {
    axios
      .post(`${getBaseURL()}/unsave-blog`, {
        user_id: userId,
        blog_id: blogID,
      })
      .then((res) => {
        setBlogDetail({ ...blogDetail, blogSaved: res?.data?.Saved });
        toast.success("Blog Unsaved", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  const getComments = () => {
    axios
      .get(`${getBaseURL()}/blog-comment?blog_id=${blogId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setGetBlogComments(res?.data?.comments);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const getReplyComments = (id) => {
    axios
      .get(`${getBaseURL()}/blog-comment-reply?comment_id=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log(res?.data?.replies);
        setGetReplyBlogComments(res?.data?.replies);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const postBlogComment = () => {
    axios
      .post(`${getBaseURL()}/blog-comment`, {
        user_id: userId,
        blog_id: blogDetail.blog_id,
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
  const postBlogReplyComment = (commentId, replyCommentt) => {
    axios
      .post(`${getBaseURL()}/blog-comment-reply`, {
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


  // Post BlogComment Like/dislike api .............

  const postBlogLike = (type, commentId) => {
    axios
      .post(`${getBaseURL()}/blog-like-comment`, {
        user_id: userId,
        type: type,
        comment_id: commentId,
      })
      .then((res) => {
        console.log(res.data, "fdggh");
        setBlogCommentLike(res.data);
        // alert("like/dislike")
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //  Post BlogComment Like reply api ......

  const postBlogReplyLike = (type, commentId) => {
    axios
      .post(`${getBaseURL()}/blog-like-reply`, {
        user_id: userId,
        type: type,
        reply_id: commentId,
      })
      .then((res) => {
        console.log(res.data, "fdggh");
        setBlogCommentLikeReply(res.data);
        alert("like/dislike");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const shareUrl = "https://example.com"; // Replace with your actual URL


  // Function to toggle the reply input box for a specific comment
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
                        Blog details
                      </p>
                    </div>
                  </div>
                  <div className="connect-box">
                    <WithAuth
                      callBack={(e) => {
                        console.log("dd");
                      }}
                    >
                      <ul className="flex">
                        {blogDetail.blogSaved == "yes" ? (
                          <li onClick={() => onBlogUnSave(blogDetail.blog_id)}>
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
                          <li onClick={() => onBlogSave(blogDetail.blog_id)}>
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
                            title={blogDetail.title}
                            id={blogDetail.blog_id}
                            url={
                              window.location.origin +
                              "/blogdetails?id=" +
                              blogDetail.blog_id
                            }
                          />
                        </li>
                      </ul>
                    </WithAuth>
                  </div>
                </div>
              </div>
              <div className="blog-details">
                <h2>{blogDetail.title}</h2>
                <div className="blogger flex">
                  <div className="blogger-profile">
                    <figure>
                      <img
                        src={blogDetail.profilePhoto}
                        alt="Genaiguru blog-img"
                        title="Genaiguru blog-img"
                      />
                    </figure>
                  </div>
                  <div className="content-box">
                    <p>
                      By <a>{blogDetail.author}</a>
                    </p>
                    <p>{blogDetail.creation_date}</p>
                  </div>
                  <div className="blog-img">
                    <figure>
                      <img
                        src={blogDetail.banner_image}
                        alt="Genaiguru web-deigner-learn-book"
                        title="Genaiguru web-deigner-learn-book"
                      />
                    </figure>
                  </div>
                  <div className="blog-txt">
                    <div
                      className="blog-txt"
                      dangerouslySetInnerHTML={{ __html: blogDetail.content }}
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
                          <a>
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
                                      <button onClick={postBlogComment}>
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
                          {getBlogComments.map((comment, index) => {
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
                                        <small>{comment?.content}</small>
                                        <br />
                                        <button
                                          className="btnlike"
                                          onClick={() =>
                                            postBlogLike("like", comment.id)
                                          }
                                        >
                                          <img
                                            src="/app/images/thumbs-up.png"
                                            alt=""
                                          />
                                        </button>
                                        <button
                                          onClick={() =>
                                            postBlogLike("dislike", comment.id)
                                          }
                                        >
                                          <img
                                            src="/app/images/thumbs-down.png"
                                            alt=""
                                          />
                                        </button>
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
                                      {getReplyBlogComments?.map(
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
                                                  <br />
                                                  <span>{reply.content}</span>
                                                  <button className="innerbtn"
                                                    onClick={() =>
                                                      postBlogReplyLike(
                                                        "like",
                                                        comment.id
                                                      )
                                                    }
                                                  >
                                                    <img
                                                      src="/app/images/thumbs-up.png"
                                                      alt=""
                                                    />
                                                  </button>
                                                  <button className="innerbtn"
                                                    onClick={() =>
                                                      postBlogReplyLike(
                                                        "dislike",
                                                        comment.id
                                                      )
                                                    }
                                                  >
                                                    <img
                                                      src="/app/images/thumbs-down.png"
                                                      alt=""
                                                    />
                                                  </button>
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
                                                  postBlogReplyComment(
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
                      {relatedBlogs.map((blogdata, Index) => {
                        return (
                          <div className="interest-sliders" key={Index}>
                            <div className="wrap flex">
                              <figure>
                                <img
                                  src={blogdata.banner_image}
                                  alt="Genaiguru interestSliderImg"
                                  title="Genaiguru interestSliderImg"
                                />
                              </figure>
                              <div className="content">
                                <div className="wrapper flex">
                                  <figure>
                                    <img
                                      src={blogdata.author_profile_image}
                                      alt="Genaiguru authorImg"
                                      title="Genaiguru authorImg"
                                    />
                                  </figure>
                                  <div className="innerContent">
                                    <h6>{blogdata.author}</h6>
                                    <p>{blogdata.creation_date}</p>
                                  </div>
                                </div>
                                <p>
                                  <Link
                                    onClick={() => onBlogClick(blogdata.id)}
                                  >
                                    {blogdata.title}
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
                                        blogdata.saved === "yes"
                                          ? onBlogUnSave(blogdata.id)
                                          : onBlogSave(blogdata.id);
                                        setButtonClicked(!buttonClicked);
                                      }}
                                    >
                                      <a>
                                        <img
                                          src={
                                            blogdata.saved === "yes"
                                              ? "app/images/color-bookmarks.png"
                                              : "./app/images/bookmarkIcon.png"
                                          }
                                          alt={
                                            blogdata.saved === "yes"
                                              ? "coloredbookmarkIcon"
                                              : "bookmarkIcon"
                                          }
                                          title={
                                            blogdata.saved === "yes"
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
          <Link to={PATH_FEATURED_CONTENT} className="hamburger">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </Link>
          <h2>Blog Details</h2>
          <div className="connect-box">
            <ul className="flex">
              <li>
                <a>
                  <figure>
                    <img src="./app/images/sorting-icon.png" alt="" />
                  </figure>
                </a>
              </li>
              <li>
                <a>
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
                <h2>{blogDetail.title}</h2>
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
                      By <a href="#">{blogDetail.author}</a>
                    </p>
                    <p>{blogDetail.creation_date}</p>
                  </div>
                  <div className="blog-img">
                    <figure>
                      <img
                        src={blogDetail.banner_image}
                        alt="Genaiguru web-deigner-learn-book"
                        title="Genaiguru web-deigner-learn-book"
                      />
                    </figure>
                  </div>
                  <div className="blog-txt">
                    <div
                      className="blog-txt"
                      dangerouslySetInnerHTML={{ __html: blogDetail.content }}
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
                      {relatedBlogs.map((blogdata, Index) => {
                        return (
                          <div className="interest-sliders" key={Index}>
                            <div className="wrap flex">
                              <figure>
                                <img
                                  src={blogdata.banner_image}
                                  alt="Genaiguru interestSliderImg"
                                  title="Genaiguru interestSliderImg"
                                />
                              </figure>
                              <div className="content">
                                <div className="wrapper flex">
                                  <figure>
                                    <img
                                      src={blogdata.photo}
                                      alt="Genaiguru authorImg"
                                      title="Genaiguru authorImg"
                                    />
                                  </figure>
                                  <div className="innerContent">
                                    <h6>{blogdata.author}</h6>
                                    <p>{blogdata.created_at}</p>
                                  </div>
                                </div>
                                <p>{blogdata.title}</p>
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

export default BlogDetails;
