import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useGoogleLogin } from "@react-oauth/google";
import { PATH_SIGNIN, PATH_SIGNUP } from "../../routes";
const Login = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });
  return (
    <div>
      <section class="loginOption mainBg">
        <div class="wrapper400 stars">
          <h1>
            <span>Hello!</span> Join with us by your info
          </h1>
          <p>Join with us by your social account or sign up with email</p>
          <ul>
            <li>
              <Link
                class="flex"
                onClick={() => {
                  login();
                }}
              >
                <img
                  src="app/images/googleIcon.png"
                  alt="Genaiguru google icon"
                  title="Genaiguru on google"
                />{" "}
                Continue with Google
              </Link>
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
              <NavLink to={PATH_SIGNUP} class="flex">
                Sign up with Email
              </NavLink>
            </li>
          </ul>
          <p class="alreadyAccount">
            Already have an account? <Link to={PATH_SIGNIN}>Log in</Link>
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
