import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getBaseURL } from "../../api/config";
import userimageIcon from "../../assets/images/person.png";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import {
  BASE_PATH,
  PATH_FEATURED_CONTENT,
  PATH_BLOG_DETAILS,
} from "../../routes";
import WithAuth from "../Authentication/WithAuth";
import SilverPopup from "../Phase5Pages/SilverPopup";
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
  const [getReplyBlogComments, setGetReplyBlogComments] = useState([null]);
  const [profileImage, setProfileImage] = useState({
    profile_image: "",
    name: "",
  });
  const [blogCommentLike, setBlogCommentLike] = useState({ likes, dislikes });
  const [blogCommentLikeReply, setBlogCommentLikeReply] = useState({
    likes,
    dislikes,
  });
  const navigate = useNavigate();
  const [replyCommentModels, setReplyCommentModels] = useState([]);

  const [relatedBlogId, setRelatedBlogId] = useState();
  const [buttonClicked, setButtonClicked] = useState(false);

  const [comment, setComment] = useState("");
  const [replyComment, setReplyComment] = useState("");
  const [displayCommentModel, setDisplayCommentModel] = useState(false);
  const [displayRepliesCommentModel, setDisplayRepliesCommentModel] = useState(
    {}
  );

  const [showPopUp, setShowPopUp] = useState(false);
  const [claimedBadges, setClaimedBadges] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(false);

  const token = JSON.parse(localStorage.getItem("token"));
  const userId = JSON.parse(localStorage.getItem("UserId"));
  // useLocation to get id from url
  let location = useLocation();
  const my_element = location.hash.slice(1);

  // const queryParam = new URLSearchParams(location.search);
  // const blogId = queryParam.get("id");
  // Get the current URL

  // Remove the "title" parameter from the URL

  // Update the URL without the "title" parameter

  // Now you can extract the "id" parameter as usual
  const queryParam = new URLSearchParams(window.location.search);
  const blogId = queryParam.get("id").split("?")[0];

  console.log(blogId.split("?")[0]);

  // Useeffect for API of blogOpened Points
  useEffect(() => {
    axios
      .post(`${getBaseURL()}/read-article`, {
        user_id: userId,
        post_id: blogId,
        post_type: "blog",
      })
      .then((res) => {
        // console.log(res?.data);
      })
      .catch((errors) => {
        console.log(errors);
      });
  }, []);
  const followUnfollow = (newtype, id) => {
    if (token != "") {
    }
    axios
      .post(
        `${getBaseURL()}/auth/follow-user`,
        {
          follow_id: id,
          type: newtype,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res, "res");
        setButtonClicked(!buttonClicked);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
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
        console.log(response?.data);
        setBlogDetail({
          author: response?.data?.blog_details?.author,
          profilePhoto: response?.data?.blog_details?.author_profile_image,
          content: response?.data?.blog_details?.content,
          title: response?.data?.blog_details?.title,
          banner_image: response?.data?.blog_details?.banner_image,
          creation_date: response?.data?.blog_details?.creation_date,
          blog_id: response?.data?.blog_details?.id,
          blogSaved: response?.data?.blog_details?.saved,
          follow: response?.data?.blog_details?.following_author,
          author_id: response?.data?.blog_details?.user_id,
        });
        setRelatedBlogs(response?.data?.related_blogs);
      })
      .catch((err) => {
        console.log(err.message);
      });
    setButtonClicked(false);
    getComments();
  }, [relatedBlogId, buttonClicked]);

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
  const onBlogClick = (blogId, titles) => {
    const trimmedTitle = titles.trim();
    console.log("Trimmed title:", trimmedTitle);
    const replacedTitle = trimmedTitle.replace(/\s+/g, "-");
    console.log("Replaced title:", replacedTitle);
    navigate(`${PATH_BLOG_DETAILS}?id=${blogId}?title=${replacedTitle}`);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);
    setRelatedBlogId(blogId);
  };

  // Save And Unsave API's
  const onBlogSave = (blogID) => {
    axios
      .post(
        `${getBaseURL()}/save-blog`,
        {
          user_id: userId,
          blog_id: blogID,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
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
      .post(
        `${getBaseURL()}/unsave-blog`,
        {
          user_id: userId,
          blog_id: blogID,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
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
      .get(`${getBaseURL()}/blog-comment?user_id=${userId}&blog_id=${blogId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setGetBlogComments(res?.data?.comments);
        setTimeout(() => {
          var myelement1 = document.getElementById(my_element);
          myelement1?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }, 1000);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const getReplyComments = (id) => {
    axios
      .get(
        `${getBaseURL()}/blog-comment-reply?user_id=${userId}&comment_id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setGetReplyBlogComments(res?.data?.replies);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getComments();
    getReplyComments();
    setButtonClicked(false);
  }, [buttonClicked]);

  const postBlogComment = () => {
    if (!comment) {
      // Show a toast error if the content is empty
      toast.error("Comment content cannot be empty", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    axios
      .post(
        `${getBaseURL()}/blog-comment?user_id=${userId}&blog_id=${
          blogDetail.blog_id
        }&content=${comment}`,
        {
          user_id: userId,
          blog_id: blogDetail.blog_id,
          content: comment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setLoadingStatus(false);
        console.log(res.data);
        setComment("");
        setButtonClicked(!buttonClicked);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const postBlogReplyComment = (commentId, replyCommentt) => {
    if (!replyCommentt) {
      // Show a toast error if the content is empty
      toast.error("Reply content cannot be empty", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    axios
      .post(
        `${getBaseURL()}/blog-comment-reply`,
        {
          user_id: userId,
          comment_id: commentId,
          content: replyCommentt,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setLoadingStatus(false);
        console.log(res.data);
        getReplyComments(commentId);
        setReplyComment("");
        getComments();
        // setButtonClicked(!buttonClicked);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // Post BlogComment Like/dislike api .............

  const postBlogLike = (type, commentId) => {
    axios
      .post(
        `${getBaseURL()}/blog-like-comment`,
        {
          user_id: userId,
          type: type,
          comment_id: commentId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setBlogCommentLike(res.data);
        getComments();
        // setButtonClicked(!buttonClicked);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //  Post BlogComment Like reply api ......

  const postBlogReplyLike = (type, commentId, com) => {
    axios
      .post(
        `${getBaseURL()}/blog-like-reply`,
        {
          user_id: userId,
          type: type,
          reply_id: commentId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        getReplyComments(com);
        setBlogCommentLikeReply(res?.data);
        // setButtonClicked(!buttonClicked);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

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
  const displayReplies = (com) => {
    setDisplayRepliesCommentModel((prevStatus) => {
      const updatedStatus = {};

      // Set all comment IDs to false
      Object.keys(prevStatus).forEach((id) => {
        updatedStatus[id] = false;
      });

      // Toggle the value for the target comment ID
      updatedStatus[com] = !prevStatus[com];

      return updatedStatus;
    });
  };
  // fetchBadges API
  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const response = await axios.get(`${getBaseURL()}/game-badges`, {
          params: {
            user_id: userId,
            claimed: "no",
          },
        });
        // console.log(response?.data?.data);
        setClaimedBadges(response?.data?.data);
        if (response?.data?.data.length > 0) {
          setShowPopUp(true);
        }
      } catch (error) {
        console.error("Error fetching user points:", error.message);
      }
    };
    fetchBadges();
    getComments();
    my_element && setDisplayCommentModel(true);
  }, []);

  return (
    <div>
      <ToastContainer autoClose={1000} pauseOnHover={false} />
      {showPopUp && (
        <SilverPopup
          claimedBadges={claimedBadges}
          onClose={() => setShowPopUp(false)}
        />
      )}

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
                        <Link to={PATH_FEATURED_CONTENT}>
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>{" "}
                          Blog
                        </Link>
                        <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                        {blogDetail.title}
                      </p>
                    </div>
                  </div>
                  <div className="connect-box">
                    <ul className="flex">
                      <WithAuth
                        callBack={(e) => {
                          if (blogDetail.blogSaved == "yes") {
                            onBlogUnSave(blogDetail.blog_id);
                          } else {
                            onBlogSave(blogDetail.blog_id);
                          }
                        }}
                      >
                        {blogDetail.blogSaved == "yes" ? (
                          <li>
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
                          <li>
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
                      </WithAuth>
                      <li style={{ marginLeft: "10px" }}>
                        <WithAuth callBack={(e) => e?.preventDefault()}>
                          {/* {JSON.parse(localStorage.getItem("userLoggedIn")) ==
                            "true" && ( */}
                          <Sharebtn
                            title={blogDetail.title}
                            id={blogDetail.blog_id}
                            url={
                              window.location.origin +
                              "/blogdetails?id=" +
                              blogDetail.blog_id
                            }
                          />
                          {/* )} */}
                        </WithAuth>
                      </li>
                    </ul>
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
                      />
                    </figure>
                  </div>
                  <div className="content-box">
                    <p>
                      By <a>{blogDetail.author}</a>
                    </p>
                    <p>{blogDetail.creation_date}</p>
                  </div>
                  <div className="content-box">
                    <WithAuth
                      callBack={(e) => {
                        e?.preventDefault();
                      }}
                    >
                      {userId != blogDetail?.author_id && (
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            followUnfollow(
                              blogDetail?.follow == "yes"
                                ? "unfollow"
                                : "follow",
                              blogDetail?.author_id
                            );
                          }}
                          style={{ cursor: "pointer", color: "#b969ff" }}
                        >
                          {blogDetail?.follow == "yes" ? "Following" : "Follow"}
                        </a>
                      )}
                    </WithAuth>
                  </div>
                  <div className="blog-img">
                    <figure>
                      <img
                        src={blogDetail.banner_image}
                        alt="Genaiguru web-deigner-learn-book"
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
                          <WithAuth
                            callBack={(e) => {
                              setDisplayCommentModel(!displayCommentModel);
                            }}
                          >
                            <a style={{ cursor: "pointer" }}>
                              <figure>
                                <img
                                  src="./app/images/comment-01.png"
                                  alt="Genaiguru comment-01"
                                />
                              </figure>
                              <span>Comment</span>
                            </a>
                          </WithAuth>
                        </li>
                        <li>
                          <a>
                            <figure>
                              <img
                                src="./app/images/help-circle.png"
                                alt="Genaiguru help-circle"
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
                                      alt="profile_image"
                                    />
                                  </figure>
                                  <span>
                                    <span className="m-l">
                                      {profileImage.name}{" "}
                                    </span>
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
                                      <button
                                        disabled={loadingStatus}
                                        onClick={() => {
                                          postBlogComment();
                                          setLoadingStatus(true);
                                        }}
                                        style={{ cursor: "pointer" }}
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
                          {/* Get Comments */}
                          {getBlogComments.map((comment, index) => {
                            const isReplyBoxOpen = replyCommentModels.includes(
                              comment.id
                            );

                            return (
                              <div
                                id={comment?.id}
                                className="review"
                                key={index}
                              >
                                <ul>
                                  <li>
                                    <a>
                                      <figure>
                                        <img
                                          src={
                                            comment?.user_details?.profile_image
                                              ? comment?.user_details
                                                  ?.profile_image
                                              : userimageIcon
                                          }
                                        />
                                      </figure>
                                      <span>
                                        <span>
                                          {comment?.user_details?.name}{" "}
                                        </span>
                                        <br />
                                        <small className="pc">
                                          {comment?.content}
                                        </small>
                                        {/* <br /> */}
                                        <div
                                          style={{
                                            display: "flex",
                                            margin: "0px",
                                          }}
                                        >
                                          <button
                                            className="btnlike"
                                            onClick={() =>
                                              postBlogLike("like", comment.id)
                                            }
                                          >
                                            <img
                                              className="borderImage"
                                              src={
                                                comment?.like_details?.type ==
                                                "like"
                                                  ? "/app/images/Group_1.png"
                                                  : "/app/images/thumbs-up.png"
                                              }
                                              style={{ float: "left" }}
                                            />
                                            <img
                                              className="fillImage"
                                              src="/app/images/Group_1.png"
                                              style={{ float: "left" }}
                                            />
                                            <span
                                              style={{
                                                marginLeft: "-5px",
                                                marginTop: "4px",
                                              }}
                                            >
                                              {comment.likes > 0
                                                ? comment.likes
                                                : ""}
                                            </span>
                                          </button>
                                          <button
                                            className="btnlike"
                                            onClick={() =>
                                              postBlogLike(
                                                "dislike",
                                                comment.id
                                              )
                                            }
                                          >
                                            <img
                                              className="borderImage"
                                              src={
                                                comment?.like_details?.type ==
                                                "dislike"
                                                  ? "/app/images/Group_2.png"
                                                  : "/app/images/thumbs-down.png"
                                              }
                                              style={{ float: "left" }}
                                            />
                                            <img
                                              className="fillImage"
                                              src="/app/images/Group_2.png"
                                              style={{ float: "left" }}
                                            />
                                            <span
                                              style={{
                                                marginLeft: "-5px",
                                                marginTop: "4px",
                                              }}
                                            >
                                              {comment.dislikes > 0
                                                ? comment.dislikes
                                                : ""}
                                            </span>
                                          </button>
                                          <span
                                            style={{ cursor: "pointer" }}
                                            onClick={() => {
                                              comment.is_any_reply == "no" &&
                                                displayReplies(comment.id);
                                              getReplyComments(comment.id);
                                              toggleReplyCommentModel(
                                                comment.id
                                              );
                                            }}
                                          >
                                            Reply
                                          </span>
                                        </div>
                                        {comment.is_any_reply == "yes" && (
                                          <p
                                            className="d_blck"
                                            style={{
                                              cursor: "pointer",
                                            }}
                                            onClick={() => {
                                              getReplyComments(comment.id);
                                              displayReplies(comment.id);
                                            }}
                                          >
                                            <i
                                              style={{ marginRight: "5px" }}
                                              class={
                                                !displayRepliesCommentModel[
                                                  comment?.id
                                                ] &&
                                                getReplyBlogComments?.comment_id !==
                                                  comment?.id
                                                  ? "fa fa-caret-down"
                                                  : "fa fa-caret-up"
                                              }
                                              aria-hidden="true"
                                            ></i>
                                            Replies
                                          </p>
                                        )}
                                      </span>
                                    </a>
                                  </li>
                                  {displayRepliesCommentModel[comment.id] && (
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
                                                          ? reply?.user_details
                                                              ?.profile_image
                                                          : userimageIcon
                                                      }
                                                      alt="repliedUserIcon"
                                                    />
                                                  </figure>
                                                  <span>
                                                    {reply?.user_details?.name}
                                                  </span>
                                                  <br />
                                                  <span>{reply.content}</span>
                                                  <div
                                                    style={{
                                                      display: "flex",
                                                      margin: "0px",
                                                    }}
                                                  >
                                                    <button
                                                      className="btnlike"
                                                      onClick={() =>
                                                        postBlogReplyLike(
                                                          "like",
                                                          reply.id,
                                                          comment.id
                                                        )
                                                      }
                                                    >
                                                      <img
                                                        className="borderImage"
                                                        src={
                                                          reply?.like_details
                                                            ?.type == "like"
                                                            ? "/app/images/Group_1.png"
                                                            : "/app/images/thumbs-up.png"
                                                        }
                                                        style={{
                                                          float: "left",
                                                        }}
                                                      />
                                                      <img
                                                        className="fillImage"
                                                        src="/app/images/Group_1.png"
                                                        style={{
                                                          float: "left",
                                                        }}
                                                      />
                                                      <span
                                                        style={{
                                                          marginLeft: "-5px",
                                                          marginTop: "4px",
                                                        }}
                                                      >
                                                        {reply.likes > 0
                                                          ? reply.likes
                                                          : ""}
                                                      </span>
                                                    </button>
                                                    <button
                                                      className="btnlike"
                                                      onClick={() =>
                                                        postBlogReplyLike(
                                                          "dislike",
                                                          reply.id,
                                                          comment.id
                                                        )
                                                      }
                                                    >
                                                      <img
                                                        className="borderImage"
                                                        src={
                                                          reply?.like_details
                                                            ?.type == "dislike"
                                                            ? "/app/images/Group_2.png"
                                                            : "/app/images/thumbs-down.png"
                                                        }
                                                        style={{
                                                          float: "left",
                                                        }}
                                                      />
                                                      <img
                                                        className="fillImage"
                                                        src="/app/images/Group_2.png"
                                                        style={{
                                                          float: "left",
                                                        }}
                                                      />
                                                      <span
                                                        style={{
                                                          marginLeft: "-5px",
                                                          marginTop: "4px",
                                                        }}
                                                      >
                                                        {reply.dislikes > 0
                                                          ? reply.dislikes
                                                          : ""}
                                                      </span>
                                                    </button>
                                                  </div>
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
                                            />
                                          </figure>
                                          <span>
                                            <span className="m-l">
                                              {profileImage.name}
                                            </span>
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
                                                disabled={loadingStatus}
                                                onClick={() => {
                                                  setLoadingStatus(true);
                                                  postBlogReplyComment(
                                                    comment.id,
                                                    replyComment
                                                  );
                                                  displayRepliesCommentModel[
                                                    comment.id
                                                  ] == false &&
                                                    displayReplies(comment.id);
                                                  toggleReplyCommentModel(
                                                    comment.id
                                                  );
                                                }}
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
                      {relatedBlogs?.length > 0 && (
                        <div className="heading-link flex">
                          <h3>Related posts</h3>
                        </div>
                      )}
                      {relatedBlogs?.map((blogdata, Index) => {
                        return (
                          <div className="interest-sliders" key={Index}>
                            <div className="wrap flex">
                              <figure>
                                <img
                                  src={blogdata.banner_image}
                                  alt="Genaiguru interestSliderImg"
                                />
                              </figure>
                              <div className="content">
                                <div className="wrapper flex">
                                  <figure>
                                    <img
                                      src={blogdata.author_profile_image}
                                      alt="Genaiguru authorImg"
                                    />
                                  </figure>
                                  <div className="innerContent">
                                    <h6>{blogdata.author}</h6>
                                    <p>{blogdata.creation_date}</p>
                                  </div>
                                </div>
                                <p>
                                  <a
                                    onClick={() =>
                                      onBlogClick(blogdata.id, blogdata.title)
                                    }
                                  >
                                    {blogdata.title}
                                  </a>
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
                                          // title={
                                          //   blogdata.saved === "yes"
                                          //     ? "coloredbookmarkIcon"
                                          //     : "bookmarkIcon"
                                          // }
                                        />
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
              <WithAuth
                callBack={(e) => {
                  console.log("dd");
                }}
              >
                {blogDetail.blogSaved == "yes" ? (
                  <li onClick={() => onBlogUnSave(blogDetail.blog_id)}>
                    <a>
                      <figure>
                        <img src="app/images/color-bookmarks.png" alt="" />
                      </figure>
                    </a>
                  </li>
                ) : (
                  <li onClick={() => onBlogSave(blogDetail.blog_id)}>
                    <a>
                      <figure>
                        <img src="./app/images/bookmarkIcon.png" alt="" />
                      </figure>
                    </a>
                  </li>
                )}
              </WithAuth>
              <WithAuth>
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
              </WithAuth>
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
                        src={blogDetail.profilePhoto}
                        alt="Genaiguru blog-img"
                      />
                    </figure>
                  </div>
                  <div className="content-box">
                    <p>
                      By <a href="#">{blogDetail.author}</a>
                    </p>
                    <p>{blogDetail.creation_date}</p>
                  </div>
                  <div className="content-box">
                    <WithAuth
                      callBack={(e) => {
                        e?.preventDefault();
                      }}
                    >
                      {userId != blogDetail?.author_id && (
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            followUnfollow(
                              blogDetail?.follow == "yes"
                                ? "unfollow"
                                : "follow",
                              blogDetail?.author_id
                            );
                          }}
                          style={{ cursor: "pointer", color: "#b969ff" }}
                        >
                          {blogDetail?.follow == "yes" ? "Following" : "Follow"}
                        </a>
                      )}
                    </WithAuth>
                  </div>
                  <div className="blog-img">
                    <figure>
                      <img
                        src={blogDetail.banner_image}
                        alt="Genaiguru web-deigner-learn-book"
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
                                      alt="profile_image"
                                    />
                                  </figure>
                                  <span>
                                    <span className="m-l">
                                      {profileImage.name}{" "}
                                    </span>
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
                                      <button
                                        disabled={loadingStatus}
                                        onClick={() => {
                                          postBlogComment();
                                          setLoadingStatus(true);
                                        }}
                                        style={{ cursor: "pointer" }}
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
                          {/* Get Comments */}
                          {getBlogComments.map((comment, index) => {
                            const isReplyBoxOpen = replyCommentModels.includes(
                              comment.id
                            );

                            return (
                              <div
                                id={comment?.id}
                                className="review"
                                key={index}
                              >
                                <ul>
                                  <li>
                                    <a>
                                      <figure>
                                        <img
                                          src={
                                            comment?.user_details?.profile_image
                                              ? comment?.user_details
                                                  ?.profile_image
                                              : userimageIcon
                                          }
                                        />
                                      </figure>
                                      <span>
                                        <span>
                                          {comment?.user_details?.name}{" "}
                                        </span>
                                        <br />
                                        <small className="pc">
                                          {comment?.content}
                                        </small>
                                        {/* <br /> */}
                                        <div
                                          style={{
                                            display: "flex",
                                            margin: "0px",
                                          }}
                                        >
                                          <button
                                            className="btnlike"
                                            onClick={() =>
                                              postBlogLike("like", comment.id)
                                            }
                                          >
                                            <img
                                              className="borderImage"
                                              src={
                                                comment?.like_details?.type ==
                                                "like"
                                                  ? "/app/images/Group_1.png"
                                                  : "/app/images/thumbs-up.png"
                                              }
                                              style={{ float: "left" }}
                                            />
                                            <img
                                              className="fillImage"
                                              src="/app/images/Group_1.png"
                                              style={{ float: "left" }}
                                            />
                                            <span
                                              style={{
                                                marginLeft: "-5px",
                                                marginTop: "4px",
                                              }}
                                            >
                                              {comment.likes > 0
                                                ? comment.likes
                                                : ""}
                                            </span>
                                          </button>
                                          <button
                                            className="btnlike"
                                            onClick={() =>
                                              postBlogLike(
                                                "dislike",
                                                comment.id
                                              )
                                            }
                                          >
                                            <img
                                              className="borderImage"
                                              src={
                                                comment?.like_details?.type ==
                                                "dislike"
                                                  ? "/app/images/Group_2.png"
                                                  : "/app/images/thumbs-down.png"
                                              }
                                              style={{ float: "left" }}
                                            />
                                            <img
                                              className="fillImage"
                                              src="/app/images/Group_2.png"
                                              style={{ float: "left" }}
                                            />
                                            <span
                                              style={{
                                                marginLeft: "-5px",
                                                marginTop: "4px",
                                              }}
                                            >
                                              {comment.dislikes > 0
                                                ? comment.dislikes
                                                : ""}
                                            </span>
                                          </button>
                                          <span
                                            style={{ cursor: "pointer" }}
                                            onClick={() => {
                                              comment.is_any_reply == "no" &&
                                                displayReplies(comment.id);
                                              getReplyComments(comment.id);
                                              toggleReplyCommentModel(
                                                comment.id
                                              );
                                            }}
                                          >
                                            Reply
                                          </span>
                                        </div>
                                        <p
                                          className="d_blck"
                                          style={{
                                            cursor: "pointer",
                                          }}
                                          onClick={() => {
                                            getReplyComments(comment.id);
                                            displayReplies(comment.id);
                                          }}
                                        >
                                          <i
                                            style={{ marginRight: "5px" }}
                                            class={
                                              !displayRepliesCommentModel[
                                                comment?.id
                                              ] &&
                                              getReplyBlogComments?.comment_id !==
                                                comment?.id
                                                ? "fa fa-caret-down"
                                                : "fa fa-caret-up"
                                            }
                                            aria-hidden="true"
                                          ></i>
                                          Replies
                                        </p>
                                      </span>
                                    </a>
                                  </li>
                                  {displayRepliesCommentModel[comment.id] && (
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
                                                          ? reply?.user_details
                                                              ?.profile_image
                                                          : userimageIcon
                                                      }
                                                      alt="repliedUserIcon"
                                                    />
                                                  </figure>
                                                  <span>
                                                    {reply?.user_details?.name}
                                                  </span>
                                                  <br />
                                                  <span>{reply.content}</span>
                                                  <div
                                                    style={{
                                                      display: "flex",
                                                      margin: "0px",
                                                    }}
                                                  >
                                                    <button
                                                      className="btnlike"
                                                      onClick={() =>
                                                        postBlogReplyLike(
                                                          "like",
                                                          reply.id,
                                                          comment.id
                                                        )
                                                      }
                                                    >
                                                      <img
                                                        className="borderImage"
                                                        src={
                                                          reply?.like_details
                                                            ?.type == "like"
                                                            ? "/app/images/Group_1.png"
                                                            : "/app/images/thumbs-up.png"
                                                        }
                                                        style={{
                                                          float: "left",
                                                        }}
                                                      />
                                                      <img
                                                        className="fillImage"
                                                        src="/app/images/Group_1.png"
                                                        style={{
                                                          float: "left",
                                                        }}
                                                      />
                                                      <span
                                                        style={{
                                                          marginLeft: "-5px",
                                                          marginTop: "4px",
                                                        }}
                                                      >
                                                        {reply.likes > 0
                                                          ? reply.likes
                                                          : ""}
                                                      </span>
                                                    </button>
                                                    <button
                                                      className="btnlike"
                                                      onClick={() =>
                                                        postBlogReplyLike(
                                                          "dislike",
                                                          reply.id,
                                                          comment.id
                                                        )
                                                      }
                                                    >
                                                      <img
                                                        className="borderImage"
                                                        src={
                                                          reply?.like_details
                                                            ?.type == "dislike"
                                                            ? "/app/images/Group_2.png"
                                                            : "/app/images/thumbs-down.png"
                                                        }
                                                        style={{
                                                          float: "left",
                                                        }}
                                                      />
                                                      <img
                                                        className="fillImage"
                                                        src="/app/images/Group_2.png"
                                                        style={{
                                                          float: "left",
                                                        }}
                                                      />
                                                      <span
                                                        style={{
                                                          marginLeft: "-5px",
                                                          marginTop: "4px",
                                                        }}
                                                      >
                                                        {reply.dislikes > 0
                                                          ? reply.dislikes
                                                          : ""}
                                                      </span>
                                                    </button>
                                                  </div>
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
                                            />
                                          </figure>
                                          <span>
                                            <span className="m-l">
                                              {profileImage.name}
                                            </span>
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
                                                disabled={loadingStatus}
                                                onClick={() => {
                                                  setLoadingStatus(true);
                                                  postBlogReplyComment(
                                                    comment.id,
                                                    replyComment
                                                  );
                                                  displayRepliesCommentModel[
                                                    comment.id
                                                  ] == false &&
                                                    displayReplies(comment.id);
                                                  toggleReplyCommentModel(
                                                    comment.id
                                                  );
                                                }}
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
                                />
                              </figure>
                              <div className="content">
                                <div className="wrapper flex">
                                  <figure>
                                    <img
                                      src={blogdata.author_profile_image}
                                      alt="Genaiguru authorImg"
                                    />
                                  </figure>
                                  <div className="innerContent">
                                    <h6>{blogdata.author}</h6>
                                    <p>{blogdata.creation_date}</p>
                                  </div>
                                </div>
                                <p>
                                  <a
                                    onClick={() =>
                                      onBlogClick(blogdata.id, blogdata.title)
                                    }
                                  >
                                    {blogdata.title}
                                  </a>
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
                                          // title={
                                          //   blogdata.saved === "yes"
                                          //     ? "coloredbookmarkIcon"
                                          //     : "bookmarkIcon"
                                          // }
                                        />
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
                                </WithAuth>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      {/* <a href="#" className="viewAll">
                        View all
                      </a> */}
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
