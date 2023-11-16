import React from "react";

const LeaderBoard = () => {
  return (
    <>
      {/* <header class="flex">
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
      </header> */}
      {/* <!-- header section end here -->

  <!-- main section start here --> */}
      <section class="mainWrapper flex">
        {/* <div class="leftSidebar">
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
        </div> */}
        <div class="rightSection">
          <div class="guru-gold-silver">
            <div class="innerBreadcrumb">
              <p>
                <a href="#">Gurugold</a>{" "}
                <i class="fa fa-angle-right" aria-hidden="true"></i> Leaderboard
              </p>
            </div>
            <h1>Leaderboard</h1>
            <div class="center-box">
              <div class="topThreeBox">
                <div class="topThreeBoxWrap">
                  <h4>Top 3</h4>
                  <ul class="flex space-between ">
                    <li>
                      <figure>
                        <img
                          src="./app/images/userIcon.png"
                          alt="Genaiguru user-icon"
                          title="Genaiguru user-icon"
                        />
                        <div class="rankIcon">#2</div>
                      </figure>
                      <div class="content">
                        <p>
                          11,000 <span>points</span>
                        </p>
                        <h6>jakob</h6>
                      </div>
                    </li>
                    <li>
                      <figure>
                        <img
                          src="./app/images/userIcon.png"
                          alt="Genaiguru user-icon"
                          title="Genaiguru user-icon"
                        />
                        <div class="rankIcon">#1</div>
                      </figure>
                      <div class="content">
                        <p>
                          12,000 <span>points</span>
                        </p>
                        <h6>johon Filim</h6>
                      </div>
                    </li>
                    <li>
                      <figure>
                        <img
                          src="./app/images/userIcon.png"
                          alt="Genaiguru user-icon"
                          title="Genaiguru user-icon"
                        />
                        <div class="rankIcon">#3</div>
                      </figure>
                      <div class="content">
                        <p>
                          10,000 <span>points</span>
                        </p>
                        <h6>Rakob</h6>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- tabs start here  --> */}
            <ul class="connect-link flex">
              <li>
                <a
                  href="#"
                  class="tab active"
                  data-toggle-target=".tab-content-1"
                >
                  Weekly{" "}
                  <figure>
                    <img
                      src="./app/images/down-icons.png"
                      alt="Genaiguru down-icons"
                      title="Genaiguru down-icons"
                    />
                  </figure>
                </a>
              </li>
              <li>
                <a href="#" class="tab " data-toggle-target=".tab-content-2">
                  Worldwide{" "}
                  <figure>
                    <img
                      src="./app/images/down-icons.png"
                      alt="Genaiguru down-icons"
                      title="Genaiguru down-icons"
                    />
                  </figure>
                </a>
              </li>
            </ul>
            {/* <!-- tab-link start here -->
<!-- tab-content here --> */}
            <div class="tab-content tab-content-1 active">
              <div class="list-container">
                <div class="row flex space-between">
                  <div class="profile">
                    <ul>
                      <li>
                        <div class="img-box">
                          <span>4</span>
                          <a href="">
                            <img
                              src="./app/images/leader-user-4.png"
                              alt="Genaiguru leader-user-4"
                              title="Genaiguru leader-user-5"
                            />
                          </a>
                        </div>

                        <div class="content">
                          <h4>Jekob link</h4>
                          <p>@Jmsmittan</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="button">
                    <a href="">PT-4550</a>
                  </div>
                </div>
              </div>
              <div class="list-container">
                <div class="row flex space-between">
                  <div class="profile">
                    <ul>
                      <li>
                        <div class="img-box">
                          <span>5</span>
                          <a href="">
                            <img
                              src="./app/images/leader-user-5.png"
                              alt="Genaiguru leader-user-4"
                              title="Genaiguru leader-user-5"
                            />
                          </a>
                        </div>

                        <div class="content">
                          <h4>Rakob</h4>
                          <p>@Jmsmittan</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="button">
                    <a href="">PT-4550</a>
                  </div>
                </div>
              </div>
              <div class="list-container">
                <div class="row flex space-between">
                  <div class="profile">
                    <ul>
                      <li>
                        <div class="img-box">
                          <span>6</span>
                          <a href="">
                            <img
                              src="./app/images/leader-use-6.png"
                              alt="Genaiguru leader-user-6"
                              title="Genaiguru leader-user-6"
                            />
                          </a>
                        </div>

                        <div class="content">
                          <h4>Alex . smith</h4>
                          <p>@Jmsmittan</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="button">
                    <a href="">PT-4550</a>
                  </div>
                </div>
              </div>
              <div class="list-container">
                <div class="row flex space-between">
                  <div class="profile">
                    <ul>
                      <li>
                        <div class="img-box">
                          <span>7</span>
                          <a href="">
                            <img
                              src="./app/images/leader-use-7.png"
                              alt="Genaiguru leader-user-7"
                              title="Genaiguru leader-user-7"
                            />
                          </a>
                        </div>

                        <div class="content">
                          <h4>Jekob link</h4>
                          <p>@Jmsmittan</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="button">
                    <a href="">PT-4550</a>
                  </div>
                </div>
              </div>
              <div class="list-container">
                <div class="row flex space-between">
                  <div class="profile">
                    <ul>
                      <li>
                        <div class="img-box">
                          <span>7</span>
                          <a href="">
                            <img
                              src="./app/images/leader-user-5.png"
                              alt="Genaiguru leader-user-5"
                              title="Genaiguru leader-user-5"
                            />
                          </a>
                        </div>

                        <div class="content">
                          <h4>Jekob link</h4>
                          <p>@Jmsmittan</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="button">
                    <a href="">PT-4550</a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 2nd --> */}
            <div class="tab-content tab-content-2 ">
              <div class="list-container">
                <div class="row flex space-between">
                  <div class="profile">
                    <ul>
                      <li>
                        <div class="img-box">
                          <span>12</span>
                          <a href="">
                            <img
                              src="./app/images/leader-user-4.png"
                              alt="Genaiguru leader-user-4"
                              title="Genaiguru leader-user-5"
                            />
                          </a>
                        </div>

                        <div class="content">
                          <h4>Jekob link</h4>
                          <p>@Jmsmittan</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="button">
                    <a href="">PT-4550</a>
                  </div>
                </div>
              </div>
              <div class="list-container">
                <div class="row flex space-between">
                  <div class="profile">
                    <ul>
                      <li>
                        <div class="img-box">
                          <span>15</span>
                          <a href="">
                            <img
                              src="./app/images/leader-user-5.png"
                              alt="Genaiguru leader-user-4"
                              title="Genaiguru leader-user-5"
                            />
                          </a>
                        </div>

                        <div class="content">
                          <h4>Rakob</h4>
                          <p>@Jmsmittan</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="button">
                    <a href="">PT-4550</a>
                  </div>
                </div>
              </div>
              <div class="list-container">
                <div class="row flex space-between">
                  <div class="profile">
                    <ul>
                      <li>
                        <div class="img-box">
                          <span>16</span>
                          <a href="">
                            <img
                              src="./app/images/leader-use-6.png"
                              alt="Genaiguru leader-user-6"
                              title="Genaiguru leader-user-6"
                            />
                          </a>
                        </div>

                        <div class="content">
                          <h4>Alex . smith</h4>
                          <p>@Jmsmittan</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="button">
                    <a href="">PT-4550</a>
                  </div>
                </div>
              </div>
              <div class="list-container">
                <div class="row flex space-between">
                  <div class="profile">
                    <ul>
                      <li>
                        <div class="img-box">
                          <span>17</span>
                          <a href="">
                            <img
                              src="./app/images/leader-use-7.png"
                              alt="Genaiguru leader-user-7"
                              title="Genaiguru leader-user-7"
                            />
                          </a>
                        </div>

                        <div class="content">
                          <h4>Jekob link</h4>
                          <p>@Jmsmittan</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="button">
                    <a href="">PT-4550</a>
                  </div>
                </div>
              </div>
              <div class="list-container">
                <div class="row flex space-between">
                  <div class="profile">
                    <ul>
                      <li>
                        <div class="img-box">
                          <span>17</span>
                          <a href="">
                            <img
                              src="./app/images/leader-user-5.png"
                              alt="Genaiguru leader-user-5"
                              title="Genaiguru leader-user-5"
                            />
                          </a>
                        </div>

                        <div class="content">
                          <h4>Jekob link</h4>
                          <p>@Jmsmittan</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="button">
                    <a href="">PT-4550</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LeaderBoard;
