import React, { useEffect } from "react";
import Sidebar from "../../components/Layout/Sidebar";
import MobileHeader from "../../components/Layout/MobileHeader";
import { Link } from "react-router-dom";
import { getBaseURL } from "../../api/config";
import axios from "axios";
import { useState } from "react";

const Rewards = () => {
  const [rewards, setRewards] = useState([]);
  const [accessRewards, setAccessRewards] = useState([]);

  const token = JSON.parse(localStorage.getItem("token"));
  const userId = JSON.parse(localStorage.getItem("UserId"));

  useEffect(() => {
    fetchRewards();
  }, []);

  const fetchRewards = async () => {
    try {
      const response1 = await axios.post(
        `${getBaseURL()}/game-rewards?user_id=${userId}&access_type=${"locked"}`
      );
      const response2 = await axios.post(
        `${getBaseURL()}/game-rewards?user_id=${userId}&access_type=${"unlocked"}`
      );
      console.log(response1?.data[0]?.data);
      setRewards(response1?.data[0]?.data);
      console.log(response2?.data[0]?.data);
      setAccessRewards(response2?.data[0]?.data);
    } catch (error) {
      console.error("Error fetching game-levels:", error.message);
    }
  };

  return (
    <div>
      <MobileHeader />
      <section className="mainWrapper flex hideMob">
        <Sidebar />
        <div className="rightSection">
          <div className="full-width">
            <div className="guru-gold-silver">
              <div className="innerBreadcrumb">
                <p>
                  <Link to="/gurugold">Gurugold</Link>{" "}
                  <i className="fa fa-angle-right" aria-hidden="true"></i> Rewards
                </p>
              </div>
              <h1>Rewards</h1>
              <div className="access-rewards">
                <div className="content-box">
                  <h5>Access rewards </h5>
                  <p>5000/20,000 coins</p>
                </div>
                {accessRewards.map((reward, index) => {
                  return (
                    <div
                      className="reward-container flex space-between"
                      key={index}
                    >
                      <h6>{reward.name}</h6>
                      <span>
                        <figure>
                          <img
                            src="./app/images/coins.png"
                            alt="Genaiguru Coins"
                            title="Genaiguru Coins"
                          />
                        </figure>
                        {reward.points} Coins
                      </span>
                    </div>
                  );
                })}
              </div>
              {/* <!-- reach 120 minuts in 10days --> */}
              <div className="reach-days">
                <div className="access-rewards">
                  <div className="content-box">
                    <h5>Rewards </h5>
                    {/* <p>Reach 120 min in 10 Days</p> */}
                  </div>
                  {rewards.map((reward, index) => {
                    return (
                      <div
                        className="reward-container flex space-between"
                        key={index}
                      >
                        <h6>{reward.name}</h6>
                        <span>
                          <figure>
                            <img
                              src="./app/images/coins.png"
                              alt="Genaiguru Coins"
                              title="Genaiguru Coins"
                            />
                          </figure>
                          {reward.points} Coins
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- mobile section start here --> */}
      <div className="mob_profile commanMobHead hideDes">
        <div className="mobileHead flex">
          <div className="hamburger">
            <Link to="/gurugold">
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </Link>
          </div>
          <h2>Rewards</h2>
        </div>
        <div className="innerCommanContent contactFaq">
          <div className="rightSection">
            <div className="guru-gold-silver">
              <div className="access-rewards">
                <div className="content-box">
                  <h5>Access rewards </h5>
                  <p>5000/20,000 coins</p>
                </div>
                <div className="reward-container flex space-between">
                  <h6>First sign-up</h6>
                  <span>
                    <figure>
                      <img
                        src="./app/images/coins.png"
                        alt="Genaiguru Coins"
                        title="Genaiguru Coins"
                      />
                    </figure>
                    2050 Coins
                  </span>
                </div>
                <div className="reward-container flex space-between">
                  <h6>Joining news-later</h6>
                  <span>
                    <figure>
                      <img
                        src="./app/images/coins.png"
                        alt="Genaiguru Coins"
                        title="Genaiguru Coins"
                      />
                    </figure>
                    2050 Coins
                  </span>
                </div>
              </div>
              {/* <!-- reach 120 minuts in 10days --> */}
              <div className="reach-days">
                <div className="access-rewards">
                  <div className="content-box">
                    <h5>Rewards </h5>
                    <p>Reach 120 min in 10 Days</p>
                  </div>
                  <div className="reward-container flex space-between">
                    <h6>After complete an article</h6>
                    <span>
                      <figure>
                        <img
                          src="./app/images/coins.png"
                          alt="Genaiguru Coins"
                          title="Genaiguru Coins"
                        />
                      </figure>
                      2050 Coins
                    </span>
                  </div>
                  <div className="reward-container flex space-between">
                    <h6>Leaving comments</h6>
                    <span>
                      <figure>
                        <img
                          src="./app/images/coins.png"
                          alt="Genaiguru Coins"
                          title="Genaiguru Coins"
                        />
                      </figure>
                      2050 Coins
                    </span>
                  </div>
                  <div className="reward-container flex space-between">
                    <h6>Sharing content</h6>
                    <span>
                      <figure>
                        <img
                          src="./app/images/coins.png"
                          alt="Genaiguru Coins"
                          title="Genaiguru Coins"
                        />
                      </figure>
                      2050 Coins
                    </span>
                  </div>
                  <div className="reward-container flex space-between">
                    <h6>Watching youtube videos</h6>
                    <span>
                      <figure>
                        <img
                          src="./app/images/coins.png"
                          alt="Genaiguru Coins"
                          title="Genaiguru Coins"
                        />
                      </figure>
                      2050 Coins
                    </span>
                  </div>
                  <div className="reward-container flex space-between">
                    <h6>Interacting with chatbot</h6>
                    <span>
                      <figure>
                        <img
                          src="./app/images/coins.png"
                          alt="Genaiguru Coins"
                          title="Genaiguru Coins"
                        />
                      </figure>
                      2050 Coins
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- mobile section end here -->  */}
    </div>
  );
};

export default Rewards;
