import axios from "axios";
import React, { useEffect, useState } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { getBaseURL } from "../../api/config";
import MobileHeader from "../../components/Layout/MobileHeader";
import MobileSideBar from "../../components/Layout/MobileSideBar";
import Sidebar from "../../components/Layout/Sidebar";
import { PATH_LEADERBOARD } from "../../routes";
import LockImage from "../../assets/images/lock.png";

const GuruGold = () => {
  const [userPoints, setUserPoints] = useState(null);
  const [userDetails, setDetails] = useState({
    profile_image: "",
    name: "",
  });
  const [levelDetails, setLevelDetails] = useState([]);
  const [userLevel, setUserLevel] = useState("");
  const [rankImage, setRankImage] = useState(null);
  const [earnMorePoint, setEarnMorePoint] = useState("");
  const [totalPoints, setTotalPoints] = useState("");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const [completedIds, setCompletedIds] = useState([]);
  const [currentID, setCurrentID] = useState("");

  const token = JSON.parse(localStorage.getItem("token"));
  const userId = JSON.parse(localStorage.getItem("UserId"));

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

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
    document.title = "Genaiguru-Gurugold";
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", "Gurugold description");
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute("content", "Gurugold description 2");
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute("content", "Gurugold description 2");
    // document
    //   .querySelector('meta[property="og:image"]')
    //   .setAttribute(
    //     "content",
    //     "https://images.pexels.com/photos/19790846/pexels-photo-19790846/free-photo-of-a-red-moped-parked-in-front-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //   );
  }, []);

  useEffect(() => {
    const fetchUserPoints = async () => {
      try {
        const response = await axios.get(`${getBaseURL()}/get-points`, {
          params: {
            user_id: userId,
          },
        });

        setUserPoints(response?.data?.data?.total);
        setCompletedIds(response?.data?.data?.completed_level_id);
        setCurrentID(response?.data?.data?.current_level_id);
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
        setRankImage(levelData.rank_image);
        setEarnMorePoint(levelData.upper_limit - userPoints);
        setTotalPoints(levelData.upper_limit);
      } else if (userPoints > levelData.upper_limit) {
        setUserLevel(levelData.name);
        setRankImage(levelData.rank_image);
        setEarnMorePoint(0);
        setTotalPoints(levelData.upper_limit);
      }
    }
    return "unknow level";
  }

  const fetchLevels = async () => {
    try {
      const response = await axios.get(`${getBaseURL()}/game-levels`);
      setLevelDetails(response?.data?.data);
    } catch (error) {
      console.error("Error fetching game-levels:", error.message);
    }
  };
  const percentage = Math.min((userPoints / totalPoints) * 100, 100);

  // const gradientId = (
  //   <svg style={{ height: 0, width: 0, position: "absolute" }}>
  //     <defs>
  //       <linearGradient id={"gradientId"} x1="0%" y1="0%" x2="100%" y2="0%">
  //         <stop offset="0%" style={{ stopColor: "red", stopOpacity: 1 }} />
  //         <stop offset="100%" style={{ stopColor: "blue", stopOpacity: 1 }} />
  //       </linearGradient>
  //     </defs>
  //   </svg>
  // );
  return (
    <div>
      <MobileHeader />
      {/* <!-- main section start here --> */}
      <section className="mainWrapper flex hideMob">
        <Sidebar />
        <div className="rightSection">
          <div className="full-width">
            <div className="guru-gold-silver">
              <h1>Guru Gold</h1>
              <div className="silver-coin-box">
                <div className="silverWrap">
                  <ul className="flex userPro">
                    <li>
                      <figure>
                        <img src={userDetails.profile_image} alt="userIcon" />
                      </figure>
                      <img className="profileImageTag" src={rankImage} />
                    </li>
                    {/* <Link to="/silver"> */}
                    <Link  style={{cursor:"default"}}>
                      <li>
                        <h3>
                          {/* {levelDetails} */}
                          {userLevel}
                          {/* <img
                            src="app/images/headingProfileIcons.png"
                            alt="Genaiguru headingProfileIcons"
                           
                          /> */}
                        </h3>{" "}
                        <p>
                          Coins: {userPoints}/{totalPoints}
                        </p>
                      </li>
                    </Link>
                  </ul>

                  <div>
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
                    <p className="profileBottomText">
                      Earn more
                      <figure style={{ width: "20px", marginLeft: "5px" }}>
                        <img
                          src="./app/images/coins.png"
                          alt="Genaiguru Coins"
                        />
                      </figure>
                      {earnMorePoint} coins to go to next level
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- silver user --> */}
              <div className="silver-user">
                <ul className="flex">
                  {levelDetails.map((level, index) => {
                    return (
                      <li style={{ margin: "5px" }} key={index}>
                        <svg style={{ height: 0, width: 0 }}>
                          <defs>
                            <linearGradient
                              id="gradientId"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop
                                offset="0%"
                                style={{ stopColor: "#8E44AD", stopOpacity: 1 }}
                              />
                              <stop
                                offset="100%"
                                style={{ stopColor: "#3498DB", stopOpacity: 1 }}
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div style={{ width: 78, height: 78, margin: "5px" }}>
                          <CircularProgressbarWithChildren
                            strokeWidth={3}
                            value={
                              currentID !== level?.level ? 100 : percentage
                            }
                            styles={{
                              path: {
                                stroke: `url(#gradientId)`,
                                height: "100%",
                              },
                            }}
                          >
                            <figure>
                              <img
                                src={userDetails.profile_image}
                                alt="userIcon"
                                style={{
                                  borderRadius: "100%",
                                  marginTop: "1px",
                                }}
                              />
                            </figure>
                          </CircularProgressbarWithChildren>
                        </div>
                        <p style={{ textAlign: "center", color: "white" }}>
                          {level.name}
                        </p>
                        {completedIds.filter((a) => a == level.level)?.length ==
                          0 && (
                          <div className="blurImgIcons">
                            <img src={LockImage} />
                          </div>
                        )}
                        {currentID !== level.level &&
                          completedIds.filter((a) => a == level.level)
                            ?.length == 0 && <div className="blursImgs"></div>}
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* <!-- reward start --> */}
              <div className="reward">
                <div className="reward-container">
                  <div className="reward-line ">
                    <div className="reward-box">
                      <Link to={PATH_LEADERBOARD} className="flex">
                        <figure>
                          <img
                            src="app/images/reward-1.png"
                            alt="Genaiguru reward-1"
                          />
                        </figure>
                        <h6>Leaderboards</h6>
                        <figure className="rightArrow">
                          <img
                            src="app/images/arrow-left.png"
                            alt="Genaiguru arrow-left"
                          />
                        </figure>
                      </Link>
                    </div>
                  </div>
                  <div className="reward-line ">
                    <div className="reward-box">
                      <Link to="/reward" className="flex">
                        <figure>
                          <img
                            src="app/images/reward-2.png"
                            alt="Genaiguru reward-2"
                          />
                        </figure>
                        <h6>Rewards</h6>
                        <figure className="rightArrow">
                          <img
                            src="app/images/arrow-left.png"
                            alt="Genaiguru arrow-left"
                          />
                        </figure>
                      </Link>
                    </div>
                  </div>
                  <div className="reward-line ">
                    <div className="reward-box">
                      <Link to="/milestone" className="flex">
                        <figure>
                          <img
                            src="app/images/reward-2.png"
                            alt="Genaiguru reward-2"
                          />
                        </figure>
                        <h6>Milestone</h6>
                        <figure className="rightArrow">
                          <img
                            src="app/images/arrow-left.png"
                            alt="Genaiguru arrow-left"
                          />
                        </figure>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- main section end here --> */}

      {/* <!-- mobile section start here --> */}
      <div className="mob_profile commanMobHead hideDes">
        <div className="mobileHead flex">
          <div className="hamburger" onClick={toggleMobileSidebar}>
            <img src="app/images/hamburgerIcon.png" alt="Genaiguru hamburger" />
          </div>
          <h2>Gurugold</h2>
        </div>
        <div className="innerCommanContent mobGuruGold">
          <div className="rightSection">
            <div className="guru-gold-silver">
              <div className="silver-coin-box">
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
                      <img className="profileImageTag" src={rankImage} />
                    </li>
                    <Link >
                      <li>
                        <h3>
                          {/* {levelDetails} */}
                          {userLevel}
                          {/* <img
                            src="app/images/headingProfileIcons.png"
                            alt="Genaiguru headingProfileIcons"
                           
                          /> */}
                        </h3>{" "}
                        <p>
                          Coins: {userPoints}/{totalPoints}
                        </p>
                      </li>
                    </Link>
                  </ul>
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
                  <p className="profileBottomText">
                    Earn more{""}
                    <figure style={{ width: "20px" }}>
                      <img src="./app/images/coins.png" alt="Genaiguru Coins" />
                    </figure>{" "}
                    {earnMorePoint} coins to go to next level
                  </p>
                </div>
              </div>
              {/* <!-- silver user --> */}
              <div className="silver-user">
                <ul className="flex">
                  {levelDetails.map((level, index) => {
                    return (
                      <li style={{ margin: "5px" }} key={index}>
                        <svg style={{ height: 0, width: 0 }}>
                          <defs>
                            <linearGradient
                              id="gradientId"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop
                                offset="0%"
                                style={{
                                  stopColor: "#8E44AD",
                                  stopOpacity: 10,
                                }}
                              />
                              <stop
                                offset="100%"
                                style={{
                                  stopColor: "#3498DB",
                                  stopOpacity: 10,
                                }}
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div style={{ width: 78, height: 78, margin: "5px" }}>
                          <CircularProgressbarWithChildren
                            strokeWidth={3}
                            value={
                              currentID !== level?.level ? 100 : percentage
                            }
                            // styles={{
                            //   path: {
                            //     stroke: `url(#gradientId)`,
                            //     height: "100%",
                            //   },
                            // }}
                          >
                            <figure>
                              <img
                                src={userDetails.profile_image}
                                alt="userIcon"
                                style={{
                                  borderRadius: "100%",
                                  marginTop: "1px",
                                }}
                              />
                            </figure>
                          </CircularProgressbarWithChildren>
                        </div>
                        <p style={{ textAlign: "center", color: "white" }}>
                          {level.name}
                        </p>
                        {completedIds.filter((a) => a == level.level)?.length ==
                          0 && (
                          <div className="blurImgIcons">
                            <img src={LockImage} />
                          </div>
                        )}
                        {currentID !== level.level &&
                          completedIds.filter((a) => a == level.level)
                            ?.length == 0 && <div className="blursImgs"></div>}
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* <!-- reward start --> */}
              <div className="reward">
                <div className="reward-container">
                  <div className="reward-line ">
                    <div className="reward-box">
                      <Link to="/leaderboard" className="flex">
                        <figure>
                          <img
                            src="app/images/reward-1.png"
                            alt="Genaiguru reward-1"
                          />
                        </figure>
                        <h6>Leaderboards</h6>
                        <figure className="rightArrow">
                          <img
                            src="app/images/arrow-left.png"
                            alt="Genaiguru arrow-left"
                          />
                        </figure>
                      </Link>
                    </div>
                  </div>
                  <div className="reward-line ">
                    <div className="reward-box">
                      <Link to="/reward" className="flex">
                        <figure>
                          <img
                            src="app/images/reward-2.png"
                            alt="Genaiguru reward-2"
                          />
                        </figure>
                        <h6>Rewards</h6>
                        <figure className="rightArrow">
                          <img
                            src="app/images/arrow-left.png"
                            alt="Genaiguru arrow-left"
                          />
                        </figure>
                      </Link>
                    </div>
                  </div>
                  <div className="reward-line ">
                    <div className="reward-box">
                      <Link to="/milestone" className="flex">
                        <figure>
                          <img
                            src="app/images/reward-2.png"
                            alt="Genaiguru reward-2"
                          />
                        </figure>
                        <h6>Milestone</h6>
                        <figure className="rightArrow">
                          <img
                            src="app/images/arrow-left.png"
                            alt="Genaiguru arrow-left"
                          />
                        </figure>
                      </Link>
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

export default GuruGold;
