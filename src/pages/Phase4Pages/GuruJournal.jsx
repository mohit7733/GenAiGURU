import React, { useState } from "react";
import { Link } from "react-router-dom";

const GuruJournal = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Function to handle tab click
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div>
      {/* <!-- header section start here --> */}
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
      {/* <!-- header section end here --> */}

      {/* <!-- main section start here --> */}
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
          <div class="keeps-container">
            <div class="gurukeeps-wrapper">
              <h1>Guru Journal</h1>
              {/* <!-- tab-link start here --> */}
              <ul class="connect-link flex">
                <li className={activeTab === 1 ? "active" : ""}>
                  <Link
                    onClick={() => handleTabClick(1)}
                    className={activeTab === 1 ? "tab active" : ""}
                    data-toggle-target=".tab-content-1"
                  >
                    All
                  </Link>
                </li>
                <li className={activeTab === 2 ? " active" : ""}>
                  <Link
                    onClick={() => handleTabClick(2)}
                    className={activeTab === 2 ? "tab active" : ""}
                    data-toggle-target=".tab-content-2"
                  >
                    Ai in healthcare
                  </Link>
                </li>
                <li className={activeTab === 3 ? " active" : ""}>
                  <Link
                    onClick={() => handleTabClick(3)}
                    className={activeTab === 3 ? "tab active" : ""}
                    data-toggle-target=".tab-content-3"
                  >
                    ML in finance
                  </Link>
                </li>
                <li className={activeTab === 4 ? "active" : ""}>
                  <Link
                    onClick={() => handleTabClick(4)}
                    className={activeTab === 4 ? "tab active" : ""}
                    data-toggle-target=".tab-content-4"
                  >
                    Crypto
                  </Link>
                </li>
                <li className={activeTab === 5 ? " active" : ""}>
                  <Link
                    onClick={() => handleTabClick(5)}
                    className={activeTab === 5 ? "tab active" : ""}
                    data-toggle-target=".tab-content-5"
                  >
                    Bitcoin
                  </Link>
                </li>
              </ul>
              {/* <!-- tab-link start here --> */}
            </div>
            {/* <!-- tab-content here --> */}
            {activeTab === 1 && (
              <div
                className={
                  activeTab === 1 && "tab-content tab-content-1 active"
                }
              >
                <div class="interest-guru ">
                  <div class="wrap flex">
                    <figure>
                      <img
                        src="app/images/gureu-keeps-1.png"
                        alt="Genaiguru gureu-keeps-1"
                        title="Genaiguru gureu-keeps-1"
                      />
                    </figure>
                    <div class="content">
                      <div class="flex space-between">
                        <div class="wrapper flex">
                          <figure>
                            <img
                              src="app/images/userIcon.png"
                              alt="Genaiguru userIcon"
                              title="Genaiguru userIcon"
                            />
                          </figure>
                          <div class="innerContent">
                            <h6>Esther Howard</h6>
                            <p>Sep 15, 2023. 11:05 pm</p>
                          </div>
                        </div>
                        <ul class="flex">
                          <li>
                            <a href="#">
                              <img
                                src="app/images/color-bookmarks.png"
                                alt="Genaiguru color-bookmarks"
                                title="Genaiguru color-bookmarks"
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
                      <h5>
                        Navigating the World of ChatGPT and Its Open-source
                        Adversaries
                      </h5>
                      <p>
                        Looking to upgrade your salary in the uk? Get the salary
                        you’re worth by learning to code. 98% employed within 12
                        months of qualifying....
                      </p>
                    </div>
                  </div>
                  {/* <div class="wrap flex">
                    <figure>
                      <img
                        src="app/images/guru-keeps-2.png"
                        alt="Genaiguru guru-keeps-2"
                        title="Genaiguru guru-keeps-2"
                      />
                    </figure>
                    <div class="content">
                      <div class="flex space-between">
                        <div class="wrapper flex">
                          <figure>
                            <img
                              src="app/images/userIcon.png"
                              alt="Genaiguru user-icon"
                              title="Genaiguru user-icon"
                            />
                          </figure>
                          <div class="innerContent">
                            <h6>AEsther Howard</h6>
                            <p>Sep 15, 2023. 11:05 pm</p>
                          </div>
                        </div>
                        <ul class="flex">
                          <li>
                            <a href="#">
                              <img
                                src="app/images/color-bookmarks.png"
                                alt="Genaiguru color-bookmarks"
                                title="Genaiguru color-bookmarks"
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
                      <h5>
                        Navigating the World of ChatGPT and Its Open-source
                        Adversaries
                      </h5>
                      <p>
                        Looking to upgrade your salary in the uk? Get the salary
                        you’re worth by learning to code. 98% employed within 12
                        months of qualifying....
                      </p>
                    </div>
                  </div> */}
                  <div class="wrap flex">
                    <figure>
                      <img
                        src="app/images/guru-keeps-3.png"
                        alt="Genaiguru guru-keeps-3 "
                        title="Genaiguru guru-keeps-3"
                      />
                    </figure>
                    <div class="content">
                      <div class="flex space-between">
                        <div class="wrapper flex">
                          <figure>
                            <img
                              src="app/images/userIcon.png"
                              alt="Genaiguru userIcon"
                              title="Genaiguru userIcon"
                            />
                          </figure>
                          <div class="innerContent">
                            <h6>Esther Howard</h6>
                            <p>Sep 15, 2023. 11:05 pm</p>
                          </div>
                        </div>
                        <ul class="flex">
                          <li>
                            <a href="#">
                              <img
                                src="app/images/color-bookmarks.png"
                                alt="Genaiguru color-bookmarks"
                                title="Genaiguru color-bookmarks"
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
                      <h5>
                        Navigating the World of ChatGPT and Its Open-source
                        Adversaries
                      </h5>
                      <p>
                        Looking to upgrade your salary in the uk? Get the salary
                        you’re worth by learning to code. 98% employed within 12
                        months of qualifying....
                      </p>
                    </div>
                  </div>
                  <div class="wrap flex">
                    <figure>
                      <img
                        src="app/images/gureu-keeps-1.png"
                        alt="Genaiguru gureu-keeps-1"
                        title="Genaiguru gureu-keeps-1"
                      />
                    </figure>
                    <div class="content">
                      <div class="flex space-between">
                        <div class="wrapper flex">
                          <figure>
                            <img
                              src="app/images/userIcon.png"
                              alt="Genaiguru user-icon"
                              title="Genaiguru user-icon"
                            />
                          </figure>
                          <div class="innerContent">
                            <h6>Esther Howard</h6>
                            <p>Sep 15, 2023. 11:05 pm</p>
                          </div>
                        </div>
                        <ul class="flex">
                          <li>
                            <a href="#">
                              <img
                                src="app/images/color-bookmarks.png"
                                alt="Genaiguru color-bookmarks"
                                title="genaiguru color-bookmarks"
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
                      <h5>
                        Navigating the World of ChatGPT and Its Open-source
                        Adversaries
                      </h5>
                      <p>
                        Looking to upgrade your salary in the uk? Get the salary
                        you’re worth by learning to code. 98% employed within 12
                        months of qualifying....
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* <!-- 2nd --> */}
            {activeTab === 2 && (
              <div
                className={
                  activeTab === 2 && "tab-content tab-content-2 active"
                }
              >
                {" "}
                <div class="interest-guru ">
                  <div class="wrap flex">
                    <figure>
                      <img
                        src="app/images/guru-keeps-2.png"
                        alt="Genaiguru guru-keeps-2"
                        title="Genaiguru guru-keeps-2"
                      />
                    </figure>
                    <div class="content">
                      <div class="flex space-between">
                        <div class="wrapper flex">
                          <figure>
                            <img
                              src="app/images/userIcon.png"
                              alt=" Genaiguru userIcon"
                              title="Genaiguru userIcon"
                            />
                          </figure>
                          <div class="innerContent">
                            <h6>AEsther Howard</h6>
                            <p>Sep 15, 2023. 11:05 pm</p>
                          </div>
                        </div>
                        <ul class="flex">
                          <li>
                            <a href="#">
                              <img
                                src="app/images/color-bookmarks.png"
                                alt="Genaiguru color-bookmarks"
                                title="Genaiguru color-bookmarks"
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
                      <h5>
                        Navigating the World of ChatGPT and Its Open-source
                        Adversaries
                      </h5>
                      <p>
                        Looking to upgrade your salary in the uk? Get the salary
                        you’re worth by learning to code. 98% employed within 12
                        months of qualifying....
                      </p>
                    </div>
                  </div>
                  <div class="wrap flex">
                    <figure>
                      <img
                        src="app/images/guru-keeps-3.png"
                        alt="Genaiguru guru-keeps-3"
                        title="Genaiguru guru-keeps-3"
                      />
                    </figure>
                    <div class="content">
                      <div class="flex space-between">
                        <div class="wrapper flex">
                          <figure>
                            <img
                              src="app/images/userIcon.png"
                              alt="Genaiguru userIcon"
                              title="Genaiguru userIcon"
                            />
                          </figure>
                          <div class="innerContent">
                            <h6>Esther Howard</h6>
                            <p>Sep 15, 2023. 11:05 pm</p>
                          </div>
                        </div>
                        <ul class="flex">
                          <li>
                            <a href="#">
                              <img
                                src="app/images/color-bookmarks.png"
                                alt="Genaiguru color-bookmarks"
                                title="Genaiguru color-bookmarks"
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
                      <h5>
                        Navigating the World of ChatGPT and Its Open-source
                        Adversaries
                      </h5>
                      <p>
                        Looking to upgrade your salary in the uk? Get the salary
                        you’re worth by learning to code. 98% employed within 12
                        months of qualifying....
                      </p>
                    </div>
                  </div>
                  <div class="wrap flex">
                    <figure>
                      <img
                        src="app/images/gureu-keeps-1.png"
                        alt="Genaiguru gureu-keeps-1"
                        title="Genaiguru gureu-keeps-1"
                      />
                    </figure>
                    <div class="content">
                      <div class="flex space-between">
                        <div class="wrapper flex">
                          <figure>
                            <img
                              src="app/images/userIcon.png"
                              alt="Genaiguru userIcon"
                              title="Genaiguru userIcon"
                            />
                          </figure>
                          <div class="innerContent">
                            <h6>Esther Howard</h6>
                            <p>Sep 15, 2023. 11:05 pm</p>
                          </div>
                        </div>
                        <ul class="flex">
                          <li>
                            <a href="#">
                              <img
                                src="app/images/color-bookmarks.png"
                                alt="Genaiguru color-bookmarks"
                                title="Genaiguru color-bookmarks"
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
                      <h5>
                        Navigating the World of ChatGPT and Its Open-source
                        Adversaries
                      </h5>
                      <p>
                        Looking to upgrade your salary in the uk? Get the salary
                        you’re worth by learning to code. 98% employed within 12
                        months of qualifying....
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* <!-- 3rd --> */}
            {activeTab === 3 && (
              <div
                className={
                  activeTab === 3 && "tab-content tab-content-3 active"
                }
              >
                <div class="interest-guru ">
                  <div class="wrap flex">
                    <figure>
                      <img
                        src="app/images/guru-keeps-3.png"
                        alt="Genaiguru guru-keeps-3"
                        title="Genaiguru guru-keeps-3"
                      />
                    </figure>
                    <div class="content">
                      <div class="flex space-between">
                        <div class="wrapper flex">
                          <figure>
                            <img
                              src="app/images/userIcon.png"
                              alt="Genaiguru userIcon"
                              title="Genaiguru userIcon"
                            />
                          </figure>
                          <div class="innerContent">
                            <h6>Esther Howard</h6>
                            <p>Sep 15, 2023. 11:05 pm</p>
                          </div>
                        </div>
                        <ul class="flex">
                          <li>
                            <a href="#">
                              <img
                                src="app/images/color-bookmarks.png"
                                alt="Genaiguru color-bookmarks"
                                title="Genaiguru color-bookmarks"
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
                      <h5>
                        Navigating the World of ChatGPT and Its Open-source
                        Adversaries
                      </h5>
                      <p>
                        Looking to upgrade your salary in the uk? Get the salary
                        you’re worth by learning to code. 98% employed within 12
                        months of qualifying....
                      </p>
                    </div>
                  </div>
                  <div class="wrap flex">
                    <figure>
                      <img
                        src="app/images/gureu-keeps-1.png"
                        alt="Genaiguru gureu-keeps-1"
                        title="Genaiguru gureu-keeps-1"
                      />
                    </figure>
                    <div class="content">
                      <div class="flex space-between">
                        <div class="wrapper flex">
                          <figure>
                            <img
                              src="app/images/userIcon.png"
                              alt="Genaiguru userIcon"
                              title="Genaiguru userIcon"
                            />
                          </figure>
                          <div class="innerContent">
                            <h6>Esther Howard</h6>
                            <p>Sep 15, 2023. 11:05 pm</p>
                          </div>
                        </div>
                        <ul class="flex">
                          <li>
                            <a href="#">
                              <img
                                src="app/images/color-bookmarks.png"
                                alt="Genaiguru color-bookmarks"
                                title=" Genaiguru color-bookmarks"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="app/images/dotsIcons.png"
                                alt="Genaiguru dots-icon"
                                title="Genaiguru dotsIcons"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h5>
                        Navigating the World of ChatGPT and Its Open-source
                        Adversaries
                      </h5>
                      <p>
                        Looking to upgrade your salary in the uk? Get the salary
                        you’re worth by learning to code. 98% employed within 12
                        months of qualifying....
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* <!-- 4th --> */}
            {activeTab === 4 && (
              <div
                className={
                  activeTab === 4 && "tab-content tab-content-4 active"
                }
              >
                <div class="interest-guru ">
                  <div class="wrap flex">
                    <figure>
                      <img
                        src="app/images/gureu-keeps-1.png"
                        alt="Genaiguru gureu-keeps-1"
                        title="Genaiguru gureu-keeps-1"
                      />
                    </figure>
                    <div class="content">
                      <div class="flex space-between">
                        <div class="wrapper flex">
                          <figure>
                            <img
                              src="app/images/userIcon.png"
                              alt="Genaiguru userIcon"
                              title=" Genaiguru userIcon"
                            />
                          </figure>
                          <div class="innerContent">
                            <h6>Esther Howard</h6>
                            <p>Sep 15, 2023. 11:05 pm</p>
                          </div>
                        </div>
                        <ul class="flex">
                          <li>
                            <a href="#">
                              <img
                                src="app/images/color-bookmarks.png"
                                alt="Genaiguru color-bookmarks"
                                title="Genaiguru color-bookmarks"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="app/images/dotsIcons.png"
                                alt="Genaiguru  dotsIcons"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h5>
                        Navigating the World of ChatGPT and Its Open-source
                        Adversaries
                      </h5>
                      <p>
                        Looking to upgrade your salary in the uk? Get the salary
                        you’re worth by learning to code. 98% employed within 12
                        months of qualifying....
                      </p>
                    </div>
                  </div>
                  <div class="wrap flex">
                    <figure>
                      <img
                        src="app/images/guru-keeps-2.png"
                        alt="Genaiguru guru-keeps-2"
                        title=" Genaiguru guru-keeps-2"
                      />
                    </figure>
                    <div class="content">
                      <div class="flex space-between">
                        <div class="wrapper flex">
                          <figure>
                            <img
                              src="app/images/userIcon.png"
                              alt="Genaiguru usericon"
                              title="Genaiguru userIcon"
                            />
                          </figure>
                          <div class="innerContent">
                            <h6>AEsther Howard</h6>
                            <p>Sep 15, 2023. 11:05 pm</p>
                          </div>
                        </div>
                        <ul class="flex">
                          <li>
                            <a href="#">
                              <img
                                src="app/images/color-bookmarks.png"
                                alt="Genaiguru color-bookmarks"
                                title="Genaiguru color-bookmarks"
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
                      <h5>
                        Navigating the World of ChatGPT and Its Open-source
                        Adversaries
                      </h5>
                      <p>
                        Looking to upgrade your salary in the uk? Get the salary
                        you’re worth by learning to code. 98% employed within 12
                        months of qualifying....
                      </p>
                    </div>
                  </div>
                  <div class="wrap flex">
                    <figure>
                      <img
                        src="app/images/guru-keeps-3.png"
                        alt="Genaiguru guru-keeps-3"
                      />
                    </figure>
                    <div class="content">
                      <div class="flex space-between">
                        <div class="wrapper flex">
                          <figure>
                            <img
                              src="app/images/userIcon.png"
                              alt="Genaiguru user-icon"
                              title="Genaiguru userIcon "
                            />
                          </figure>
                          <div class="innerContent">
                            <h6>Esther Howard</h6>
                            <p>Sep 15, 2023. 11:05 pm</p>
                          </div>
                        </div>
                        <ul class="flex">
                          <li>
                            <a href="#">
                              <img
                                src="app/images/color-bookmarks.png"
                                alt="Genaiguru color-bookmarks "
                                title="Genaiguru color-bookmarks"
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
                      <h5>
                        Navigating the World of ChatGPT and Its Open-source
                        Adversaries
                      </h5>
                      <p>
                        Looking to upgrade your salary in the uk? Get the salary
                        you’re worth by learning to code. 98% employed within 12
                        months of qualifying....
                      </p>
                    </div>
                  </div>
                  <div class="wrap flex">
                    <figure>
                      <img
                        src="app/images/gureu-keeps-1.png"
                        alt="Genaiguru gureu-keeps-1"
                        title="Genaiguru gureu-keeps-1 "
                      />
                    </figure>
                    <div class="content">
                      <div class="flex space-between">
                        <div class="wrapper flex">
                          <figure>
                            <img
                              src="app/images/userIcon.png"
                              alt="Genaiguru userIcon"
                              title="Genaiguru userIcon"
                            />
                          </figure>
                          <div class="innerContent">
                            <h6>Esther Howard</h6>
                            <p>Sep 15, 2023. 11:05 pm</p>
                          </div>
                        </div>
                        <ul class="flex">
                          <li>
                            <a href="#">
                              <img
                                src="app/images/color-bookmarks.png"
                                alt="Genaiguru color-bookmarks"
                                title="Genaiguru color-bookmarks"
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
                      <h5>
                        Navigating the World of ChatGPT and Its Open-source
                        Adversaries
                      </h5>
                      <p>
                        Looking to upgrade your salary in the uk? Get the salary
                        you’re worth by learning to code. 98% employed within 12
                        months of qualifying....
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* <!-- 5th --> */}
            {activeTab === 5 && (
              <div
                className={
                  activeTab === 5 && "tab-content tab-content-5 active"
                }
              >
                <div class="interest-guru ">
                  <div class="wrap flex">
                    <figure>
                      <img
                        src="app/images/guru-keeps-2.png"
                        alt="Genaiguru guru-keeps-2"
                      />
                    </figure>
                    <div class="content">
                      <div class="flex space-between">
                        <div class="wrapper flex">
                          <figure>
                            <img
                              src="app/images/userIcon.png"
                              alt="Genaiguru user-icon"
                              title="Genaiguru user-icon"
                            />
                          </figure>
                          <div class="innerContent">
                            <h6>AEsther Howard</h6>
                            <p>Sep 15, 2023. 11:05 pm</p>
                          </div>
                        </div>
                        <ul class="flex">
                          <li>
                            <a href="#">
                              <img
                                src="app/images/color-bookmarks.png"
                                alt="Genaiguru color-bookmarks"
                                title="Genaiguru color-bookmarks"
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
                      <h5>
                        Navigating the World of ChatGPT and Its Open-source
                        Adversaries
                      </h5>
                      <p>
                        Looking to upgrade your salary in the uk? Get the salary
                        you’re worth by learning to code. 98% employed within 12
                        months of qualifying....
                      </p>
                    </div>
                  </div>
                  <div class="wrap flex">
                    <figure>
                      <img
                        src="app/images/guru-keeps-3.png"
                        alt="Genaiguru guru-keeps-3"
                        title="Genaiguru guru-keeps-3"
                      />
                    </figure>
                    <div class="content">
                      <div class="flex space-between">
                        <div class="wrapper flex">
                          <figure>
                            <img
                              src="app/images/userIcon.png"
                              alt="Genaiguru usericon"
                            />
                          </figure>
                          <div class="innerContent">
                            <h6>Esther Howard</h6>
                            <p>Sep 15, 2023. 11:05 pm</p>
                          </div>
                        </div>
                        <ul class="flex">
                          <li>
                            <a href="#">
                              <img
                                src="app/images/color-bookmarks.png"
                                alt="Genaiguru color-bookmarks"
                                title="Genaiguru color-bookmarks"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="app/images/dotsIcons.png"
                                alt="Genaiguru dotsIcons "
                                title="Genaiguru dotsIcons"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h5>
                        Navigating the World of ChatGPT and Its Open-source
                        Adversaries
                      </h5>
                      <p>
                        Looking to upgrade your salary in the uk? Get the salary
                        you’re worth by learning to code. 98% employed within 12
                        months of qualifying....
                      </p>
                    </div>
                  </div>
                  <div class="wrap flex">
                    <figure>
                      <img
                        src="app/images/gureu-keeps-1.png"
                        alt="Genaiguru gureu-keeps-1"
                        title="Genaiguru gureu-keeps-1"
                      />
                    </figure>
                    <div class="content">
                      <div class="flex space-between">
                        <div class="wrapper flex">
                          <figure>
                            <img
                              src="app/images/userIcon.png"
                              alt="Genaiguru userIcon"
                              title="Genaiguru userIcon"
                            />
                          </figure>
                          <div class="innerContent">
                            <h6>Esther Howard</h6>
                            <p>Sep 15, 2023. 11:05 pm</p>
                          </div>
                        </div>
                        <ul class="flex">
                          <li>
                            <a href="#">
                              <img
                                src="app/images/color-bookmarks.png"
                                alt="Genaiguru color-bookmarks"
                                title="Genaiguru color-bookmarks"
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
                      <h5>
                        Navigating the World of ChatGPT and Its Open-source
                        Adversaries
                      </h5>
                      <p>
                        Looking to upgrade your salary in the uk? Get the salary
                        you’re worth by learning to code. 98% employed within 12
                        months of qualifying....
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* <!-- main section end here --> */}
    </div>
  );
};

export default GuruJournal;
