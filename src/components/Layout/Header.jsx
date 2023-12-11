import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getBaseURL } from "../../api/config";
import userimageIcon from "../../assets/images/person.png";
import WithAuth from "../../pages/Authentication/WithAuth";
import { PATH_LOGIN, PATH_PROFILE } from "../../routes";

const Header = () => {
  const [profileImage, setProfileImage] = useState();

  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));

  const userLoggedIn = JSON.parse(localStorage.getItem("userLoggedIn"));

  useEffect(() => {
    axios
      .get(`${getBaseURL()}/auth/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("UserId", JSON.stringify(response.data?.id));
        setProfileImage(response.data.profile_image);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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
        <div className="hamburger">
          <img
            src="app/images/hamburgerIcon.png"
            alt="Genaiguru hamburger"
            title="Genaiguru hamburger "
          />
        </div>
        <figure className="headerLogo">
          <a href="/">
            <img
              src="app/images/headerLogo.png"
              alt="Genaiguru header logo"
              title="Genaiguru"
            />
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
                title="Genaiguru small logo"
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
          <li className="headerIcon">
            <a href="#">
              <img
                src="app/images/notificationIcon.png"
                alt="Genaiguru notificationIcon"
                title="Genaiguru notificationIcon"
              />
            </a>
          </li>
          <li className="headerIcon">
            <a href="#">
              <img
                src="app/images/elementsIcon.png"
                alt="Genaiguru elementsIcon"
                title="Genaiguru elementsIcon"
              />{" "}
              <span className="count">22</span>
            </a>
          </li>
          <li className="secondaryBtn">
            <WithAuth
              callBack={(e) => {
                navigate("/index5");
              }}
            >
              <Link>
                <img
                  src="app/images/padIcon.png"
                  alt="Genaiguru padIcon"
                  title="Genaiguru padIcon"
                />{" "}
                Write with AI
              </Link>
            </WithAuth>
          </li>
          <li className="secondaryBtn mobile">
            <Link to={"/index2"}>
              <img
                src="app/images/padIcon.png"
                alt="Genaiguru mobile padIcon"
                title="Genaiguru mobile padIcon"
              />{" "}
              Write
            </Link>
          </li>
          <li className="userIcon">
            {/* Login page link before user login */}

            {userLoggedIn ? (
              <Link to={PATH_PROFILE}>
                <img src={profileImage} alt=" " title="Genaiguru user image" />
              </Link>
            ) : (
              <Link to={"/login"}>
                <img src={userimageIcon} alt=" " title="Genaiguru user image" />
              </Link>
            )}

            <ul className="userNav">
              <li>
                {userLoggedIn && (
                  <li>
                    <Link to="/profile">My Profile </Link>
                  </li>
                )}
                <Link onClick={changeLoginStatus} to={PATH_LOGIN}>
                  {userLoggedIn ? "Logout" : "SignUp/Login"}
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
