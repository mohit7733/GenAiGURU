import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getBaseURL } from "../../api/config";
import userimageIcon from "../../assets/images/person.png";
import WithAuth from "../../pages/Authentication/WithAuth";
import { PATH_LOGIN, PATH_NOTIFICATION } from "../../routes";
import MobileSideBar from "./MobileSideBar";
const Header = () => {
  const [profileImage, setProfileImage] = useState();
  const [notificationCount, setNotificationCount] = useState("");

  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"))
    ? JSON.parse(localStorage.getItem("token"))
    : "";

  const userLoggedIn = JSON.parse(localStorage.getItem("userLoggedIn"));

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  useEffect(() => {
    if (token != "") {
      axios
        .get(`${getBaseURL()}/auth/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          localStorage.setItem("UserId", JSON.stringify(response.data?.id));
          setProfileImage(response.data.profile_image);
        })
        .catch((err) => {
          console.log(err.message);
        });
      getNotificationFunction();
    }
  }, []);

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

  const changeLoginStatus = () => {
    if (userLoggedIn === "true") {
      localStorage.setItem("userLoggedIn", "false");
      localStorage.removeItem("token");
      localStorage.removeItem("UserId");
    }
  };

  return (
    <>
      <header className="flex">
        <div className="hamburger" onClick={toggleMobileSidebar}>
          <img src="app/images/hamburgerIcon.png" alt="Genaiguru hamburger" />
        </div>
        <figure className="headerLogo">
          <a href="/">
            <img src="app/images/headerLogo.png" alt="Genaiguru header logo" />
          </a>
        </figure>
        <WithAuth
          callBack={(e) => {
            navigate("/index2");
          }}
        >
          <div className="searchbar flex">
            <figure className="icon">
              <img
                src="app/images/searchIconHeader.png"
                alt="Genaiguru small logo"
              />
            </figure>

            <div action="">
              <div className="form_group">
                <input type="search" placeholder="Search genaiguru" />
              </div>
            </div>
          </div>
        </WithAuth>

        <ul className="leftSide flex">
          <WithAuth
            callBack={(e) => {
              navigate(PATH_NOTIFICATION);
            }}
          >
            <li className="headerIcon" style={{ cursor: "pointer" }}>
              <a>
                <img
                  src="app/images/notificationIcon.png"
                  alt="Genaiguru notificationIcon"
                />
                {notificationCount > 0 && (
                  <span className="count">{notificationCount}</span>
                )}{" "}
              </a>
            </li>
          </WithAuth>
          <li className="headerIcon">
            <WithAuth
              callBack={(e) => {
                navigate("/subscriptions");
              }}
            >
              <Link>
                <img
                  src="app/images/elementsIcon.png"
                  alt="Genaiguru elementsIcon"
                />{" "}
                {/* <span className="count">22</span> */}
              </Link>
            </WithAuth>
          </li>
          <li className="secondaryBtn">
            <WithAuth

              callBack={(e) => {
                navigate("/");
              }}

            >
              <Link>
                <img src="app/images/padIcon.png" alt="Genaiguru padIcon" />{" "}
                Write with AI
              </Link>
            </WithAuth>
          </li>
          <li className="secondaryBtn mobile">

            <Link to="/">

              <img
                src="app/images/padIcon.png"
                alt="Genaiguru mobile padIcon"
              />{" "}
              Write with AI
            </Link>
          </li>
          <li className="userIcon">
            {/* Login page link before user login */}

            {userLoggedIn ? (
              <Link>
                <img
                  src={profileImage ? profileImage : userimageIcon}
                  alt=" "
                />
              </Link>
            ) : (
              <Link>
                <img src={userimageIcon} alt=" " />
              </Link>
            )}

            <ul className="userNav">
              <li>
                {userLoggedIn && (
                  <ul>
                    <li>
                      <Link to="/profile">My Profile </Link>
                    </li>
                  </ul>
                )}
                <Link onClick={changeLoginStatus} to={PATH_LOGIN}>
                  {userLoggedIn ? "Logout" : "SignUp / Login"}
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </header>
      {isMobileSidebarOpen && (
        <MobileSideBar toggleMobileSidebar={toggleMobileSidebar} />
      )}
    </>
  );
};

export default Header;
