import React, { useState } from "react";
import { PATH_FORGOT_PASSWORD, PATH_LOGIN } from "../../routes";
import axios from "axios";
import { getBaseURL } from "../../api/config";
import { ToastContainer, toast } from "react-toastify";

import { useLocation, useNavigate } from "react-router-dom";

const CreacteNewPassword = () => {
  const [confirmPassword, setconfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();
  let location = useLocation();
  const email = location.state.email;
  const verifyToken = location.state.verifyToken;

  const onSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    setErrors(errors);
    axios
      .post(`${getBaseURL()}/create-new-password`, {
        password: password,
        password_confirmation: confirmPassword,
        email: email,
        verify_token: verifyToken,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigate(`${PATH_LOGIN}`);
        }
      })
      .catch((error) => {
        toast.success(error.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
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
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var SpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/;
    if (!password) {
      error["password"] = "Password required!";
    } else if (!password.match(lowerCase)) {
      error["password"] = "Password should contains lowercase letters !";
    } else if (!password.match(upperCase)) {
      error["password"] = "Password should contain uppercase letters !";
    } else if (!password.match(numbers)) {
      error["password"] = "Password should contains numbers also !";
    } else if (!password.match(SpecialCharacter)) {
      error["password"] = "Password should contains special character also !";
    } else if (password.length < 8) {
      error["password"] = "Password length should be more than 8 !";
    } else {
      error["password"] = "";
    }
    if (!confirmPassword) {
      error["confirmPassword"] = "Password required!";
    } else if (confirmPassword != password) {
      error["confirmPassword"] = "Confirm password not matched!";
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
            <a href={PATH_FORGOT_PASSWORD}>
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </a>
            Back
          </div>
          <h1>Create New Password</h1>
          <form action="" className="accountCreate" onSubmit={onSubmit}>
            <div className="form_group flex">
              <label htmlFor="password">Enter New Password</label>
              <input
                type="password"
                name="password"
                placeholder="****"
                onChange={(e) => setPassword(e.target.value)}
                onKeyUp={onchangeCheck}
              />
              {errors["password"] && (
                <div className="error">{errors.password}</div>
              )}
            </div>
            <div className="form_group flex">
              <label htmlFor="password">Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="****"
                onChange={(e) => setconfirmPassword(e.target.value)}
                onKeyUp={onchangeCheck}
              />
              {errors["confirmPassword"] && (
                <div className="error">{errors.confirmPassword}</div>
              )}
            </div>
            <div className="form_group">
              <button className="loginBtn">Submit</button>
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
    </>
  );
};

export default CreacteNewPassword;
