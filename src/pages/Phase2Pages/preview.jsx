import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getBaseURL } from "../../api/config";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import { BASE_PATH, PATH_FEATURED_CONTENT } from "../../routes";
import SilverPopup from "../Phase5Pages/SilverPopup";

const Preview = () => {
  const [profileImage, setProfileImage] = useState({
    profile_image: "",
    name: "",
  });

  const [showPopUp, setShowPopUp] = useState(false);
  const [claimedBadges, setClaimedBadges] = useState([]);
  const [displaySeePost, setDisplaySeePost] = useState(false);

  const token = JSON.parse(localStorage.getItem("token"));
  const userId = JSON.parse(localStorage.getItem("UserId"));
  // useLocation to get id from url
  let location = useLocation();
  let navigate = useNavigate();
  const data = [
    {
      title: location.state.data.title,
      shortdesc: location.state.data.shortdesc,
      interests: location.state.data.interests,
      descriptions: location.state.desc,
    },
  ];
  // Useeffect for API of blogOpened Points
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
        setProfileImage({
          profile_image: response.data.profile_image,
          name: response.data.name,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // fetchBadges API
  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const response = await axios.get(`${getBaseURL()}/game-badges`, {
          params: {
            user_id: userId,
            claimed: "no",
          },
        });
        // console.log(response?.data?.data);
        setClaimedBadges(response?.data?.data);
        if (response?.data?.data.length > 0) {
          setShowPopUp(true);
        }
      } catch (error) {
        console.error("Error fetching user points:", error.message);
      }
    };
    fetchBadges();
  }, []);
  useEffect(() => {
    if (displaySeePost == true) {
      setTimeout(() => {
        setDisplaySeePost(false);
        navigate("/");
      }, 3000);
    }
  }, [displaySeePost]);

  const sendPost = () => {
    if (token != "") {
      let fd = new FormData();
      fd.append("title", data[0]?.title);
      fd.append("description", data[0]?.descriptions);
      fd.append("short_description", data[0]?.shortdesc);
      fd.append("interest_ids[]", data[0]?.interests);
      // fd.append("banner_image", data?.banner);
      // fd.append("thumbnail_image", data?.thumbnail);
      axios
        .post(`${getBaseURL()}/auth/blog-create`, fd, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res?.data?.success == true) {
            localStorage.removeItem("Data");
            localStorage.removeItem("banner");
            localStorage.removeItem("Interests");
            localStorage.removeItem("value");
            // alert("blog created success");
            setDisplaySeePost(true);
          } else {
            console.log(res.data.error, "error");
          }
        })
        .catch((err) => console.log(err, "Err"));
    }
  };
  return (
    <div>
      <ToastContainer autoClose={1000} pauseOnHover={false} />
      {showPopUp && (
        <SilverPopup
          claimedBadges={claimedBadges}
          onClose={() => setShowPopUp(false)}
        />
      )}

      <MobileHeader />
      {/* <!-- main section start here --> */}
      <section className="mainWrapper flex hideMob">
        <Sidebar />
        <div className="rightSection">
          <div className="full-width">
            <div className="keeps-container blogDetails">
              <div className="gurukeeps-wrapper">
                <div className="row flex space-between">
                  <div className="blog-box">
                    <div className="innerBreadcrumb">
                      <p>
                        {/* <Link to={BASE_PATH}>Home</Link>{" "} */}
                        <i
                          className="fa fa-angle-right"
                          aria-hidden="true"
                        ></i>{" "}
                        Preview Page
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-details">
                <h2>{location?.state?.data?.title}</h2>
                <div className="blogger flex">
                  <div className="blogger-profile">
                    <figure>
                      <img
                        src={profileImage.profile_image}
                        alt="Genaiguru blog-img"
                      />
                    </figure>
                  </div>
                  <div className="content-box">
                    <p>
                      By <a>{profileImage?.name}</a>
                    </p>
                    <p>{Date().slice(3, 16)}</p>
                  </div>
                  <div className="blog-img">
                    <figure>
                      <img
                        src={location.state.imageData}
                        alt="Genaiguru web-deigner-learn-book"
                      />
                    </figure>
                  </div>
                  <div className="blog-txt">
                    <div
                      className="blog-txt"
                      style={{ color: "white" }}
                      dangerouslySetInnerHTML={{
                        __html: location?.state?.desc.replace(/\n/g, "<br>"),
                      }}
                    >
                      {/* {location?.state?.data?.descriptions
                        .split("\n")
                        .join(" ")} */}
                    </div>
                    <button
                      className="loginBtn"
                      style={{ marginTop: "20px", width: "200px" }}
                      onClick={() => sendPost()}
                    >
                      Post
                    </button>
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
          <Link to={PATH_FEATURED_CONTENT} className="hamburger">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </Link>
          <h2>Blog Details</h2>
        </div>
        <div className="innerCommanContent">
          <div className="rightSection">
            <div className="keeps-container blogDetails">
              {/* <!-- blog-start --> */}
              <div className="blog-details">
                <h2>title</h2>
                <div className="blogger flex">
                  <div className="blogger-profile">
                    <figure>
                      <img src="profile" alt="Genaiguru blog-img" />
                    </figure>
                  </div>
                  <div className="content-box">
                    <p>
                      By <a href="#">name</a>
                    </p>
                    <p>date</p>
                  </div>
                  <div className="blog-img">
                    <figure>
                      <img
                        src="thhumbimage"
                        alt="Genaiguru web-deigner-learn-book"
                      />
                    </figure>
                  </div>
                  <div className="blog-txt">
                    <div
                      className="blog-txt"
                      //   dangerouslySetInnerHTML={{ __html: blogDetail?.content }}
                    />

                    <div className="comment-box">
                      <ul className="flex">
                        <li>
                          <a style={{ cursor: "pointer" }}>
                            <figure>
                              <img
                                src="./app/images/comment-01.png"
                                alt="Genaiguru comment-01"
                              />
                            </figure>
                            <span>Comment</span>
                          </a>
                        </li>
                        <li>
                          <a>
                            <figure>
                              <img
                                src="./app/images/help-circle.png"
                                alt="Genaiguru help-circle"
                              />
                            </figure>{" "}
                            <Link to="/contact">
                              <span>Ask question</span>
                            </Link>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {displaySeePost && (
        <section className="loginPopup postPopup">
          <div className="wrapper">
            <figure>
              <img src="app/images/tickIcon.png" alt="" />
            </figure>
            <h2
              style={{
                marginBottom: "22px",
              }}
            >
              Post successful
            </h2>
            <h6
              style={{
                width: "320px",
                display: "flex",
                textAlign: "center",
                marginBottom: "22px",
              }}
            >
              Sent to Admin for Approval
            </h6>
          </div>
        </section>
      )}
    </div>
  );
};

export default Preview;
