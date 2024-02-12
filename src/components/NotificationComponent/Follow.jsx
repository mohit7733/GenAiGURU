import React, { useEffect, useState } from "react";
import Sidebar from "../Layout/Sidebar";
import MobileHeader from "../Layout/MobileHeader";
import axios from "axios";
import { getBaseURL } from "../../api/config";
import { useNavigate, useLocation } from "react-router-dom";
import MobileSideBar from "../Layout/MobileSideBar";

const Follow = () => {
  const location = useLocation();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [following, setFollowing] = useState([]);
  const [type, setType] = useState(location?.state?.follow || "following");
  const token = JSON.parse(localStorage.getItem("token"));
  const userId = JSON.parse(localStorage.getItem("UserId"));
  const navigate = useNavigate();
  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  useEffect(() => {
    followType(type);
  }, [type]);

  const followType = (type) => {
    if (token != "") {
    }
    axios
      .get(`${getBaseURL()}/get-user-follow?user_id=${userId}&follow=${type}`)
      .then((res) => {
        setFollowing(res?.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const followUnfollow = (newtype, id) => {
    if (token != "") {
    }
    axios
      .post(
        `${getBaseURL()}/auth/follow-user`,
        {
          follow_id: id,
          type: newtype,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        followType(type);
      })
      .catch((err) => {
        console.log(err.message);
      });
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
                <div className="follow-wrapper">
                  <ul className="flex">
                    <li>
                      <a
                        onClick={() => setType("following")}
                        className={type == "following" && "active"}
                      >
                        Following{" "}
                        {following?.following?.length > 0
                          ? `(${following?.following?.length})`
                          : ""}
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a
                        onClick={() => setType("followers")}
                        className={type == "followers" && "active"}
                      >
                        {" "}
                        Followers{" "}
                        {following?.followers?.length > 0
                          ? `(${following?.followers?.length})`
                          : ""}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="interest-guru ">
                  {following?.[type]?.map((data) => {
                    return (
                      <div
                        id={data?.id}
                        className="wrap flex"
                        style={{ cursor: "pointer" }}
                      >
                        <div className="content">
                          <div className="flex space-between">
                            <div
                              style={{ marginBottom: "0px" }}
                              className="wrapper flex"
                            >
                              <figure>
                                <img
                                  src={data?.profile_image}
                                  title="profile"
                                  alt="profile"
                                />
                              </figure>
                              <p
                                style={{ marginLeft: "10px", fontSize: "20px" }}
                              >
                                {data?.name}
                              </p>
                            </div>
                            <ul>
                              <li>
                                <a
                                  onClick={(e) => {
                                    e.preventDefault();
                                    followUnfollow("unfollow", data?.id);
                                  }}
                                  className="loginBtn"
                                >
                                  {type == "following"
                                    ? "Unfollow"
                                    : type == "followers" &&
                                      data?.following == "yes"
                                    ? "unfollow"
                                    : "follow"}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mob_profile commanMobHead hideDes">
        <div className="mobileHead flex">
          <div className="hamburger" onClick={toggleMobileSidebar}>
            <img src="app/images/hamburgerIcon.png" alt="Genaiguru hamburger" />
          </div>
          <h2>{type}</h2>
        </div>
        <div className="innerCommanContent mobGuruGold">
          <div className="rightSection">
            <div className="full-width">
              <div className="keeps-container">
                <div className="gurukeeps-wrapper flex space-between">
                  <div className="follow-wrapper">
                    <ul className="flex">
                      <li>
                        <a
                          onClick={() => setType("following")}
                          className={type == "following" && "active"}
                        >
                          Following{" "}
                          {following?.following?.length > 0
                            ? `(${following?.following?.length})`
                            : ""}
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a
                          onClick={() => setType("followers")}
                          className={type == "followers" && "active"}
                        >
                          {" "}
                          Followers{" "}
                          {following?.followers?.length > 0
                            ? `(${following?.followers?.length})`
                            : ""}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="interest-guru ">
                    {following?.[type]?.map((data) => {
                      return (
                        <div
                          id={data?.id}
                          className="wrap flex"
                          style={{ cursor: "pointer" }}
                        >
                          <div className="content">
                            <div className="flex space-between">
                              <div
                                style={{ marginBottom: "0px" }}
                                className="wrapper flex"
                              >
                                <figure>
                                  <img
                                    src={data?.profile_image}
                                    title="profile"
                                    alt="profile"
                                  />
                                </figure>
                                <p
                                  style={{
                                    marginLeft: "10px",
                                    fontSize: "20px",
                                  }}
                                >
                                  {data?.name}
                                </p>
                              </div>
                              <ul>
                                <li>
                                  <a
                                    onClick={(e) => {
                                      e.preventDefault();
                                      followUnfollow(
                                        type == "following"
                                          ? "unfollow"
                                          : type == "followers" &&
                                            data?.following == "yes"
                                          ? "unfollow"
                                          : "follow",
                                        data?.id
                                      );
                                    }}
                                    className="loginBtn"
                                  >
                                    {type == "following"
                                      ? "Unfollow"
                                      : type == "followers" &&
                                        data?.following == "yes"
                                      ? "unfollow"
                                      : "follow"}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- mobile section end here --> */}
      {isMobileSidebarOpen && (
        <MobileSideBar toggleMobileSidebar={toggleMobileSidebar} />
      )}
    </div>
  );
};

export default Follow;
