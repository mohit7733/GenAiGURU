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
        console.log(res?.data, "Res");
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
                <figure>
                  <select
                    className="dropdown"
                    onChange={(e) => setType(e.target.value)}
                    defaultValue={type}
                  >
                    <option value="following" className="dropbtn">
                      <button>Following</button>
                    </option>
                    <option value="followers" className="dropbtn">
                      <button>Followers</button>
                    </option>
                  </select>
                  <a>({following?.[type]?.length})</a>
                </figure>
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
                            <div className="wrapper flex">
                              <figure>
                                <img
                                  src={data?.profile_image}
                                  title="profile"
                                  alt="profile"
                                />
                              </figure>
                              <p style={{ marginLeft: "10px" }}>{data?.name}</p>
                            </div>
                            <ul>
                              <li>
                                <a>Follow</a>
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
                  <figure>
                    <select
                      className="dropdown"
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option value="following" className="dropbtn">
                        <button>Following</button>
                      </option>
                      <option value="followers" className="dropbtn">
                        <button>Followers</button>
                      </option>
                    </select>
                  </figure>

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
                                <div className="wrapper flex">
                                  <figure>
                                    <img
                                      src={data?.profile_image}
                                      title="profile"
                                      alt="profile"
                                    />
                                  </figure>
                                  <p style={{ marginLeft: "10px" }}>
                                    {data?.name}
                                  </p>
                                </div>
                                <ul>
                                  <li>
                                    <a>Follow</a>
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
      </div>
      {/* <!-- mobile section end here --> */}
      {isMobileSidebarOpen && (
        <MobileSideBar toggleMobileSidebar={toggleMobileSidebar} />
      )}
    </div>
  );
};

export default Follow;
