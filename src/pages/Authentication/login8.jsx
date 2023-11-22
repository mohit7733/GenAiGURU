import { Link, useNavigate } from "react-router-dom";
import { PATH_LOGIN } from "../../routes";
import React, { useState } from "react";
import { login } from "../../api/Auth";
import { getBaseURL } from "../../api/config";

const Login8 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    setErrors(errors);
    onLogin();
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

  const onLogin = async () => {
    let payload = {
      email: email,
      password: password,
    };
    return login(payload)
      .then((res) => {
        console.log(res);
        localStorage.setItem(
          "tokenDetail",
          JSON.stringify(res.data.accessToken)
        );
        window.alert("Logged In Successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        window.alert(
          err?.response?.data?.error ?? "Incorrect Username and Password"
        );
      });
  };
  // const onLogin = async () => {
  //   try {
  //     const response = await fetch(`${getBaseURL()}`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email,
  //         password,
  //       }),
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }

  //     const data = await response.json();
  //     // Handle the response, such as storing the token or redirecting to a new page
  //     console.log(data);
  //   } catch (error) {
  //     // Handle errors, such as displaying an error message
  //     console.error("Login failed:", error.message);
  //   }
  // };
  return (
    <div>
      <section className="createAccount mainBg">
        <div className="wrapper400">
          <div className="backBtn">
            <Link to={PATH_LOGIN}>
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </Link>
            Back
          </div>
          <h1>
            <span>Login </span> with your email address and password!
          </h1>
          <form action="" className="accountCreate">
            <div className="form_group flex">
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
            <div className="form_group flex">
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
            <div className="form_group">
              <button className="loginBtn" onClick={handleSubmit}>
                Login
              </button>
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
      {/* <!-- account create section end here --> */}
    </div>
  );
};

export default Login8;
