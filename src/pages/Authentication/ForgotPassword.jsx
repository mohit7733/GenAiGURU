import React, { useState } from "react";
import { BASE_PATH, PATH_OTP_SCREEN, PATH_SIGNIN } from "../../routes";
import axios from "axios";
import { getBaseURL } from "../../api/config";
import { Link, useNavigate } from "react-router-dom";
import Otpscreen from "./Otpscreen";
import CustomToast from "../../components/CustomToast/CustomToast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [showOTPScreen, setShowOTPScreen] = useState(false);
  const navigate = useNavigate();

  const onSendEmail = () => {
    if (email.length === 0) {
      toast.error("Please Enter Email", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      axios
        .post(`${getBaseURL()}/forgot-password`, {
          email: email,
        })
        .then((res) => {
          console.log(res);
          window.alert(res.data.message);
          // toast(res.data.message);

          if (res.data.status === true) {
            setShowOTPScreen(true);
          }
        })
        .catch((errors) => {
          toast.error(errors, {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    }
  };
  return (
    <>
      <ToastContainer autoClose={2000} />
      {showOTPScreen ? (
        <Otpscreen email={email} />
      ) : (
        <section className="forgot_field createAccount mainBg">
          <div style={{ position: "absolute", top: "0px" }}>
            <figure className="headerLogo">
              <Link to={BASE_PATH}>
                <img
                  src="app/images/headerLogo.png"
                  alt="Genaiguru header logo"
                  title="Genaiguru"
                />
              </Link>
            </figure>
          </div>

          <div className="wrapper400">
            <div className="backBtn">
              <a href={PATH_SIGNIN}>
                <i className="fa fa-angle-left" aria-hidden="true"></i>
              </a>
              Back
            </div>
            <h1>Forgot Your Password</h1>
            <div className="accountCreate">
              <div className="form_group flex">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  placeholder=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form_group">
                <button className="loginBtn" onClick={onSendEmail}>
                  Send Email
                </button>
              </div>
            </div>
            <p className="termsText">
              By continuing, you agree to our{" "}
              <a href="#">Terms and conditions</a> and{" "}
              <a href="#">Privacy Policy.</a>
            </p>
            <div className="starsImg">
              <img src="app/images/star.png" alt="Genaiguru stars" />
              <img src="app/images/star2.png" alt="Genaiguru stars" />
            </div>
          </div>
        </section>
      )}
      {/* OTP SCREEN */}
    </>
  );
};

export default ForgotPassword;
