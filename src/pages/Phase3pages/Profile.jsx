import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import axios from "axios";
import { getBaseURL } from "../../api/config";

const Profile = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [displayInterestPopup, setDisplayInterestPopup] = useState(false);
  const [profileImage, setProfileImage] = useState();

  const token = JSON.parse(localStorage.getItem("token"));

  const navigate = useNavigate();

  // User details GET-API------
  useEffect(() => {
    axios
      .get(`${getBaseURL()}/auth/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setProfileImage(response.data.profile_image);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // Function to handle tab click-------
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <>
      <MobileHeader />
      <section className="mainWrapper flex hideMob">
        <Sidebar />
        <div className="rightSection">
          <div className=" full-width">
            {/* <!-- banner start here --> */}
            <div className="profile-banner"></div>

            {/* <!-- banner end here -->
            <!-- profile img start here --> */}
            <div className="row flex space-between">
              <div className="profile-img">
                <figure>
                  <img
                    src={profileImage}
                    alt="Genaiguru user-icon"
                    title="Genaiguru user-icon"
                  />
                </figure>
                <h3>Esther Howard</h3>
                <p>
                  Philosophy student|| Content writer|| Avid Writer||
                  Storyteller|| Technical Writer|| Tech Trends ||
                </p>
                <div className="followers">
                  <ul className="flex space-between">
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
              <div className="edit-profile">
                <div className="profile-link">
                  <Link to={"/phasepage2"} className="pop-up">
                    Edit profile
                  </Link>
                </div>
                <ul className="connect-link flex">
                  <li className={activeTab === 1 ? "active" : ""}>
                    <Link
                      onClick={() => handleTabClick(1)}
                      className={activeTab === 1 ? "tab" : ""}
                      data-toggle-target=".tab-content-1"
                    >
                      About
                    </Link>
                  </li>
                  <li className={activeTab === 2 ? "active" : ""}>
                    <Link
                      onClick={() => handleTabClick(2)}
                      className={activeTab === 2 ? "tab" : ""}
                      data-toggle-target=".tab-content-2"
                    >
                      Posts
                    </Link>
                  </li>
                  <li className={activeTab === 3 ? "active" : ""}>
                    <Link
                      onClick={() => handleTabClick(3)}
                      className={activeTab === 3 ? "tab" : ""}
                      data-toggle-target=".tab-content-3"
                    >
                      Videos
                    </Link>
                  </li>
                  <li className={activeTab === 4 ? "active" : ""}>
                    <Link
                      onClick={() => handleTabClick(4)}
                      className={activeTab === 4 ? "tab" : ""}
                      data-toggle-target=".tab-content-4"
                    >
                      Badges
                    </Link>
                  </li>
                </ul>
                {/* <!-- Content --> */}
                {activeTab === 1 && (
                  // <div className="tab-content tab-content-1 active">
                  <div
                    className={
                      activeTab === 1 && "tab-content tab-content-1 active"
                    }
                  >
                    <div className="intrest-area">
                      <h5>My Interests</h5>
                      <ul className="flex link-button">
                        <li>
                          <a href="#">GPT</a>
                        </li>
                        <li>
                          {" "}
                          <a href="#">Large language models</a>{" "}
                        </li>
                        <li>
                          <Link
                            onClick={() => {
                              setDisplayInterestPopup(true);
                            }}
                            className="addBtns addInterest"
                          >
                            +
                          </Link>
                        </li>
                      </ul>
                      <div className="social-link">
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
                )}
                {/* <!-- post here --> */}
                {activeTab === 2 && (
                  <div
                    className={
                      activeTab === 2 && "tab-content tab-content-2 active"
                    }
                  >
                    <div className="home-interest">
                      <div className="heading-link flex"></div>
                      <div className="interest-box flex space-between">
                        <div className="wrap flex">
                          <figure>
                            <a href="#">
                              <img
                                src="app/images/interestSliderImg.png"
                                alt="Genaiguru intrest"
                                title="Genaiguru intrest"
                              />
                            </a>
                          </figure>
                          <div className="content">
                            <div className="wrapper flex">
                              <figure>
                                <img
                                  src="app/images/authorImg.png"
                                  alt="Genaiguru authorImg"
                                  title="Genaiguru  authorImg"
                                />
                              </figure>
                              <div className="innerContent">
                                <h6>Alex Smih</h6>
                                <p>24 M view . 3 month ago</p>
                              </div>
                            </div>
                            <p>
                              <a href="#">
                                Navigating the World of ChatGPT and Its
                                Open-source Adversaries
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
                                    alt="Genaiguru dots-icon"
                                    title="Genaiguru dots-icon"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="wrap flex">
                          <figure>
                            <a href="#">
                              <img
                                src="app/images/interestSliderImg.png"
                                alt="Genaiguru intrestsliderimg"
                                title="Genaiguru intrestsliderimg"
                              />
                            </a>
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
                                Navigating the World of ChatGPT and Its
                                Open-source Adversaries
                              </a>
                            </p>
                            <ul className="flex">
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

                        <div className="wrap flex">
                          <figure>
                            <a href="#">
                              <img
                                src="app/images/interestSliderImg.png"
                                alt="Genaiguru interestSliderImg  "
                                title="Genaiguru interestSliderImg "
                              />
                            </a>
                          </figure>
                          <div className="content">
                            <div className="wrapper flex">
                              <figure>
                                <img
                                  src="app/images/authorImg.png"
                                  alt="Genaiguru authorImg "
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
                                Navigating the World of ChatGPT and Its
                                Open-source Adversaries
                              </a>
                            </p>
                            <ul className="flex">
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

                        <div className="wrap flex">
                          <figure>
                            <a href="#">
                              <img
                                src="app/images/interestSliderImg.png"
                                alt="Genaiguru intrestsliderimg"
                                title="Genaiguru intrestsliderimg"
                              />
                            </a>
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
                                Navigating the World of ChatGPT and Its
                                Open-source Adversaries
                              </a>
                            </p>
                            <ul className="flex">
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

                        <div className="wrap flex">
                          <figure>
                            <a href="#">
                              <img
                                src="app/images/interestSliderImg.png"
                                alt="Genaiguru"
                                title="Genaiguru intrest-slider"
                              />
                            </a>
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
                                Navigating the World of ChatGPT and Its
                                Open-source Adversaries
                              </a>
                            </p>
                            <ul className="flex">
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
                )}

                {/* <!-- video here --> */}
                {activeTab === 3 && (
                  <div
                    className={
                      activeTab === 3 && "tab-content tab-content-3 active"
                    }
                  >
                    <div className="home-interest">
                      <div className="heading-link flex"></div>
                      <div className="interest-box flex space-between">
                        <div
                          className="wrap flex"
                          onClick={() => {
                            navigate("/phasepage4");
                          }}
                        >
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
                                Navigating the World of ChatGPT and Its
                                Open-source Adversaries
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

                        <div
                          className="wrap flex"
                          onClick={() => {
                            navigate("/phasepage4");
                          }}
                        >
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
                                Navigating the World of ChatGPT and Its
                                Open-source Adversaries
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
                                Navigating the World of ChatGPT and Its
                                Open-source Adversaries
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
                                Navigating the World of ChatGPT and Its
                                Open-source Adversaries
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
                                Navigating the World of ChatGPT and Its
                                Open-source Adversaries
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
                )}
                {/* <!-- video end here -->
                <!-- badges here --> */}
                {activeTab === 4 && (
                  <div
                    className={
                      activeTab === 4 && "tab-content tab-content-4 active"
                    }
                  >
                    <div className="badges-box">
                      <ul className="flex ">
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
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- profile mobile section start here --> */}
      <div className="mob_profile hideDes">
        <div className="mobileHead flex">
          <div className="hamburger">
            <img
              src="app/images/hamburgerIcon.png"
              alt="Genaiguru hamburger"
              title="Genaiguru hamburger "
            />
          </div>
          <h2>My Profile</h2>
          <button type="button">Edit profile</button>
        </div>
        <div className="mob_profile_inner">
          {/* <!-- banner start here --> */}
          <div className="profile-banner"></div>
          {/* <!-- banner end here --> */}

          {/* <!-- profile img start here --> */}
          <div className="row flex space-between">
            <div className="profile-img">
              <figure>
                <img
                    src={profileImage}
                    alt="Genaiguru user-icon"
                  title="Genaiguru user-icon"
                />
              </figure>
              <h3>Esther Howard</h3>
              <p>
                Philosophy student|| Content writer|| Avid Writer||
                Storyteller|| Technical Writer|| Tech Trends ||
              </p>
              <div className="followers">
                <ul className="flex space-between">
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
            <div className="edit-profile">
              <ul className="connect-link flex">
                <li className={activeTab === 1 ? "active" : ""}>
                  <Link
                    onClick={() => handleTabClick(1)}
                    className={activeTab === 1 ? "tab" : ""}
                    data-toggle-target=".tab-content-1"
                  >
                    About
                  </Link>
                </li>
                <li className={activeTab === 2 ? "active" : ""}>
                  <Link
                    onClick={() => handleTabClick(2)}
                    className={activeTab === 2 ? "tab" : ""}
                    data-toggle-target=".tab-content-2"
                  >
                    Posts
                  </Link>
                </li>
                <li className={activeTab === 3 ? "active" : ""}>
                  <Link
                    onClick={() => handleTabClick(3)}
                    className={activeTab === 3 ? "tab" : ""}
                    data-toggle-target=".tab-content-3"
                  >
                    Videos
                  </Link>
                </li>
                <li className={activeTab === 4 ? "active" : ""}>
                  <Link
                    onClick={() => handleTabClick(4)}
                    className={activeTab === 4 ? "tab" : ""}
                    data-toggle-target=".tab-content-4"
                  >
                    Badges
                  </Link>
                </li>
              </ul>
              {/* <!-- Content --> */}
              {activeTab === 1 && (
                <div className="tab-content tab-content-1 active">
                  <div className="intrest-area">
                    <h5>My Interests</h5>
                    <ul className="flex link-button">
                      <li>
                        <a href="#">GPT</a>
                      </li>
                      <li>
                        {" "}
                        <a href="#">Large language models</a>{" "}
                      </li>
                      <li>
                        <Link
                          onClick={() => {
                            setDisplayInterestPopup(true);
                          }}
                          className="addBtns addInterest"
                        >
                          +
                        </Link>
                      </li>
                    </ul>
                    <div className="social-link">
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
              )}
              {/* <!-- post here --> */}
              {activeTab === 2 && (
                <div className="tab-content tab-content-2 active">
                  <div className="home-interest">
                    <div className="heading-link flex"></div>
                    <div className="interest-box flex space-between">
                      <div className="wrap flex">
                        <figure>
                          <a href="#">
                            <img
                              src="app/images/interestSliderImg.png"
                              alt="Genaiguru intrest"
                              title="Genaiguru intrest"
                            />
                          </a>
                        </figure>
                        <div className="content">
                          <div className="wrapper flex">
                            <figure>
                              <img
                                src="app/images/authorImg.png"
                                alt="Genaiguru authorImg"
                                title="Genaiguru  authorImg"
                              />
                            </figure>
                            <div className="innerContent">
                              <h6>Alex Smih</h6>
                              <p>24 M view . 3 month ago</p>
                            </div>
                          </div>
                          <p>
                            <a href="#">
                              Navigating the World of ChatGPT and Its
                              Open-source Adversaries
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
                                  alt="Genaiguru dots-icon"
                                  title="Genaiguru dots-icon"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="wrap flex">
                        <figure>
                          <a href="#">
                            <img
                              src="app/images/interestSliderImg.png"
                              alt="Genaiguru intrestsliderimg"
                              title="Genaiguru intrestsliderimg"
                            />
                          </a>
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
                              Navigating the World of ChatGPT and Its
                              Open-source Adversaries
                            </a>
                          </p>
                          <ul className="flex">
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

                      <div className="wrap flex">
                        <figure>
                          <a href="#">
                            <img
                              src="app/images/interestSliderImg.png"
                              alt="Genaiguru interestSliderImg  "
                              title="Genaiguru interestSliderImg "
                            />
                          </a>
                        </figure>
                        <div className="content">
                          <div className="wrapper flex">
                            <figure>
                              <img
                                src="app/images/authorImg.png"
                                alt="Genaiguru authorImg "
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
                              Navigating the World of ChatGPT and Its
                              Open-source Adversaries
                            </a>
                          </p>
                          <ul className="flex">
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

                      <div className="wrap flex">
                        <figure>
                          <a href="#">
                            <img
                              src="app/images/interestSliderImg.png"
                              alt="Genaiguru intrestsliderimg"
                              title="Genaiguru intrestsliderimg"
                            />
                          </a>
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
                              Navigating the World of ChatGPT and Its
                              Open-source Adversaries
                            </a>
                          </p>
                          <ul className="flex">
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

                      <div className="wrap flex">
                        <figure>
                          <a href="#">
                            <img
                              src="app/images/interestSliderImg.png"
                              alt="Genaiguru"
                              title="Genaiguru intrest-slider"
                            />
                          </a>
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
                              Navigating the World of ChatGPT and Its
                              Open-source Adversaries
                            </a>
                          </p>
                          <ul className="flex">
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
              )}
              {/* <!-- video here --> */}
              {activeTab === 3 && (
                <div className="tab-content tab-content-3 active">
                  <div className="home-interest">
                    <div className="heading-link flex"></div>
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
                              Navigating the World of ChatGPT and Its
                              Open-source Adversaries
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
                              Navigating the World of ChatGPT and Its
                              Open-source Adversaries
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
                              Navigating the World of ChatGPT and Its
                              Open-source Adversaries
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
                              Navigating the World of ChatGPT and Its
                              Open-source Adversaries
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
                              Navigating the World of ChatGPT and Its
                              Open-source Adversaries
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
              )}
              {/* <!-- video end here -->
                <!-- badges here --> */}
              {activeTab === 4 && (
                <div className="tab-content tab-content-4 active">
                  <div className="badges-box">
                    <ul className="flex ">
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
              )}
              {/* <!-- badges end here --> */}
            </div>
            {/* <!-- post end here --> */}
          </div>
        </div>
      </div>
      {/* <!-- profile mobile section end here --> */}
      {displayInterestPopup && (
        <>
          <div className="popup-container hideMob">
            <div className="popup-wrapper">
              <div className="popup-header flex">
                <h2>
                  Add or change your <br /> interested topic
                </h2>
                <Link
                  onClick={() => {
                    setDisplayInterestPopup(false);
                  }}
                  className="cross_btn"
                >
                  <img
                    src="app/images/cancelButtonIcon.png"
                    alt="Genaiguru cross-icon"
                    title="Genaiguru cross-icon"
                  />
                </Link>
              </div>
              <div className="popupp-btn-box">
                <form action="">
                  <div className="flex">
                    <div className="button-container">
                      {" "}
                      <input
                        name=""
                        id=""
                        className="ai-button"
                        type="button"
                        value="Artificial intelligence"
                      />
                    </div>
                    <div className="button-container">
                      {" "}
                      <input
                        name=""
                        id=""
                        className="ai-button"
                        type="button"
                        value="Open AI"
                      />
                    </div>
                    <div className="button-container">
                      {" "}
                      <input
                        name=""
                        id=""
                        className="ai-button"
                        type="button"
                        value="Blockchain"
                      />
                    </div>
                    <div className="button-container">
                      {" "}
                      <input
                        name=""
                        id=""
                        className="ai-button"
                        type="button"
                        value="Topic 02"
                      />
                    </div>
                    <div className="button-container">
                      {" "}
                      <input
                        name=""
                        id=""
                        className="ai-button"
                        type="button"
                        value="Digital innovation"
                      />
                    </div>
                    <div className="button-container">
                      {" "}
                      <input
                        name=""
                        id=""
                        className="ai-button"
                        type="button"
                        value="Mid-journey"
                      />
                    </div>
                    <div className="button-container">
                      {" "}
                      <input
                        name=""
                        id=""
                        className="ai-button"
                        type="button"
                        value="Artificial intelligence"
                      />
                    </div>
                    <div className="button-container">
                      {" "}
                      <input
                        name=""
                        id=""
                        className="ai-button"
                        type="button"
                        value="GPT"
                      />
                    </div>
                    <div className="button-container">
                      {" "}
                      <input
                        name=""
                        id=""
                        className="ai-button"
                        type="button"
                        value="Data science"
                      />
                    </div>
                    <div className="button-container">
                      <input
                        name=""
                        id=""
                        className="ai-button"
                        type="button"
                        value="Machine learning"
                      />
                    </div>
                    <div className="button-container">
                      {" "}
                      <input
                        name=""
                        id=""
                        className="ai-button"
                        type="button"
                        value="Large language models"
                      />
                    </div>
                    <div className="button-container">
                      {" "}
                      <input
                        name=""
                        id=""
                        className="ai-button"
                        type="button"
                        value="NLP"
                      />
                    </div>
                  </div>
                  <button type="submit" className="loginBtn">
                    Add Now
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* <!-- mobile popup starts here -- */}
          <div className="mob_popup hideDes">
            <div className="mobileClose">
              <figure>
                <img
                  src="app/images/mobileCloseIconImg.png"
                  alt="mobile close icon"
                />
              </figure>
            </div>
            <div className="popup-wrapper ">
              <div className="popup-header flex">
                <h2>Add or change your interested topic</h2>
              </div>
              <div className="popupp-btn-box">
                <form action="">
                  <div className="flex">
                    <div className="button-container">
                      {" "}
                      <input
                        name=""
                        id=""
                        className="ai-button"
                        type="button"
                        value="Artificial intelligence"
                      />
                    </div>
                    <div className="button-container">
                      {" "}
                      <input
                        name=""
                        id=""
                        className="ai-button"
                        type="button"
                        value="Open AI"
                      />
                    </div>
                    <div className="button-container">
                      {" "}
                      <input
                        name=""
                        id=""
                        className="ai-button"
                        type="button"
                        value="Blockchain"
                      />
                    </div>
                    <div className="button-container">
                      {" "}
                      <input
                        name=""
                        id=""
                        className="ai-button"
                        type="button"
                        value="Topic 02"
                      />
                    </div>
                    <div className="button-container">
                      {" "}
                      <input
                        name=""
                        id=""
                        className="ai-button"
                        type="button"
                        value="Digital innovation"
                      />
                    </div>
                    <div className="button-container">
                      {" "}
                      <input
                        name=""
                        id=""
                        className="ai-button"
                        type="button"
                        value="Mid-journey"
                      />
                    </div>
                    <div className="button-container">
                      {" "}
                      <input
                        name=""
                        id=""
                        className="ai-button"
                        type="button"
                        value="Artificial intelligence"
                      />
                    </div>
                    <div className="button-container">
                      {" "}
                      <input
                        name=""
                        id=""
                        className="ai-button"
                        type="button"
                        value="GPT"
                      />
                    </div>
                    <div className="button-container">
                      {" "}
                      <input
                        name=""
                        id=""
                        className="ai-button"
                        type="button"
                        value="Data science"
                      />
                    </div>
                    <div className="button-container">
                      {" "}
                      <input
                        name=""
                        id=""
                        className="ai-button"
                        type="button"
                        value="Machine learning"
                      />
                    </div>
                    <div className="button-container">
                      {" "}
                      <input
                        name=""
                        id=""
                        className="ai-button"
                        type="button"
                        value="Large language models"
                      />
                    </div>
                    <div className="button-container">
                      {" "}
                      <input
                        name=""
                        id=""
                        className="ai-button"
                        type="button"
                        value="NLP"
                      />
                    </div>
                  </div>
                  <button type="submit" className="loginBtn">
                    Add Now
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* <!-- mobile popup end here -- */}
        </>
      )}
    </>
  );
};

export default Profile;
