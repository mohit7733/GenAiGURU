import axios from "axios";
import React, { useState } from "react";
import { getBaseURL } from "../../api/config";
import { PATH_SIGNIN } from "../../routes";
import CreacteNewPassword from "./CreacteNewPassword";
import { ToastContainer, toast } from "react-toastify";

const Otpscreen = ({ email }) => {
  const [otp, setOtp] = useState("");
  const [verifyToken, setVerifyToken] = useState("");
  const [showNewPasswordScreen, setShowNewPasswordScreen] = useState(false);

  const onResendOtp = () => {
    axios
      .post(`${getBaseURL()}/resend-otp`, {
        email: email,
      })
      .then((res) => {
        console.log(res);
        // window.alert(res.data.message);
        toast.success((res.data.message), {
          position: toast.POSITION.TOP_CENTER
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
          setVerifyToken(res.data.verify_token);
          setShowNewPasswordScreen(true);
        }
      });
  };

  return (
    <>
      {showNewPasswordScreen ? (
        <CreacteNewPassword email={email} verifyToken={verifyToken} />
      ) : (
        <section className="Otp_Wrapper createAccount mainBg">
          <div className="wrapper400">
            <div className="backBtn">
              <a href={PATH_SIGNIN}>
                <i className="fa fa-angle-left" aria-hidden="true"></i>
              </a>
              Back
            </div>
            <h1>
              <span>Enter OTP</span>Otp is sent to your registered EmailID
            </h1>
            <div className="accountCreate">
              <div className="form_group flex">
                <label htmlFor="otp">Enter OTP here</label>
                <input
                  type="number"
                  name="number"
                  value={otp}
                  placeholder=""
                  onChange={(e) => setOtp(e.target.value)}
                  className="otp_field"
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
    </>
  );
};

export default Otpscreen;
