import React from "react";
import { Link, NavLink } from "react-router-dom";

const Login3 = () => {
  return (
    <div>
      {/* <div class="loader">
        <img
          src="app/images/lodingLogo.png"
          alt="Genaiguru logo"
          title="Genaiguru Logo"
        />
      </div> */}

      <section class="mailInbox mainBg">
        <div class="wrapper400">
          <div class="mailbox">
            <img
              src="app/images/mailBox.png"
              alt="Genaiguru mail image"
              title="Genaiguru mail image"
            />
            <div class="topStarsImg">
              <img src="app/images/star.png" alt="Genaiguru star" />
              <img src="app/images/star2.png" alt="Genaiguru star" />
            </div>
            <h1>Check your email inbox</h1>
            <p>
              Quick check your email box and confirm us that you would like to
              create an account.
            </p>
            <Link to={"/login4"} class="loginBtn">
              Go to the email inbox
            </Link>
            {/* <a href="#" class="loginBtn">
              Go to the email inbox
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login3;
