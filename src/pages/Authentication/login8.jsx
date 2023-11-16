import { Link } from "react-router-dom";
import { PATH_LOGIN } from "../../routes";
import React, { useState } from "react";
const Login8 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const handleSubmit = (event) => {
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
    if (!email) {
      error["email"] = "Email Required!";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error["email"] = "Email not valid!";
    } else {
      error["email"] = "";
    }

    if (!password) {
      error["password"] = "Password Required!";
    } else if (password.length < 8) {
      error["password"] = "Password not valid!";
    } else {
      error["password"] = "";
    }
    return error;
  };
  return (
    <div>
      {/* <!-- loader start here --> */}
      {/* <div class="loader">
        <img
          src="app/images/lodingLogo.png"
          alt="Genaiguru logo"
          title="Genaiguru Logo"
        />
      </div> */}
      {/* <!-- loader end here -->

    <!-- account create section start here --> */}
      <section class="createAccount mainBg">
        <div class="wrapper400">
          <div class="backBtn">
            <Link to={PATH_LOGIN}>
              <i class="fa fa-angle-left" aria-hidden="true"></i>
            </Link>
            Back
          </div>
          <h1>
            <span>Login </span> with your email address and password!
          </h1>
          <form action="" class="accountCreate" onSubmit={handleSubmit}>
            <div class="form_group flex">
              <label for="email">Email address</label>
              <input
                type="email"
                name="email"
                placeholder="GenAIGuru@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                onKeyUp={onchangeCheck}
              />
              {errors["email"] && <div className="error">{errors.email}</div>}
            </div>
            <div class="form_group flex">
              <label for="password">Password</label>
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
            <div class="form_group">
              {/* <button type="button" class="loginBtn">
                Login
              </button> */}
              <button class="loginBtn"> Login </button>
            </div>
          </form>
          <p class="termsText">
            By continuing, you agree to our <a href="#">Terms and conditions</a>{" "}
            and <a href="#">Privacy Policy.</a>
          </p>
          <div class="starsImg">
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
