import axios from "axios";
import React, { useState } from "react";
import { getBaseURL } from "../../api/config";
import {
  BASE_PATH,
  PATH_CREATE_NEW_PASSWORD,
  PATH_FORGOT_PASSWORD,
  PATH_SIGNIN,
} from "../../routes";
import CreacteNewPassword from "./CreacteNewPassword";
import { ToastContainer, toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Otpscreen = () => {
  const [otp, setOtp] = useState("");
  const [verifyToken, setVerifyToken] = useState("");
  const [showNewPasswordScreen, setShowNewPasswordScreen] = useState(false);

  const navigate = useNavigate();
  let location = useLocation();
  const email = location.state.email;

  const onResendOtp = () => {
    axios
      .post(`${getBaseURL()}/resend-otp`, {
        email: email,
      })
      .then((res) => {
        console.log(res);
        toast.success(res.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((error) => {
        toast.success(error.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  const onSendOTP = () => {
    axios
      .post(`${getBaseURL()}/verify-otp`, {
        email: email,
        otp: otp,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log(res?.data?.verify_token);

          setVerifyToken(res?.data?.verify_token);
          navigate(`${PATH_CREATE_NEW_PASSWORD}`, {
            state: {
              email: email,
              verifyToken: res?.data?.verify_token,
            },
          });
        }
      })
      .catch((error) => {
        toast.error(error.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };
  return (
    <>
      <section className="Otp_Wrapper createAccount mainBg">
        <figure className="headerLogo">
          <Link>
            <img
              src="app/images/headerLogo.png"
              alt="Genaiguru header logo"
              title="Genaiguru"
            />
          </Link>
        </figure>
        <div className="wrapper400">
          <div className="backBtn">
            <a href={PATH_FORGOT_PASSWORD}>
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </a>
            Back
          </div>
          <h1>
            <span>Enter OTP</span>OTP is sent to your registered EmailID
          </h1>
          <div className="accountCreate">
            <div className="form_group flex">
              <label htmlFor="otp">Enter OTP here*</label>
              <input
                type="text"
                name="number"
                value={otp}
                placeholder=""
                onChange={(e) => {
                  const enteredValue = e.target.value;
                  if (/^[0-9]*$/.test(enteredValue)) {
                    setOtp(enteredValue);
                  }
                }}
                className="otp_field"
                onWheel={(e) => e.target.blur()}
              />
              <label htmlFor="email" onClick={onResendOtp}>
                Resend OTP
              </label>
            </div>
            <div className="form_group">
              <button className="loginBtn" onClick={onSendOTP}>
                Submit
              </button>
              <ToastContainer autoClose={1000} />
            </div>
          </div>
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
    </>
  );
};

export default Otpscreen;
