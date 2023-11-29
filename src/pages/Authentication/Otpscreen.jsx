import React from "react";

const Otpscreen = () => {
  return (
    <>
      <section className="Otp_Wrapper createAccount mainBg">
        <div className="wrapper400">
          <div className="backBtn">
            <a href="/login">
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </a>
            Back
          </div>
          <h1>
            <span>Enter OTP</span>Otp is sent to your registered EmailID
          </h1>
          <form action="" className="accountCreate">
            <div className="form_group flex">
              <label htmlFor="otp">Enter OTP here</label>
              <input
                type="otp"
                name="otp"
                placeholder=""
                className="otp_field"
              />
              <label htmlFor="email">Resend OTP</label>
            </div>
            <div className="form_group">
              <button className="loginBtn">Submit</button>
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
    </>
  );
};

export default Otpscreen;
