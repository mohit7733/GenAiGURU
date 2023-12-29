import React, { useEffect } from "react";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import { Link } from "react-router-dom";

const LeaderBoard = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <MobileHeader />
      <section class="mainWrapper flex hideMob">
        <Sidebar />
        <div className="rightSection">
          <div class="full-width">
            <div class="guru-gold-silver">
              <div class="innerBreadcrumb">
                <p>
                  <Link to="/gurugold">Gurugold</Link>{" "}
                  <i class="fa fa-angle-right" aria-hidden="true"></i>{" "}
                  Leaderboard
                </p>
              </div>
              <h1>Leaderboard</h1>
              <div class="center-box">
                <div class="topThreeBox">
                  <div class="topThreeBoxWrap">
                    <h4>Top 3</h4>
                    <ul class="flex space-between ">
                      <li>
                        <figure>
                          <img
                            src="./app/images/userIcon.png"
                            alt="Genaiguru user-icon"
                            title="Genaiguru user-icon"
                          />
                          <div class="rankIcon">#2</div>
                        </figure>
                        <div class="content">
                          <p>
                            11,000 <span>points</span>
                          </p>
                          <h6>jakob</h6>
                        </div>
                      </li>
                      <li>
                        <figure>
                          <img
                            src="./app/images/userIcon.png"
                            alt="Genaiguru user-icon"
                            title="Genaiguru user-icon"
                          />
                          <div class="rankIcon">#1</div>
                        </figure>
                        <div class="content">
                          <p>
                            12,000 <span>points</span>
                          </p>
                          <h6>johon Filim</h6>
                        </div>
                      </li>
                      <li>
                        <figure>
                          <img
                            src="./app/images/userIcon.png"
                            alt="Genaiguru user-icon"
                            title="Genaiguru user-icon"
                          />
                          <div class="rankIcon">#3</div>
                        </figure>
                        <div class="content">
                          <p>
                            10,000 <span>points</span>
                          </p>
                          <h6>Rakob</h6>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- tabs start here  --> */}
              <ul class="connect-link flex">
                <li>
                  <a
                    href="#"
                    class="tab active"
                    data-toggle-target=".tab-content-1"
                  >
                    Weekly{" "}
                    <figure>
                      <img
                        src="./app/images/down-icons.png"
                        alt="Genaiguru down-icons"
                        title="Genaiguru down-icons"
                      />
                    </figure>
                  </a>
                </li>
                <li>
                  <a href="#" class="tab " data-toggle-target=".tab-content-2">
                    Worldwide{" "}
                    <figure>
                      <img
                        src="./app/images/down-icons.png"
                        alt="Genaiguru down-icons"
                        title="Genaiguru down-icons"
                      />
                    </figure>
                  </a>
                </li>
              </ul>
              {/* <!-- tab-link start here -->
<!-- tab-content here --> */}
              <div class="tab-content tab-content-1 active">
                <div class="list-container">
                  <div class="row flex space-between">
                    <div class="profile">
                      <ul>
                        <li>
                          <div class="img-box">
                            <span>4</span>
                            <a href="">
                              <img
                                src="./app/images/leader-user-4.png"
                                alt="Genaiguru leader-user-4"
                                title="Genaiguru leader-user-5"
                              />
                            </a>
                          </div>

                          <div class="content">
                            <h4>Jekob link</h4>
                            <p>@Jmsmittan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="button">
                      <a href="">PT-4550</a>
                    </div>
                  </div>
                </div>
                <div class="list-container">
                  <div class="row flex space-between">
                    <div class="profile">
                      <ul>
                        <li>
                          <div class="img-box">
                            <span>5</span>
                            <a href="">
                              <img
                                src="./app/images/leader-user-5.png"
                                alt="Genaiguru leader-user-4"
                                title="Genaiguru leader-user-5"
                              />
                            </a>
                          </div>

                          <div class="content">
                            <h4>Rakob</h4>
                            <p>@Jmsmittan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="button">
                      <a href="">PT-4550</a>
                    </div>
                  </div>
                </div>
                <div class="list-container">
                  <div class="row flex space-between">
                    <div class="profile">
                      <ul>
                        <li>
                          <div class="img-box">
                            <span>6</span>
                            <a href="">
                              <img
                                src="./app/images/leader-use-6.png"
                                alt="Genaiguru leader-user-6"
                                title="Genaiguru leader-user-6"
                              />
                            </a>
                          </div>

                          <div class="content">
                            <h4>Alex . smith</h4>
                            <p>@Jmsmittan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="button">
                      <a href="">PT-4550</a>
                    </div>
                  </div>
                </div>
                <div class="list-container">
                  <div class="row flex space-between">
                    <div class="profile">
                      <ul>
                        <li>
                          <div class="img-box">
                            <span>7</span>
                            <a href="">
                              <img
                                src="./app/images/leader-use-7.png"
                                alt="Genaiguru leader-user-7"
                                title="Genaiguru leader-user-7"
                              />
                            </a>
                          </div>

                          <div class="content">
                            <h4>Jekob link</h4>
                            <p>@Jmsmittan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="button">
                      <a href="">PT-4550</a>
                    </div>
                  </div>
                </div>
                <div class="list-container">
                  <div class="row flex space-between">
                    <div class="profile">
                      <ul>
                        <li>
                          <div class="img-box">
                            <span>7</span>
                            <a href="">
                              <img
                                src="./app/images/leader-user-5.png"
                                alt="Genaiguru leader-user-5"
                                title="Genaiguru leader-user-5"
                              />
                            </a>
                          </div>

                          <div class="content">
                            <h4>Jekob link</h4>
                            <p>@Jmsmittan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="button">
                      <a href="">PT-4550</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- 2nd --> */}
              <div class="tab-content tab-content-2 ">
                <div class="list-container">
                  <div class="row flex space-between">
                    <div class="profile">
                      <ul>
                        <li>
                          <div class="img-box">
                            <span>12</span>
                            <a href="">
                              <img
                                src="./app/images/leader-user-4.png"
                                alt="Genaiguru leader-user-4"
                                title="Genaiguru leader-user-5"
                              />
                            </a>
                          </div>

                          <div class="content">
                            <h4>Jekob link</h4>
                            <p>@Jmsmittan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="button">
                      <a href="">PT-4550</a>
                    </div>
                  </div>
                </div>
                <div class="list-container">
                  <div class="row flex space-between">
                    <div class="profile">
                      <ul>
                        <li>
                          <div class="img-box">
                            <span>15</span>
                            <a href="">
                              <img
                                src="./app/images/leader-user-5.png"
                                alt="Genaiguru leader-user-4"
                                title="Genaiguru leader-user-5"
                              />
                            </a>
                          </div>

                          <div class="content">
                            <h4>Rakob</h4>
                            <p>@Jmsmittan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="button">
                      <a href="">PT-4550</a>
                    </div>
                  </div>
                </div>
                <div class="list-container">
                  <div class="row flex space-between">
                    <div class="profile">
                      <ul>
                        <li>
                          <div class="img-box">
                            <span>16</span>
                            <a href="">
                              <img
                                src="./app/images/leader-use-6.png"
                                alt="Genaiguru leader-user-6"
                                title="Genaiguru leader-user-6"
                              />
                            </a>
                          </div>

                          <div class="content">
                            <h4>Alex . smith</h4>
                            <p>@Jmsmittan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="button">
                      <a href="">PT-4550</a>
                    </div>
                  </div>
                </div>
                <div class="list-container">
                  <div class="row flex space-between">
                    <div class="profile">
                      <ul>
                        <li>
                          <div class="img-box">
                            <span>17</span>
                            <a href="">
                              <img
                                src="./app/images/leader-use-7.png"
                                alt="Genaiguru leader-user-7"
                                title="Genaiguru leader-user-7"
                              />
                            </a>
                          </div>

                          <div class="content">
                            <h4>Jekob link</h4>
                            <p>@Jmsmittan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="button">
                      <a href="">PT-4550</a>
                    </div>
                  </div>
                </div>
                <div class="list-container">
                  <div class="row flex space-between">
                    <div class="profile">
                      <ul>
                        <li>
                          <div class="img-box">
                            <span>17</span>
                            <a href="">
                              <img
                                src="./app/images/leader-user-5.png"
                                alt="Genaiguru leader-user-5"
                                title="Genaiguru leader-user-5"
                              />
                            </a>
                          </div>

                          <div class="content">
                            <h4>Jekob link</h4>
                            <p>@Jmsmittan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="button">
                      <a href="">PT-4550</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- mobile section start here --> */}
      <div class="mob_profile commanMobHead hideDes">
        <div class="mobileHead flex">
          <div class="hamburger">
          <Link to="/gurugold"><i class="fa fa-angle-left" aria-hidden="true"></i></Link>
          </div>
          <h2>Leaderboard</h2>
        </div>
        <div class="innerCommanContent mobGuruGold">
          <div class="rightSection">
            <div class="guru-gold-silver">
              <div class="innerBreadcrumb">
                <p>
                  <a href="#">Gurugold</a>{" "}
                  <i class="fa fa-angle-right" aria-hidden="true"></i>{" "}
                  Leaderboard
                </p>
              </div>
              <div class="center-box">
                <div class="topThreeBox">
                  <div class="topThreeBoxWrap">
                    <h4>Top 3</h4>
                    <ul class="flex space-between ">
                      <li>
                        <figure>
                          <img
                            src="./app/images/userIcon.png"
                            alt="Genaiguru user-icon"
                            title="Genaiguru user-icon"
                          />
                          <div class="rankIcon">#2</div>
                        </figure>
                        <div class="content">
                          <p>
                            11,000 <span>points</span>
                          </p>
                          <h6>jakob</h6>
                        </div>
                      </li>
                      <li>
                        <figure>
                          <img
                            src="./app/images/userIcon.png"
                            alt="Genaiguru user-icon"
                            title="Genaiguru user-icon"
                          />
                          <div class="rankIcon">#1</div>
                        </figure>
                        <div class="content">
                          <p>
                            12,000 <span>points</span>
                          </p>
                          <h6>johon Filim</h6>
                        </div>
                      </li>
                      <li>
                        <figure>
                          <img
                            src="./app/images/userIcon.png"
                            alt="Genaiguru user-icon"
                            title="Genaiguru user-icon"
                          />
                          <div class="rankIcon">#3</div>
                        </figure>
                        <div class="content">
                          <p>
                            10,000 <span>points</span>
                          </p>
                          <h6>Rakob</h6>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- tabs start here  --> */}
              <ul class="connect-link flex">
                <li>
                  <a
                    href="#"
                    class="tab active"
                    data-toggle-target=".tab-content-1"
                  >
                    Weekly{" "}
                    <figure>
                      <img
                        src="./app/images/down-icons.png"
                        alt="Genaiguru down-icons"
                        title="Genaiguru down-icons"
                      />
                    </figure>
                  </a>
                </li>
                <li>
                  <a href="#" class="tab " data-toggle-target=".tab-content-2">
                    Worldwide{" "}
                    <figure>
                      <img
                        src="./app/images/down-icons.png"
                        alt="Genaiguru down-icons"
                        title="Genaiguru down-icons"
                      />
                    </figure>
                  </a>
                </li>
              </ul>
              {/* <!-- tab-link start here -->
      <!-- tab-content here --> */}
              <div class="tab-content tab-content-1 active">
                <div class="list-container">
                  <div class="row flex space-between">
                    <div class="profile">
                      <ul>
                        <li>
                          <div class="img-box">
                            <span>4</span>
                            <a href="">
                              <img
                                src="./app/images/leader-user-4.png"
                                alt="Genaiguru leader-user-4"
                                title="Genaiguru leader-user-5"
                              />
                            </a>
                          </div>

                          <div class="content">
                            <h4>Jekob link</h4>
                            <p>@Jmsmittan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="button">
                      <a href="">PT-4550</a>
                    </div>
                  </div>
                </div>
                <div class="list-container">
                  <div class="row flex space-between">
                    <div class="profile">
                      <ul>
                        <li>
                          <div class="img-box">
                            <span>5</span>
                            <a href="">
                              <img
                                src="./app/images/leader-user-5.png"
                                alt="Genaiguru leader-user-4"
                                title="Genaiguru leader-user-5"
                              />
                            </a>
                          </div>

                          <div class="content">
                            <h4>Rakob</h4>
                            <p>@Jmsmittan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="button">
                      <a href="">PT-4550</a>
                    </div>
                  </div>
                </div>
                <div class="list-container">
                  <div class="row flex space-between">
                    <div class="profile">
                      <ul>
                        <li>
                          <div class="img-box">
                            <span>6</span>
                            <a href="">
                              <img
                                src="./app/images/leader-use-6.png"
                                alt="Genaiguru leader-user-6"
                                title="Genaiguru leader-user-6"
                              />
                            </a>
                          </div>

                          <div class="content">
                            <h4>Alex . smith</h4>
                            <p>@Jmsmittan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="button">
                      <a href="">PT-4550</a>
                    </div>
                  </div>
                </div>
                <div class="list-container">
                  <div class="row flex space-between">
                    <div class="profile">
                      <ul>
                        <li>
                          <div class="img-box">
                            <span>7</span>
                            <a href="">
                              <img
                                src="./app/images/leader-use-7.png"
                                alt="Genaiguru leader-user-7"
                                title="Genaiguru leader-user-7"
                              />
                            </a>
                          </div>

                          <div class="content">
                            <h4>Jekob link</h4>
                            <p>@Jmsmittan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="button">
                      <a href="">PT-4550</a>
                    </div>
                  </div>
                </div>
                <div class="list-container">
                  <div class="row flex space-between">
                    <div class="profile">
                      <ul>
                        <li>
                          <div class="img-box">
                            <span>7</span>
                            <a href="">
                              <img
                                src="./app/images/leader-user-5.png"
                                alt="Genaiguru leader-user-5"
                                title="Genaiguru leader-user-5"
                              />
                            </a>
                          </div>

                          <div class="content">
                            <h4>Jekob link</h4>
                            <p>@Jmsmittan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="button">
                      <a href="">PT-4550</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- 2nd --> */}
              <div class="tab-content tab-content-2 ">
                <div class="list-container">
                  <div class="row flex space-between">
                    <div class="profile">
                      <ul>
                        <li>
                          <div class="img-box">
                            <span>12</span>
                            <a href="">
                              <img
                                src="./app/images/leader-user-4.png"
                                alt="Genaiguru leader-user-4"
                                title="Genaiguru leader-user-5"
                              />
                            </a>
                          </div>

                          <div class="content">
                            <h4>Jekob link</h4>
                            <p>@Jmsmittan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="button">
                      <a href="">PT-4550</a>
                    </div>
                  </div>
                </div>
                <div class="list-container">
                  <div class="row flex space-between">
                    <div class="profile">
                      <ul>
                        <li>
                          <div class="img-box">
                            <span>15</span>
                            <a href="">
                              <img
                                src="./app/images/leader-user-5.png"
                                alt="Genaiguru leader-user-4"
                                title="Genaiguru leader-user-5"
                              />
                            </a>
                          </div>

                          <div class="content">
                            <h4>Rakob</h4>
                            <p>@Jmsmittan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="button">
                      <a href="">PT-4550</a>
                    </div>
                  </div>
                </div>
                <div class="list-container">
                  <div class="row flex space-between">
                    <div class="profile">
                      <ul>
                        <li>
                          <div class="img-box">
                            <span>16</span>
                            <a href="">
                              <img
                                src="./app/images/leader-use-6.png"
                                alt="Genaiguru leader-user-6"
                                title="Genaiguru leader-user-6"
                              />
                            </a>
                          </div>

                          <div class="content">
                            <h4>Alex . smith</h4>
                            <p>@Jmsmittan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="button">
                      <a href="">PT-4550</a>
                    </div>
                  </div>
                </div>
                <div class="list-container">
                  <div class="row flex space-between">
                    <div class="profile">
                      <ul>
                        <li>
                          <div class="img-box">
                            <span>17</span>
                            <a href="">
                              <img
                                src="./app/images/leader-use-7.png"
                                alt="Genaiguru leader-user-7"
                                title="Genaiguru leader-user-7"
                              />
                            </a>
                          </div>

                          <div class="content">
                            <h4>Jekob link</h4>
                            <p>@Jmsmittan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="button">
                      <a href="">PT-4550</a>
                    </div>
                  </div>
                </div>
                <div class="list-container">
                  <div class="row flex space-between">
                    <div class="profile">
                      <ul>
                        <li>
                          <div class="img-box">
                            <span>17</span>
                            <a href="">
                              <img
                                src="./app/images/leader-user-5.png"
                                alt="Genaiguru leader-user-5"
                                title="Genaiguru leader-user-5"
                              />
                            </a>
                          </div>

                          <div class="content">
                            <h4>Jekob link</h4>
                            <p>@Jmsmittan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="button">
                      <a href="">PT-4550</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- mobile section end here -->   */}
    </>
  );
};

export default LeaderBoard;
