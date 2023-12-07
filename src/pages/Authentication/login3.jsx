import React from "react";
import { Link } from "react-router-dom";

const Login3 = () => {
  return (
    <div>
      <section className="mailInbox mainBg">
        <div className="wrapper400">
          <div className="mailbox">
            <img
              src="app/images/mailBox.png"
              alt="Genaiguru mail image"
              title="Genaiguru mail image"
            />
            <div className="topStarsImg">
              <img src="app/images/star.png" alt="Genaiguru star" />
              <img src="app/images/star2.png" alt="Genaiguru star" />
            </div>
            <h1>Check your inbox</h1>
            <p>
              Quick check your inbox and confirm us that you would like to
              create an account.
            </p>
            <a href="" className="loginBtn">
              Check your inbox
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login3;
