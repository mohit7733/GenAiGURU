import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import { useLocation } from "react-router";
import axios from "axios";
import { getBaseURL } from "../../api/config";
import ReactPlayer from "react-player";
import { BASE_PATH, PATH_FEATURED_VIDEO, PATH_VIDEO_PLAY } from "../../routes";
import { Link, useNavigate } from "react-router-dom";
import WithAuth from "../Authentication/WithAuth";
import userimageIcon from "../../assets/images/person.png";
import { toast, ToastContainer } from "react-toastify";

const VideoPlay = () => {
  const [videoPlay, setVideoPlay] = useState({
    title: "",
    youtube_link: "",
    tags: [],
    author_profile_image: "",
    time_difference: "",
    views: "",
    author: "",

    video_id: "",
    upvote: "",
    downvote: "",
  });
  const navigate = useNavigate();
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [replyCommentModels, setReplyCommentModels] = useState([]);
  const [displayCommentModel, setDisplayCommentModel] = useState(true);
  const [displayRepliesCommentModel, setDisplayRepliesCommentModel] = useState(
    {}
  );
  const [relatedVideo, setRelatedVideo] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [getVideoComments, setGetVideoComments] = useState([]);
  const [getReplyVideoComments, setGetReplyVideoComments] = useState([null]);
  const [comment, setComment] = useState("");
  const [replyComment, setReplyComment] = useState("");
  const [profileImage, setProfileImage] = useState({
    profile_image: "",
    name: "",
  });
  const [relatedVideoId, setRelatedVideoId] = useState();
  const token = JSON.parse(localStorage.getItem("token"));

  // useLocation to get id from url
  let location = useLocation();
  const my_element = location.hash.slice(1);
  const queryParam = new URLSearchParams(location.search);
  const videoId = queryParam.get("id")?.split("?")[0];
  const userId = JSON.parse(localStorage.getItem("UserId"));
  const userLoggedIn = JSON.parse(localStorage.getItem("userLoggedIn"));

  useEffect(() => {
    if (
      localStorage.getItem("userLoggedIn") == (false || undefined) &&
      fetch("https://api.ipify.org?format=json")
        .then((response) => response.json())
        .then((data) => {
          axios
            .post(`${getBaseURL()}/watch-video`, {
              video_id: videoId,
            })
            .then((res) => {
              // res.data.message == "success" &&
              //   console.log("ip sent successfull");
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error))
    );
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
        setButtonClicked(!buttonClicked);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    axios
      .get(
        `${getBaseURL()}/popular-latest-videos?id=${
          videoId ? videoId : relatedVideoId
        }&user_id=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setVideoPlay({
          title: response?.data?.video_details?.title,
          youtube_link: response?.data?.video_details?.youtube_link,
          tags: response?.data?.video_details?.tags,
          author_profile_image:
            response?.data?.video_details?.author_profile_image,
          time_difference: response?.data?.video_details?.time_difference,
          views: response?.data?.video_details?.total_views,
          author: response?.data?.video_details?.author,

          video_id: response?.data?.video_details?.id,
          upvote: response?.data?.video_details?.upvote,
          downvote: response?.data?.video_details?.downvote,
          like_details: response?.data?.video_details?.like_details,
          author_id: response?.data?.video_details?.author_id,
          follow: response?.data?.video_details?.following_author,
        });
        setRelatedVideo(response?.data?.related_videos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [relatedVideoId, buttonClicked]);

  const getComments = () => {
    axios
      .get(
        `${getBaseURL()}/video-comment?user_id=${userId}&video_id=${
          videoId ? videoId : relatedVideoId
        }`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setGetVideoComments(res?.data?.comments);
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
        `${getBaseURL()}/video-comment-reply?user_id=${userId}&comment_id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        // console.log(res?.data?.replies);
        setGetReplyVideoComments(res?.data?.replies);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const postVideoComment = () => {
    if (!comment) {
      // Show a toast error if the content is empty
      toast.error("Comment content cannot be empty", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    axios
      .post(
        `${getBaseURL()}/video-comment`,
        {
          user_id: userId,
          video_id: videoPlay.video_id,
          content: comment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setComment("");
        setLoadingStatus(false);
        setButtonClicked(!buttonClicked);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const postVideoReplyComment = (commentId, replyCommentt) => {
    if (!replyCommentt) {
      // Show a toast error if the content is empty
      toast.error("Reply content cannot be empty", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    axios
      .post(
        `${getBaseURL()}/video-comment-reply`,
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
        getReplyComments(commentId);
        setReplyComment("");
        getComments();
        // setButtonClicked(!buttonClicked);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const postVideoCommentLike = (type, commentId) => {
    axios
      .post(
        `${getBaseURL()}/video-like-comment`,
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
        // setVideoCommentLike(res.data);
        // setButtonClicked(!buttonClicked);
        getComments();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const postVideoReplyLike = (type, commentId, com) => {
    axios
      .post(
        `${getBaseURL()}/video-like-reply`,
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
        // setVideoCommentLikeReply(res?.data);
        // setButtonClicked(!buttonClicked);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const postVideoupdo = (type, e) => {
    e?.preventDefault();
    axios
      .post(
        `${getBaseURL()}/video-upvote`,
        {
          video_id: videoId,
          user_id: userId,
          type: type,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        // setVideoCommentLike(res.data);
        setButtonClicked(!buttonClicked);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getComments();
    getReplyComments();
    setButtonClicked(false);
  }, [relatedVideoId, buttonClicked]);

  useEffect(() => {
    // window.scrollTo(0, 0);
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

  // WATCH VIDEO API
  useEffect(() => {
    setTimeout(() => {
      videoWatched();
    }, 30000);
  }, []);

  const videoWatched = async () => {
    try {
      await axios.post(
        `${getBaseURL()}/watch-video?user_id=${userId}&video_id=${videoId}`
      );
    } catch (error) {
      console.error("Error fetching watch-video:", error.message);
    }
  };
  // //////////////////////////////////////////

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
  const onVideoClick = (id, titles) => {
    const trimmedTitle = titles.trim();
    console.log("Trimmed title:", trimmedTitle);
    const replacedTitle = trimmedTitle.replace(/\s+/g, "-");
    console.log("Replaced title:", replacedTitle);
    navigate(`${PATH_VIDEO_PLAY}?id=${id}?title=${replacedTitle}`);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);
    setRelatedVideoId(id);
  };
  return (
    <div>
      <MobileHeader />
      {/* <!-- main section start here --> */}
      <section className="mainWrapper flex hideMob">
        <Sidebar />
        <div className="rightSection">
          <div className="full-width">
            {/* <!-- edit-profile start here --> */}
            <div className="video-wrapper flex">
              <div className="video-box">
                <div className="innerBreadcrumb">
                  <p
                    style={{
                      color: "white",
                      paddingTop: "25px",
                      marginBottom: "30px",
                      marginLeft: "0px",
                    }}
                  >
                    <Link style={{ color: "#a0aab1" }} to={BASE_PATH}>
                      Home
                    </Link>{" "}
                    <Link style={{ color: "#a0aab1" }} to={PATH_FEATURED_VIDEO}>
                      <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                      Video
                    </Link>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                    {videoPlay.title}
                  </p>
                </div>

                <ReactPlayer
                  url={videoPlay.youtube_link}
                  playing={false}
                  controls={true}
                  width="100%"
                  height="100%"
                />
                <ul className="flex space-between link">
                  <li>
                    {videoPlay?.tags?.map((tag, index) => {
                      return <a key={index}> #{tag}</a>;
                    })}
                  </li>
                  <li className="comment-btn">
                    <WithAuth
                      callBack={(e) => {
                        postVideoupdo("upvote", e);
                      }}
                    >
                      <div className="bt-like">
                        <a>
                          <img
                            className="borderImage"
                            src={
                              videoPlay?.like_details?.type == "upvote"
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
                              marginLeft: "5px",
                              // marginTop: "4px",
                            }}
                          >
                            {videoPlay.upvote}
                          </span>
                        </a>
                      </div>
                    </WithAuth>
                    <WithAuth
                      callBack={(e) => {
                        postVideoupdo("downvote", e);
                      }}
                    >
                      <div className="ds-like">
                        <a>
                          <img
                            className="borderImage"
                            src={
                              videoPlay.like_details?.type == "downvote"
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
                              marginLeft: "5px",
                              // marginTop: "4px",
                            }}
                          >
                            {videoPlay.downvote}
                          </span>
                        </a>
                      </div>
                    </WithAuth>
                    <a>
                      <WithAuth
                        callBack={(e) => {
                          // setDisplayCommentModel(!displayCommentModel);
                        }}
                      >
                        <img
                          src="/app/images/comment-01.png"
                          alt="Genaiguru comment"
                        />
                        {` ${
                          getVideoComments?.length > 1
                            ? getVideoComments?.length + " comments"
                            : getVideoComments?.length + " comment"
                        }`}
                      </WithAuth>
                    </a>
                  </li>
                </ul>
                <h2>{videoPlay.title}</h2>
                {/* <!-- view details here --> */}
                <div className="view-details">
                  <a href="#">{`${videoPlay.views} views | `} </a>{" "}
                  <a href="#">{videoPlay.time_difference} </a>
                  {/* <a href="#">Details</a> */}
                </div>
                {/* <!-- view details end here -->
              <!-- profile  --> */}
                <ul className="profile-video flex">
                  <li>
                    <a href="">
                      <img
                        src={videoPlay.author_profile_image || userimageIcon}
                        alt="Genaiguru userIcon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span>{videoPlay.author}</span>
                    </a>
                  </li>
                  <li>
                    {userId != videoPlay?.author_id && (
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          followUnfollow(
                            videoPlay?.follow == "yes" ? "unfollow" : "follow",
                            videoPlay?.author_id
                          );
                        }}
                        style={{ cursor: "pointer", color: "#b969ff" }}
                      >
                        <span>
                          {videoPlay?.follow == "yes" ? "Following" : "Follow"}
                        </span>
                      </a>
                    )}
                  </li>
                </ul>
                {/* <!--profile -end -->
                  <!-- review start --> */}
                {displayCommentModel && (
                  <>
                    <div className="review">
                      {userLoggedIn && (
                        <ul>
                          <li>
                            <a>
                              <figure>
                                <img
                                  src={
                                    profileImage.profile_image || userimageIcon
                                  }
                                  alt="profile_image"
                                />
                              </figure>
                              <span>
                                <span className="m-l">{videoPlay.name} </span>
                                <br />
                                <small>
                                  <input
                                    type="text"
                                    placeholder="Comment Here......"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                  />
                                  <button
                                    disabled={loadingStatus}
                                    onClick={() => {
                                      postVideoComment();
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
                      )}
                    </div>
                    {getVideoComments.map((comment, index) => {
                      const isReplyBoxOpen = replyCommentModels.includes(
                        comment.id
                      );
                      return (
                        <div className="review" key={index} id={comment?.id}>
                          <ul>
                            <li>
                              <a>
                                <figure>
                                  <img
                                    src={
                                      comment?.user_details?.profile_image
                                        ? comment?.user_details?.profile_image
                                        : userimageIcon
                                    }
                                    alt="Genai imag"
                                  />
                                </figure>
                                <span>
                                  <span>{comment?.user_details?.name} </span>
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
                                    {/* Comments Like and Dislike Buttons Bellow */}
                                    <WithAuth
                                      callBack={(e) => {
                                        postVideoCommentLike(
                                          "like",
                                          comment.id
                                        );
                                      }}
                                    >
                                      <button className="btnlike">
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
                                    </WithAuth>
                                    <WithAuth
                                      callBack={(e) => {
                                        postVideoCommentLike(
                                          "dislike",
                                          comment.id
                                        );
                                      }}
                                    >
                                      <button className="btnlike">
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
                                    </WithAuth>
                                    {/* Comments REPLY SECTION */}
                                    {userLoggedIn && (
                                      <span
                                        style={{ cursor: "pointer" }}
                                        onClick={() => {
                                          comment.is_any_reply == "no" &&
                                            displayReplies(comment.id);
                                          getReplyComments(comment.id);
                                          toggleReplyCommentModel(comment.id);
                                        }}
                                      >
                                        Reply
                                      </span>
                                    )}
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
                                        className={
                                          !displayRepliesCommentModel[
                                            comment?.id
                                          ] &&
                                          getReplyVideoComments?.comment_id !==
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
                                {getReplyVideoComments?.map((reply, index) => {
                                  return (
                                    <div key={index}>
                                      {reply.comment_id === comment.id && (
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
                                            {/*Reply Comments Like and Dislike Buttons Bellow */}
                                            <WithAuth
                                              callBack={(e) => {
                                                // setDisplayCommentModel(!displayCommentModel);
                                              }}
                                            >
                                              <button
                                                className="btnlike"
                                                onClick={() => {
                                                  postVideoReplyLike(
                                                    "like",
                                                    reply.id,
                                                    comment.id
                                                  );
                                                }}
                                              >
                                                <img
                                                  className="borderImage"
                                                  src={
                                                    reply?.like_details?.type ==
                                                    "like"
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
                                                  postVideoReplyLike(
                                                    "dislike",
                                                    reply.id,
                                                    comment.id
                                                  )
                                                }
                                              >
                                                <img
                                                  className="borderImage"
                                                  src={
                                                    reply?.like_details?.type ==
                                                    "dislike"
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
                                            </WithAuth>
                                          </div>
                                        </>
                                      )}
                                    </div>
                                  );
                                })}
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
                                        src={
                                          profileImage.profile_image ||
                                          userimageIcon
                                        }
                                        alt="Genai Imag"
                                      />
                                    </figure>
                                    <span className="reply">
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
                                            setReplyComment(e.target.value)
                                          }
                                        />
                                        <button
                                          disabled={loadingStatus}
                                          onClick={() => {
                                            setLoadingStatus(true);
                                            postVideoReplyComment(
                                              comment.id,
                                              replyComment
                                            );
                                            displayRepliesCommentModel[
                                              comment.id
                                            ] == false &&
                                              displayReplies(comment.id);
                                            toggleReplyCommentModel(comment.id);
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
              {relatedVideo?.length > 0 && (
                <div className="video-list">
                  <h1>More Videos</h1>
                  <div className="tab-content">
                    <div className="interest-box flex space-between">
                      {relatedVideo?.map((data) => {
                        return (
                          <div
                            onClick={() => onVideoClick(data.id, data.title)}
                            className="wrap flex"
                          >
                            <figure>
                              <Link
                                onClick={() =>
                                  onVideoClick(data.id, data.title)
                                }
                              >
                                <a>
                                  <video
                                    style={{
                                      maxWidth: "110px",
                                      height: "110px",
                                      objectFit: "cover",
                                      borderRadius: "10px",
                                    }}
                                    // src={data?.youtube_link}
                                    poster={`https://img.youtube.com/vi/${data?.youtube_link.slice(
                                      -11
                                    )}/sddefault.jpg`}
                                  ></video>
                                </a>
                              </Link>
                              {/* <div className="videoTime flex">
                          <img
                            src="app/images/videoIconBlack.png"
                            alt="Genaiguru videoIconBlack"
                          />
                          <span>3:38</span>
                        </div> */}
                            </figure>
                            <div className="content">
                              <div className="wrapper flex">
                                <figure>
                                  <img
                                    src={
                                      data?.author_profile_image ||
                                      userimageIcon
                                    }
                                    alt="Genai imag"
                                  />
                                </figure>
                                <div className="innerContent">
                                  <h6>{data.author}</h6>
                                  <p>
                                    {data.views} view . {data.time_difference}
                                  </p>
                                </div>
                              </div>
                              <p>
                                <a>
                                  <Link
                                    onClick={() =>
                                      onVideoClick(data.id, data.title)
                                    }
                                  >
                                    {data.title}
                                  </Link>
                                </a>
                              </p>
                              <ul className="flex">
                                <li>
                                  <a href="#">
                                    <img
                                      src="app/images/bookmarkIcon.png"
                                      alt="Genaiguru bookmarkIcon"
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
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* <!-- edit-profile start here --> */}
          </div>
        </div>
      </section>
      {/* <!-- video section mobile start here --> */}
      <div className="mob_profile hideDes">
        <div className="mobileHead flex">
          <div className="backBtns">
            <Link
              to={PATH_FEATURED_VIDEO}
              className="fa fa-angle-left"
              aria-hidden="true"
            ></Link>
          </div>
          <h2>Videos</h2>
        </div>
        <div className="innerVideosection rightSection">
          <div className="video-wrapper flex">
            <div className="video-box">
              <ReactPlayer
                url={videoPlay.youtube_link}
                playing={false}
                controls={true}
                width="100%"
                height="30%"
              />
              <ul className="flex space-between link">
                <li>
                  <a href="#">
                    {videoPlay?.tags?.map((tag, index) => {
                      return <a key={index}> #{tag}</a>;
                    })}
                  </a>
                </li>
                <li className="comment-btn">
                  <WithAuth
                    callBack={(e) => {
                      postVideoupdo("upvote", e);
                    }}
                  >
                    <div className="bt-like">
                      <a>
                        <img
                          className="borderImage"
                          src={
                            videoPlay?.like_details?.type == "upvote"
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
                            marginLeft: "5px",
                            // marginTop: "4px",
                          }}
                        >
                          {videoPlay.upvote}
                        </span>
                      </a>
                    </div>
                  </WithAuth>
                  <WithAuth
                    callBack={(e) => {
                      postVideoupdo("downvote", e);
                    }}
                  >
                    <div className="ds-like">
                      <a>
                        <img
                          className="borderImage"
                          src={
                            videoPlay.like_details?.type == "downvote"
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
                            marginLeft: "5px",
                            // marginTop: "4px",
                          }}
                        >
                          {videoPlay.downvote}
                        </span>
                      </a>
                    </div>
                  </WithAuth>
                  <a>
                    <WithAuth
                      callBack={(e) => {
                        // setDisplayCommentModel(!displayCommentModel);
                      }}
                    >
                      <img
                        src="/app/images/comment-01.png"
                        alt="Genaiguru comment"
                      />
                      {` ${
                        getVideoComments?.length > 1
                          ? getVideoComments?.length + " comments"
                          : getVideoComments?.length + " comment"
                      }`}
                    </WithAuth>
                  </a>
                </li>
              </ul>
              <h3>{videoPlay.title}</h3>
              {/* <!-- view details here --> */}
              <div className="view-details">
                <a href="#">{videoPlay.views} Views |</a>
                <a href="#">{videoPlay.time_difference}</a>
                {/* <a href="#">Details</a> */}
              </div>
              {/* <!-- view details end here --> */}
              {/* <!-- profile  --> */}
              <ul className="profile-video flex">
                <li>
                  <a href="">
                    <img
                      src={videoPlay.author_profile_image || userimageIcon}
                      alt="Genaiguru userIcon"
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <span>{videoPlay.author}</span>
                    <br />
                    {/* <small>alexsmih@</small> */}
                  </a>
                </li>
                <li>
                  {userId != videoPlay?.author_id && (
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        followUnfollow(
                          videoPlay?.follow == "yes" ? "unfollow" : "follow",
                          videoPlay?.author_id
                        );
                      }}
                      style={{ cursor: "pointer", color: "#b969ff" }}
                    >
                      <span>
                        {videoPlay?.follow == "yes" ? "Following" : "Follow"}
                      </span>
                    </a>
                  )}
                </li>
              </ul>
              {/* <!--profile -end -->
                  <!-- review start --> */}
              {displayCommentModel && (
                <>
                  <div className="review">
                    <ul>
                      <li>
                        <a>
                          <figure>
                            <img
                              src={profileImage.profile_image || userimageIcon}
                              alt="profile_image"
                            />
                          </figure>
                          <span>
                            <span className="m-l">{videoPlay.name} </span>
                            <br />
                            <small>
                              <input
                                type="text"
                                placeholder="Comment Here......"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                              />
                              <button
                                disabled={loadingStatus}
                                onClick={() => {
                                  postVideoComment();
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
                  {getVideoComments.map((comment, index) => {
                    const isReplyBoxOpen = replyCommentModels.includes(
                      comment.id
                    );
                    return (
                      <div id={comment?.id} className="review" key={index}>
                        <ul>
                          <li>
                            <a>
                              <figure>
                                <img
                                  src={
                                    comment?.user_details?.profile_image
                                      ? comment?.user_details?.profile_image
                                      : userimageIcon
                                  }
                                  alt="Genai img"
                                />
                              </figure>
                              <span>
                                <span>{comment?.user_details?.name} </span>
                                <br />
                                <small className="pc">{comment?.content}</small>
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
                                      postVideoCommentLike("like", comment.id)
                                    }
                                  >
                                    <img
                                      className="borderImage"
                                      src={
                                        comment?.like_details?.type == "like"
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
                                      {comment.likes > 0 ? comment.likes : ""}
                                    </span>
                                  </button>
                                  <button
                                    className="btnlike"
                                    onClick={() =>
                                      postVideoCommentLike(
                                        "dislike",
                                        comment.id
                                      )
                                    }
                                  >
                                    <img
                                      className="borderImage"
                                      src={
                                        comment?.like_details?.type == "dislike"
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
                                      toggleReplyCommentModel(comment.id);
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
                                      className={
                                        !displayRepliesCommentModel[
                                          comment?.id
                                        ] &&
                                        getReplyVideoComments?.comment_id !==
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
                              {getReplyVideoComments?.map((reply, index) => {
                                return (
                                  <div key={index}>
                                    {reply.comment_id === comment.id && (
                                      <>
                                        <figure>
                                          <img
                                            src={
                                              reply?.user_details?.profile_image
                                                ? reply?.user_details
                                                    ?.profile_image
                                                : userimageIcon
                                            }
                                            alt="repliedUserIcon"
                                          />
                                        </figure>
                                        <span>{reply?.user_details?.name}</span>
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
                                              postVideoReplyLike(
                                                "like",
                                                reply.id,
                                                comment.id
                                              )
                                            }
                                          >
                                            <img
                                              className="borderImage"
                                              src={
                                                reply?.like_details?.type ==
                                                "like"
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
                                              postVideoReplyLike(
                                                "dislike",
                                                reply.id,
                                                comment.id
                                              )
                                            }
                                          >
                                            <img
                                              className="borderImage"
                                              src={
                                                reply?.like_details?.type ==
                                                "dislike"
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
                              })}
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
                                      src={
                                        profileImage.profile_image ||
                                        userimageIcon
                                      }
                                      alt="Genai imag"
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
                                          setReplyComment(e.target.value)
                                        }
                                      />
                                      <button
                                        disabled={loadingStatus}
                                        onClick={() => {
                                          setLoadingStatus(true);
                                          postVideoReplyComment(
                                            comment.id,
                                            replyComment
                                          );
                                          displayRepliesCommentModel[
                                            comment.id
                                          ] == false &&
                                            displayReplies(comment.id);
                                          toggleReplyCommentModel(comment.id);
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
              {/* <!-- review end --> */}
            </div>
            <div className="video-list">
              <h1>More Videos</h1>
              <div className="tab-content">
                <div className="interest-box flex space-between">
                  {relatedVideo.map((data) => {
                    return (
                      <div
                        onClick={() => onVideoClick(data.id, data.title)}
                        className="wrap flex"
                      >
                        <figure>
                          <a href={data?.youtube_link}>
                            <video
                              style={{
                                maxWidth: "110px",
                                height: "110px",
                                objectFit: "cover",
                                borderRadius: "10px",
                              }}
                              src={data?.youtube_link}
                              poster={`https://img.youtube.com/vi/${data?.youtube_link.slice(
                                -11
                              )}/sddefault.jpg`}
                            ></video>
                          </a>
                          {/* <div className="videoTime flex">
                          <img
                            src="app/images/videoIconBlack.png"
                            alt="Genaiguru videoIconBlack"
                          />
                          <span>3:38</span>
                        </div> */}
                        </figure>
                        <div className="content">
                          <div className="wrapper flex">
                            <figure>
                              <img
                                src={
                                  data?.author_profile_image || userimageIcon
                                }
                                alt="Genai imag"
                              />
                            </figure>
                            <div className="innerContent">
                              <h6>{data.author}</h6>
                              <p>
                                {data.views} view . {data.time_difference}
                              </p>
                            </div>
                          </div>
                          <p>
                            {/* <Link href={data.youtube_link}>{data.title}</Link> */}
                            <Link
                              onClick={() => onVideoClick(data.id, data.title)}
                            >
                              {data.title}
                            </Link>
                          </p>
                          <ul className="flex">
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/bookmarkIcon.png"
                                  alt="Genaiguru bookmarkIcon"
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
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- video section mobile end here --> */}
    </div>
  );
};

export default VideoPlay;
