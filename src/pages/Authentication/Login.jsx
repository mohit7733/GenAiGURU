import React from "react";
import { Link, NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      {/* <div class="loader">
        <img
          src="app/images/lodingLogo.png"
          alt="Genaiguru logo"
          title="Genaiguru Logo"
        />
      </div> */}

      <section class="loginOption mainBg">
        <div class="wrapper400 stars">
          <h1>
            <span>Hello!</span> Join with us by your info
          </h1>
          <p>Join with us by your social account or sign up with email</p>
          <ul>
            <li>
              <a href="#" class="flex">
                <img
                  src="app/images/googleIcon.png"
                  alt="Genaiguru google icon"
                  title="Genaiguru on google"
                />{" "}
                Continue with Google
              </a>
            </li>
            <li>
              <a href="#" class="flex">
                <img
                  src="app/images/facebookIcon.png"
                  alt="Genaiguru facebook icon"
                  title="Genaiguru on facebook"
                />{" "}
                Continue with Facebook
              </a>
            </li>
            {/* <li>
              <a href="#" class="flex">
                <img
                  src="app/images/appleIcon.png"
                  alt="Genaiguru apple icon"
                  title="Genaiguru apple icon"
                />{" "}
                Continue with Apple
              </a>
            </li> */}
            <li>
              <NavLink to={"/login2"} class="flex">
                Sign up with Email
              </NavLink>
            </li>
          </ul>
          <p class="alreadyAccount">
            Already have an account? <Link to="/Sign-in">Log in</Link>
          </p>
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
    </div>
  );
};

export default Login;
