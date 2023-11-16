import React, { useState } from "react";
import { Link } from "react-router-dom";

const GuruGenesis = () => {
  const [activeTab, setActiveTab] = useState(1);

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
            <div class="gurukeeps-wrapper ">
              <h1>Contact to guru genesis</h1>
              {/* <!-- tab-link start here --> */}
              <ul class="connect-link flex">
                <li>
                  <Link
                    onClick={() => handleTabClick(1)}
                    className={activeTab === 1 ? "tab active" : ""}
                    data-toggle-target=".tab-content-1"
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => handleTabClick(2)}
                    className={activeTab === 2 ? "tab active" : ""}
                    data-toggle-target=".tab-content-2"
                  >
                    Guru genesis
                  </Link>
                </li>
              </ul>
              {/* <!-- tab-link start here --> */}
            </div>
            {/* <!--  faq tab-content here --> */}
            {activeTab === 1 && (
              <div
                className={
                  activeTab === 1 && "tab-content tab-content-1 active"
                }
              >
                {" "}
                <div class="contact-wrapper flex">
                  <div class="faq-container">
                    <h5>FAQ</h5>
                    <div class="faq-box">
                      <div class="accordion">
                        <h4>What impact have commons users had so far </h4>
                        <div class="leftArrow">
                          <img
                            src="app/images/arrow-left.png"
                            alt="Genaiguru arrow-left"
                            title="Genaiguru arrow-left"
                          />
                        </div>
                      </div>
                      <div class="panel">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                    <div class="faq-box">
                      <div class="accordion">
                        <h4>What impact have commons users had so far </h4>
                        <div class="leftArrow">
                          <img
                            src="app/images/arrow-left.png"
                            alt="Genaiguru arrow-left"
                            title="Genaiguru arrow-left"
                          />
                        </div>
                      </div>
                      <div class="panel">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                    <div class="faq-box">
                      <div class="accordion">
                        <h4>What impact have commons users had so far </h4>
                        <div class="leftArrow">
                          <img
                            src="app/images/arrow-left.png"
                            alt="Genaiguru arrow-left"
                            title="Genaiguru arrow-left"
                          />
                        </div>
                      </div>
                      <div class="panel">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="contact-container">
                    <h4>Contact us</h4>
                    <form action="">
                      <div class="contact-box">
                        <label for="">Full Name</label>
                        <input type="text" placeholder="Prosing" />
                      </div>
                      <div class="contact-box">
                        <label for="">Email</label>
                        <input type="text" placeholder="prosing@gmail.com" />
                      </div>
                      <div class="contact-box">
                        <label for="">Comment</label>
                        <textarea
                          name="comment"
                          placeholder="Philosophy student|| Content writer|| Avid Writer|| Storyteller|| Technical Writer|| Tech Trends ||"
                        ></textarea>
                      </div>
                      <button type="submit" class="loginBtn">
                        Contact
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
            {/* <!--  faq tab-content end here --> */}
            {activeTab === 2 && (
              <div
                className={
                  activeTab === 2 && "tab-content tab-content-2 active"
                }
              >
                <div class="about-content">
                  <h4>About us</h4>
                  <p>
                    Looking To Upgrade Your Salary In The UK? Get The Salary
                    You’re Worth By Learning To Code. 98% Employed Within 12
                    Months Of Qualifying. 28% Of Students Are Hired While On The
                    Course. Change Career. Career Changing Skills. Spaces
                    Filling Up Fast. Looking To Upgrade Your Salary In The UK?{" "}
                  </p>
                </div>
                <div class="about-content">
                  <h4>Terms of service </h4>
                  <p>
                    Looking to upgrade your salary in the uk? Get the salary
                    you’re worth by learning to code. 98% employed within 12
                    months of qualifying. 28% of students are hired while on the
                    course. Change career. Career changing skills. Spaces
                    filling up fast. Looking to upgrade your salary in the uk?
                    Looking to upgrade your salary in the uk? Get the salary
                    you’re worth by learning to code. 98% employed within 12
                    months of qualifying. 28% of students are hired while on the
                    course. Change career. Career changing skills. Spaces
                    filling up fast.{" "}
                  </p>
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

export default GuruGenesis;
