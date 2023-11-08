import React from "react";
import { Link, NavLink } from "react-router-dom";

const Login2 = () => {
  return (
    <>
      {" "}
      <div>
        {/* <div class="loader">
          <img
            src="app/images/lodingLogo.png"
            alt="Genaiguru logo"
            title="Genaiguru Logo"
          />
        </div> */}

        <section class="createAccount mainBg">
          <div class="wrapper400">
            <div class="backBtn">
              <a href="#">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
              </a>
              Back
            </div>
            <h1>
              <span>Create an account</span> with your name and email address!
            </h1>
            <form action="" class="accountCreate">
              <div class="form_group flex">
                <label for="name">Your name</label>
                <input type="text" name="name" placeholder="Prosing kingdom" />
              </div>
              <div class="form_group flex">
                <label for="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="prosing@gmail.com"
                />
              </div>
              <div class="form_group flex">
                <label for="password">Password</label>
                <input type="password" name="password" placeholder="****" />
              </div>
              <div class="form_group flex">
                <label for="confirmPassword">Confirm password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="****"
                />
              </div>
              <div class="form_group">
                <Link to={"/login3"} class="loginBtn">
                  Create account
                </Link>
              </div>
            </form>
            <p class="termsText">
              By continuing, you agree to our{" "}
              <a href="#">Terms and conditions</a> and{" "}
              <a href="#">Privacy Policy.</a>
            </p>
            <div class="starsImg">
              <img src="app/images/star.png" alt="Genaiguru stars" />
              <img src="app/images/star2.png" alt="Genaiguru stars" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login2;
