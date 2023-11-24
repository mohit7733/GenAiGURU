import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Layout/Header";
import Sidebar from "../../components/Layout/Sidebar";
import MobileHeader from "../../components/Layout/MobileHeader";

const GuruGold = () => {
  return (
    <div>
      <MobileHeader />
      {/* <!-- main section start here --> */}
      <section className="mainWrapper flex hideMob">
        <Sidebar />
        <div className="rightSection">
          <div class="full-width">
            <div class="guru-gold-silver">
              <h1>Guru Gold</h1>
              <div class="silver-coin-box">
                <div class="silverWrap">
                  <ul class="flex userPro">
                    <li>
                      <figure>
                        <img
                          src="./app/images/userIcon.png"
                          alt="Genaiguru userIcon"
                          title="Genaiguru userIcon"
                        />
                        <img
                          class="profileImageTag"
                          src="app/images/profileImageTag.png"
                        />
                      </figure>
                    </li>
                    <Link to="/silver">
                      <li>
                        <h3>
                          Silver
                          <img
                            src="app/images/headingProfileIcons.png"
                            alt="Genaiguru headingProfileIcons"
                            title="Genaiguru headingProfileIcons"
                          />
                        </h3>{" "}
                        <p>Coins: 20,000/50,000</p>
                      </li>
                    </Link>
                  </ul>
                  <div class="rangeWrap">
                    <input
                      class="range"
                      type="range"
                      value="50"
                      min="0"
                      max="100"
                    ></input>
                  </div>
                  <p class="profileBottomText">
                    Earn more 47000 coins to ge next label
                  </p>
                </div>
              </div>
              {/* <!-- silver user --> */}
              <div class="silver-user">
                <ul class="flex">
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
              <div class="reward">
                <div class="reward-container">
                  <div class="reward-line ">
                    <div class="reward-box">
                      <Link to="/leaderboard" class="flex">
                        <figure>
                          <img
                            src="app/images/reward-1.png"
                            alt="Genaiguru reward-1"
                            title="Genaiguru reward-1"
                          />
                        </figure>
                        <h6>Leaderboards</h6>
                        <figure class="rightArrow">
                          <img
                            src="app/images/arrow-left.png"
                            alt="Genaiguru arrow-left"
                            title="Genaiguru arrow-left"
                          />
                        </figure>
                      </Link>
                    </div>
                  </div>
                  <div class="reward-line ">
                    <div class="reward-box">
                      <Link to="/reward" class="flex">
                        <figure>
                          <img
                            src="app/images/reward-2.png"
                            alt="Genaiguru reward-2"
                            title="Genaiguru reward-2"
                          />
                        </figure>
                        <h6>Rewards</h6>
                        <figure class="rightArrow">
                          <img
                            src="app/images/arrow-left.png"
                            alt="Genaiguru arrow-left"
                            title="Genaiguru arrow-left"
                          />
                        </figure>
                      </Link>
                    </div>
                  </div>
                  <div class="reward-line ">
                    <div class="reward-box">
                      <Link to="/milestone" class="flex">
                        <figure>
                          <img
                            src="app/images/reward-2.png"
                            alt="Genaiguru reward-2"
                            title="Genaiguru reward-2"
                          />
                        </figure>
                        <h6>Milestone</h6>
                        <figure class="rightArrow">
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
      <div class="mob_profile commanMobHead hideDes">
        <div class="mobileHead flex">
          <div class="hamburger">
            <img
              src="app/images/hamburgerIcon.png"
              alt="Genaiguru hamburger"
              title="Genaiguru hamburger "
            />
          </div>
          <h2>Gurugold</h2>
        </div>
        <div class="innerCommanContent mobGuruGold">
          <div class="rightSection">
            <div class="guru-gold-silver">
              <div class="silver-coin-box">
                <div class="silverWrap">
                  <ul class="flex userPro">
                    <li>
                      <figure>
                        <img
                          src="./app/images/userIcon.png"
                          alt="Genaiguru userIcon"
                          title="Genaiguru userIcon"
                        />
                        <img
                          class="profileImageTag"
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
                      <p>Coins: 20,000/50,000</p>
                    </li>
                  </ul>
                  <div class="rangeWrap">
                    <input
                      class="range"
                      type="range"
                      value="50"
                      min="0"
                      max="100"
                    ></input>
                  </div>
                  <p class="profileBottomText">
                    Earn more 47000 coins to ge next label
                  </p>
                </div>
              </div>
              {/* <!-- silver user --> */}
              <div class="silver-user">
                <ul class="flex">
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
              <div class="reward">
                <div class="reward-container">
                  <div class="reward-line ">
                    <div class="reward-box">
                      <Link to="/leaderboard" class="flex">
                        <figure>
                          <img
                            src="app/images/reward-1.png"
                            alt="Genaiguru reward-1"
                            title="Genaiguru reward-1"
                          />
                        </figure>
                        <h6>Leaderboards</h6>
                        <figure class="rightArrow">
                          <img
                            src="app/images/arrow-left.png"
                            alt="Genaiguru arrow-left"
                            title="Genaiguru arrow-left"
                          />
                        </figure>
                      </Link>
                    </div>
                  </div>
                  <div class="reward-line ">
                    <div class="reward-box">
                      <Link to="/reward" class="flex">
                        <figure>
                          <img
                            src="app/images/reward-2.png"
                            alt="Genaiguru reward-2"
                            title="Genaiguru reward-2"
                          />
                        </figure>
                        <h6>Rewards</h6>
                        <figure class="rightArrow">
                          <img
                            src="app/images/arrow-left.png"
                            alt="Genaiguru arrow-left"
                            title="Genaiguru arrow-left"
                          />
                        </figure>
                      </Link>
                    </div>
                  </div>
                  <div class="reward-line ">
                    <div class="reward-box">
                      <Link to="/milestone" class="flex">
                        <figure>
                          <img
                            src="app/images/reward-2.png"
                            alt="Genaiguru reward-2"
                            title="Genaiguru reward-2"
                          />
                        </figure>
                        <h6>Milestone</h6>
                        <figure class="rightArrow">
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
