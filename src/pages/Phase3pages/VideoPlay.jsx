import React from "react";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";

const VideoPlay = () => {
  return (
    <div>
      <MobileHeader />
      {/* <!-- main section start here --> */}
      <section class="mainWrapper flex hideMob">
        <Sidebar />
        <div className="rightSection">
          <div class="full-width">
            {/* <!-- edit-profile start here --> */}
            <div class="video-wrapper flex">
              <div class="video-box">
                <p>
                  <i class="fa fa-angle-left" aria-hidden="true"></i> Videos
                </p>
                <video src="" poster="/app/images/cartonn-vdeo.png"></video>
                <ul class="flex space-between link">
                  <li>
                    <a href="#">#finace #crypto #economy</a>
                  </li>
                  <li class="download-btn">
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
                <h3>
                  Navigating the world of ChatGPT and Its open-source
                  adversaries
                </h3>
                {/* <!-- view details here --> */}
                <div class="view-details">
                  <a href="#">24 M views |</a>
                  <a href="#">3 months |</a>
                  <a href="#">Details</a>
                </div>
                {/* <!-- view details end here -->
              <!-- profile  --> */}
                <ul class="profile-video flex">
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
                <div class="review">
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
              <div class="video-list">
                <h1>More Videos</h1>
                <div class="tab-content">
                  <div class="interest-box flex space-between">
                    <div class="wrap flex">
                      <figure>
                        <a href="#">
                          <video
                            src=""
                            poster="/app/images/videoTabvideoImage.png"
                          ></video>
                        </a>
                        <div class="videoTime flex">
                          <img
                            src="app/images/videoIconBlack.png"
                            alt="Genaiguru videoIconBlack"
                            title="Genaiguru videoIconBlack"
                          />
                          <span>3:38</span>
                        </div>
                      </figure>
                      <div class="content">
                        <div class="wrapper flex">
                          <figure>
                            <img
                              src="app/images/authorImg.png"
                              alt="Genaiguru authorImg"
                              title="Genaiguru authorImg"
                            />
                          </figure>
                          <div class="innerContent">
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
                        <ul class="flex">
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

                    <div class="wrap flex">
                      <figure>
                        <a href="#">
                          <video
                            src=""
                            poster="/app/images/interestSliderImg.png"
                          ></video>
                        </a>
                        <div class="videoTime flex">
                          <img
                            src="app/images/videoIconBlack.png"
                            alt="Genaiguru videoIconBlack"
                            title="Genaiguru videoIconBlack"
                          />
                          <span>3:38</span>
                        </div>
                      </figure>
                      <div class="content">
                        <div class="wrapper flex">
                          <figure>
                            <img
                              src="app/images/authorImg.png"
                              alt="Genaiguru authorImg"
                              title="Genaiguru authorImg"
                            />
                          </figure>
                          <div class="innerContent">
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
                        <ul class="flex">
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

                    <div class="wrap flex">
                      <figure>
                        <a href="#">
                          <video
                            src=""
                            poster="/app/images/interestSliderImg.png"
                          ></video>
                        </a>
                        <div class="videoTime flex">
                          <img
                            src="app/images/videoIconBlack.png"
                            alt="Genaiguru videoIconBlack"
                            title="Genaiguru videoIconBlack"
                          />
                          <span>3:38</span>
                        </div>
                      </figure>
                      <div class="content">
                        <div class="wrapper flex">
                          <figure>
                            <img
                              src="app/images/authorImg.png"
                              alt="Genaiguru authorImg"
                              title="Genaiguru authorImg"
                            />
                          </figure>
                          <div class="innerContent">
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
                        <ul class="flex">
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

                    <div class="wrap flex">
                      <figure>
                        <a href="#">
                          <video
                            src=""
                            poster="/app/images/videoTabvideoImage.png"
                          ></video>
                        </a>
                        <div class="videoTime flex">
                          <img
                            src="app/images/videoIconBlack.png"
                            alt="Genaiguru videoIconBlack"
                            title="Genaiguru videoIconBlack"
                          />
                          <span>3:38</span>
                        </div>
                      </figure>
                      <div class="content">
                        <div class="wrapper flex">
                          <figure>
                            <img
                              src="app/images/authorImg.png"
                              alt="Genaiguru authorImg"
                              title="Genaiguru authorImg"
                            />
                          </figure>
                          <div class="innerContent">
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
                        <ul class="flex">
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

                    <div class="wrap flex">
                      <figure>
                        <a href="#">
                          <video
                            src=""
                            poster="/app/images/interestSliderImg.png"
                          ></video>
                        </a>
                        <div class="videoTime flex">
                          <img
                            src="app/images/videoIconBlack.png"
                            alt="Genaiguru videoIconBlack"
                            title="Genaiguru videoIconBlack"
                          />
                          <span>3:38</span>
                        </div>
                      </figure>
                      <div class="content">
                        <div class="wrapper flex">
                          <figure>
                            <img
                              src="app/images/authorImg.png"
                              alt="Genaiguru authorImg"
                              title="Genaiguru authorImg"
                            />
                          </figure>
                          <div class="innerContent">
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
                        <ul class="flex">
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
      <div class="mob_profile hideDes">
        <div class="mobileHead flex">
          <div class="backBtns">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
          </div>
          <h2>Videos</h2>
        </div>
        <div class="innerVideosection rightSection">
          <div class="video-wrapper flex">
            <div class="video-box">
              <video src="" poster="/app/images/cartonn-vdeo.png"></video>
              <ul class="flex space-between link">
                <li>
                  <a href="#">#finace #crypto #economy</a>
                </li>
                <li class="download-btn">
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
              <div class="view-details">
                <a href="#">24 M views |</a>
                <a href="#">3 months |</a>
                <a href="#">Details</a>
              </div>
              {/* <!-- view details end here --> */}
              {/* <!-- profile  --> */}
              <ul class="profile-video flex">
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
              <div class="review">
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
            <div class="video-list">
              <h1>More Videos</h1>
              <div class="tab-content">
                <div class="interest-box flex space-between">
                  <div class="wrap flex">
                    <figure>
                      <a href="#">
                        <video
                          src=""
                          poster="/app/images/videoTabvideoImage.png"
                        ></video>
                      </a>
                      <div class="videoTime flex">
                        <img
                          src="app/images/videoIconBlack.png"
                          alt="Genaiguru videoIconBlack"
                          title="Genaiguru videoIconBlack"
                        />
                        <span>3:38</span>
                      </div>
                    </figure>
                    <div class="content">
                      <div class="wrapper flex">
                        <figure>
                          <img
                            src="app/images/authorImg.png"
                            alt="Genaiguru authorImg"
                            title="Genaiguru authorImg"
                          />
                        </figure>
                        <div class="innerContent">
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
                      <ul class="flex">
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

                  <div class="wrap flex">
                    <figure>
                      <a href="#">
                        <video
                          src=""
                          poster="/app/images/interestSliderImg.png"
                        ></video>
                      </a>
                      <div class="videoTime flex">
                        <img
                          src="app/images/videoIconBlack.png"
                          alt="Genaiguru videoIconBlack"
                          title="Genaiguru videoIconBlack"
                        />
                        <span>3:38</span>
                      </div>
                    </figure>
                    <div class="content">
                      <div class="wrapper flex">
                        <figure>
                          <img
                            src="app/images/authorImg.png"
                            alt="Genaiguru authorImg"
                            title="Genaiguru authorImg"
                          />
                        </figure>
                        <div class="innerContent">
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
                      <ul class="flex">
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

                  <div class="wrap flex">
                    <figure>
                      <a href="#">
                        <video
                          src=""
                          poster="/app/images/interestSliderImg.png"
                        ></video>
                      </a>
                      <div class="videoTime flex">
                        <img
                          src="app/images/videoIconBlack.png"
                          alt="Genaiguru videoIconBlack"
                          title="Genaiguru videoIconBlack"
                        />
                        <span>3:38</span>
                      </div>
                    </figure>
                    <div class="content">
                      <div class="wrapper flex">
                        <figure>
                          <img
                            src="app/images/authorImg.png"
                            alt="Genaiguru authorImg"
                            title="Genaiguru authorImg"
                          />
                        </figure>
                        <div class="innerContent">
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
                      <ul class="flex">
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

                  <div class="wrap flex">
                    <figure>
                      <a href="#">
                        <video
                          src=""
                          poster="/app/images/videoTabvideoImage.png"
                        ></video>
                      </a>
                      <div class="videoTime flex">
                        <img
                          src="app/images/videoIconBlack.png"
                          alt="Genaiguru videoIconBlack"
                          title="Genaiguru videoIconBlack"
                        />
                        <span>3:38</span>
                      </div>
                    </figure>
                    <div class="content">
                      <div class="wrapper flex">
                        <figure>
                          <img
                            src="app/images/authorImg.png"
                            alt="Genaiguru authorImg"
                            title="Genaiguru authorImg"
                          />
                        </figure>
                        <div class="innerContent">
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
                      <ul class="flex">
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

                  <div class="wrap flex">
                    <figure>
                      <a href="#">
                        <video
                          src=""
                          poster="/app/images/interestSliderImg.png"
                        ></video>
                      </a>
                      <div class="videoTime flex">
                        <img
                          src="app/images/videoIconBlack.png"
                          alt="Genaiguru videoIconBlack"
                          title="Genaiguru videoIconBlack"
                        />
                        <span>3:38</span>
                      </div>
                    </figure>
                    <div class="content">
                      <div class="wrapper flex">
                        <figure>
                          <img
                            src="app/images/authorImg.png"
                            alt="Genaiguru authorImg"
                            title="Genaiguru authorImg"
                          />
                        </figure>
                        <div class="innerContent">
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
                      <ul class="flex">
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
