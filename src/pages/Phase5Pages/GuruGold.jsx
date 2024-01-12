import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBaseURL } from "../../api/config";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import { PATH_LEADERBOARD } from "../../routes";

const GuruGold = () => {
  const [userPoints, setUserPoints] = useState(null);
  const [userDetails, setDetails] = useState({
    profile_image: "",
    name: "",
  });
  const [levelDetails, setLevelDetails] = useState([]);
  const [userLevel, setUserLevel] = useState("");
  const [earnMorePoint, setEarnMorePoint] = useState("");
  const [totalPoints, setTotalPoints] = useState("");

  
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
      // console.log(response?.data?.data);
      setLevelDetails(response?.data?.data);
    } catch (error) {
      console.error("Error fetching game-levels:", error.message);
    }
  };
  const percentage = (userPoints / totalPoints) * 100;

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
                        <img
                          src={userDetails.profile_image}
                          alt="userIcon"
                          title="userIcon"
                        />
                      </figure>
                      <img
                        className="profileImageTag"
                        src="app/images/profileImageTag.png"
                      />
                    </li>
                    <Link to="/silver">
                      <li>
                        <h3>
                          {/* {levelDetails} */}
                          {userLevel}
                          {/* <img
                            src="app/images/headingProfileIcons.png"
                            alt="Genaiguru headingProfileIcons"
                            title="Genaiguru headingProfileIcons"
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
                  <div>
                    <p className="profileBottomText">
                      <figure style={{ width: "20px" }}>
                        <img
                          src="./app/images/coins.png"
                          alt="Genaiguru Coins"
                          title="Genaiguru Coins"
                        />
                      </figure>
                      Earn more {earnMorePoint} coins to go to next level
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- silver user --> */}
              <div className="silver-user">
                <ul className="flex">
                  <li>
                    <div
                      style={{
                        border: "2px solid blue",
                        borderRadius: "100%",
                      }}
                    >
                      <figure>
                        <img
                          src={userDetails.profile_image}
                          alt="userIcon"
                          title="userIcon"
                          style={{ borderRadius: "100%" }}
                        />
                      </figure>
                    </div>
                    <div class="card">
                      <div class="percent">
                        <svg>
                          <circle cx="105" cy="105" r="100"></circle>
                          <circle
                            cx="105"
                            cy="105"
                            r="100"
                            style={{ "--percent": percentage }}
                          ></circle>
                        </svg>
                      </div>
                    </div>
                  </li>
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
                            title="Genaiguru reward-1"
                          />
                        </figure>
                        <h6>Leaderboards</h6>
                        <figure className="rightArrow">
                          <img
                            src="app/images/arrow-left.png"
                            alt="Genaiguru arrow-left"
                            title="Genaiguru arrow-left"
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
                            title="Genaiguru reward-2"
                          />
                        </figure>
                        <h6>Rewards</h6>
                        <figure className="rightArrow">
                          <img
                            src="app/images/arrow-left.png"
                            alt="Genaiguru arrow-left"
                            title="Genaiguru arrow-left"
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
                            title="Genaiguru reward-2"
                          />
                        </figure>
                        <h6>Milestone</h6>
                        <figure className="rightArrow">
                          <img
                            src="app/images/arrow-left.png"
                            alt="Genaiguru arrow-left"
                            title="Genaiguru arrow-left"
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
          <div className="hamburger">
            <img
              src="app/images/hamburgerIcon.png"
              alt="Genaiguru hamburger"
              title="Genaiguru hamburger "
            />
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
                          src="./app/images/userIcon.png"
                          alt="Genaiguru userIcon"
                          title="Genaiguru userIcon"
                        />
                        <img
                          className="profileImageTag"
                          src="app/images/profileImageTag.png"
                        />
                      </figure>
                    </li>
                    <li>
                      <h3>
                        Silver{" "}
                        <img
                          src="app/images/headingProfileIcons.png"
                          alt="Genaiguru headingProfileIcons"
                          title="Genaiguru headingProfileIcons"
                        />
                      </h3>{" "}
                      <p>Coins: {userPoints}/50,000</p>
                    </li>
                  </ul>
                  <div className="rangeWrap">
                    <input
                      className="range"
                      type="range"
                      // value="50"
                      min="0"
                      max="100"
                    ></input>
                  </div>
                  <p className="profileBottomText">
                    Earn more 47000 coins to ge next label
                  </p>
                </div>
              </div>
              {/* <!-- silver user --> */}
              <div className="silver-user">
                <ul className="flex">
                  <li>
                    <a href="#">
                      <figure>
                        <img
                          src="./app/images/silver-user-1.png"
                          alt="Genaiguru silver-user-1"
                          title="Genaiguru silver-user-1"
                        />
                      </figure>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <figure>
                        <img
                          src="./app/images/silver-user-2.png"
                          alt="Genaiguru silver-user-2"
                          title="Genaiguru silver-user-2"
                        />
                      </figure>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <figure>
                        <img
                          src="./app/images/silver-user-3.png"
                          alt="Genaiguru silver-user-3"
                          title="Genaiguru silver-user-3"
                        />
                      </figure>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <figure>
                        <img
                          src="./app/images/silver-user-3.png"
                          alt="Genaiguru silver-user-3"
                          title="Genaiguru silver-user-3"
                        />
                      </figure>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <figure>
                        <img
                          src="./app/images/silver-user-3.png"
                          alt="Genaiguru silver-user-3"
                          title="Genaiguru silver-user-3"
                        />
                      </figure>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <figure>
                        <img
                          src="./app/images/silver-user-3.png"
                          alt="Genaiguru silver-user-3"
                          title="Genaiguru silver-user-3"
                        />
                      </figure>
                    </a>
                  </li>
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
                            title="Genaiguru reward-1"
                          />
                        </figure>
                        <h6>Leaderboards</h6>
                        <figure className="rightArrow">
                          <img
                            src="app/images/arrow-left.png"
                            alt="Genaiguru arrow-left"
                            title="Genaiguru arrow-left"
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
                            title="Genaiguru reward-2"
                          />
                        </figure>
                        <h6>Rewards</h6>
                        <figure className="rightArrow">
                          <img
                            src="app/images/arrow-left.png"
                            alt="Genaiguru arrow-left"
                            title="Genaiguru arrow-left"
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
                            title="Genaiguru reward-2"
                          />
                        </figure>
                        <h6>Milestone</h6>
                        <figure className="rightArrow">
                          <img
                            src="app/images/arrow-left.png"
                            alt="Genaiguru arrow-left"
                            title="Genaiguru arrow-left"
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
    </div>
  );
};

export default GuruGold;
