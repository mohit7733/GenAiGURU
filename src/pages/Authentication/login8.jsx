import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../api/Auth";
import { getBaseURL } from "../../api/config";
import {
  BASE_PATH,
  PATH_FORGOT_PASSWORD,
  PATH_LOGIN,
  PATH_WELCOME,
} from "../../routes";

const Login8 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingStatus, setLoadingStatus] = useState(false);
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    axios
      .get(`${getBaseURL()}/auth/user/email-verification-status`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin();
  };

  const onLogin = async () => {
    setLoadingStatus(true);
    let payload = {
      email: email,
      password: password,
    };
    if (email.length === 0 && password.length === 0) {
      toast.error("Enter Email and Password !", {
        position: toast.POSITION.TOP_CENTER,
      });
      setLoadingStatus(false);
    } else if (email.length === 0 || password.length === 0) {
      toast.error(
        email.length === 0 ? "Please Enter Email !" : "Please Enter Password !",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
      setLoadingStatus(false);
    } else {
      return login(payload)
        .then((res) => {
          localStorage.setItem("token", JSON.stringify(res.data.accessToken));
          localStorage.setItem("userLoggedIn", JSON.stringify("true"));

          axios
            .get(`${getBaseURL()}/auth/user/email-verification-status`, {
              headers: {
                Authorization: `Bearer ${res.data.accessToken}`,
              },
            })
            .then((response) => {
              console.log(response.data);
              if (response?.data?.email_verified == "no") {
                toast.warn("Please Verify Email First", {
                  position: toast.POSITION.TOP_CENTER,
                });
              } else {
                if (res.status === 200) {
                  toast.success("Login Successful !", {
                    position: toast.POSITION.TOP_CENTER,
                  });

                  setTimeout(() => {
                    if (
                      response?.data?.email_verified == "yes" &&
                      response?.data?.post_follwed == "yes"
                    ) {
                      navigate("/");
                    } else {
                      navigate(`${PATH_WELCOME}`);
                    }
                  }, [2000]);
                }
              }
              setLoadingStatus(false);
            })
            .catch((err) => {
              console.log(err.message);
            });
        })
        .catch((err) => {
          setLoadingStatus(false);
          toast.error("Incorrect Email or Password !", {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    }
  };

  return (
    <div>
      <section className="createAccount mainBg">
        <figure className="headerLogo">
          <Link to={BASE_PATH}>
            <img src="app/images/headerLogo.png" alt="Genaiguru header logo" />
          </Link>
        </figure>
        <div className="wrapper400">
          <div className="backBtn">
            <Link to={PATH_LOGIN}>
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </Link>
            Back
          </div>
          <h1>
            <span>Login </span> with your email address and password!
          </h1>
          <form action="" className="accountCreate">
            <div className="form_group flex">
              <label htmlFor="email">Email Address*</label>
              <input
                type="email"
                name="email"
                placeholder="GenAIGuru@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form_group flex">
              <label htmlFor="password">Password*</label>
              <input
                type="password"
                name="password"
                placeholder="****"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form_group">
              <Link to={PATH_FORGOT_PASSWORD}>
                <p
                  className=""
                  style={{
                    color: "white",
                    display: "flex",
                    fontSize: "14px",
                    marginTop: "5px",
                  }}
                >
                  Forgot Password?
                </p>
              </Link>
              <button
                disabled={loadingStatus}
                className="loginBtn"
                onClick={handleSubmit}
              >
                {loadingStatus ? "" : "Login"}
                {loadingStatus && (
                  <div className="typing" style={{ justifyContent: "center" }}>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                )}
              </button>
              <ToastContainer autoClose={1000} />
            </div>
          </form>
          <p className="termsText">
            By continuing, you agree to our <a href="#">Terms and conditions</a>{" "}
            and <a href="#">Privacy Policy.</a>
          </p>
          <div className="starsImg">
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
