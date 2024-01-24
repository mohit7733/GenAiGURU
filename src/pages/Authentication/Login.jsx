import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React from "react";
import FacebookLogin from "react-facebook-login";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { PATH_SIGNIN, PATH_SIGNUP, PATH_WELCOME } from "../../routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getBaseURL } from "../../api/config";

const Login = () => {
  const navigate = useNavigate();
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

      axios
        .post("https://genaiadmindev.sdsstaging.co.uk/api/auth/google-login", {
          google_response: JSON.stringify(userInfo),
        })
        .then((response) => {
          console.log(response?.data);
          localStorage.setItem(
            "token",
            JSON.stringify(response?.data?.accessToken)
          );
          localStorage.setItem("userLoggedIn", JSON.stringify("true"));
          // localStorage.setItem("UserId", JSON.stringify(response?.data?.id));

          axios
            .get(`${getBaseURL()}/auth/user/email-verification-status`, {
              headers: {
                Authorization: `Bearer ${response.data.accessToken}`,
              },
            })
            .then((res) => {
              console.log(res.data);
              toast.success("Logged in Successfully", {
                position: toast.POSITION.TOP_CENTER,
              });
              setTimeout(() => {
                if (
                  res?.data?.email_verified == "yes" &&
                  res?.data?.post_follwed == "yes"
                ) {
                  navigate("/");
                } else {
                  navigate(`${PATH_WELCOME}`);
                }
              }, [2000]);
            });

          // toast.success("Logged in Successfully", {
          //   position: toast.POSITION.TOP_CENTER,
          // });
          // setTimeout(() => {
          //   navigate("/");
          // }, [2000]);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
            toast.error(error.response.data.message, {
              position: toast.POSITION.TOP_CENTER,
            });
          } else if (error.request) {
            console.log("network error");
          } else {
            console.log(error);
          }
        });
    },
    redirect_uri: process.env.REACT_APP_URL,
  });

  // Login with Facebook Function
  const responseFacebook = async (response) => {
    const res = await response;
    console.log(res, "token");
  };

  return (
    <div>
      <ToastContainer autoClose={1000} />

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
            <span>Hello!</span> Join the GenAIGuru family now!
          </h1>
          <p>
            Get started on your GenAIGuru adventure today. Free, easy sign up
            with your social media or email
          </p>
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
                  appId="979240030290574"
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={responseFacebook}
                  icon={
                    <img
                      src="app/images/facebookIcon.png"
                      alt="Genaiguru facebook icon"
                      title="Genaiguru on facebook"
                    />
                  }
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
