import React from "react";

const Login7 = () => {
  return (
    <div>
      {/* <!-- loader start here --> */}
      {/* <div class="loader">
        <img
          src="app/images/lodingLogo.png"
          alt="Genaiguru logo"
          title="Genaiguru Logo"
        />
      </div> */}
      {/* <!-- loader end here -->

    <!-- login option start here --> */}
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
              <button type="button" class="loginBtn">
                Create account
              </button>
            </div>
          </form>
          <p class="termsText">
            By continuing, you agree to our <a href="#">Terms and conditions</a>{" "}
            and <a href="#">Privacy Policy.</a>
          </p>
          <div class="starsImg">
            <img src="app/images/star.png" alt="Genaiguru stars" />
            <img src="app/images/star2.png" alt="Genaiguru stars" />
          </div>
        </div>
      </section>
      {/* <!-- login option end here -->

    <!-- login popup start here --> */}
      <section class="loginPopup">
        <div class="wrapper">
          <figure>
            <img
              src="app/images/tickIcon.png"
              alt="Genaiguru tick image"
              title="Genaiguru tick image"
            />
          </figure>
          <h2>Wow! You did Awesome.</h2>
          {/* <!-- <a href="#">Add your interest</a> --> */}
        </div>
      </section>
    </div>
  );
};

export default Login7;
