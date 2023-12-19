import React, { useEffect, useState } from "react";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import { useLocation } from "react-router";
import axios from "axios";
import { getBaseURL } from "../../api/config";
import ReactPlayer from "react-player";
import { BASE_PATH } from "../../routes";
import { Link } from "react-router-dom";

const VideoPlay = () => {
  const [videoPlay, setVideoPlay] = useState({
    title: "",
    youtube_link: "",
    tags: [],
  });
  const token = JSON.parse(localStorage.getItem("token"));

  // useLocation to get id from url
  let location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const videoId = queryParam.get("id");


  useEffect(() => {
    axios
      .get(`${getBaseURL()}/popular-latest-videos?id=${videoId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setVideoPlay({
          title: response?.data?.video_details?.title,
          youtube_link: response?.data?.video_details?.youtube_link,
          tags: response?.data?.video_details?.tags,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
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
                  width="100%"
                  height="60%"
                />
                <ul className="flex space-between link">
                  <li>
                    {videoPlay?.tags?.map((tag, index) => {
                      return <a key={index}>#{tag}</a>;
                    })}
                  </li>
                  <li className="download-btn">
                    <a href="#">
                      <img
                        src="/app/images/thumbs-up.png"
                        alt="Genaiguru thumbs-up"
                        title="Genaiguru thumbs-up"
                      />
                      upvote
                    </a>

                    <a href="">
                      <img
                        src="/app/images/thumbs-down.png"
                        alt="Genaiguru thumbs-down"
                        title="Genaiguru thumbs-down"
                      />
                      Download
                    </a>
                    <a href="#">
                      <img
                        src="/app/images/comment-01.png"
                        alt="Genaiguru comment"
                        title="Genaiguru comment"
                      />
                      comment
                    </a>
                  </li>
                </ul>
                <h2>{videoPlay.title}</h2>
                {/* <!-- view details here --> */}
                <div className="view-details">
                  <a href="#">24 M views |</a>
                  <a href="#">3 months |</a>
                  <a href="#">Details</a>
                </div>
                {/* <!-- view details end here -->
              <!-- profile  --> */}
                <ul className="profile-video flex">
                  <li>
                    <a href="">
                      <img
                        src="/app/images/userIcon.png"
                        alt="Genaiguru userIcon"
                        title="Genaiguru userIcon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span>Esther Howard </span>
                      <br />
                      <small>alexsmih@</small>
                    </a>
                  </li>
                </ul>
                {/* <!--profile -end -->
                  <!-- review start --> */}
                <div className="review">
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
                        </span>
                        <small>This is great ksnifdni9dsrhngi9dsbngiyb</small>{" "}
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
                      </a>
                    </li>
                  </ul>
                </div>

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
            {/* <!-- edit-profile start here --> */}
          </div>
        </div>
      </section>
      {/* <!-- video section mobile start here --> */}
      <div className="mob_profile hideDes">
        <div className="mobileHead flex">
          <div className="backBtns">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </div>
          <h2>Videos</h2>
        </div>
        <div className="innerVideosection rightSection">
          <div className="video-wrapper flex">
            <div className="video-box">
              <video src="" poster="/app/images/cartonn-vdeo.png"></video>
              <ul className="flex space-between link">
                <li>
                  <a href="#">#finace #crypto #economy</a>
                </li>
                <li className="download-btn">
                  <a href="#">
                    <img
                      src="/app/images/thumbs-up.png"
                      alt="Genaiguru thumbs-up"
                      title="Genaiguru thumbs-up"
                    />{" "}
                    upvote
                  </a>{" "}
                  <a href="">
                    <img
                      src="/app/images/thumbs-down.png"
                      alt="Genaiguru thumbs-down"
                      title="Genaiguru thumbs-down"
                    />
                    Download
                  </a>{" "}
                  <a href="#">
                    <img
                      src="/app/images/comment-01.png"
                      alt="Genaiguru comment"
                      title="Genaiguru comment"
                    />
                    comment
                  </a>
                </li>
              </ul>
              <h3>
                Navigating the world of ChatGPT and Its open-source adversaries
              </h3>
              {/* <!-- view details here --> */}
              <div className="view-details">
                <a href="#">24 M views |</a>
                <a href="#">3 months |</a>
                <a href="#">Details</a>
              </div>
              {/* <!-- view details end here --> */}
              {/* <!-- profile  --> */}
              <ul className="profile-video flex">
                <li>
                  <a href="">
                    <img
                      src="/app/images/userIcon.png"
                      alt="Genaiguru userIcon"
                      title="Genaiguru userIcon"
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <span>Esther Howard </span>
                    <br />
                    <small>alexsmih@</small>
                  </a>
                </li>
              </ul>
              {/* <!--profile -end -->
                  <!-- review start --> */}
              <div className="review">
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
              </div>

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
