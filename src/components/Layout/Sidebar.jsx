import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import WithAuth from "../../pages/Authentication/WithAuth";
import {
  PATH_TERMS_AND_SERVICES,
  PATH_SETTINGS,
  PATH_GURUGOLD,
} from "../../routes";
import axios from "axios";
import { getBaseURL } from "../../api/config";
import { ToastContainer, toast } from "react-toastify";

const Sidebar = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [message, setmessage] = useState("");
  const [errormessage, seterromessage] = useState("");

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
        .post(`${getBaseURL()}/subscribe`, {
          email: email,
        })
        .then((res) => {
          console.log(res?.data);
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

  return (
    <>
      <ToastContainer autoClose={1000} pauseOnHover={false} />

      <div className="leftSidebar">
        <ul className="menu">
          <li>
            <Link to={"/"}>
              <figure>
                <img
                  src="app/images/homeIcon.png"
                  alt="Genaiguru home icon"
                  title="Genaiguru home icon"
                />
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
              <a  style={{ cursor: "pointer" }}>
                <figure >
                  <img
                    src="app/images/guruGoldIcon.png"
                    alt="Genaiguru guruGoldIcon"
                    title="Genaiguru guruGoldIcon"
                  />
                </figure>
                Guru Gold
              </a>
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
                    title="Genaiguru guruKeepsIcon"
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
                    title="Genaiguru guruJournalIcon"
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
                    title="Genaiguru teamGuruIcon"
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
                  title="Genaiguru contactToGuruIcon"
                />
              </figure>
              Contact
            </Link>
          </li>
          <li>
            <WithAuth
              callBack={(e) => {
                navigate("/settings");
              }}
            >
              <Link>
                <figure>
                  <img
                    src="app/images/settingIcon.png"
                    alt="Genaiguru settingIcon"
                    title="Genaiguru settingIcon"
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
                title="Genaiguru on facebook"
              />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <img
                src="app/images/youtubeIcon.png"
                alt="Genaiguru youtube icon"
                title="Genaiguru on youtube"
              />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <img
                src="app/images/twitter.png"
                alt="Genaiguru twitter icon"
                title="Genaiguru on twitter"
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
