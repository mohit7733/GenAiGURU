import React from "react";

const VideoPlay = () => {
  return (
    <div>
      <header class="flex">
        <div class="hamburger">
          <img
            src="app/images/hamburgerIcon.png"
            alt="Genaiguru hamburger"
            title="Genaiguru hamburger "
          />
        </div>
        <figure class="headerLogo">
          <a href="#">
            <img
              src="app/images/headerLogo.png"
              alt="Genaiguru header logo"
              title="Genaiguru logo"
            />
          </a>
        </figure>
        <div class="searchbar flex">
          <figure class="icon">
            <img
              src="app/images/searchIconHeader.png"
              alt="Genaiguru small logo"
              title="Genaiguru small logo"
            />
          </figure>
          <form action="">
            <div class="form_group">
              <input type="search" placeholder="Search genaiguru" />
            </div>
          </form>
        </div>
        <ul class="leftSide flex">
          <li class="headerIcon">
            <a href="#">
              <img
                src="app/images/notificationIcon.png"
                alt="Genaiguru notificationIcon"
                title="Genaiguru notificationIcon"
              />
            </a>
          </li>
          <li class="headerIcon">
            <a href="#">
              <img
                src="app/images/elementsIcon.png"
                alt="Genaiguru elementsIcon"
                title="Genaiguru elementsIcon"
              />{" "}
              <span class="count">22</span>
            </a>
          </li>
          <li class="secondaryBtn">
            <a href="#">
              <img
                src="app/images/padIcon.png"
                alt="Genaiguru padIcon"
                title="Genaiguru padIcon"
              />{" "}
              Write to AI
            </a>
          </li>
          <li class="secondaryBtn mobile">
            <a href="#">
              <img
                src="app/images/padIcon.png"
                alt="Genaiguru mobile padIcon"
                title="Genaiguru mobile padIcon"
              />
              Write
            </a>
          </li>
          <li class="userIcon">
            <a href="#">
              <img
                src="app/images/userIcon.png"
                alt="Genaiguru user image"
                title="Genaiguru user image"
              />
            </a>
            <ul class="userNav">
              <li>
                <a href="#">Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      </header>
      {/* <!-- header section end here -->

  <!-- main section start here --> */}
      <section class="mainWrapper flex">
        <div class="leftSidebar">
          <ul class="menu">
            <li>
              <a href="#">
                <figure>
                  <img
                    src="app/images/homeIcon.png"
                    alt="Genaiguru home icon"
                    title="Genaiguru home icon"
                  />
                </figure>
                Home
              </a>
            </li>
            <li>
              <a href="#">
                <figure>
                  <img
                    src="app/images/guruGoldIcon.png"
                    alt="Genaiguru guruGoldIcon"
                    title="Genaiguru guruGoldIcon"
                  />
                </figure>
                Gurugold
              </a>
            </li>
            <li>
              <a href="#">
                <figure>
                  <img
                    src="app/images/guruKeepsIcon.png"
                    alt="Genaiguru guruKeepsIcon"
                    title="Genaiguru guruKeepsIcon"
                  />
                </figure>
                Guru keeps
              </a>
            </li>
            <li>
              <a href="#">
                <figure>
                  <img
                    src="app/images/guruJournalIcon.png"
                    alt="Genaiguru guruJournalIcon"
                    title="Genaiguru guruJournalIcon"
                  />
                </figure>
                Guru journal
              </a>
            </li>
            <li>
              <a href="#">
                <figure>
                  <img
                    src="app/images/teamGuruIcon.png"
                    alt="Genaiguru teamGuruIcon"
                    title="Genaiguru teamGuruIcon"
                  />
                </figure>
                Team guru
              </a>
            </li>
            <li>
              <a href="#">
                <figure>
                  <img
                    src="app/images/contactToGuruIcon.png"
                    alt="Genaiguru contactToGuruIcon"
                    title="Genaiguru contactToGuruIcon"
                  />
                </figure>
                Contact to guru genesis
              </a>
            </li>
            <li>
              <a href="#">
                <figure>
                  <img
                    src="app/images/settingIcon.png"
                    alt="Genaiguru settingIcon"
                    title="Genaiguru settingIcon"
                  />
                </figure>
                Settings
              </a>
            </li>
          </ul>
          <div class="newsletter">
            <h5>Joining our newsletter</h5>
            <form action="">
              <div class="form_group">
                <input type="email" placeholder="Email address" />
              </div>
              <div class="form_group">
                <button type="button" class="loginBtn">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <ul class="bottom-menu">
            <li>
              <a href="#">Terms & Services</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
          </ul>
          <ul class="social-icons flex">
            <li>
              <a href="#" target="_blank">
                <img
                  src="app/images/facebookIconNew.png"
                  alt="Genaiguru facebook icon"
                  title="Genaiguru on facebook"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img
                  src="app/images/youtubeIcon.png"
                  alt="Genaiguru youtube icon"
                  title="Genaiguru on youtube"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img
                  src="app/images/twitter.png"
                  alt="Genaiguru twitter icon"
                  title="Genaiguru on twitter"
                />
              </a>
            </li>
          </ul>
        </div>
        <div class="rightSection">
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
                Navigating the world of ChatGPT and Its open-source adversaries
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
      </section>
    </div>
  );
};

export default VideoPlay;
