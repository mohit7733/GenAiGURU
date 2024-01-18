import React, { useEffect, useState } from "react";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import { useLocation } from "react-router";
import axios from "axios";
import { getBaseURL } from "../../api/config";
import ReactPlayer from "react-player";
import { BASE_PATH, PATH_FEATURED_VIDEO } from "../../routes";
import { Link } from "react-router-dom";
import WithAuth from "../Authentication/WithAuth";
import userimageIcon from "../../assets/images/person.png";

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
  const [replyCommentModels, setReplyCommentModels] = useState([]);
  const [displayCommentModel, setDisplayCommentModel] = useState(false);
  const [displayRepliesCommentModel, setDisplayRepliesCommentModel] = useState(
    {}
  );

  const [buttonClicked, setButtonClicked] = useState(false);
  const [getVideoComments, setGetVideoComments] = useState([]);
  const [getReplyVideoComments, setGetReplyVideoComments] = useState([null]);
  const [comment, setComment] = useState("");
  const [replyComment, setReplyComment] = useState("");
  const [profileImage, setProfileImage] = useState({
    profile_image: "",
    name: "",
  });
  const token = JSON.parse(localStorage.getItem("token"));

  // useLocation to get id from url
  let location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const videoId = queryParam.get("id");

  const userId = JSON.parse(localStorage.getItem("UserId"));

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(
        `${getBaseURL()}/popular-latest-videos?id=${videoId}&user_id=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response, "res");
        setVideoPlay({
          title: response?.data?.video_details?.title,
          youtube_link: response?.data?.video_details?.youtube_link,
          tags: response?.data?.video_details?.tags,
          author_profile_image:
            response?.data?.video_details?.author_profile_image,
          time_difference: response?.data?.video_details?.time_difference,
          views: response?.data?.video_details?.views,
          author: response?.data?.video_details?.author,

          video_id: response?.data?.video_details?.id,
          upvote: response?.data?.video_details?.upvote,
          downvote: response?.data?.video_details?.downvote,
          like_details: response?.data?.video_details?.like_details,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [buttonClicked]);

  console.log(videoPlay, "videoPlay");

  const getComments = () => {
    axios
      .get(
        `${getBaseURL()}/video-comment?user_id=${userId}&video_id=${videoId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res?.data, "comments");
        setGetVideoComments(res?.data?.comments);
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
        console.log(res?.data);
        // console.log(res?.data?.replies);
        setGetReplyVideoComments(res?.data?.replies);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const postVideoComment = () => {
    axios
      .post(`${getBaseURL()}/video-comment`, {
        user_id: userId,
        video_id: videoPlay.video_id,
        content: comment,
      })
      .then((res) => {
        console.log(res.data, "post");
        setComment("");
        setButtonClicked(!buttonClicked);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const postVideoReplyComment = (commentId, replyCommentt) => {
    axios
      .post(`${getBaseURL()}/video-comment-reply`, {
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

  const postVideoCommentLike = (type, commentId) => {
    axios
      .post(`${getBaseURL()}/video-like-comment`, {
        user_id: userId,
        type: type,
        comment_id: commentId,
      })
      .then((res) => {
        // setVideoCommentLike(res.data);
        setButtonClicked(!buttonClicked);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const postVideoReplyLike = (type, commentId) => {
    axios
      .post(`${getBaseURL()}/video-like-reply`, {
        user_id: userId,
        type: type,
        reply_id: commentId,
      })
      .then((res) => {
        // setVideoCommentLikeReply(res?.data);
        setButtonClicked(!buttonClicked);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const postVideoupdo = (type) => {
    axios
      .post(`${getBaseURL()}/video-upvote`, {
        video_id: videoId,
        user_id: userId,
        type: type,
      })
      .then((res) => {
        console.log(res, "updo");
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
  }, [buttonClicked]);

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
                  <p>
                    <Link to={BASE_PATH}>Home</Link>{" "}
                    <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                    Video
                  </p>
                </div>

                <ReactPlayer
                  url={videoPlay.youtube_link}
                  playing={false}
                  controls={true}
                  width="100%"
                  height="60%"
                />
                <ul className="flex link">
                  <li>
                    {videoPlay?.tags?.map((tag, index) => {
                      return <a key={index}> #{tag}</a>;
                    })}
                  </li>
                  <li className="download-btn">
                    <a onClick={() => postVideoupdo("upvote")} href="#">
                      <img
                        className={
                          videoPlay?.like_details?.type == "upvote"
                            ? "borderImage"
                            : "borderImage"
                        }
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
                  </li>
                  <li className="download-btn">
                    <a onClick={() => postVideoupdo("downvote")}>
                      <img
                        className={
                          videoPlay?.like_details?.type == "downvote"
                            ? "borderImage"
                            : "borderImage"
                        }
                        src={
                          videoPlay.upvote == "downvote"
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
                  </li>
                  <li className="download-btn">
                    <WithAuth
                      callBack={(e) => {
                        setDisplayCommentModel(!displayCommentModel);
                      }}
                    >
                      <a>
                        <img
                          src="/app/images/comment-01.png"
                          alt="Genaiguru comment"
                          title="Genaiguru comment"
                        />
                        comment
                      </a>
                    </WithAuth>
                  </li>
                </ul>
                <h2>{videoPlay.title}</h2>
                {/* <!-- view details here --> */}
                <div className="view-details">
                  <a href="#">{videoPlay.views} views | </a>
                  <a href="#">{videoPlay.time_difference} </a>
                  {/* <a href="#">Details</a> */}
                </div>
                {/* <!-- view details end here -->
              <!-- profile  --> */}
                <ul className="profile-video flex">
                  <li>
                    <a href="">
                      <img
                        src={videoPlay.author_profile_image}
                        alt="Genaiguru userIcon"
                        title="Genaiguru userIcon"
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
                                src={profileImage.profile_image}
                                alt="profile_image"
                                title="profile_image"
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
                                  onClick={postVideoComment}
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
                        <div className="review" key={index}>
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
                                    alt={userimageIcon}
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
                                      onClick={() =>
                                        toggleReplyCommentModel(comment.id)
                                      }
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
                                        setDisplayRepliesCommentModel(
                                          (prevStatus) => ({
                                            ...prevStatus,
                                            [comment.id]:
                                              !prevStatus[comment.id],
                                          })
                                        );
                                      }}
                                    >
                                      <i
                                        style={{ marginRight: "5px" }}
                                        class={
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
                                              title="repliedUserIcon"
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
                                                postVideoReplyLike(
                                                  "like",
                                                  reply.id
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
                                                  reply.id
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
                                        src={profileImage.profile_image}
                                        alt="Genaiguru review"
                                        title="Genaiguru review"
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
                                          onClick={() => {
                                            postVideoReplyComment(
                                              comment.id,
                                              replyComment
                                            );
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
              <div className="video-list">
                <h1>More Videos</h1>
                <div className="tab-content">
                  <div className="interest-box flex space-between">
                    <div className="wrap flex">
                      <figure>
                        <a href="#">
                          <video
                            src=""
                            poster="/app/images/videoTabvideoImage.png"
                          ></video>
                        </a>
                        <div className="videoTime flex">
                          <img
                            src="app/images/videoIconBlack.png"
                            alt="Genaiguru videoIconBlack"
                            title="Genaiguru videoIconBlack"
                          />
                          <span>3:38</span>
                        </div>
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
                            <p>24 M view . 3 month ago</p>
                          </div>
                        </div>
                        <p>
                          <a href="#">
                            Navigating the World of ChatGPT and Its Open-source
                            Adversaries
                          </a>
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

                    <div className="wrap flex">
                      <figure>
                        <a href="#">
                          <video
                            src=""
                            poster="/app/images/interestSliderImg.png"
                          ></video>
                        </a>
                        <div className="videoTime flex">
                          <img
                            src="app/images/videoIconBlack.png"
                            alt="Genaiguru videoIconBlack"
                            title="Genaiguru videoIconBlack"
                          />
                          <span>3:38</span>
                        </div>
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
                            <p>24 M view . 3 month ago</p>
                          </div>
                        </div>
                        <p>
                          <a href="#">
                            Navigating the World of ChatGPT and Its Open-source
                            Adversaries
                          </a>
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

                    <div className="wrap flex">
                      <figure>
                        <a href="#">
                          <video
                            src=""
                            poster="/app/images/interestSliderImg.png"
                          ></video>
                        </a>
                        <div className="videoTime flex">
                          <img
                            src="app/images/videoIconBlack.png"
                            alt="Genaiguru videoIconBlack"
                            title="Genaiguru videoIconBlack"
                          />
                          <span>3:38</span>
                        </div>
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
                            <p>24 M view . 3 month ago</p>
                          </div>
                        </div>
                        <p>
                          <a href="#">
                            Navigating the World of ChatGPT and Its Open-source
                            Adversaries
                          </a>
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

                    <div className="wrap flex">
                      <figure>
                        <a href="#">
                          <video
                            src=""
                            poster="/app/images/videoTabvideoImage.png"
                          ></video>
                        </a>
                        <div className="videoTime flex">
                          <img
                            src="app/images/videoIconBlack.png"
                            alt="Genaiguru videoIconBlack"
                            title="Genaiguru videoIconBlack"
                          />
                          <span>3:38</span>
                        </div>
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
                            <p>24 M view . 3 month ago</p>
                          </div>
                        </div>
                        <p>
                          <a href="#">
                            Navigating the World of ChatGPT and Its Open-source
                            Adversaries
                          </a>
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

                    <div className="wrap flex">
                      <figure>
                        <a href="#">
                          <video
                            src=""
                            poster="/app/images/interestSliderImg.png"
                          ></video>
                        </a>
                        <div className="videoTime flex">
                          <img
                            src="app/images/videoIconBlack.png"
                            alt="Genaiguru videoIconBlack"
                            title="Genaiguru videoIconBlack"
                          />
                          <span>3:38</span>
                        </div>
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
                            <p>24 M view . 3 month ago</p>
                          </div>
                        </div>
                        <p>
                          <a href="#">
                            Navigating the World of ChatGPT and Its Open-source
                            Adversaries
                          </a>
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
                </div>
              </div>
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
                // playing={true}

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
                <li className="download-btn">
                  <a onClick={() => postVideoupdo("upvote")} href="#">
                    <img
                      src="/app/images/thumbs-up.png"
                      alt="Genaiguru thumbs-up"
                      title="Genaiguru thumbs-up"
                    />
                    {videoPlay.upvote}
                  </a>

                  <a onClick={() => postVideoupdo("downvote")} href="#">
                    <img
                      src="/app/images/thumbs-down.png"
                      alt="Genaiguru thumbs-down"
                      title="Genaiguru thumbs-down"
                    />
                    {videoPlay.downvote}
                  </a>
                  <WithAuth
                    callBack={(e) => {
                      setDisplayCommentModel(!displayCommentModel);
                    }}
                  >
                    <a>
                      <img
                        src="/app/images/comment-01.png"
                        alt="Genaiguru comment"
                        title="Genaiguru comment"
                      />
                      comment
                    </a>
                  </WithAuth>
                </li>
              </ul>
              <h3>{videoPlay.title}</h3>
              {/* <!-- view details here --> */}
              <div className="view-details">
                <a href="#">{videoPlay.views} Views |</a>
                <a href="#">{videoPlay.time_difference}|</a>
                {/* <a href="#">Details</a> */}
              </div>
              {/* <!-- view details end here --> */}
              {/* <!-- profile  --> */}
              <ul className="profile-video flex">
                <li>
                  <a href="">
                    <img
                      src={videoPlay.author_profile_image}
                      alt="Genaiguru userIcon"
                      title="Genaiguru userIcon"
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
                              src={profileImage.profile_image}
                              alt="profile_image"
                              title="profile_image"
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
                                onClick={postVideoComment}
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
                      <div className="review" key={index}>
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
                                  alt={userimageIcon}
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
                                    onClick={() =>
                                      toggleReplyCommentModel(comment.id)
                                    }
                                  >
                                    Reply
                                  </span>
                                </div>
                                {comment.is_any_reply && (
                                  <p
                                    className="d_blck"
                                    style={{
                                      cursor: "pointer",
                                    }}
                                    onClick={() => {
                                      getReplyComments(comment.id);
                                      setDisplayRepliesCommentModel(
                                        (prevStatus) => ({
                                          ...prevStatus,
                                          [comment.id]: !prevStatus[comment.id],
                                        })
                                      );
                                    }}
                                  >
                                    <i
                                      style={{ marginRight: "5px" }}
                                      class={
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
                                            title="repliedUserIcon"
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
                                                reply.id
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
                                                reply.id
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
                                      src={profileImage.profile_image}
                                      alt="Genaiguru review"
                                      title="Genaiguru review"
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
                                        onClick={() => {
                                          postVideoReplyComment(
                                            comment.id,
                                            replyComment
                                          );
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
              {/* <div className="review">
                <ul>
                  <li>
                    <a href="#">
                      <figure>
                        <img
                          src="/app/images/review-1.png"
                          alt="Genaiguru review"
                          title="Genaiguru review"
                        />
                      </figure>
                      <span>
                        <span>Prosing kingdom </span>
                        <br />
                        <small>
                          This is great ksnifdni9dsrhngi9dsbngiyb
                        </small>{" "}
                        <br />
                        <img src="/app/images/thumbs-up.png" alt="" />{" "}
                        <img src="/app/images/thumbs-down.png" alt="" />
                        Reply
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <figure>
                        <img
                          src="/app/images/review-1.png"
                          alt="Genaiguru review"
                          title="Genaiguru review"
                        />
                      </figure>
                      <span>
                        Prosing kingdom <br />
                        <small>
                          This is great ksnifdni9dsrhngi9dsbngiyb
                        </small>{" "}
                        <br />
                        <img
                          src="/app/images/thumbs-up.png"
                          alt="genaiguru-thumbs-up"
                        />{" "}
                        <img
                          src="/app/images/thumbs-down.png"
                          alt="genaiguru-thumbs-down"
                        />
                        Reply
                      </span>
                    </a>
                  </li>
                </ul>
              </div> */}

              {/* <!-- review end --> */}
            </div>
            <div className="video-list">
              <h1>More Videos</h1>
              <div className="tab-content">
                <div className="interest-box flex space-between">
                  <div className="wrap flex">
                    <figure>
                      <a href="#">
                        <video
                          src=""
                          poster="/app/images/videoTabvideoImage.png"
                        ></video>
                      </a>
                      <div className="videoTime flex">
                        <img
                          src="app/images/videoIconBlack.png"
                          alt="Genaiguru videoIconBlack"
                          title="Genaiguru videoIconBlack"
                        />
                        <span>3:38</span>
                      </div>
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
                          <p>24 M view . 3 month ago</p>
                        </div>
                      </div>
                      <p>
                        <a href="#">
                          Navigating the World of ChatGPT and Its Open-source
                          Adversaries
                        </a>
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

                  <div className="wrap flex">
                    <figure>
                      <a href="#">
                        <video
                          src=""
                          poster="/app/images/interestSliderImg.png"
                        ></video>
                      </a>
                      <div className="videoTime flex">
                        <img
                          src="app/images/videoIconBlack.png"
                          alt="Genaiguru videoIconBlack"
                          title="Genaiguru videoIconBlack"
                        />
                        <span>3:38</span>
                      </div>
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
                          <p>24 M view . 3 month ago</p>
                        </div>
                      </div>
                      <p>
                        <a href="#">
                          Navigating the World of ChatGPT and Its Open-source
                          Adversaries
                        </a>
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

                  <div className="wrap flex">
                    <figure>
                      <a href="#">
                        <video
                          src=""
                          poster="/app/images/interestSliderImg.png"
                        ></video>
                      </a>
                      <div className="videoTime flex">
                        <img
                          src="app/images/videoIconBlack.png"
                          alt="Genaiguru videoIconBlack"
                          title="Genaiguru videoIconBlack"
                        />
                        <span>3:38</span>
                      </div>
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
                          <p>24 M view . 3 month ago</p>
                        </div>
                      </div>
                      <p>
                        <a href="#">
                          Navigating the World of ChatGPT and Its Open-source
                          Adversaries
                        </a>
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

                  <div className="wrap flex">
                    <figure>
                      <a href="#">
                        <video
                          src=""
                          poster="/app/images/videoTabvideoImage.png"
                        ></video>
                      </a>
                      <div className="videoTime flex">
                        <img
                          src="app/images/videoIconBlack.png"
                          alt="Genaiguru videoIconBlack"
                          title="Genaiguru videoIconBlack"
                        />
                        <span>3:38</span>
                      </div>
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
                          <p>24 M view . 3 month ago</p>
                        </div>
                      </div>
                      <p>
                        <a href="#">
                          Navigating the World of ChatGPT and Its Open-source
                          Adversaries
                        </a>
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

                  <div className="wrap flex">
                    <figure>
                      <a href="#">
                        <video
                          src=""
                          poster="/app/images/interestSliderImg.png"
                        ></video>
                      </a>
                      <div className="videoTime flex">
                        <img
                          src="app/images/videoIconBlack.png"
                          alt="Genaiguru videoIconBlack"
                          title="Genaiguru videoIconBlack"
                        />
                        <span>3:38</span>
                      </div>
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
                          <p>24 M view . 3 month ago</p>
                        </div>
                      </div>
                      <p>
                        <a href="#">
                          Navigating the World of ChatGPT and Its Open-source
                          Adversaries
                        </a>
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
