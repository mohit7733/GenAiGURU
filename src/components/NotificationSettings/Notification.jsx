import React from "react";
import { PATH_MOBLIE_SETTINGS } from "../../routes";
import { Link } from "react-router-dom";

const NotificationSettings = () => {
  return (
    <div>
      <div className="mob_notification hideDes">
        <div className="mobileHead flex">
          <Link to={PATH_MOBLIE_SETTINGS} className="backBtns">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </Link>
          <h2>Notifications Settings</h2>
        </div>
      </div>
      <div className="notification">
        <form action="">
          <div className="notification flex space-between">
            <label for="">Email notifications</label>
            <label className="onoffbtn">
              <input type="checkbox" />
            </label>
          </div>
          <div className="notification flex space-between">
            <label for="">Push notifications</label>
            <label className="onoffbtn">
              <input type="checkbox" />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};
export default NotificationSettings;
