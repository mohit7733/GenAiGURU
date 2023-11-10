import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      {/* <!-- header section start here --> */}
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
              />{" "}
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
          {/* <!-- banner start here --> */}
          <div class="profile-banner"></div>

          {/* <!-- banner end here -->
            <!-- profile img start here --> */}
          <div class="row flex space-between">
            <div class="profile-img">
              <figure>
                <img
                  src="/app/images/userIcon.png"
                  alt="Genaiguru user-icon"
                  title="Genaiguru user-icon"
                />
              </figure>
              <h3>Esther Howard</h3>
              <p>
                Philosophy student|| Content writer|| Avid Writer||
                Storyteller|| Technical Writer|| Tech Trends ||
              </p>
              <div class="followers">
                <ul class="flex space-between">
                  <li>
                    <a href="#">
                      <span>118</span> Following
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>23k</span> Followers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="edit-profile">
              <div class="profile-link">
                <Link to={"/phasepage2"} class="pop-up">
                  Edit profile
                </Link>
              </div>
              <ul class="connect-link flex">
                <li>
                  <a href="#" class="tab " data-toggle-target=".tab-content-1">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" class="tab " data-toggle-target=".tab-content-2">
                    Posts
                  </a>
                </li>
                <li>
                  <a href="#" class="tab " data-toggle-target=".tab-content-3">
                    Videos
                  </a>
                </li>
                <li>
                  <a href="#" class="tab " data-toggle-target=".tab-content-4">
                    Badges
                  </a>
                </li>
              </ul>
              {/* <!-- Content --> */}
              <div class="tab-content tab-content-1 active">
                <div class="intrest-area">
                  <h5>My Interests</h5>
                  <ul class="flex link-button">
                    <li>
                      <a href="#">GPT</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Large language models</a>{" "}
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="addBtns addInterest">
                        +
                      </a>
                    </li>
                  </ul>
                  <div class="social-link">
                    <h4>
                      My social link{" "}
                      <Link to={"/phasepage3"}>
                        <img
                          src="/app/images/edit-icon.png"
                          alt="Genaiguru edit-icon"
                          title="Genaiguru edit-icon"
                        />
                        Edit
                      </Link>
                    </h4>
                    <ul>
                      <li>
                        <a href="#">
                          <figure>
                            <img
                              src="/app/images/twitter.png"
                              alt="Genaiguru twitter"
                              title="Genaiguru Genaiguru twitter"
                            />
                          </figure>
                          <span>Twitter</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <figure>
                            <img
                              src="/app/images/facebookIcon.png"
                              alt="Genaiguru facebookIcon"
                              title="Genaiguru facebookIcon"
                            />
                          </figure>
                          <span>Facebook</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <figure>
                            <img
                              src="/app/images/youtubeIcon.png"
                              alt="Genaiguru youtube"
                              title="Genaiguru Youtube"
                            />
                          </figure>
                          <span>Youtube</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <figure>
                            <img
                              src="/app/images/linkdin-icon.png"
                              alt="Genaiguru linkdin-icon"
                              title="Genaiguru linkdin-icon"
                            />
                          </figure>
                          <span>LinkedIn</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <figure>
                            <img
                              src="/app/images/insta-icon.png"
                              alt="Genaiguru insta-icon"
                              title="Genaiguru insta-icon"
                            />
                          </figure>
                          <span>Instagram</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- post here --> */}
              <div class="tab-content tab-content-2">
                <div class="home-interest">
                  <div class="heading-link flex"></div>
                  <div class="interest-box flex space-between">
                    <div class="wrap flex">
                      <figure>
                        <a href="#">
                          <img
                            src="app/images/interestSliderImg.png"
                            alt="Genaiguru intrest"
                            title="Genaiguru intrest"
                          />
                        </a>
                      </figure>
                      <div class="content">
                        <div class="wrapper flex">
                          <figure>
                            <img
                              src="app/images/authorImg.png"
                              alt="Genaiguru authorImg"
                              title="Genaiguru  authorImg"
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
                                alt="Genaiguru dots-icon"
                                title="Genaiguru dots-icon"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="wrap flex">
                      <figure>
                        <a href="#">
                          <img
                            src="app/images/interestSliderImg.png"
                            alt="Genaiguru intrestsliderimg"
                            title="Genaiguru intrestsliderimg"
                          />
                        </a>
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
                                alt="Genaiguru book-mark"
                                title="Genaiguru book-mark"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="app/images/dotsIcons.png"
                                alt="Genaiguru dots-icon"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="wrap flex">
                      <figure>
                        <a href="#">
                          <img
                            src="app/images/interestSliderImg.png"
                            alt="Genaiguru interestSliderImg  "
                            title="Genaiguru interestSliderImg "
                          />
                        </a>
                      </figure>
                      <div class="content">
                        <div class="wrapper flex">
                          <figure>
                            <img
                              src="app/images/authorImg.png"
                              alt="Genaiguru authorImg "
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
                                alt="Genaiguru book-mark"
                                title="Genaiguru book-mark"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="app/images/dotsIcons.png"
                                alt="Genaiguru dots-icon"
                                title="Genaiguru dots-icon"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="wrap flex">
                      <figure>
                        <a href="#">
                          <img
                            src="app/images/interestSliderImg.png"
                            alt="Genaiguru intrestsliderimg"
                            title="Genaiguru intrestsliderimg"
                          />
                        </a>
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
                                alt="Genaiguru book-mark"
                                title="Genaiguru book-mark"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="app/images/dotsIcons.png"
                                alt="Genaiguru dots "
                                title="Genaiguru book-mark"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="wrap flex">
                      <figure>
                        <a href="#">
                          <img
                            src="app/images/interestSliderImg.png"
                            alt="Genaiguru"
                            title="Genaiguru intrest-slider"
                          />
                        </a>
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
                                alt="Genaiguru bookmark"
                                title="Genaiguru bookmark"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="app/images/dotsIcons.png"
                                alt="Genaiguru dots"
                                title="Genaiguru dots"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- video here --> */}
              <div class="tab-content tab-content-3">
                <div class="home-interest">
                  <div class="heading-link flex"></div>
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
              {/* <!-- video end here -->
                <!-- badges here --> */}
              <div class="tab-content tab-content-4">
                <div class="badges-box">
                  <ul class="flex ">
                    <li>
                      <a href="#">
                        <img
                          src="/app/images/ux-writter.png"
                          alt="Genaiguru ux-writter"
                          title="Genaiguru ux-writter"
                        />
                        <span>UX writer</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/app/images/ux-writter.png"
                          alt="Genaiguru ux-writter"
                          title="Genaiguru ux-writter"
                        />
                        <span>UX listner</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/app/images/ux-writter.png"
                          alt="Genaiguru ux-listner"
                          title="Genaiguru ux-listner"
                        />
                        <span>UX listner</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/app/images/ux-writet-2.png"
                          alt="Genaiguru  ux-writter"
                          title="Genaiguru  ux-writter"
                        />
                        <span>UX writer</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/app/images/ux-listner-2.png"
                          alt="Genaiguru ux-writter"
                          title="Genaiguru  ux-writter"
                        />
                        <span>UX writer</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/app/images/ux-listner-2.png"
                          alt="Genaiguru ux-listner"
                          title="Genaiguru ux-listner"
                        />
                        <span>UX listner</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/app/images/ux-writter.png"
                          alt="Genaiguru-ux-listner"
                          title="Genaiguru-ux-listner"
                        />
                        <span>UX writer</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/app/images/ux-writet-2.png"
                          alt="Genaiguru ux-writter"
                          title="genaiguru-ux-writter"
                        />
                        <span>UX writer</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/app/images/ux-writer-dis-active.png"
                          alt="genaiguru-ux-writter"
                          title="genaiguru-ux-writter"
                        />
                        <span>UX writer</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/app/images/ux-writer-dis-active.png"
                          alt="genaiguru-ux-writter"
                          title="genaiguru-ux-writter"
                        />
                        <span>Add</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="popup-container">
        <div class="popup-wrapper ">
          <div class="popup-header flex">
            <h2>
              Add or change your <br /> interested topic
            </h2>
            <a href="#" class="cross_btn">
              <img
                src="app/images/cancelButtonIcon.png"
                alt="Genaiguru cross-icon"
                title="Genaiguru cross-icon"
              />
            </a>
          </div>
          <div class="popupp-btn-box">
            <form action="">
              <div class="flex">
                <div class="button-container">
                  {" "}
                  <input
                    name=""
                    id=""
                    class="ai-button"
                    type="button"
                    value="Artificial intelligence"
                  />
                </div>
                <div class="button-container">
                  {" "}
                  <input
                    name=""
                    id=""
                    class="ai-button"
                    type="button"
                    value="Open AI"
                  />
                </div>
                <div class="button-container">
                  {" "}
                  <input
                    name=""
                    id=""
                    class="ai-button"
                    type="button"
                    value="Blockchain"
                  />
                </div>
                <div class="button-container">
                  {" "}
                  <input
                    name=""
                    id=""
                    class="ai-button"
                    type="button"
                    value="Topic 02"
                  />
                </div>
                <div class="button-container">
                  {" "}
                  <input
                    name=""
                    id=""
                    class="ai-button"
                    type="button"
                    value="Digital innovation"
                  />
                </div>
                <div class="button-container">
                  {" "}
                  <input
                    name=""
                    id=""
                    class="ai-button"
                    type="button"
                    value="Mid-journey"
                  />
                </div>
                <div class="button-container">
                  {" "}
                  <input
                    name=""
                    id=""
                    class="ai-button"
                    type="button"
                    value="Artificial intelligence"
                  />
                </div>
                <div class="button-container">
                  {" "}
                  <input
                    name=""
                    id=""
                    class="ai-button"
                    type="button"
                    value="GPT"
                  />
                </div>
                <div class="button-container">
                  {" "}
                  <input
                    name=""
                    id=""
                    class="ai-button"
                    type="button"
                    value="Data science"
                  />
                </div>
                <div class="button-container">
                  {" "}
                  <input
                    name=""
                    id=""
                    class="ai-button"
                    type="button"
                    value="Machine learning"
                  />
                </div>
                <div class="button-container">
                  {" "}
                  <input
                    name=""
                    id=""
                    class="ai-button"
                    type="button"
                    value="Large language models"
                  />
                </div>
                <div class="button-container">
                  {" "}
                  <input
                    name=""
                    id=""
                    class="ai-button"
                    type="button"
                    value="NLP"
                  />
                </div>
              </div>
              <button type="submit" class="loginBtn">
                Add Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
