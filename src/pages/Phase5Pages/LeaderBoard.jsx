import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBaseURL } from "../../api/config";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import { PATH_GURUGOLD } from "../../routes";
import Pagination from "../Phase6Pages/Pagination";

const LeaderBoard = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState("");
  const [drop, setDrop] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All");

  // const token = JSON.parse(localStorage.getItem("token"));
  // const userId = JSON.parse(localStorage.getItem("UserId"));

  const capitalizeFirstLetter = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  const fetchUserPoints = async (dropDownValue) => {
    console.log(dropDownValue, "drop");
    try {
      const response = await axios.get(
        `${getBaseURL()}/get-points?sort_by=${
          dropDownValue ? dropDownValue : ""
        }&page_number=${currentPage}`
      );
      setTotalUsers(response?.data?.total_count);
      setAllUsers(response?.data?.data);
      setSelectedOption(capitalizeFirstLetter(dropDownValue));
      setDrop(dropDownValue);
      setIsOpen(false);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    } catch (error) {
      console.error("Error fetching user points:", error.message);
    }
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const usersPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  //Optional used only when mobile have different UI
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  //Pagination ends
  useEffect(() => {
    fetchUserPoints(drop);
  }, [currentPage]);

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
              {currentPage == 1 && (
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
                              />
                            </figure>
                            <div className="rankIcon">#2</div>
                          </div>
                          <div className="content">
                            <p>
                              <img
                                src="./app/images/coins.png"
                                alt="Genaiguru Coins"
                              />
                              {allUsers[1]?.points}
                              <span>coins</span>
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
                              />
                            </figure>
                            <div className="rankIcon">#1</div>
                          </div>
                          <div className="content">
                            <p>
                              <img
                                src="./app/images/coins.png"
                                alt="Genaiguru Coins"
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
                              />
                            </figure>
                            <div className="rankIcon">#3</div>
                          </div>
                          <div className="content">
                            <p>
                              <img
                                src="./app/images/coins.png"
                                alt="Genaiguru Coins"
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
              )}
              {/* <!-- tabs start here  --> */}
              <ul
              // className="leaderboard-dropdown"
              // style={{ marginBottom: "5px" }}
              >
                <li>
                  {/* <select
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
                  </select> */}
                  <div
                    className="dropdown"
                    style={{ marginBottom: "5px", marginTop: "8px" }}
                  >
                    <button className="dropbtn"  onClick={toggleDropdown}>
                      {selectedOption ? selectedOption : "All"}
                      <p>
                        <img
                          src="app/images/arrow-left.png"
                          alt="Genaiguru arrow-left"
                          style={{ transform: isOpen ? "rotate(90deg)" : "rotate(270deg)" }}
                        />
                      </p>
                    </button>
                    {isOpen && (
                    <div className="dropdown-content">
                      <a
                        onClick={() => {
                          fetchUserPoints("");
                        }}
                      >
                        All
                      </a>
                      <a
                        onClick={() => {
                          fetchUserPoints("weekly");
                        }}
                      >
                        Weekly
                      </a>
                      <a
                        onClick={() => {
                          fetchUserPoints("daily");
                        }}
                      >
                        Daily
                      </a>
                    </div>
                    )}
                  </div>
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
                      
                      />
                    </figure>
                  </a>
                </li> */}
              </ul>
              {/* <!-- tab-link start here -->
                          <!-- tab-content here --> */}
              <div className="tab-content tab-content-1 active">
                {currentPage == 1
                  ? allUsers.slice(3).map((user, index) => {
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
                                      <img src={user.profile_image} />
                                    </a>
                                  </div>

                                  <div className="content">
                                    <h4>{user.name}</h4>
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
                                  />
                                </figure>
                                <span>{user.points} coins</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : allUsers.map((user, index) => {
                      const originalIndex = currentPage * 10 - 10 + index;
                      return (
                        <div className="list-container" key={originalIndex}>
                          <div className="row flex space-between">
                            <div className="profile">
                              <ul>
                                <li>
                                  <div className="img-box">
                                    <span>{originalIndex + 1}</span>
                                    <a href="">
                                      <img src={user.profile_image} />
                                    </a>
                                  </div>

                                  <div className="content">
                                    <h4>{user.name}</h4>
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
                                  />
                                </figure>
                                <span>{user.points} coins</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                <Pagination
                  token="leaderboard"
                  totalItems={totalUsers}
                  itemsPerPage={usersPerPage}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
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
                  <Link to={PATH_GURUGOLD}>Gurugold</Link>{" "}
                  <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                  Leaderboard
                </p>
              </div>
              {currentPage == 1 && (
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
                              />
                            </figure>
                            <div className="rankIcon">#2</div>
                          </div>

                          <div className="content">
                            <p>
                              <img
                                src="./app/images/coins.png"
                                alt="Genaiguru Coins"
                              />
                              {allUsers[1]?.points} <span>coins</span>
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
                              />
                            </figure>
                            <div className="rankIcon">#1</div>
                          </div>
                          <div className="content">
                            <p>
                              <img
                                src="./app/images/coins.png"
                                alt="Genaiguru Coins"
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
                              />
                            </figure>
                            <div className="rankIcon">#3</div>
                          </div>
                          <div className="content">
                            <p>
                              <img
                                src="./app/images/coins.png"
                                alt="Genaiguru Coins"
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
              )}
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
                        
                      />
                    </figure>
                  </a>
                </li> */}
              </ul>
              {/* <!-- tab-link start here -->
      <!-- tab-content here --> */}
              <div className="tab-content tab-content-1 active">
                {currentPage == 1
                  ? allUsers.slice(3).map((user, index) => {
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
                                      <img src={user.profile_image} />
                                    </a>
                                  </div>

                                  <div className="content">
                                    <h4>{user.name}</h4>
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
                                  />
                                </figure>
                                <span>{user.points} coins</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : allUsers.map((user, index) => {
                      const originalIndex = currentPage * 10 - 10 + index;
                      return (
                        <div className="list-container" key={originalIndex}>
                          <div className="row flex space-between">
                            <div className="profile">
                              <ul>
                                <li>
                                  <div className="img-box">
                                    <span>{originalIndex + 1}</span>
                                    <a href="">
                                      <img src={user.profile_image} />
                                    </a>
                                  </div>

                                  <div className="content">
                                    <h4>{user.name}</h4>
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
                                  />
                                </figure>
                                <span>{user.points} coins</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                {isMobile && (
                  <Pagination
                    token="leaderboard"
                    totalItems={totalUsers}
                    itemsPerPage={usersPerPage}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                  />
                )}
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
