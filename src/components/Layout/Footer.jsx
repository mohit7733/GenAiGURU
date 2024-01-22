import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getBaseURL } from "../../api/config";




const Footer = () => {
    const [email, setEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [message, setmessage] = useState("");
    const [errormessage, seterromessage] = useState("");
  
    const userId = JSON.parse(localStorage.getItem("UserId"));
  
  
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
      <footer>
        <div className="footerNewsletter">
          <div className="newsletter">
            <h5>Joining our newsletter</h5>
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
        </div>
        <div className="bottomFooter">
          <div className="imageText flex">
            <figure>
              <img
                src="app/images/footerLogo.png"
                alt="Genaiguru footer logo"
                title="Genaiguru logo"
              />
            </figure>
            <p>
              genaiguru.io is the world’s learning <br /> community to learn
              Technology subject.
            </p>
          </div>
          <ul className="footerSocial flex space-center">
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
      </footer>
    </>
  );
};

export default Footer;
