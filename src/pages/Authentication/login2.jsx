import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Login2 = () => {
  const [displayGoToMail, setDisplayGoToMail] = useState(false);
  return (
    <>
      {" "}
      <div>
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
                <input type="text" name="name" placeholder="GenAIGuru" />
              </div>
              <div class="form_group flex">
                <label for="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="GenAIGuru@gmail.com"
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
              <div class="form_group flex">
                <label for="profilePicture">Choose Profile Picture</label>
                <input
                  type="file"
                  name="profilePicture"
                  placeholder="Choose Profile Picture"
                />
              </div>
              <div class="form_group">
                <Link
                  class="loginBtn"
                  onClick={() => {
                    alert("Account Created")
                    setDisplayGoToMail(true);
                  }}
                >
                  Create account
                </Link>
              </div>
            </form>
            <p class="termsText">
              By continuing, you agree to our <a href="#">Terms and Services</a>{" "}
              and <a href="#">Privacy Policy.</a>
            </p>
            <div class="starsImg">
              <img src="app/images/star.png" alt="Genaiguru stars" />
              <img src="app/images/star2.png" alt="Genaiguru stars" />
            </div>
          </div>
        </section>
        {displayGoToMail && (
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
                  Quick check your email box and confirm us that you would like
                  to create an account.
                </p>
                <Link to={"/login4"} class="loginBtn">
                  Go to the email inbox
                </Link>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Login2;
