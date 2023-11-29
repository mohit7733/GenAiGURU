import React from "react";
import { PATH_LOGIN } from "../../routes";

const CreacteNewPassword = () => {
  return (
    <>
      <section className="create_password createAccount mainBg">
        <div className="wrapper400">
          <div className="backBtn">
            <a href={PATH_LOGIN}>
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </a>
            Back
          </div>
          <h1>Create New Password</h1>
          <form action="" className="accountCreate">
            <div className="form_group flex">
              <label htmlFor="password">Enter New Password</label>
              <input type="password" name="password" placeholder="****" />
            </div>
            <div className="form_group flex">
              <label htmlFor="password">Confirm New Password</label>
              <input type="password" name="password" placeholder="****" />
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

export default CreacteNewPassword;
