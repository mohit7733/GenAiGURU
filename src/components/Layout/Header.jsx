import React from "react";
import userimageIcon from "../../assets/images/person.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const isLogged = true;
  const navigate = useNavigate();
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
          <a href="#">
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
            {/* <Link to={"/login"}>
              <img
                src={userimageIcon}
                alt="Genaiguru user image"
                title="Genaiguru user image"
              />
            </Link> */}
            {isLogged ? (
              <Link to={"/phasepage1"}>
                <img
                  src={userimageIcon}
                  alt="Genaiguru user image"
                  title="Genaiguru user image"
                />
              </Link>
            ) : (
              <Link to={"/login"}>
                <img
                  src={userimageIcon}
                  alt="Genaiguru user image"
                  title="Genaiguru user image"
                />
              </Link>
            )}

            <ul class="userNav">
              <li>
                <Link to={"/login"}>SignUp/Login</Link>
              </li>
            </ul>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
