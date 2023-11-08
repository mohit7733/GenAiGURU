import React from "react";

const Login8 = () => {
  return (
    <div>
      {/* <!-- loader start here --> */}
      <div class="loader">
        <img
          src="app/images/lodingLogo.png"
          alt="Genaiguru logo"
          title="Genaiguru Logo"
        />
      </div>
      {/* <!-- loader end here -->

    <!-- account create section start here --> */}
      <section class="createAccount mainBg">
        <div class="wrapper400">
          <div class="backBtn">
            <a href="#">
              <i class="fa fa-angle-left" aria-hidden="true"></i>
            </a>
            Back
          </div>
          <h1>
            <span>Login </span> with your email address and password!
          </h1>
          <form action="" class="accountCreate">
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
            <div class="form_group">
              <button type="button" class="loginBtn">
                Login
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
      {/* <!-- account create section end here --> */}
    </div>
  );
};

export default Login8;
