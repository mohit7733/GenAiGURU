import React, { useEffect } from "react";
import Sidebar from "../../components/Layout/Sidebar";
import MobileHeader from "../../components/Layout/MobileHeader";
import { Link } from "react-router-dom";

const Milestone = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <MobileHeader />
      <section class="mainWrapper flex hideMob">
        <Sidebar />
        <div className="rightSection">
          <div class="full-width">
            <div class="guru-gold-silver milestoneWrap">
              <div class="innerBreadcrumb">
                <p>
                  <Link to="/gurugold">Gurugold</Link>{" "}
                  <i class="fa fa-angle-right" aria-hidden="true"></i> Rewards
                </p>
              </div>
              <h1>Milestone</h1>
              <div class="row flex ">
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
                  <div class="layer">
                    <figure>
                      <img
                        src="app/images/lockIcon.png"
                        alt="Genaiguru lockIcon"
                        title="Genaiguru lockIcon"
                      />
                    </figure>
                    <p>
                      Keep using to earn more points & unlock this reward label
                    </p>
                  </div>
                </div>
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
                  <div class="layer">
                    <figure>
                      <img
                        src="app/images/lockIcon.png"
                        alt="Genaiguru lockIcon"
                        title="Genaiguru lockIcon"
                      />
                    </figure>
                    <p>
                      Keep using to earn more points & unlock this reward label
                    </p>
                  </div>
                </div>
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
                  <div class="layer">
                    <figure>
                      <img
                        src="app/images/lockIcon.png"
                        alt="Genaiguru lockIcon"
                        title="Genaiguru lockIcon"
                      />
                    </figure>
                    <p>
                      Keep using to earn more points & unlock this reward label
                    </p>
                  </div>
                </div>
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
                  <div class="layer">
                    <figure>
                      <img
                        src="app/images/lockIcon.png"
                        alt="Genaiguru lockIcon"
                        title="Genaiguru lockIcon"
                      />
                    </figure>
                    <p>
                      Keep using to earn more points & unlock this reward label
                    </p>
                  </div>
                </div>
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
                  <div class="layer">
                    <figure>
                      <img
                        src="app/images/lockIcon.png"
                        alt="Genaiguru lockIcon"
                        title="Genaiguru lockIcon"
                      />
                    </figure>
                    <p>
                      Keep using to earn more points & unlock this reward label
                    </p>
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
          <Link to="/gurugold"><i class="fa fa-angle-left" aria-hidden="true"></i></Link>
          </div>
          <h2>Milestone</h2>
        </div>
        <div class="innerCommanContent contactFaq">
          <div class="rightSection">
            <div class="guru-gold-silver milestoneWrap">
              <div class="row flex ">
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
                  <div class="layer">
                    <figure>
                      <img
                        src="app/images/lockIcon.png"
                        alt="Genaiguru lockIcon"
                        title="Genaiguru lockIcon"
                      />
                    </figure>
                    <p>
                      Keep using to earn more points & unlock this reward label
                    </p>
                  </div>
                </div>
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
                  <div class="layer">
                    <figure>
                      <img
                        src="app/images/lockIcon.png"
                        alt="Genaiguru lockIcon"
                        title="Genaiguru lockIcon"
                      />
                    </figure>
                    <p>
                      Keep using to earn more points & unlock this reward label
                    </p>
                  </div>
                </div>
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
                  <div class="layer">
                    <figure>
                      <img
                        src="app/images/lockIcon.png"
                        alt="Genaiguru lockIcon"
                        title="Genaiguru lockIcon"
                      />
                    </figure>
                    <p>
                      Keep using to earn more points & unlock this reward label
                    </p>
                  </div>
                </div>
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
                  <div class="layer">
                    <figure>
                      <img
                        src="app/images/lockIcon.png"
                        alt="Genaiguru lockIcon"
                        title="Genaiguru lockIcon"
                      />
                    </figure>
                    <p>
                      Keep using to earn more points & unlock this reward label
                    </p>
                  </div>
                </div>
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
                  <div class="layer">
                    <figure>
                      <img
                        src="app/images/lockIcon.png"
                        alt="Genaiguru lockIcon"
                        title="Genaiguru lockIcon"
                      />
                    </figure>
                    <p>
                      Keep using to earn more points & unlock this reward label
                    </p>
                  </div>
                </div>
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
