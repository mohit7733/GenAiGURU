import React from "react";
import { Link } from "react-router-dom";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";

const Silver = () => {
  return (
    <div>
      {/* <!-- main section start here --> */}
      <MobileHeader />
      <section class="mainWrapper flex hideMob">
        <Sidebar />
        <div className="rightSection">
          <div class="full-width">
            <div class="guru-gold-silver">
              <div class="innerBreadcrumb">
                <p>
                  <a href="#">Achievement</a>{" "}
                  <i class="fa fa-angle-right" aria-hidden="true"></i> Silver
                </p>
              </div>
              <h1>Silver</h1>
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
              {/* <!-- points start here --> */}
              <div class="points-box">
                <ul>
                  <li>
                    <div class="img-box">
                      <figure class="active">
                        <img
                          src="./app/images/check-sgn.png"
                          alt="Genaiguru check-sgn"
                          title="Genaiguru check-sgn"
                        />
                      </figure>
                    </div>
                    <div class="content">
                      <h6>Active on site</h6>
                      <p>Total 3,000 hours 60 Days</p>
                    </div>
                  </li>
                  <li>
                    <div class="img-box">
                      <figure class="active">
                        <img src="./app/images/check-sgn.png" alt="" />
                      </figure>
                    </div>
                    <div class="content">
                      <h6>Earn 20,000 points</h6>
                      <p>In 60 Days</p>
                    </div>
                  </li>
                  <li>
                    <div class="img-box">
                      <figure class="active">
                        <img
                          src="./app/images/check-sgn.png"
                          alt="Genaiguru check-sgn"
                          title="Genaiguru check-sgn"
                        />
                      </figure>
                    </div>
                    <div class="content">
                      <h6>Create at-least 20 post</h6>
                      <p>Total 3,000 hours 60 Days</p>
                    </div>
                  </li>
                  <li>
                    <div class="img-box">
                      <figure class="active">
                        <img
                          src="./app/images/check-sgn.png"
                          alt="Genaiguru check-sgn"
                          title="Genaiguru check-sgn"
                        />
                      </figure>
                    </div>
                    <div class="content">
                      <h6>Get 20,00 points</h6>
                      <p>Total 3,000 hours 60 Days</p>
                    </div>
                  </li>
                  <li>
                    <div class="img-box">
                      <figure class="active">
                        <img
                          src="./app/images/check-sgn.png"
                          alt="Genaiguru check-sgn"
                          title="Genaiguru check-sgn"
                        />
                      </figure>
                    </div>
                    <div class="content">
                      <h6>Get 20,00 points</h6>
                      <p>Total 3,000 hours 60 Days</p>
                    </div>
                  </li>
                  <li>
                    <div class="img-box">
                      <figure class="active">
                        <img
                          src="./app/images/check-sgn.png"
                          alt="Genaiguru check-sgn"
                          title="Genaiguru check-sgn"
                        />
                      </figure>
                    </div>
                    <div class="content">
                      <h6>Get 20,00 points</h6>
                      <p>In 60 Days</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="buttonWrap">
                <Link to="/silverpopup" class="loginBtn">
                  Claim
                </Link>
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
            <i class="fa fa-angle-left" aria-hidden="true"></i>
          </div>
          <h2>Silver</h2>
        </div>
        <div class="innerCommanContent contactFaq">
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
              {/* <!-- points start here --> */}
              <div class="points-box">
                <ul>
                  <li>
                    <div class="img-box">
                      <figure class="active">
                        <img
                          src="./app/images/check-sgn.png"
                          alt="Genaiguru check-sgn"
                          title="Genaiguru check-sgn"
                        />
                      </figure>
                    </div>
                    <div class="content">
                      <h6>Active on site</h6>
                      <p>Total 3,000 hours 60 Days</p>
                    </div>
                  </li>
                  <li>
                    <div class="img-box">
                      <figure class="active">
                        <img src="./app/images/check-sgn.png" alt="" />
                      </figure>
                    </div>
                    <div class="content">
                      <h6>Earn 20,000 points</h6>
                      <p>In 60 Days</p>
                    </div>
                  </li>
                  <li>
                    <div class="img-box">
                      <figure class="active">
                        <img
                          src="./app/images/check-sgn.png"
                          alt="Genaiguru check-sgn"
                          title="Genaiguru check-sgn"
                        />
                      </figure>
                    </div>
                    <div class="content">
                      <h6>Create at-least 20 post</h6>
                      <p>Total 3,000 hours 60 Days</p>
                    </div>
                  </li>
                  <li>
                    <div class="img-box">
                      <figure class="active">
                        <img
                          src="./app/images/check-sgn.png"
                          alt="Genaiguru check-sgn"
                          title="Genaiguru check-sgn"
                        />
                      </figure>
                    </div>
                    <div class="content">
                      <h6>Get 20,00 points</h6>
                      <p>Total 3,000 hours 60 Days</p>
                    </div>
                  </li>
                  <li>
                    <div class="img-box">
                      <figure class="active">
                        <img
                          src="./app/images/check-sgn.png"
                          alt="Genaiguru check-sgn"
                          title="Genaiguru check-sgn"
                        />
                      </figure>
                    </div>
                    <div class="content">
                      <h6>Get 20,00 points</h6>
                      <p>Total 3,000 hours 60 Days</p>
                    </div>
                  </li>
                  <li>
                    <div class="img-box">
                      <figure class="active">
                        <img
                          src="./app/images/check-sgn.png"
                          alt="Genaiguru check-sgn"
                          title="Genaiguru check-sgn"
                        />
                      </figure>
                    </div>
                    <div class="content">
                      <h6>Get 20,00 points</h6>
                      <p>In 60 Days</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="buttonWrap">
                <Link to="/silverpopup" class="loginBtn">
                  Claim
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- mobile section end here -->   */}
    </div>
  );
};

export default Silver;
