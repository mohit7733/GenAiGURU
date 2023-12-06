import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React from "react";
import FacebookLogin from "react-facebook-login";
import { Link, NavLink } from "react-router-dom";
import { PATH_SIGNIN, PATH_SIGNUP } from "../../routes";

const Login = () => {

  
  // Login with Google Function
  const onGoogleLogin = useGoogleLogin({
    onSuccess: async (credentialResponse) => {
      // API call to get USER DETAILS OF GMAIL
      const userInfo = await axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${credentialResponse.access_token}`,
          },
        })
        .then((res) => res.data);
      console.log(userInfo);
    },
    redirect_uri: process.env.REACT_APP_URL,
  });

  // Login with Facebook Function
  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <div>
      <section className="loginOption mainBg">
        <figure className="headerLogo">
          <Link to="/">
            <img
              src="app/images/headerLogo.png"
              alt="Genaiguru header logo"
              title="Genaiguru"
            />
          </Link>
        </figure>
        <div className="wrapper400 stars">
          <h1>
            <span>Hello!</span> Join with us by your info
          </h1>
          <p>Join with us by your social account or sign up with email</p>
          <ul>
            <li>
              <Link
                className="flex"
                onClick={() => {
                  onGoogleLogin();
                }}
              >
                <img
                  src="app/images/googleIcon.png"
                  alt="Genaiguru google icon"
                  title="Genaiguru on google"
                />
                Continue with Google
              </Link>
            </li>
            <li>
              <div>
                <FacebookLogin
                  appId="1394023161194162"
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={responseFacebook}
                  icon="fa-facebook"
                  textButton="Continue with Facebook"
                />
              </div>
            </li>
            <li>
              <NavLink to={PATH_SIGNUP} className="flex">
                Sign up with Email
              </NavLink>
            </li>
          </ul>
          <p className="alreadyAccount">
            Already have an account? <Link to={PATH_SIGNIN}>Log in</Link>
          </p>
          <p className="termsText">
            By continuing, you agree to our <a href="#">Terms and Services</a>{" "}
            and <a href="#">Privacy Policy.</a>
          </p>
          <div className="starsImg">
            <img src="app/images/star.png" alt="Genaiguru stars" />
            <img src="app/images/star2.png" alt="Genaiguru stars" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
