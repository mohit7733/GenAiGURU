import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="leftSidebar">
        <ul className="menu">
          <li>
            <Link to={"/"}>
              <figure>
                <img
                  src="app/images/homeIcon.png"
                  alt="Genaiguru home icon"
                  title="Genaiguru home icon"
                />
              </figure>
              Home
            </Link>
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
        <div className="newsletter">
          <h5>Joining our newsletter</h5>
          <form action="">
            <div className="form_group">
              <input type="email" placeholder="Email address" />
            </div>
            <div className="form_group">
              <button type="button" className="loginBtn">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <ul className="bottom-menu">
          <li>
            <a href="#">Terms & Services</a>
          </li>
          <li>
            <a href="#">Privacy policy</a>
          </li>
        </ul>
        <ul className="social-icons flex">
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
      </div>
    </>
  );
};

export default Sidebar;
