import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import { getBaseURL } from "../../api/config";
import axios from "axios";
import WithAuth from "../../pages/Authentication/WithAuth";
import SendFeedback from "../../components/SendFeedback/SendFeedback";
import PrivacyPolicy from "../../components/Privacy & Policy/Privacy&Policy";
import NotificationSettings from "../../components/NotificationSettings/Notification";
import EditPassword from "../../components/EditPassword/EditPassword";
import CustomizeInterest from "../../components/CustomizeInterest/CustomizeInterest";
import { PATH_PROFILE } from "../../routes";

const Settings = () => {
  const [activeTab, setActiveTab] = useState(5);
  const [faq, setFaq] = useState([]);
  const [isVisible, setIsVisible] = useState();
  const userId = JSON.parse(localStorage.getItem("UserId"));
  const navigate = useNavigate();
  let type = JSON.parse(localStorage.getItem("LoginType"));

  // get API for FAQ.......

  useEffect(() => {
    axios
      .get(`${getBaseURL()}/faq`)
      .then((response) => {
        // Handle the successful response
        setFaq(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  }, []);

  // Function to handle tab click
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div>
      <MobileHeader />
      {/* <!-- mobile header start here --> */}
      {/* <div className="mob_profile commanMobHead heightAuto hideDes">
        <div className="mobileHead flex">
          <div className="hamburger">
          <Link to={BASE_PATH}>
          <i className="fa fa-angle-left" aria-hidden="true"></i>
          </Link>
          </div>
          <h2>Edit Profile</h2>
          
        </div>
      </div> */}
      {/* <!-- mobile header end here --> */}
      <section className="mainWrapper flex">
        <Sidebar />
        <div className="rightSection">
          <div className=" full-width">
            {/* <!-- setting start --> */}
            <div className="setting-wrapper flex">
              <h1>Settings</h1>
              <div className="setting-container">
                <ul className="connect-link">
                  <li
                    style={type == "others" ? { display: "none" } : {}}
                    className={activeTab === 1 ? " active" : ""}
                  >
                    <WithAuth
                      callBack={(e) => {
                        handleTabClick(1);
                      }}
                    >
                      <Link
                        // onClick={() => handleTabClick(1)}
                        className={activeTab === 1 ? "tab" : ""}
                        data-toggle-target=".tab-content-2"
                      >
                        <figure>
                          <img
                            src="./app/images/password.png"
                            alt="Genaiguru password"
                          />
                        </figure>
                        <span>Edit password</span>
                      </Link>
                    </WithAuth>
                  </li>
                  <li className={activeTab === 2 ? " active" : ""}>
                    <WithAuth
                      callBack={(e) => {
                        handleTabClick(2);
                        navigate("/profile");
                      }}
                    >
                      <Link
                        // to={PATH_PROFILE}
                        // onClick={() => {
                        //   handleTabClick(2);
                        // }}
                        className={activeTab === 2 ? "tab" : ""}
                        data-toggle-target=".tab-content-1"
                      >
                        <figure>
                          <img
                            src="./app/images/profile.png"
                            alt="Genaiguru profile"
                          />
                        </figure>
                        <span>Profile</span>
                      </Link>
                    </WithAuth>
                  </li>
                  <li className={activeTab === 3 ? " active" : ""}>
                    <WithAuth
                      callBack={(e) => {
                        handleTabClick(3);
                        // navigate("/profile");
                      }}
                    >
                      <Link
                        // onClick={() => handleTabClick(3)}
                        className={activeTab === 3 ? "tab" : ""}
                        data-toggle-target=".tab-content-3"
                      >
                        <figure>
                          <img
                            src="./app/images/customize-intrest.png"
                            alt="Genaiguru Customize"
                          />
                        </figure>
                        <Link to={PATH_PROFILE}>
                          <span>Customize your interest</span>
                        </Link>
                      </Link>
                    </WithAuth>
                  </li>
                  <li className={activeTab === 4 ? " active" : ""}>
                    <WithAuth
                      callBack={(e) => {
                        handleTabClick(4);
                      }}
                    >
                      <Link
                        // onClick={() => handleTabClick(4)}
                        className={activeTab === 4 ? "tab" : ""}
                        data-toggle-target=".tab-content-4"
                      >
                        <figure>
                          <img
                            src="./app/images/notification.png"
                            alt="Genaiguru notification"
                          />
                        </figure>
                        <span>Notification settings</span>
                      </Link>
                    </WithAuth>
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
                        />
                      </figure>
                      <span>Privacy policy</span>
                    </Link>
                  </li>
                  {/* <li className={activeTab === 6 ? " active" : ""}>
                    <Link
                      onClick={() => handleTabClick(6)}
                      className={activeTab === 6 ? "tab" : ""}
                      data-toggle-target=".tab-content-6"
                    >
                      <figure>
                        <img
                          src="./app/images/Q&a.png"
                          alt="Genaiguru Q&A"
                        />
                      </figure>
                      <span>Q&A</span>
                    </Link>
                  </li> */}
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
                        />
                      </figure>
                      <span>Send feedback</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="setting-box">
                {activeTab === 2 && (
                  // <div className="tab-content tab-content-1 active">
                  <div
                    className={
                      activeTab === 2 && "tab-content tab-content-2 active"
                    }
                  >
                    {/* Profile Page added here as a component based on props Header and sidebar is hidden */}
                    {/* <EditProfile settingsPage={true} /> */}
                  </div>
                )}
                {/* <!-- password here --> */}
                {activeTab === 1 && (
                  <div
                    className={
                      activeTab === 1 &&
                      "tab-content tab-content-1 passChangeTab active"
                    }
                  >
                    {/* <div className="tab-content tab-content-2 passChangeTab"> */}
                    {/* <!-- password --> */}
                    <EditPassword />
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
                    {/* <div className="tab-content tab-content-3"> */}
                    {/* <!-- intrest  --> */}
                    <CustomizeInterest />
                  </div>
                )}
                {/* <!-- privacy --> */}
                {activeTab === 5 && (
                  <div
                    className={
                      activeTab === 5 && "tab-content tab-content-5 active"
                    }
                  >
                    {/* <div className="tab-content tab-content-4"> */}
                    {/* <!-- privacy --> */}
                    <PrivacyPolicy />
                  </div>
                )}
                {/* <!-- Tell us problem --> */}
                {activeTab === 7 && (
                  <div
                    className={
                      activeTab === 7 && "tab-content tab-content-7 active"
                    }
                  >
                    {/* <div className="tab-content tab-content-5"> */}
                    <SendFeedback />
                  </div>
                )}
                {/* <!-- tell us problem --> */}
                {activeTab === 6 && (
                  <div
                    className={
                      activeTab === 6 && "tab-content tab-content-6 active"
                    }
                  >
                    {/* <div className="tab-content tab-content-6"> */}
                    <h4>Q&A</h4>
                    <br />
                    {faq.map((faqdata, index) => (
                      <div class="faq-box">
                        <div
                          class="accordion"
                          onClick={(e) =>
                            setIsVisible(isVisible == index ? -1 : index)
                          }
                        >
                          <h4>{faqdata.question}</h4>
                          <div class="leftArrow">
                            <img
                              src="app/images/arrow-left.png"
                              alt="Genaiguru arrow-left"
                            />
                          </div>
                        </div>
                        <div
                          class="panel"
                          style={isVisible == index ? { display: "block" } : {}}
                        >
                          <p>{faqdata.answer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {/* <!-- notification --> */}
                {activeTab === 4 && (
                  <div
                    className={
                      activeTab === 4 && "tab-content tab-content-4 active"
                    }
                  >
                    {/* <div className="tab-content tab-content-7"> */}
                    <NotificationSettings />
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
