import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBaseURL } from "../../api/config";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import { PATH_GURUGOLD } from "../../routes";

const LeaderBoard = () => {
  const [allUsers, setAllUsers] = useState([]);
  // const [dropDownValue, setDropDownValue] = useState("");

  const token = JSON.parse(localStorage.getItem("token"));
  const userId = JSON.parse(localStorage.getItem("UserId"));

  const fetchUserPoints = async (dropDownValue) => {
    try {
      const response = await axios.get(
        `${getBaseURL()}/get-points?sort_by=${
          dropDownValue ? dropDownValue : ""
        }`
      );
      console.log(response?.data?.data);
      setAllUsers(response?.data?.data);
    } catch (error) {
      console.error("Error fetching user points:", error.message);
    }
  };

  useEffect(() => {
    fetchUserPoints();
  }, []);

  return (
    <>
      <MobileHeader />
      <section className="mainWrapper flex hideMob">
        <Sidebar />
        <div className="rightSection">
          <div className="full-width">
            <div className="guru-gold-silver">
              <div className="innerBreadcrumb">
                <p>
                  <Link to={PATH_GURUGOLD}>Gurugold</Link>{" "}
                  <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                  Leaderboard
                </p>
              </div>
              <h1>Leaderboard</h1>
              <div className="center-box">
                <div className="topThreeBox">
                  <div className="topThreeBoxWrap">
                    <h4>Top 3</h4>
                    <ul className="flex space-between ">
                      <li>
                        <div className="profileImgFrame">
                          <figure>
                            <img
                              src={allUsers[1]?.profile_image}
                              alt="Genaiguru user-icon"
                              title="Genaiguru user-icon"
                            />
                          </figure>
                          <div className="rankIcon">#2</div>
                        </div>
                        <div className="content">
                          <p>
                            <img
                              src="./app/images/coins.png"
                              alt="Genaiguru Coins"
                              title="Genaiguru Coins"
                            />
                            {allUsers[1]?.points}<span>coins</span>
                          </p>
                          <h6>{allUsers[1]?.name}</h6>
                        </div>
                      </li>
                      <li>
                        <div className="profileImgFrame">
                          <figure>
                            <img
                              src={allUsers[0]?.profile_image}
                              alt="Genaiguru user-icon"
                              title="Genaiguru user-icon"
                            />
                          </figure>
                          <div className="rankIcon">#1</div>
                        </div>
                        <div className="content">
                          <p>
                            <img
                              src="./app/images/coins.png"
                              alt="Genaiguru Coins"
                              title="Genaiguru Coins"
                            />{" "}
                            {allUsers[0]?.points}
                            <span>coins</span>
                          </p>
                          <h6>{allUsers[0]?.name}</h6>
                        </div>
                      </li>
                      <li>
                        <div className="profileImgFrame">
                          <figure>
                            <img
                              src={allUsers[2]?.profile_image}
                              alt="Genaiguru user-icon"
                              title="Genaiguru user-icon"
                            />
                          </figure>
                          <div className="rankIcon">#3</div>
                        </div>
                        <div className="content">
                          <p>
                            <img
                              src="./app/images/coins.png"
                              alt="Genaiguru Coins"
                              title="Genaiguru Coins"
                            />
                            {allUsers[2]?.points} <span>coins</span>
                          </p>
                          <h6>{allUsers[2]?.name}</h6>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- tabs start here  --> */}
              <ul className="connect-link ">
                <li>
                  <select
                    onChange={(e) => {
                      fetchUserPoints(
                        e.target.value == "All"
                          ? ""
                          : e.target.value.toLowerCase()
                      );
                    }}
                  >
                    <option>All</option>
                    <option>Weekly</option>
                    <option>Daily</option>
                  </select>
                </li>
                {/* <li>
                  <a
                    href="#"
                    className="tab "
                    data-toggle-target=".tab-content-2"
                  >
                    Worldwide{" "}
                    <figure>
                      <img
                        src="./app/images/down-icons.png"
                        alt="Genaiguru down-icons"
                        title="Genaiguru down-icons"
                      />
                    </figure>
                  </a>
                </li> */}
              </ul>
              {/* <!-- tab-link start here -->
                          <!-- tab-content here --> */}
              <div className="tab-content tab-content-1 active">
                {allUsers.slice(3).map((user, index) => {
                  const originalIndex = index + 2;
                  return (
                    <div className="list-container" key={originalIndex}>
                      <div className="row flex space-between">
                        <div className="profile">
                          <ul>
                            <li>
                              <div className="img-box">
                                <span>{originalIndex + 2}</span>
                                <a href="">
                                  <img
                                    src={user.profile_image}
                                    title="profile"
                                  />
                                </a>
                              </div>

                              <div className="content">
                                <h4>{user.name}</h4>
                                {/* <p>@Jmsmittan</p> */}
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="button">
                          <span>
                            <figure>
                              <img
                                src="./app/images/coins.png"
                                alt="Genaiguru Coins"
                                title="Genaiguru Coins"
                              />
                            </figure>
                            <span>{user.points} coins</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* <!-- 2nd --> */}
              <div className="tab-content tab-content-2 ">
                <div className="list-container">
                  <div className="row flex space-between">
                    <div className="profile">
                      <ul>
                        <li>
                          <div className="img-box">
                            <span>12</span>
                            <a href="">
                              <img
                                src="./app/images/leader-user-4.png"
                                alt="Genaiguru leader-user-4"
                                title="Genaiguru leader-user-5"
                              />
                            </a>
                          </div>

                          <div className="content">
                            <h4>Jekob link</h4>
                            <p>@Jmsmittan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="button">
                      <a href="">PT-4550</a>
                    </div>
                  </div>
                </div>
                <div className="list-container">
                  <div className="row flex space-between">
                    <div className="profile">
                      <ul>
                        <li>
                          <div className="img-box">
                            <span>15</span>
                            <a href="">
                              <img
                                src="./app/images/leader-user-5.png"
                                alt="Genaiguru leader-user-4"
                                title="Genaiguru leader-user-5"
                              />
                            </a>
                          </div>

                          <div className="content">
                            <h4>Rakob</h4>
                            <p>@Jmsmittan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="button">
                      <a href="">PT-4550</a>
                    </div>
                  </div>
                </div>
                <div className="list-container">
                  <div className="row flex space-between">
                    <div className="profile">
                      <ul>
                        <li>
                          <div className="img-box">
                            <span>16</span>
                            <a href="">
                              <img
                                src="./app/images/leader-use-6.png"
                                alt="Genaiguru leader-user-6"
                                title="Genaiguru leader-user-6"
                              />
                            </a>
                          </div>

                          <div className="content">
                            <h4>Alex . smith</h4>
                            <p>@Jmsmittan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="button">
                      <a href="">PT-4550</a>
                    </div>
                  </div>
                </div>
                <div className="list-container">
                  <div className="row flex space-between">
                    <div className="profile">
                      <ul>
                        <li>
                          <div className="img-box">
                            <span>17</span>
                            <a href="">
                              <img
                                src="./app/images/leader-use-7.png"
                                alt="Genaiguru leader-user-7"
                                title="Genaiguru leader-user-7"
                              />
                            </a>
                          </div>

                          <div className="content">
                            <h4>Jekob link</h4>
                            <p>@Jmsmittan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="button">
                      <a href="">PT-4550</a>
                    </div>
                  </div>
                </div>
                <div className="list-container">
                  <div className="row flex space-between">
                    <div className="profile">
                      <ul>
                        <li>
                          <div className="img-box">
                            <span>17</span>
                            <a href="">
                              <img
                                src="./app/images/leader-user-5.png"
                                alt="Genaiguru leader-user-5"
                                title="Genaiguru leader-user-5"
                              />
                            </a>
                          </div>

                          <div className="content">
                            <h4>Jekob link</h4>
                            <p>@Jmsmittan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="button">
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
      <div className="mob_profile commanMobHead hideDes">
        <div className="mobileHead flex">
          <div className="hamburger">
            <Link to="/gurugold">
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </Link>
          </div>
          <h2>Leaderboard</h2>
        </div>
        <div className="innerCommanContent mobGuruGold">
          <div className="rightSection">
            <div className="guru-gold-silver">
              <div className="innerBreadcrumb">
                <p>
                  <a href="#">Gurugold</a>{" "}
                  <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                  Leaderboard
                </p>
              </div>
              <div className="center-box">
                <div className="topThreeBox">
                  <div className="topThreeBoxWrap">
                    <h4>Top 3</h4>
                    <ul className="flex space-between ">
                      <li>
                        <div className="profileImgFrame">
                          <figure>
                            <img
                              src={allUsers[1]?.profile_image}
                              alt="Genaiguru user-icon"
                              title="Genaiguru user-icon"
                            />
                          </figure>
                          <div className="rankIcon">#2</div>
                        </div>

                        <div className="content">
                          <p>
                            <img
                              src="./app/images/coins.png"
                              alt="Genaiguru Coins"
                              title="Genaiguru Coins"
                            />
                            {allUsers[1]?.points} <span>points</span>
                          </p>
                          <h6>{allUsers[1]?.name}</h6>
                        </div>
                      </li>
                      <li>
                        <div className="profileImgFrame">
                          <figure>
                            <img
                              src={allUsers[0]?.profile_image}
                              alt="Genaiguru user-icon"
                              title="Genaiguru user-icon"
                            />
                          </figure>
                          <div className="rankIcon">#1</div>
                        </div>
                        <div className="content">
                          <p>
                            <img
                              src="./app/images/coins.png"
                              alt="Genaiguru Coins"
                              title="Genaiguru Coins"
                            />{" "}
                            {allUsers[0]?.points}
                            <span>points</span>
                          </p>
                          <h6>{allUsers[0]?.name}</h6>
                        </div>
                      </li>
                      <li>
                        <div className="profileImgFrame">
                          <figure>
                            <img
                              src={allUsers[2]?.profile_image}
                              alt="Genaiguru user-icon"
                              title="Genaiguru user-icon"
                            />
                          </figure>
                          <div className="rankIcon">#3</div>
                        </div>
                        <div className="content">
                          <p>
                            <img
                              src="./app/images/coins.png"
                              alt="Genaiguru Coins"
                              title="Genaiguru Coins"
                            />
                            {allUsers[2]?.points} <span>points</span>
                          </p>
                          <h6>{allUsers[2]?.name}</h6>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- tabs start here  --> */}
              <ul className="connect-link flex">
                <li>
                  <select
                    onChange={(e) => {
                      fetchUserPoints(
                        e.target.value == "All"
                          ? ""
                          : e.target.value.toLowerCase()
                      );
                    }}
                  >
                    <option>All</option>
                    <option>Weekly</option>
                    <option>Daily</option>
                  </select>
                </li>
                {/* <li>
                  <a
                    href="#"
                    className="tab "
                    data-toggle-target=".tab-content-2"
                  >
                    Worldwide{" "}
                    <figure>
                      <img
                        src="./app/images/down-icons.png"
                        alt="Genaiguru down-icons"
                        title="Genaiguru down-icons"
                      />
                    </figure>
                  </a>
                </li> */}
              </ul>
              {/* <!-- tab-link start here -->
      <!-- tab-content here --> */}
              <div className="tab-content tab-content-1 active">
              {allUsers.slice(3).map((user, index) => {
                  const originalIndex = index + 2;
                  return (
                    <div className="list-container" key={originalIndex}>
                      <div className="row flex space-between">
                        <div className="profile">
                          <ul>
                            <li>
                              <div className="img-box">
                                <span>{originalIndex + 2}</span>
                                <a href="">
                                  <img
                                    src={user.profile_image}
                                    title="profile"
                                  />
                                </a>
                              </div>

                              <div className="content">
                                <h4>{user.name}</h4>
                                {/* <p>@Jmsmittan</p> */}
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="button">
                          <span>
                            <figure>
                              <img
                                src="./app/images/coins.png"
                                alt="Genaiguru Coins"
                                title="Genaiguru Coins"
                              />
                            </figure>
                            <span>{user.points} points</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* <!-- 2nd --> */}
              <div className="tab-content tab-content-2 ">
                <div className="list-container">
                  <div className="row flex space-between">
                    <div className="profile">
                      <ul>
                        <li>
                          <div className="img-box">
                            <span>12</span>
                            <a href="">
                              <img
                                src="./app/images/leader-user-4.png"
                                alt="Genaiguru leader-user-4"
                                title="Genaiguru leader-user-5"
                              />
                            </a>
                          </div>

                          <div className="content">
                            <h4>Jekob link</h4>
                            <p>@Jmsmittan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="button">
                      <a href="">PT-4550</a>
                    </div>
                  </div>
                </div>
                <div className="list-container">
                  <div className="row flex space-between">
                    <div className="profile">
                      <ul>
                        <li>
                          <div className="img-box">
                            <span>15</span>
                            <a href="">
                              <img
                                src="./app/images/leader-user-5.png"
                                alt="Genaiguru leader-user-4"
                                title="Genaiguru leader-user-5"
                              />
                            </a>
                          </div>

                          <div className="content">
                            <h4>Rakob</h4>
                            <p>@Jmsmittan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="button">
                      <a href="">PT-4550</a>
                    </div>
                  </div>
                </div>
                <div className="list-container">
                  <div className="row flex space-between">
                    <div className="profile">
                      <ul>
                        <li>
                          <div className="img-box">
                            <span>16</span>
                            <a href="">
                              <img
                                src="./app/images/leader-use-6.png"
                                alt="Genaiguru leader-user-6"
                                title="Genaiguru leader-user-6"
                              />
                            </a>
                          </div>

                          <div className="content">
                            <h4>Alex . smith</h4>
                            <p>@Jmsmittan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="button">
                      <a href="">PT-4550</a>
                    </div>
                  </div>
                </div>
                <div className="list-container">
                  <div className="row flex space-between">
                    <div className="profile">
                      <ul>
                        <li>
                          <div className="img-box">
                            <span>17</span>
                            <a href="">
                              <img
                                src="./app/images/leader-use-7.png"
                                alt="Genaiguru leader-user-7"
                                title="Genaiguru leader-user-7"
                              />
                            </a>
                          </div>

                          <div className="content">
                            <h4>Jekob link</h4>
                            <p>@Jmsmittan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="button">
                      <a href="">PT-4550</a>
                    </div>
                  </div>
                </div>
                <div className="list-container">
                  <div className="row flex space-between">
                    <div className="profile">
                      <ul>
                        <li>
                          <div className="img-box">
                            <span>17</span>
                            <a href="">
                              <img
                                src="./app/images/leader-user-5.png"
                                alt="Genaiguru leader-user-5"
                                title="Genaiguru leader-user-5"
                              />
                            </a>
                          </div>

                          <div className="content">
                            <h4>Jekob link</h4>
                            <p>@Jmsmittan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="button">
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
