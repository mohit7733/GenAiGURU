import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userimageIcon from "../../assets/images/person.png";
import { useNavigate } from "react-router-dom";
import { getBaseURL } from "../../api/config";
import axios from "axios";
import { PATH_LOGIN, PATH_PROFILE } from "../../routes";

const MobileHeader = ({ isLogged }) => {
  const [loginPopupVisible, setLoginPopupVisible] = useState(false);
  const [profileImage, setProfileImage] = useState();

  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));

  const userLoggedIn = JSON.parse(localStorage.getItem("userLoggedIn"));
  console.log(userLoggedIn, "--=-User LoggedIn");

  useEffect(() => {
    axios
      .get(`${getBaseURL()}/auth/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setProfileImage(response.data.profile_image);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const changeLoginStatus = ({ isLoggedIn }) => {
    console.log(userLoggedIn);
    if (userLoggedIn === "true") {
      localStorage.setItem("userLoggedIn", "false");
      localStorage.removeItem("token");
      localStorage.removeItem("UserId");
    }
  };

  return (
    <>
      <header className="flex hideMob">
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
        <div className="searchbar flex">
          <figure className="icon">
            <img
              src="app/images/searchIconHeader.png"
              alt="Genaiguru small logo"
              title="Genaiguru small logo"
            />
          </figure>
          <form action="">
            <Link to={"/index2"}>
              <div className="form_group">
                <input
                  type="search"
                  placeholder="Search genaiguru"
                  onClick={() => {
                    navigate("/index2");
                  }}
                />
              </div>
            </Link>
          </form>
        </div>
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
            <Link to={"/index5"}>
              <img
                src="app/images/padIcon.png"
                alt="Genaiguru padIcon"
                title="Genaiguru padIcon"
              />{" "}
              Write with AI
            </Link>
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
                <img src={profileImage} alt="" title="Genaiguru user image" />
              </Link>
            ) : (
              <Link to={PATH_LOGIN}>
                <img src={userimageIcon} alt="" title="Genaiguru user image" />
              </Link>
            )}
            <ul className="userNav">
              {userLoggedIn && (
                <li>
                  <Link to="/profile">My Profile </Link>
                </li>
              )}
              <li>
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

export default MobileHeader;
