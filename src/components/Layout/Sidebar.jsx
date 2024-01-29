import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { getBaseURL } from "../../api/config";
import WithAuth from "../../pages/Authentication/WithAuth";
import {
  PATH_GURUGOLD,
  PATH_SETTINGS,
  PATH_TERMS_AND_SERVICES,
} from "../../routes";
import LevelPopup from "../LevelPopup/LevelPopup";

const Sidebar = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [message, setmessage] = useState("");
  const [errormessage, seterromessage] = useState("");

  const [claimedLevels, setclaimedLevels] = useState([]);
  const [showLevelPopUp, setShowLevelPopUp] = useState(false);

  const userId = JSON.parse(localStorage.getItem("UserId"));

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const newEmail = event.target.value.trim();
    setEmail(newEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(newEmail === "" || emailRegex.test(newEmail));
  };

  const subscribeNewsletter = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = email === "" || emailRegex.test(email);

    setIsValidEmail(isValid);
    setShowErrorMessage(!isValid);
    if (isValid) {
      axios
        .post(`${getBaseURL()}/subscribe?user_id=${userId}`, {
          email: email,
        })
        .then((res) => {
          setmessage(res?.data?.message);
          setEmail("");
          setTimeout(() => {
            setmessage("");
          }, 5000);
        })
        .catch((errors) => {
          console.log(errors);
          seterromessage("Please Enter Email");
          setTimeout(() => {
            seterromessage("");
          }, 5000);
        });
    }
  };

  useEffect(() => {
    if (userId != "") {
      fetchGameLevelsforPopupdisplay();
    }
  }, []);

  const fetchGameLevelsforPopupdisplay = async () => {
    try {
      const response = await axios.get(`${getBaseURL()}/game-levels`, {
        params: {
          user_id: userId,
        },
      });
      // console.log(response?.data);
      if (response?.data?.new_level == "yes") {
        axios
          .get(`${getBaseURL()}/game-levels`, {
            params: {
              level_id: response?.data?.new_level_id,
            },
          })
          .then((res) => {
            setclaimedLevels(res?.data?.data);
            setShowLevelPopUp(true);
          })
          .catch((err) => {
            console.log("Error fetching user levels:", err.message);
          });
      }
    } catch (error) {
      console.error("Error fetching user points:", error.message);
    }
  };

  console.log(claimedLevels, showLevelPopUp);
  return (
    <>
      <ToastContainer autoClose={1000} pauseOnHover={false} />
      {showLevelPopUp && (
        <LevelPopup
          claimedLevels={claimedLevels}
          onClose={() => setShowLevelPopUp(false)}
        />
      )}
      <div className="leftSidebar">
        <ul className="menu">
          <li>
            <Link to={"/"}>
              <figure>
                <img src="app/images/homeIcon.png" alt="Genaiguru home icon" />
              </figure>
              Home
            </Link>
          </li>
          <li>
            <WithAuth
              callBack={(e) => {
                navigate(PATH_GURUGOLD);
              }}
            >
              <Link style={{ cursor: "pointer" }}>
                <figure>
                  <img
                    src="app/images/guruGoldIcon.png"
                    alt="Genaiguru guruGoldIcon"
                  />
                </figure>
                Guru Gold
              </Link>
            </WithAuth>
          </li>
          <li>
            <WithAuth
              callBack={(e) => {
                navigate("/gurukeeps");
              }}
            >
              <Link>
                <figure>
                  <img
                    src="app/images/guruKeepsIcon.png"
                    alt="Genaiguru guruKeepsIcon"
                  />
                </figure>
                Guru Keeps
              </Link>
            </WithAuth>
          </li>
          <li>
            <WithAuth
              callBack={(e) => {
                navigate("/gurujournal");
              }}
            >
              <Link>
                <figure>
                  <img
                    src="app/images/guruJournalIcon.png"
                    alt="Genaiguru guruJournalIcon"
                  />
                </figure>
                Guru Journal
              </Link>
            </WithAuth>
          </li>
          <li>
            <WithAuth
              callBack={(e) => {
                navigate("/subscriptions");
              }}
            >
              <Link>
                <figure>
                  <img
                    src="app/images/teamGuruIcon.png"
                    alt="Genaiguru teamGuruIcon"
                  />
                </figure>
                Team Guru
              </Link>
            </WithAuth>
          </li>
          <li>
            <Link to={"/contact"}>
              <figure>
                <img
                  src="app/images/contactToGuruIcon.png"
                  alt="Genaiguru contactToGuruIcon"
                />
              </figure>
              Contact
            </Link>
          </li>
          <li>
            <WithAuth
              callBack={(e) => {
                navigate(PATH_SETTINGS);
              }}
            >
              <Link>
                <figure>
                  <img
                    src="app/images/settingIcon.png"
                    alt="Genaiguru settingIcon"
                  />
                </figure>
                Settings
              </Link>
            </WithAuth>
          </li>
        </ul>
        <div className="newsletter">
          <h5>Join our newsletter</h5>
          <form action="">
            <div className="form_group">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
              />
              {showErrorMessage && !isValidEmail && (
                <p style={{ color: "red" }}>Invalid email address</p>
              )}

              <p style={{ color: "white" }}>{message}</p>
              <p style={{ color: "red" }}>{errormessage}</p>
            </div>
            <div className="form_group">
              <button
                type="button"
                className="loginBtn"
                onClick={subscribeNewsletter}
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <ul className="bottom-menu">
          <li>
            <Link to={PATH_TERMS_AND_SERVICES}>Terms & Services</Link>
          </li>
          <li>
            <Link to={PATH_SETTINGS}>Privacy policy</Link>
          </li>
        </ul>
        <ul className="social-icons flex">
          <li>
            <a href="#" target="_blank">
              <img
                src="app/images/facebookIconNew.png"
                alt="Genaiguru facebook icon"
              />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <img
                src="app/images/youtubeIcon.png"
                alt="Genaiguru youtube icon"
              />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <img src="app/images/twitter.png" alt="Genaiguru twitter icon" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
