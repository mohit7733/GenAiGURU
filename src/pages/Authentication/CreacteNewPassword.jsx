import React, { useState } from "react";
import { PATH_LOGIN } from "../../routes";

const CreacteNewPassword = () => {
  const [confirmPassword, setconfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    setErrors(errors);
    
  };

  const onchangeCheck = (key, value) => {
    const errors = {};
    if (!value) {
      errors[key] = key + "Required !";
    }
    setErrors(errors);
  };

  const validate = () => {
    const error = {};
    if (!password) {
      error["password"] = "Password Required!";
    } else if (password.length < 8) {
      error["password"] = "Please Enter a Valid Password!";
    } else {
      error["password"] = "";
    }
    if (!confirmPassword) {
      error["confirmPassword"] = "Password Required!";
    } else if (confirmPassword != password) {
      error["confirmPassword"] = "Password not Matched!";
    } else {
      error["confirmPassword"] = "";
    }
    return error;
  };
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
          <form action="" className="accountCreate"  onSubmit={onSubmit}>
            <div className="form_group flex">
              <label htmlFor="password">Enter New Password</label>
              <input type="password" name="password" placeholder="****"
                onChange={(e) => setPassword(e.target.value)}
                onKeyUp={onchangeCheck} />
                {errors["password"] && <div className="error">{errors.password}</div>}
            </div>
            <div className="form_group flex">
              <label htmlFor="password">Confirm New Password</label>
              <input type="password" name="confirmPassword" placeholder="****"
                onChange={(e) => setconfirmPassword(e.target.value)}
                onKeyUp={onchangeCheck} />
                {errors["confirmPassword"] && <div className="error">{errors.confirmPassword}</div>}
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
