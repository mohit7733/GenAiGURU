import React, { useState } from "react";
import MobileSideBar from "./MobileSideBar";
import { Link } from "react-router-dom";
import {
  PATH_CUSTOMIZE_INTEREST,
  PATH_EDIT_PASSWORD,
  PATH_EDIT_PROFILE,
  PATH_NOTIFICATION_SETTINGS,
  PATH_PRIVACY_POLICY,
  PATH_SEND_FEEDBACK,
} from "../../routes";

const MobileSettings = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };
  return (
    <>
      <div className="setting-container Setting-sidebar">
        <div className="hamburger" onClick={toggleMobileSidebar}>
          <img
            src="app/images/hamburgerIcon.png"
            alt="Genaiguru hamburger"
            title="Genaiguru hamburger"
          />
          <h2>Settings</h2>
        </div>
        <ul className="connect-link">
          <li className="">
            <div className="d-flex">
              <Link
                to={PATH_EDIT_PROFILE}
                className=""
                data-toggle-target=".tab-content-1"
              >
                <figure>
                  <img
                    src="./app/images/profile.png"
                    alt="Genaiguru profile"
                    title="Genaiguru profile"
                  />
                </figure>
                <span> Edit Profile</span>
              </Link>
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </li>
          <li className="">
            <div className="d-flex">
              <Link
                to={PATH_EDIT_PASSWORD}
                className=""
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
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </li>
          <li className="">
            <div className="d-flex">
              <Link to={PATH_CUSTOMIZE_INTEREST}
                className=""
                data-toggle-target=".tab-content-3"
               
              >
                <figure>
                  <img
                    src="./app/images/customize-intrest.png"
                    alt="Genaiguru Customize"
                    title="Genaiguru Customize"
                  />
                </figure>
                <a href="/settings">
                  <span>Customize your interest</span>
                </a>
              </Link>
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </li>
          <li className="">
            <div className="d-flex">
              <Link
                to={PATH_NOTIFICATION_SETTINGS}
                className=""
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
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </li>
          <li className="active">
            <Link
              to={PATH_PRIVACY_POLICY}
              className="tab"
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
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </li>
          <li className="">
            <Link
              to={PATH_SEND_FEEDBACK}
              className=""
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
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </li>
        </ul>
        {/* <div className="close">
          <img
            src="app/images/menuCloseIcon.png"
            alt="Genaiguru menu close icon"
            title="Genaiguru menu close"
          />
        </div> */}
      </div>
      {/* ); */}
      {isMobileSidebarOpen && (
        <MobileSideBar toggleMobileSidebar={toggleMobileSidebar} />
      )}
    </>
  );
};
export default MobileSettings;
