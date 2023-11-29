import React from "react";

const ForgotPassword = () => {
  return (
    <>
      <section className="forgot_field createAccount mainBg">
        <div className="wrapper400">
          <div className="backBtn">
            <a href="/login">
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </a>
            Back
          </div>
          <h1>Forgot Your Password</h1>
          <form action="" className="accountCreate">
            <div className="form_group flex">
              <label htmlFor="email">Email address</label>
              <input type="email" name="email" placeholder="" />
            </div>
            <div className="form_group">
              <button className="loginBtn">Send Email</button>
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

export default ForgotPassword;
