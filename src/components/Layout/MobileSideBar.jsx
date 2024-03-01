import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  PATH_GURUGOLD,
  PATH_LOGIN,
  PATH_MOBLIE_SETTINGS,
  PATH_PROFILE,
  PATH_NOTIFICATION,
} from "../../routes";
import WithAuth from "../../pages/Authentication/WithAuth";
import axios from "axios";
import { getBaseURL } from "../../api/config";

const MobileSideBar = (props) => {
  const [notificationCount, setNotificationCount] = useState("");

  const userLoggedIn = JSON.parse(localStorage.getItem("userLoggedIn"));
  const navigate = useNavigate();

  const changeLoginStatus = () => {
    if (userLoggedIn === "true") {
      localStorage.setItem("userLoggedIn", "false");
      localStorage.removeItem("token");
      localStorage.removeItem("UserId");
    }
  };
  const token = JSON.parse(localStorage.getItem("token"))
    ? JSON.parse(localStorage.getItem("token"))
    : "";

  const getNotificationFunction = () => {
    axios
      .get(`${getBaseURL()}/auth/get-user-notifications`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setNotificationCount(response?.data?.newNotificationsCount);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    getNotificationFunction();
  }, []);
  return (
    <div>
      <section className="mobileMenus">
        <div className="menuWrapper">
          <div className="close" onClick={props.toggleMobileSidebar}>
            <img
              src="app/images/menuCloseIcon.png"
              alt="Genaiguru menu close icon"
            />
          </div>
          <div className="topSearch">
            <WithAuth
              callBack={(e) => {
                navigate("/search-with-ai");
              }}
            >
              <div className="searchbar flex">
                <figure className="icon">
                  <img
                    src="app/images/searchIconHeader.png"
                    alt="Genaiguru small logo"
                  />
                </figure>
                <form action="">
                  <div className="form_group">
                    <input
                      disabled={
                        window.location.pathname.includes("search-with-ai")
                          ? true
                          : false
                      }
                      type="search"
                      placeholder="Search AI"
                    />
                  </div>
                </form>
              </div>
            </WithAuth>
          </div>
          <ul className="menuLists">
            <li>
              <Link onClick={props.toggleMobileSidebar} to="/">
                <a target="_blank">
                  <img
                    src="app/images/mobileMenuIcon11.png"
                    alt="Genaiguru Settings menu icon"
                  />
                  Home
                </a>
              </Link>
            </li>
            <li>
              <WithAuth
                callBack={(e) => {
                  navigate("/write-with-ai");
                }}
              >
                <a target="_blank">
                  <img
                    src="app/images/mobileMenuIcon1.png"
                    alt="Genaiguru write menu icon"
                  />
                  Write with AI
                </a>
              </WithAuth>
            </li>
            <li>
              <WithAuth
                callBack={(e) => {
                  navigate(PATH_GURUGOLD);
                }}
              >
                <a target="_blank">
                  <img
                    src="app/images/mobileMenuIcon2.png"
                    alt="Genaiguru Gamification menu icon"
                  />
                  Guru Gold
                </a>
              </WithAuth>
            </li>
            <li>
              <WithAuth
                callBack={(e) => {
                  navigate(PATH_NOTIFICATION);
                }}
              >
                <a href="#">
                  <img
                    src="app/images/mobileMenuIcon3.png"
                    alt="Genaiguru Notifications menu icon"
                  />
                  Notifications{" "}
                  {notificationCount > 0 && (
                    <span
                      style={{ marginLeft: "4px" }}
                      className="count"
                    >{`( ${notificationCount} )`}</span>
                  )}{" "}
                </a>
              </WithAuth>
            </li>
            <li>
              <WithAuth
                callBack={(e) => {
                  navigate("/gurukeeps");
                }}
              >
                <a target="_blank">
                  <img
                    src="app/images/mobileMenuIcon4.png"
                    alt="Genaiguru Bookmarked post menu icon"
                  />
                  Guru Keeps
                </a>
              </WithAuth>
            </li>
            <li>
              <WithAuth
                callBack={(e) => {
                  navigate(PATH_PROFILE);
                }}
              >
                <a target="_blank">
                  <img
                    src="app/images/mobileMenuIcon6.png"
                    alt="Genaiguru profile menu icon"
                  />
                  Profile
                </a>
              </WithAuth>
            </li>
            <li>
              <Link to={"/contact"}>
                <a target="_blank">
                  <img
                    src="app/images/mobileMenuIcon7.png"
                    alt="Genaiguru About & Contact menu icon"
                  />
                  About & Contact
                </a>
              </Link>
            </li>
            <li>
              <WithAuth
                callBack={(e) => {
                  navigate("/subscriptions");
                }}
              >
                <a target="_blank">
                  <img
                    src="app/images/mobileMenuIcon8.png"
                    alt="Genaiguru My subscription menu icon"
                  />
                  Team Guru
                </a>
              </WithAuth>
            </li>
            <li>
              <WithAuth
                callBack={(e) => {
                  navigate(PATH_MOBLIE_SETTINGS);
                }}
              >
                <a target="_blank">
                  <img
                    src="app/images/mobileMenuIcon9.png"
                    alt="Genaiguru Settings menu icon"
                  />
                  Settings
                </a>
              </WithAuth>
            </li>

            <li>
              <Link to={PATH_LOGIN} onClick={changeLoginStatus}>
                <a target="_blank">
                  <img
                    src="app/images/mobileMenuIcon10.png"
                    alt="Genaiguru Log out menu icon"
                  />
                  {userLoggedIn ? "Logout" : "SignUp / Login"}
                </a>
              </Link>
            </li>
          </ul>
          <ul className="mobileSocials flex">
            <li>
              <a href="#" target="_blank">
                <img
                  src="app/images/facebookIconNew.png"
                  alt="Genaiguru facebook icons"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img
                  src="app/images/youtubeIcon.png"
                  alt="Genaiguru youtube icons"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img
                  src="app/images/twitter.png"
                  alt="Genaiguru twitter icons"
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MobileSideBar;
