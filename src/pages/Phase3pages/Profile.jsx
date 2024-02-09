import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { getBaseURL } from "../../api/config";
import { PATH_EDIT_PROFILE, PATH_SOCIAL_EDIT_PROFILE } from "../../routes";
import userIcon from "../../assets/images/person.png";
import MobileSideBar from "../../components/Layout/MobileSideBar";
import ProfileBadges from "../../components/ProfileBadges/ProfileBadges";

const Profile = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [displayInterestPopup, setDisplayInterestPopup] = useState(false);
  const [profileImage, setProfileImage] = useState();
  const [interestData, setInterestData] = useState([]);
  const [selectedInterestIndex, setSelectedInterestIndex] = useState([]);
  const [myInterests, setMyInterests] = useState();
  const [displayedInterests, setDisplayedInterests] = useState(7);
  const [displayView, setDisplayView] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const [following, setFollowing] = useState("");
  const [follower, setFollower] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [userDetails, setUserDetails] = useState({
    bio: "",
    userName: "",
    facebookLink: "",
    twitterLink: "",
    instagramLink: "",
    youtubeLink: "",
    linkedinLink: "",
    coverImage: "",
  });

  const [claimedBadges, setClaimedBadges] = useState([]);

  const token = JSON.parse(localStorage.getItem("token"));
  const userId = JSON.parse(localStorage.getItem("UserId"));

  const navigate = useNavigate();
  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  // User details GET-API------
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`${getBaseURL()}/auth/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setProfileImage(response.data.profile_image);
        setUserDetails({
          userName:
            response?.data?.name === undefined ||
            response?.data?.name === null ||
            response?.data?.name === "undefined" ||
            response?.data?.name === "null"
              ? ""
              : response?.data?.name,
          bio:
            response?.data?.bio === undefined ||
            response?.data?.bio === null ||
            response?.data?.bio === "undefined" ||
            response?.data?.bio === "null"
              ? ""
              : response?.data?.bio,
          facebookLink:
            response?.data?.facebook === undefined ||
            response?.data?.facebook === null ||
            response?.data?.facebook === "undefined" ||
            response?.data?.facebook === "null"
              ? ""
              : redirectToSocialMedia(response?.data?.facebook),
          youtubeLink:
            response?.data?.youtube === undefined ||
            response?.data?.youtube === null ||
            response?.data?.youtube === "undefined" ||
            response?.data?.youtube === "null"
              ? ""
              : redirectToSocialMedia(response?.data?.youtube),
          twitterLink:
            response?.data?.twitter === undefined ||
            response?.data?.twitter === null ||
            response?.data?.twitter === "undefined" ||
            response?.data?.twitter === "null"
              ? ""
              : redirectToSocialMedia(response?.data?.twitter),
          instagramLink:
            response?.data?.instagram === undefined ||
            response?.data?.instagram === null ||
            response?.data?.instagram === "undefined" ||
            response?.data?.instagram === "null"
              ? ""
              : redirectToSocialMedia(response?.data?.instagram),
          linkedinLink:
            response?.data?.linkedin === undefined ||
            response?.data?.linkedin === null ||
            response?.data?.linkedin === "undefined" ||
            response?.data?.linkedin === "null"
              ? ""
              : redirectToSocialMedia(response?.data?.linkedin),

          coverImage: response?.data?.cover_image,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function redirectToSocialMedia(url) {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "https://" + url;
      return url;
    }
    return url;
  }

  // GET ALL-INTERESTS API------------
  useEffect(() => {
    axios
      .get(`${getBaseURL()}/interests`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setInterestData(response?.data?.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // GET API FOR Following ------------
  useEffect(() => {
    axios
      .get(
        `${getBaseURL()}/get-user-follow?user_id=${localStorage.getItem(
          "UserId"
        )}`
      )
      .then((response) => {
        setFollowing(response.data.following);
        setFollower(response.data.follower);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // GET SELECTED INTEREST API+++++++++++++++++
  useEffect(() => {
    getMyInterest();
  }, []);

  const getMyInterest = () => {
    axios
      .get(`${getBaseURL()}/auth/userinterests`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMyInterests(response?.data?.data);
        // console.log(response?.data?.data);
        const interestIds = response?.data?.data.map(
          (item) => item.interest_id
        );
        setSelectedInterestIndex(interestIds);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // Changing my Interesrts
  const onChangeInterest = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    fetch(`${getBaseURL()}/update-user-interests`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        interest_id: selectedInterestIndex,
      }),
    })
      .then((res) => {
        if (res.status === 201) {
          // alert("Interests Changed Successfully");
          toast.success("Interests Changed Successfully", {
            position: toast.POSITION.TOP_CENTER,
          });
          setDisplayInterestPopup(false);
          getMyInterest();
          setErrorMessage("");
        } else {
          setErrorMessage("Please select at least one interest.");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const addInterestIndex = (index) => {
    const indexExists = selectedInterestIndex.includes(index);
    setSelectedInterestIndex((prevIndices) =>
      indexExists
        ? prevIndices.filter((prevIndex) => prevIndex !== index)
        : [...prevIndices, index]
    );
  };

  // Function to handle tab click-------
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const handleViewMoreClick = () => {
    // Increment the number of displayed interests by 10
    setDisplayedInterests((prevCount) => prevCount + 10);
    setDisplayView(false);
  };

  const handleViewLessClick = () => {
    // Reset the number of displayed interests to the initial state
    setDisplayedInterests(7);
    setDisplayView(true);
  };

  // fetchBadges API
  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const response = await axios.get(`${getBaseURL()}/game-badges`, {
          params: {
            user_id: userId,
            claimed: "yes",
          },
        });
        setClaimedBadges(response?.data?.data);
      } catch (error) {
        console.error("Error fetching user points:", error.message);
      }
    };
    fetchBadges();
  }, []);

  return (
    <>
      <MobileHeader />
      <section className="mainWrapper flex hideMob">
        <Sidebar />
        <div className="rightSection">
          <div className=" full-width">
            {/* <!-- banner start here --> */}
            <div className="profile-banner">
              <figure>
                {userDetails.coverImage && <img src={userDetails.coverImage} />}
              </figure>
            </div>

            {/* <!-- banner end here -->
            <!-- profile img start here --> */}
            <div className="row flex space-between">
              <div className="profile-img">
                <figure>
                  {profileImage ? (
                    <img src={profileImage} />
                  ) : (
                    <img src={userIcon} />
                  )}
                </figure>
                <h3>{userDetails.userName}</h3>
                <p>{userDetails.bio}</p>
                <div className="followers">
                  <ul className="flex space-between">
                    <li>
                      <a href="#">
                        <span>{following}</span> Following
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>{follower}</span> Followers
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="edit-profile">
                <div className="profile-link">
                  <Link to={PATH_EDIT_PROFILE} className="pop-up">
                    Edit profile
                  </Link>
                </div>
                <ul className="connect-link flex">
                  <li className={activeTab === 1 ? "active" : ""}>
                    <Link
                      onClick={() => handleTabClick(1)}
                      className={activeTab === 1 ? "tab" : ""}
                      data-toggle-target=".tab-content-1"
                    >
                      About
                    </Link>
                  </li>
                  <li className={activeTab === 2 ? "active" : ""}>
                    <Link
                      onClick={() => handleTabClick(2)}
                      className={activeTab === 2 ? "tab" : ""}
                      data-toggle-target=".tab-content-2"
                    >
                      Posts
                    </Link>
                  </li>
                  <li className={activeTab === 3 ? "active" : ""}>
                    <Link
                      onClick={() => handleTabClick(3)}
                      className={activeTab === 3 ? "tab" : ""}
                      data-toggle-target=".tab-content-3"
                    >
                      Videos
                    </Link>
                  </li>
                  <li className={activeTab === 4 ? "active" : ""}>
                    <Link
                      onClick={() => handleTabClick(4)}
                      className={activeTab === 4 ? "tab" : ""}
                      data-toggle-target=".tab-content-4"
                    >
                      Badges
                    </Link>
                  </li>
                </ul>
                {/* <!-- Content --> */}
                {activeTab === 1 && (
                  // <div className="tab-content tab-content-1 active">
                  <div
                    className={
                      activeTab === 1 && "tab-content tab-content-1 active"
                    }
                  >
                    <div className="intrest-area">
                      <h5>My Interests</h5>
                      <ul className="flex link-button intrest-wrapper">
                        {myInterests
                          ?.slice(0, displayedInterests)
                          .map((data, index) => (
                            <li key={index}>
                              <a>{data.interest_name}</a>
                            </li>
                          ))}
                        <li>
                          <Link
                            onClick={() => {
                              setDisplayInterestPopup(true);
                            }}
                            className="addBtns addInterest"
                          >
                            +
                          </Link>
                        </li>
                      </ul>
                      {myInterests?.length > 7 && displayView && (
                        <div className="btn-wrap">
                          <button
                            type="button"
                            className="loginBtn"
                            onClick={handleViewMoreClick}
                          >
                            View More
                          </button>
                        </div>
                      )}
                      {!displayView && (
                        <div className="btn-wrap">
                          <button
                            type="button"
                            className="loginBtn"
                            onClick={handleViewLessClick}
                          >
                            View Less
                          </button>
                        </div>
                      )}
                      <div className="social-link">
                        <h4>
                          My social links
                          <Link to={PATH_SOCIAL_EDIT_PROFILE}>
                            <img
                              src="/app/images/edit-icon.png"
                              alt="Genaiguru edit-icon"
                            />
                            Edit
                          </Link>
                        </h4>
                        <ul>
                          {userDetails.twitterLink == "" ? (
                            <></>
                          ) : (
                            <li>
                              <a href={userDetails.twitterLink} target="_blank">
                                <figure>
                                  <img
                                    src="/app/images/twitter.png"
                                    alt="Genaiguru twitter"
                                  />
                                </figure>
                                <span>Twitter</span>
                              </a>
                            </li>
                          )}
                          {userDetails.facebookLink == "" ? (
                            <></>
                          ) : (
                            <li>
                              <a
                                href={userDetails.facebookLink}
                                target="_blank"
                              >
                                <figure>
                                  <img
                                    src="/app/images/facebookIcon.png"
                                    alt="Genaiguru facebookIcon"
                                  />
                                </figure>
                                <span>Facebook</span>
                              </a>
                            </li>
                          )}
                          {userDetails.youtubeLink == "" ? (
                            <></>
                          ) : (
                            <li>
                              <a href={userDetails.youtubeLink} target="_blank">
                                <figure>
                                  <img
                                    src="/app/images/youtubeIcon.png"
                                    alt="Genaiguru youtube"
                                  />
                                </figure>
                                <span>Youtube</span>
                              </a>
                            </li>
                          )}
                          {userDetails.linkedinLink == "" ? (
                            <></>
                          ) : (
                            <li>
                              <a
                                href={userDetails.linkedinLink}
                                target="_blank"
                              >
                                <figure>
                                  <img
                                    src="/app/images/linkdin-icon.png"
                                    alt="Genaiguru linkdin-icon"
                                  />
                                </figure>
                                <span>LinkedIn</span>
                              </a>
                            </li>
                          )}
                          {userDetails.instagramLink == "" ? (
                            <></>
                          ) : (
                            <li>
                              <a
                                href={userDetails.instagramLink}
                                target="_blank"
                              >
                                <figure>
                                  <img
                                    src="/app/images/insta-icon.png"
                                    alt="Genaiguru insta-icon"
                                  />
                                </figure>
                                <span>Instagram</span>
                              </a>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                {/* <!-- post here --> */}
                {activeTab === 2 && (
                  <div
                    className={
                      activeTab === 2 && "tab-content tab-content-2 active"
                    }
                  >
                    <div className="home-interest">
                      <div className="heading-link flex"></div>
                      <div className="interest-box flex space-between">
                        <div className="wrap flex">
                          <figure>
                            <a href="#">
                              <img
                                src="app/images/interestSliderImg.png"
                                alt="Genaiguru intrest"
                              />
                            </a>
                          </figure>
                          <div className="content">
                            <div className="wrapper flex">
                              <figure>
                                <img
                                  src="app/images/authorImg.png"
                                  alt="Genaiguru authorImg"
                                />
                              </figure>
                              <div className="innerContent">
                                <h6>Alex Smih</h6>
                                <p>24 M view . 3 month ago</p>
                              </div>
                            </div>
                            <p>
                              <a href="#">
                                Navigating the World of ChatGPT and Its
                                Open-source Adversaries
                              </a>
                            </p>
                            <ul className="flex">
                              <li>
                                <a href="#">
                                  <img
                                    src="app/images/bookmarkIcon.png"
                                    alt="Genaiguru bookmarkIcon"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img
                                    src="app/images/dotsIcons.png"
                                    alt="Genaiguru dots-icon"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* <!-- video here --> */}
                {activeTab === 3 && (
                  <div
                    className={
                      activeTab === 3 && "tab-content tab-content-3 active"
                    }
                  >
                    <div className="home-interest">
                      <div className="heading-link flex"></div>
                      <div className="interest-box flex space-between">
                        <div className="wrap flex">
                          <figure>
                            <a href="#">
                              <video
                                src=""
                                poster="/app/images/videoTabvideoImage.png"
                              ></video>
                            </a>
                            <div className="videoTime flex">
                              <img
                                src="app/images/videoIconBlack.png"
                                alt="Genaiguru videoIconBlack"
                              />
                              <span>3:38</span>
                            </div>
                          </figure>
                          <div className="content">
                            <div className="wrapper flex">
                              <figure>
                                <img
                                  src="app/images/authorImg.png"
                                  alt="Genaiguru authorImg"
                                />
                              </figure>
                              <div className="innerContent">
                                <h6>Alex Smih</h6>
                                <p>24 M view . 3 month ago</p>
                              </div>
                            </div>
                            <p>
                              <a href="#">
                                Navigating the World of ChatGPT and Its
                                Open-source Adversaries
                              </a>
                            </p>
                            <ul className="flex">
                              <li>
                                <a href="#">
                                  <img
                                    src="app/images/bookmarkIcon.png"
                                    alt="Genaiguru bookmarkIcon"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img
                                    src="app/images/dotsIcons.png"
                                    alt="Genaiguru dotsIcons"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* <!-- video end here -->
                <!-- badges here --> */}
                {activeTab === 4 && (
                  <div
                    className={
                      activeTab === 4 && "tab-content tab-content-4 active"
                    }
                  >
                    <ProfileBadges claimedBadges={claimedBadges} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- profile mobile section start here --> */}
      <div className="mob_profile hideDes">
        <div className="mobileHead flex">
          <div className="hamburger" onClick={toggleMobileSidebar}>
            <img src="app/images/hamburgerIcon.png" alt="Genaiguru hamburger" />
          </div>
          <h2>My Profile</h2>
          <button
            type="button"
            onClick={() => {
              navigate(PATH_EDIT_PROFILE);
            }}
          >
            Edit profile
          </button>
        </div>
        <div className="mob_profile_inner">
          <figure>
            {userDetails.coverImage && <img src={userDetails.coverImage} />}
          </figure>
          {/* <!-- banner start here --> */}
          {/* <div className="profile-banner"></div> */}
          {/* <!-- banner end here --> */}

          {/* <!-- profile img start here --> */}
          <div className="row flex space-between">
            <div className="profile-img">
              <figure>
                {profileImage ? (
                  <img src={profileImage} />
                ) : (
                  <img src={userIcon} />
                )}
              </figure>
              <h3>{userDetails.userName}</h3>
              <p>{userDetails.bio}</p>
              <div className="followers">
                <ul className="flex space-between">
                  <li>
                    <a href="#">
                      <span>{following}</span> Following
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>{follower}</span> Followers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="edit-profile">
              <ul className="connect-link flex">
                <li className={activeTab === 1 ? "active" : ""}>
                  <Link
                    onClick={() => handleTabClick(1)}
                    className={activeTab === 1 ? "tab" : ""}
                    data-toggle-target=".tab-content-1"
                  >
                    About
                  </Link>
                </li>
                <li className={activeTab === 2 ? "active" : ""}>
                  <Link
                    onClick={() => handleTabClick(2)}
                    className={activeTab === 2 ? "tab" : ""}
                    data-toggle-target=".tab-content-2"
                  >
                    Posts
                  </Link>
                </li>
                <li className={activeTab === 3 ? "active" : ""}>
                  <Link
                    onClick={() => handleTabClick(3)}
                    className={activeTab === 3 ? "tab" : ""}
                    data-toggle-target=".tab-content-3"
                  >
                    Videos
                  </Link>
                </li>
                <li className={activeTab === 4 ? "active" : ""}>
                  <Link
                    onClick={() => handleTabClick(4)}
                    className={activeTab === 4 ? "tab" : ""}
                    data-toggle-target=".tab-content-4"
                  >
                    Badges
                  </Link>
                </li>
              </ul>
              {/* <!-- Content --> */}
              {activeTab === 1 && (
                <div className="tab-content tab-content-1 active">
                  <div className="intrest-area">
                    <h5>My Interests</h5>
                    <ul className="flex link-button">
                      {myInterests
                        ?.slice(0, displayedInterests)
                        .map((data, index) => (
                          <li key={index}>
                            <a>{data.interest_name}</a>
                          </li>
                        ))}
                      <li>
                        <Link
                          onClick={() => {
                            setDisplayInterestPopup(true);
                          }}
                          className="addBtns addInterest"
                        >
                          +
                        </Link>
                      </li>
                    </ul>
                    {myInterests?.length > 7 && displayView && (
                      <div className="btn-wrap">
                        <button
                          type="button"
                          className="loginBtn"
                          onClick={handleViewMoreClick}
                        >
                          View More
                        </button>
                      </div>
                    )}
                    {!displayView && (
                      <div className="btn-wrap">
                        <button
                          type="button"
                          className="loginBtn"
                          onClick={handleViewLessClick}
                        >
                          View Less
                        </button>
                      </div>
                    )}
                    <div className="social-link">
                      <h4>
                        My social link{" "}
                        <Link to={PATH_SOCIAL_EDIT_PROFILE}>
                          <img
                            src="/app/images/edit-icon.png"
                            alt="Genaiguru edit-icon"
                          />
                          Edit
                        </Link>
                      </h4>
                      <ul>
                        {userDetails.twitterLink == "" ? (
                          <></>
                        ) : (
                          <li>
                            <a href={userDetails.twitterLink} target="_blank">
                              <figure>
                                <img
                                  src="/app/images/twitter.png"
                                  alt="Genaiguru twitter"
                                />
                              </figure>
                              <span>Twitter</span>
                            </a>
                          </li>
                        )}
                        {userDetails.facebookLink == "" ? (
                          <></>
                        ) : (
                          <li>
                            <a href={userDetails.facebookLink} target="_blank">
                              <figure>
                                <img
                                  src="/app/images/facebookIcon.png"
                                  alt="Genaiguru facebookIcon"
                                />
                              </figure>
                              <span>Facebook</span>
                            </a>
                          </li>
                        )}
                        {userDetails.youtubeLink == "" ? (
                          <></>
                        ) : (
                          <li>
                            <a href={userDetails.youtubeLink} target="_blank">
                              <figure>
                                <img
                                  src="/app/images/youtubeIcon.png"
                                  alt="Genaiguru youtube"
                                />
                              </figure>
                              <span>Youtube</span>
                            </a>
                          </li>
                        )}
                        {userDetails.linkedinLink == "" ? (
                          <></>
                        ) : (
                          <li>
                            <a href={userDetails.linkedinLink} target="_blank">
                              <figure>
                                <img
                                  src="/app/images/linkdin-icon.png"
                                  alt="Genaiguru linkdin-icon"
                                />
                              </figure>
                              <span>LinkedIn</span>
                            </a>
                          </li>
                        )}
                        {userDetails.instagramLink == "" ? (
                          <></>
                        ) : (
                          <li>
                            <a href={userDetails.instagramLink} target="_blank">
                              <figure>
                                <img
                                  src="/app/images/insta-icon.png"
                                  alt="Genaiguru insta-icon"
                                />
                              </figure>
                              <span>Instagram</span>
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              {/* <!-- post here --> */}
              {activeTab === 2 && (
                <div className="tab-content tab-content-2 active">
                  <div className="home-interest">
                    <div className="heading-link flex"></div>
                    <div className="interest-box flex space-between">
                      <div className="wrap flex">
                        <figure>
                          <a href="#">
                            <img
                              src="app/images/interestSliderImg.png"
                              alt="Genaiguru intrest"
                            />
                          </a>
                        </figure>
                        <div className="content">
                          <div className="wrapper flex">
                            <figure>
                              <img
                                src="app/images/authorImg.png"
                                alt="Genaiguru authorImg"
                              />
                            </figure>
                            <div className="innerContent">
                              <h6>Alex Smih</h6>
                              <p>24 M view . 3 month ago</p>
                            </div>
                          </div>
                          <p>
                            <a href="#">
                              Navigating the World of ChatGPT and Its
                              Open-source Adversaries
                            </a>
                          </p>
                          <ul className="flex">
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/bookmarkIcon.png"
                                  alt="Genaiguru bookmarkIcon"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/dotsIcons.png"
                                  alt="Genaiguru dots-icon"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* <!-- video here --> */}
              {activeTab === 3 && (
                <div className="tab-content tab-content-3 active">
                  <div className="home-interest">
                    <div className="heading-link flex"></div>
                    <div className="interest-box flex space-between">
                      <div className="wrap flex">
                        <figure>
                          <a href="#">
                            <video
                              src=""
                              poster="/app/images/videoTabvideoImage.png"
                            ></video>
                          </a>
                          <div className="videoTime flex">
                            <img
                              src="app/images/videoIconBlack.png"
                              alt="Genaiguru videoIconBlack"
                            />
                            <span>3:38</span>
                          </div>
                        </figure>
                        <div className="content">
                          <div className="wrapper flex">
                            <figure>
                              <img
                                src="app/images/authorImg.png"
                                alt="Genaiguru authorImg"
                              />
                            </figure>
                            <div className="innerContent">
                              <h6>Alex Smih</h6>
                              <p>24 M view . 3 month ago</p>
                            </div>
                          </div>
                          <p>
                            <a href="#">
                              Navigating the World of ChatGPT and Its
                              Open-source Adversaries
                            </a>
                          </p>
                          <ul className="flex">
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/bookmarkIcon.png"
                                  alt="Genaiguru bookmarkIcon"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/dotsIcons.png"
                                  alt="Genaiguru dotsIcons"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* <!-- video end here -->
                <!-- badges here --> */}
              {activeTab === 4 && (
                <div className="tab-content tab-content-4 active">
                  <ProfileBadges />
                </div>
              )}
              {/* <!-- badges end here --> */}
            </div>
            {/* <!-- post end here --> */}
          </div>
        </div>
      </div>
      {/* <!-- profile mobile section end here --> */}
      {displayInterestPopup && (
        <>
          <div className="popup-container customNewPopups hideMob">
            <div className="popup-wrapper">
              <div className="popup-header flex">
                <h2>
                  Add or change your <br /> interested topic
                </h2>
                <Link
                  onClick={() => {
                    setDisplayInterestPopup(false);
                  }}
                  className="cross_btn"
                >
                  <img
                    src="app/images/cancelButtonIcon.png"
                    alt="Genaiguru cross-icon"
                  />
                </Link>
              </div>
              <div className="popupp-btn-box">
                <form>
                  <div className="flex">
                    {interestData.map((data, index) => {
                      return (
                        <div className="button-container" key={index}>
                          <input
                            type="button"
                            key={index}
                            onClick={() => {
                              addInterestIndex(data.id);
                            }}
                            style={
                              selectedInterestIndex.includes(data.id)
                                ? { backgroundColor: "purple" }
                                : {}
                            }
                            value={data.interestName}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <button
                    type="submit"
                    className="loginBtn"
                    onClick={onChangeInterest}
                  >
                    Save Changes
                  </button>
                  <p className="errorMessage">{errorMessage}</p>
                </form>
              </div>
            </div>
          </div>
          {/* <!-- mobile popup starts here -- */}
          <div className="mob_popup hideDes">
            <div className="mobileClose">
              <figure
                onClick={() => {
                  setDisplayInterestPopup(false);
                }}
              >
                <img
                  src="app/images/mobileCloseIconImg.png"
                  alt="mobile close icon"
                />
              </figure>
            </div>
            <div className="popup-wrapper ">
              <div className="popup-header flex">
                <h2>Add or change your interested topic</h2>
              </div>
              <div className="popupp-btn-box">
                <form action="">
                  <div className="flex">
                    {interestData.map((data, index) => {
                      return (
                        <div className="button-container" key={index}>
                          <input
                            type="button"
                            key={index}
                            onClick={() => {
                              addInterestIndex(data.id);
                            }}
                            style={
                              selectedInterestIndex.includes(data.id)
                                ? { backgroundColor: "purple" }
                                : {}
                            }
                            value={data.interestName}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <button
                    type="submit"
                    className="loginBtn"
                    onClick={onChangeInterest}
                  >
                    Save Changes
                  </button>
                  <p className="errorMessage">{errorMessage}</p>
                </form>
              </div>
            </div>
          </div>
          {/* <!-- mobile popup end here -- */}
        </>
      )}
      {isMobileSidebarOpen && (
        <MobileSideBar toggleMobileSidebar={toggleMobileSidebar} />
      )}
    </>
  );
};

export default Profile;
