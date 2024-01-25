import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBaseURL } from "../../api/config";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";

const Milestone = () => {
  const [userPoints, setUserPoints] = useState(null);
  const [userDetails, setDetails] = useState({
    profile_image: "",
    name: "",
  });
  const [levelDetails, setLevelDetails] = useState([]);
  const [userLevel, setUserLevel] = useState("");
  const [earnMorePoint, setEarnMorePoint] = useState("");
  const [totalPoints, setTotalPoints] = useState("");

  const [allLevels, setAllLevels] = useState([]);
  const [completedIds, setCompletedIds] = useState([]);
  const [currentID, setCurrentID] = useState("");

  const token = JSON.parse(localStorage.getItem("token"));
  const userId = JSON.parse(localStorage.getItem("UserId"));

  // get user details api..........
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`${getBaseURL()}/auth/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setDetails({
          profile_image: response?.data?.profile_image,
          name: response?.data?.name,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    const fetchUserPoints = async () => {
      try {
        const response = await axios.get(`${getBaseURL()}/get-points`, {
          params: {
            user_id: userId,
          },
        });
        console.log(response?.data?.data);
        setCompletedIds(response?.data?.data?.completed_level_id);
        setCurrentID(response?.data?.data?.current_level_id);
        setUserPoints(response?.data?.data?.total);
      } catch (error) {
        console.error("Error fetching user points:", error.message);
      }
    };
    fetchUserPoints();
    fetchLevels();
  }, [userId]);

  useEffect(() => {
    getUserLevel(userPoints, levelDetails);
  }, [userPoints, levelDetails]);

  async function getUserLevel(userPoints, apiData) {
    for (const levelData of apiData) {
      if (
        userPoints >= levelData.lower_limit &&
        userPoints <= levelData.upper_limit
      ) {
        setUserLevel(levelData.name);
        setEarnMorePoint(levelData.upper_limit - userPoints);
        setTotalPoints(levelData.upper_limit);
      }
    }
    return "unknow level";
  }

  const fetchLevels = async () => {
    try {
      const response = await axios.get(`${getBaseURL()}/game-levels`);
      console.log(response?.data?.data);
      setAllLevels(response?.data?.data);
      setLevelDetails(response?.data?.data);
    } catch (error) {
      console.error("Error fetching game-levels:", error.message);
    }
  };
  const percentage = (userPoints / totalPoints) * 100;
  return (
    <div>
      <MobileHeader />
      <section className="mainWrapper flex hideMob">
        <Sidebar />
        <div className="rightSection">
          <div className="full-width">
            <div className="guru-gold-silver milestoneWrap">
              <div className="innerBreadcrumb">
                <p>
                  <Link to="/gurugold">Gurugold</Link>{" "}
                  <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                  Rewards
                </p>
              </div>
              <h1>Milestone</h1>
              <div className="row flex ">
                {levelDetails.map((level, index) => {
                  return (
                    <div className="silver-coin-box" key={index}>
                      <div className="silverWrap">
                        <ul className="flex userPro">
                          <li>
                            <figure>
                              <img
                                src={userDetails.profile_image}
                                alt="Genaiguru userIcon"
                              />
                              <img
                                className="profileImageTag"
                                src="app/images/profileImageTag.png"
                              />
                            </figure>
                          </li>
                          <li>
                            <h3>
                              {level.name}
                              <img
                                src="app/images/headingProfileIcons.png"
                                alt="Genaiguru headingProfileIcons"
                              />
                            </h3>{" "}
                            {currentID !== level.level ? (
                              <p>
                                Coins: {level.upper_limit}/{level.upper_limit}
                              </p>
                            ) : (
                              <p>
                                Coins: {userPoints}/{level.upper_limit}
                              </p>
                            )}
                          </li>
                        </ul>
                        {currentID !== level.level ? (
                          <>
                            <div className="rangeWrap">
                              <div
                                className="range"
                                style={{
                                  width: `${100}%`,
                                  borderRadius: "10px",
                                  backgroundColor: "#808080",
                                }}
                              >
                                <div
                                  className="range"
                                  style={{
                                    width: `${100}%`,
                                    background:
                                      "linear-gradient(to right, #8E44AD, #3498DB)",
                                    borderRadius: "10px",
                                    // height: "12px",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="rangeWrap">
                              <div
                                className="range"
                                style={{
                                  width: `${100}%`,
                                  borderRadius: "10px",
                                  backgroundColor: "#808080",
                                }}
                              >
                                <div
                                  className="range"
                                  style={{
                                    width: `${percentage}%`,
                                    background:
                                      "linear-gradient(to right, #8E44AD, #3498DB)",
                                    borderRadius: "10px",
                                    // height: "12px",
                                  }}
                                ></div>
                              </div>
                            </div>
                            <div>
                              <p className="profileBottomText">
                                Earn more
                                <figure
                                  style={{ width: "20px", marginLeft: "5px" }}
                                >
                                  <img
                                    src="./app/images/coins.png"
                                    alt="Genaiguru Coins"
                                  />
                                </figure>{" "}
                                {earnMorePoint} coins to go to next level
                              </p>
                            </div>
                          </>
                        )}
                      </div>

                      {currentID !== level.level &&
                        completedIds.filter((a) => a == level.level)?.length ==
                          0 && (
                          <div className="layer" key={index}>
                            <figure>
                              <img
                                src="app/images/lockIcon.png"
                                alt="Genaiguru lockIcon"
                              />
                            </figure>
                            <p>
                              Keep using to earn more points & unlock this
                              reward label
                            </p>
                          </div>
                        )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- main section end here --> */}
      {/* <!-- mobile section start here --> */}
      <div className="mob_profile commanMobHead hideDes">
        <div className="mobileHead flex">
          <div className="hamburger">
            <Link to="/gurugold">
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </Link>
          </div>
          <h2>Milestone</h2>
        </div>
        <div className="innerCommanContent contactFaq">
          <div className="rightSection">
            <div className="guru-gold-silver milestoneWrap">
              <div className="row flex ">
                {levelDetails.map((level, index) => {
                  return (
                    <div className="silver-coin-box" key={index}>
                      <div className="silverWrap">
                        <ul className="flex userPro">
                          <li>
                            <figure>
                              <img
                                src={userDetails.profile_image}
                                alt="Genaiguru userIcon"
                              />
                              <img
                                className="profileImageTag"
                                src="app/images/profileImageTag.png"
                              />
                            </figure>
                          </li>
                          <li>
                            <h3>
                              {level.name}
                              <img
                                src="app/images/headingProfileIcons.png"
                                alt="Genaiguru headingProfileIcons"
                              />
                            </h3>{" "}
                            {currentID !== level.level ? (
                              <p>
                                Coins: {level.upper_limit}/{level.upper_limit}
                              </p>
                            ) : (
                              <p>
                                Coins: {userPoints}/{level.upper_limit}
                              </p>
                            )}
                          </li>
                        </ul>
                        {currentID !== level.level ? (
                          <>
                            <div className="rangeWrap">
                              <div
                                className="range"
                                style={{
                                  width: `${100}%`,
                                  borderRadius: "10px",
                                  backgroundColor: "#808080",
                                }}
                              >
                                <div
                                  className="range"
                                  style={{
                                    width: `${100}%`,
                                    background:
                                      "linear-gradient(to right, #8E44AD, #3498DB)",
                                    borderRadius: "10px",
                                    // height: "12px",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="rangeWrap">
                              <div
                                className="range"
                                style={{
                                  width: `${100}%`,
                                  borderRadius: "10px",
                                  backgroundColor: "#808080",
                                }}
                              >
                                <div
                                  className="range"
                                  style={{
                                    width: `${percentage}%`,
                                    background:
                                      "linear-gradient(to right, #8E44AD, #3498DB)",
                                    borderRadius: "10px",
                                    // height: "12px",
                                  }}
                                ></div>
                              </div>
                            </div>
                            <div>
                              <p className="profileBottomText">
                                Earn more
                                <figure style={{ width: "20px" }}>
                                  <img
                                    src="./app/images/coins.png"
                                    alt="Genaiguru Coins"
                                  />
                                </figure>{" "}
                                {earnMorePoint} coins to go to next level
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                      {/* {completedIds.map((id, index, array) => {
                        if (id !== level.level) {
                          if (currentID !== level.level) {
                            return (
                              <div className="layer" key={index}>
                                <figure>
                                  <img
                                    src="app/images/lockIcon.png"
                                    alt="Genaiguru lockIcon"
                                 
                                  />
                                </figure>
                                <p>
                                  Keep using to earn more points & unlock this
                                  reward label
                                </p>
                              </div>
                            );
                          }
                        } else {
                          return null; // or an empty string or any other JSX you want for the else case
                        }
                      })} */}

                      {currentID !== level.level &&
                        completedIds.filter((a) => a == level.level)?.length ==
                          0 && (
                          <div className="layer" key={index}>
                            <figure>
                              <img
                                src="app/images/lockIcon.png"
                                alt="Genaiguru lockIcon"
                              />
                            </figure>
                            <p>
                              Keep using to earn more points & unlock this
                              reward label
                            </p>
                          </div>
                        )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* <!-- mobile section end here --> */}
    </div>
  );
};

export default Milestone;
