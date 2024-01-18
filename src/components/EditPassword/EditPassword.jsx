import React, { useState } from "react";
import { getBaseURL } from "../../api/config";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { PATH_MOBLIE_SETTINGS } from "../../routes";

const EditPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const userId = JSON.parse(localStorage.getItem("UserId"));

  //  validation code for old password and new password
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    // setErrors(errors);
    console.log(errors);
    if (
      errors.password == "" &&
      errors.confirmPassword == "" &&
      errors.newPassword == ""
    ) {
      let fd = new FormData();
      fd.append("user_id", userId);
      fd.append("old_password", password);
      fd.append("new_password", newPassword);

      axios
        .post(`${getBaseURL()}/change-password`, fd)
        .then((response) => {
          if (response.status === 200) {
            toast.success("Password Changed ", {
              position: toast.POSITION.TOP_CENTER,
            });
            setPassword("");
            setNewPassword("");
            setConfirmPassword("");
          }
        })
        .catch((error) => {
          console.log(error.response.FormData);
          // alert("Please enter correct old password");
          toast.error("Enter Correct old password", {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    } else {
      setErrors(errors);
    }
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
      error["password"] = "Password Required!";
    } else if (!password.match(lowerCase)) {
      error["password"] = "Password Should Contains lowercase letters !";
    } else if (!password.match(upperCase)) {
      error["password"] = "Password Should Contain Uppercase letters !";
    } else if (!password.match(numbers)) {
      error["password"] = "Password Should Contains Numbers also !";
    } else if (!password.match(SpecialCharacter)) {
      error["password"] = "Password Should Contains Special Character also !";
    } else if (password.length < 8) {
      error["password"] = "Password length Should be more than 8.";
    } else {
      error["password"] = "";
    }
    if (!confirmPassword) {
      error["confirmPassword"] = "Confirm Password Required!";
    } else if (newPassword != confirmPassword) {
      error["confirmPassword"] = "Password Not Match.";
    } else {
      error["confirmPassword"] = "";
    }
    if (!newPassword) {
      error["newPassword"] = "Password Required!";
    } else if (!newPassword.match(lowerCase)) {
      error["newPassword"] = "Password Should Contains lowercase letters !";
    } else if (!newPassword.match(upperCase)) {
      error["newPassword"] = "Password Should Contain Uppercase letters !";
    } else if (!newPassword.match(numbers)) {
      error["newPassword"] = "Password Should Contains Numbers also !";
    } else if (!newPassword.match(SpecialCharacter)) {
      error["newPassword"] =
        "Password Should Contains Special Character also !";
    } else if (newPassword.length < 8) {
      error["newPassword"] = "Password length Should be more than 8.";
    } else {
      error["newPassword"] = "";
    }

    return error;
  };
  return (
    <div>
      <div className="mob_editpassword hideDes">
        <div className="mobileHead flex">
          <Link to={PATH_MOBLIE_SETTINGS} className="backBtns">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
      <h5>Change password</h5>
      <form action="">
        <div className="password-box">
          <label for="">Old password*</label>
          <input
            type="password"
            name=""
            value={password}
            id=""
            placeholder="****"
            onChange={(e) => setPassword(e.target.value)}
            onKeyUp={onchangeCheck}
          />
          {errors["password"] && <div className="error">{errors.password}</div>}
        </div>
        <div className="password-box">
          <label for="">New password*</label>
          <input
            type="password"
            name=""
            value={newPassword}
            id=""
            placeholder="****"
            onChange={(e) => setNewPassword(e.target.value)}
            onKeyUp={onchangeCheck}
          />
          {errors["newPassword"] && (
            <div className="error">{errors.newPassword}</div>
          )}
        </div>
        <div className="password-box">
          <label for="">Confirm password*</label>
          <input
            type="password"
            name=""
            id=""
            value={confirmPassword}
            placeholder="****"
            onChange={(e) => setConfirmPassword(e.target.value)}
            onKeyUp={onchangeCheck}
          />
          {errors["confirmPassword"] && (
            <div className="error">{errors.confirmPassword}</div>
          )}
        </div>
        <div className="form_group">
          <button type="submit" className="loginBtn" onClick={handleSubmit}>
            Save to Change
          </button>
        </div>
        <ToastContainer autoClose={1000} />
      </form>
    </div>
  );
};
export default EditPassword;
