import React, { useEffect, useState } from "react";
import Sidebar from "../Layout/Sidebar";
import MobileHeader from "../Layout/MobileHeader";
import axios from "axios";
import { getBaseURL } from "../../api/config";
import deleteIcon from "../../assets/images/trash-2.png";
import { useNavigate } from "react-router-dom";
const NotificationComponent = () => {
  const [profileImage, setProfileImage] = useState();
  const [userNotifications, setUserNotifications] = useState([]);

  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();
  useEffect(() => {
    if (token != "") {
      userDetailsFunction();
      getNotificationFunction();
    }
    axios
      .post(`${getBaseURL()}/auth/read-user-notifications`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response?.message);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const userDetailsFunction = () => {
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
  };

  const getNotificationFunction = () => {
    axios
      .get(`${getBaseURL()}/auth/get-user-notifications`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response?.data?.notifications);
        setUserNotifications(response?.data?.notifications);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const deleteNotications = (not_id) => {
    axios
      .post(
        `${getBaseURL()}/auth/delete-user-notifications`,
        {
          id: not_id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setUserNotifications(
          userNotifications.filter((notification) => notification.id !== not_id)
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const cleaALlNotications = () => {
    axios
      .post(
        `${getBaseURL()}/auth/delete-user-notifications`,
        {
          delete_all: "yes",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setUserNotifications([]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const navigatepost = (type, id) => {
    if (type == "video") {
      navigate("/videoplay?id=" + id);
    } else if (type == "blog") {
      navigate("/blogdetails?id=" + id);
    } else if (type == "article") {
      navigate("/articledetails?id=" + id);
    }
  };

  return (
    <div>
      <MobileHeader />
      {/* <!-- main section start here --> */}
      <section className="mainWrapper flex hideMob">
        <Sidebar />
        <div className="rightSection">
          <div className="full-width">
            <div className="keeps-container">
              <div className="gurukeeps-wrapper flex space-between">
                <h1>Notifications</h1>
                <h5 onClick={cleaALlNotications} style={{ cursor: "pointer" }}>
                  Clear All
                </h5>
              </div>
              <div>
                <div className="interest-guru ">
                  {userNotifications.length > 0 ? (
                    userNotifications.map((notif, index) => {
                      return (
                        <div
                          onClick={() =>
                            navigatepost(notif?.post_type, notif?.post_id)
                          }
                          className="wrap flex"
                          key={index}
                          style={{ cursor: "pointer" }}
                        >
                          <div className="content">
                            <div className="flex space-between">
                              <div className="wrapper flex">
                                <figure>
                                  <img
                                    src={
                                      notif?.sender_id != null
                                        ? notif?.sender_profile_image
                                        : profileImage
                                    }
                                  />
                                </figure>
                                <p style={{ marginLeft: "10px" }}>
                                  {notif?.message}
                                </p>
                              </div>
                              <ul className="flex">
                                <li>
                                  <a
                                    onClick={() => {
                                      deleteNotications(notif?.id);
                                    }}
                                  >
                                    <img
                                      src={deleteIcon}
                                      style={{ cursor: "pointer" }}
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <h3>You have no notifications !</h3>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotificationComponent;
