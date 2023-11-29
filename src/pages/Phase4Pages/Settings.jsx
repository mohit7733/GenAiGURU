import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";

const Settings = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Function to handle tab click
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>
      <MobileHeader />
      {/* <!-- mobile header start here --> */}
      <div class="mob_profile commanMobHead heightAuto hideDes">
        <div class="mobileHead flex">
          <div class="hamburger">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
          </div>
          <h2>Edit Profile</h2>
        </div>
      </div>
      {/* <!-- mobile header end here --> */}
      <section class="mainWrapper flex">
        <Sidebar />
        <div className="rightSection">
          <div class=" full-width">
            {/* <!-- setting start --> */}
            <div class="setting-wrapper flex">
              <h1>Setting</h1>
              <div class="setting-container">
                <ul class="connect-link">
                  <li className={activeTab === 1 ? " active" : ""}>
                    <Link
                      onClick={() => handleTabClick(1)}
                      className={activeTab === 1 ? "tab" : ""}
                      data-toggle-target=".tab-content-1"
                    >
                      <figure>
                        <img
                          src="./app/images/profile.png"
                          alt="Genaiguru profile"
                          title="Genaiguru profile"
                        />
                      </figure>
                      <span>Profile</span>
                    </Link>
                  </li>
                  <li className={activeTab === 2 ? " active" : ""}>
                    <Link
                      onClick={() => handleTabClick(2)}
                      className={activeTab === 2 ? "tab" : ""}
                      data-toggle-target=".tab-content-2"
                    >
                      <figure>
                        <img
                          src="./app/images/password.png"
                          alt="Genaiguru password"
                          title="Genaiguru password"
                        />
                      </figure>
                      <span>Edit password</span>
                    </Link>
                  </li>
                  <li className={activeTab === 3 ? " active" : ""}>
                    <Link
                      onClick={() => handleTabClick(3)}
                      className={activeTab === 3 ? "tab" : ""}
                      data-toggle-target=".tab-content-3"
                    >
                      <figure>
                        <img
                          src="./app/images/customize-intrest.png"
                          alt="Genaiguru Customize"
                          title="Genaiguru Customize"
                        />
                      </figure>
                      <span>Customize your interest</span>
                    </Link>
                  </li>
                  <li className={activeTab === 4 ? " active" : ""}>
                    <Link
                      onClick={() => handleTabClick(4)}
                      className={activeTab === 4 ? "tab" : ""}
                      data-toggle-target=".tab-content-4"
                    >
                      <figure>
                        <img
                          src="./app/images/notification.png"
                          alt="Genaiguru notification"
                          title="Genaiguru notification"
                        />
                      </figure>
                      <span>Notification settings</span>
                    </Link>
                  </li>
                  <li className={activeTab === 5 ? " active" : ""}>
                    <Link
                      onClick={() => handleTabClick(5)}
                      className={activeTab === 5 ? "tab" : ""}
                      data-toggle-target=".tab-content-5"
                    >
                      <figure>
                        <img
                          src="./app/images/privacy-policy.png"
                          alt="Genaiguru Privacy"
                          title="Genaiguru Privacy"
                        />
                      </figure>
                      <span>Privacy policy</span>
                    </Link>
                  </li>
                  <li className={activeTab === 6 ? " active" : ""}>
                    <Link
                      onClick={() => handleTabClick(6)}
                      className={activeTab === 6 ? "tab" : ""}
                      data-toggle-target=".tab-content-6"
                    >
                      <figure>
                        <img
                          src="./app/images/Q&a.png"
                          alt="Genaiguru Q&A"
                          title="Genaiguru Q&A"
                        />
                      </figure>
                      <span>Q&A</span>
                    </Link>
                  </li>
                  <li className={activeTab === 7 ? " active" : ""}>
                    <Link
                      onClick={() => handleTabClick(7)}
                      className={activeTab === 7 ? "tab" : ""}
                      data-toggle-target=".tab-content-7"
                    >
                      <figure>
                        <img
                          src="./app/images/feedd-back-admin.png"
                          alt="Genaiguru feedd-back-admin"
                          title="Genaiguru feedd-back-admin"
                        />
                      </figure>
                      <span>Send feedback</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="setting-box">
                {activeTab === 1 && (
                  // <div class="tab-content tab-content-1 active">
                  <div
                    className={
                      activeTab === 1 && "tab-content tab-content-1 active"
                    }
                  >
                    {/* <div class="tab-content tab-content-1 active"> */}
                    <div class="profile-img-box">
                      <div class="profileImgChange">
                        <p>Profile image</p>
                        <figure>
                          <img
                            src="/app/images/userIcon.png"
                            alt="Genaiguru user-icon"
                            title="Genaiguru user-icon"
                          />
                          <div class="imageChange">
                            <figure class="cameraImg">
                              <img
                                src="/app/images/camera-icon.png"
                                alt="Genaiguru camera-icon"
                                title="Genaiguru camera-icon"
                              />
                            </figure>
                            <input type="file" />
                          </div>
                        </figure>
                      </div>
                      <p>
                        <a href="#">Cover image</a>
                      </p>
                      <div class="cover-img-banner">
                        <div class="banner-txt">
                          <div class="img-box cameraBgImg">
                            <figure>
                              <img
                                src="/app/images/camera-icon.png"
                                alt="Genaiguru camera-icon"
                                title="Genaiguru camera-icon"
                              />
                            </figure>
                            <input type="file" />
                          </div>
                          <h6>Replace cover image</h6>
                          <p>Optimal dimensions 1600 x 1200 px</p>
                        </div>
                      </div>
                      <form action="">
                        <div class="profile-edit">
                          <label for="name">Your Name</label>
                          <input type="text" placeholder="GenAIGuru" />
                        </div>
                        <div class="profile-edit">
                          <label for="name">Bio</label>
                          <textarea
                            name=""
                            id=""
                            cols="5"
                            rows="10"
                            placeholder="Philosophy student|| Content writer|| Avid Writer|| Storyteller|| Technical Writer|| Tech Trends ||"
                          ></textarea>
                        </div>
                        <button type="submit" class="loginBtn">
                          Save to change
                        </button>
                      </form>
                    </div>
                  </div>
                )}
                {/* <!-- password here --> */}
                {activeTab === 2 && (
                  // <div class="tab-content tab-content-2 active">
                  <div
                    className={
                      activeTab === 2 &&
                      "tab-content tab-content-2 passChangeTab active"
                    }
                  >
                    {/* <div class="tab-content tab-content-2 passChangeTab"> */}
                    {/* <!-- password --> */}
                    <h5>Change password</h5>
                    <form action="">
                      <div class="password-box">
                        <label for="">Old password</label>
                        <input
                          type="password"
                          name=""
                          id=""
                          placeholder="****"
                        />
                      </div>
                      <div class="password-box">
                        <label for="">New password</label>
                        <input
                          type="password"
                          name=""
                          id=""
                          placeholder="****"
                        />
                      </div>
                      <div class="form_group">
                        <button type="submit" class="loginBtn">
                          Save to Change
                        </button>
                      </div>
                    </form>
                  </div>
                )}
                {/* <!-- password-  here -->
          <!-- intrest here --> */}
                {activeTab === 3 && (
                  <div
                    className={
                      activeTab === 3 && "tab-content tab-content-3 active"
                    }
                  >
                    {/* <div class="tab-content tab-content-3"> */}
                    {/* <!-- intrest  --> */}
                    <h5>Edit your interest</h5>
                    <div class="intrest-box">
                      <ul class="flex">
                        <li>
                          <a href="#">Artificial intelligence</a>
                        </li>
                        <li>
                          <a href="#">Blockchain</a>
                        </li>
                        <li>
                          <a href="#">GPT</a>
                        </li>
                        <li>
                          <a href="#">Topic 02</a>
                        </li>
                        <li>
                          <a href="#">Open AI</a>
                        </li>
                        <li>
                          <a href="#">Machine learning</a>
                        </li>
                        <li>
                          <a href="#">Large language models</a>
                        </li>
                        <li>
                          <a href="#">Bitcoin</a>
                        </li>
                        <li>
                          <a href="#">Data science</a>
                        </li>
                        <li>
                          <a href="#">Cryptocurrency</a>
                        </li>
                        <li>
                          <a href="#">Mid-journey</a>
                        </li>
                        <li>
                          <a href="#">NLP</a>
                        </li>
                        <li>
                          <a href="#">Digital innovation</a>
                        </li>
                      </ul>
                      <button type="submit" class="loginBtn">
                        Save to change
                      </button>
                    </div>
                  </div>
                )}
                {/* <!-- privacy --> */}
                {activeTab === 5 && (
                  <div
                    className={
                      activeTab === 5 && "tab-content tab-content-5 active"
                    }
                  >
                    {/* <div class="tab-content tab-content-4"> */}
                    {/* <!-- privacy --> */}
                    <h5>Privacy & Policy</h5>
                    <div class="privacy-banner">
                      <img
                        src="app/images/privacy-banner.png"
                        alt="Genaiguru privacy-banner"
                        title="Genaiguru privacy-banner"
                      />
                    </div>
                    <div class="privacy-vats">
                      <h3>Privacy policy</h3>
                      <div class="date">
                        <p>
                          Effactive date: <span> March 24, 2023</span>
                        </p>
                      </div>
                      <p>
                        Looking to upgrade your salary in the uk? Get the salary
                        you’re worth by learning to code. 98% employed within 12
                        months of qualifying. 28% of students are hired while on
                        the course. Change career. Career changing skills.
                        Spaces filling up fast. Looking to upgrade your salary
                        in{" "}
                      </p>
                    </div>
                    <div class="service-terms">
                      <ul>
                        <li>
                          <a href="#">Terms of service</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                      </ul>

                      <h5>Terms of service</h5>
                      <p>
                        Looking to upgrade your salary in the uk? Get the salary
                        you’re worth by learning to code. 98% employed within 12
                        months of qualifying. 28% of students are hired while on
                        the course. Change career. Career changing skills.
                        Spaces filling up fast. Looking to upgrade your salary
                        in the uk? Looking to upgrade your salary in the uk? Get
                        the salary you’re worth by learning to code. 98%
                        employed within 12 months of qualifying. 28% of students
                        are hired while on the course. Change career. Career
                        changing skills. Spaces filling up fast.
                      </p>
                    </div>
                  </div>
                )}
                {/* <!-- Tell us problem --> */}
                {activeTab === 7 && (
                  <div
                    className={
                      activeTab === 7 && "tab-content tab-content-7 active"
                    }
                  >
                    {/* <div class="tab-content tab-content-5"> */}
                    <div class="feedbackSection">
                      <h5>Tell us the problem</h5>
                      <div class="problem-container">
                        <h3>Send us some feedback!</h3>
                        <p>
                          Do you have a suggestion or found some bug? let us
                          know in the bellow.
                        </p>
                      </div>
                      <form action="">
                        <div class="form_group">
                          <label for="">Describe your issue or idea</label>
                          <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="5"
                            placeholder="Type here"
                          ></textarea>
                        </div>
                        <div class="form_group">
                          <p>Screenshot or videos (optional)</p>
                          <div class="add-idea">
                            <div class="wrapper">
                              <img
                                src="app/images/addIconsImg.png"
                                alt="Genaiguru addIconsImg"
                                title="Genaiguru addIconsImg"
                              />
                              <input type="file" />
                            </div>
                          </div>
                        </div>
                        <div class="form_group">
                          <button type="submit" class="loginBtn">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
                {/* <!-- tell us problem --> */}
                {activeTab === 6 && (
                  <div
                    className={
                      activeTab === 6 && "tab-content tab-content-6 active"
                    }
                  >
                    {/* <div class="tab-content tab-content-6"> */}
                    <h5>Q&A</h5>
                  </div>
                )}
                {/* <!-- notification --> */}
                {activeTab === 4 && (
                  <div
                    className={
                      activeTab === 4 && "tab-content tab-content-4 active"
                    }
                  >
                    {/* <div class="tab-content tab-content-7"> */}
                    <div class="notification">
                      <form action="">
                        <div class="notification flex space-between">
                          <label for="">Email notifications</label>
                          <label class="onoffbtn">
                            <input type="checkbox" />
                          </label>
                        </div>
                        <div class="notification flex space-between">
                          <label for="">Push notifications</label>
                          <label class="onoffbtn">
                            <input type="checkbox" />
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- main section end here --> */}
    </div>
  );
};

export default Settings;
