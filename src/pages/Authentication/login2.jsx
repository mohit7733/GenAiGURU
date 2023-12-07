import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getBaseURL } from "../../api/config";
import { PATH_GOTOMAIL, PATH_LOGIN } from "../../routes";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login2 = () => {
  const [displayGoToMail, setDisplayGoToMail] = useState(false);

  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [errors, setErrors] = useState([]);

  const signUpPostMethod = () => {
    let fd = new FormData();
    fd.append("name", name);
    fd.append("email", email);
    fd.append("password", password);
    fd.append("profile_image", profilePicture);

    axios
      .post(`${getBaseURL()}/auth/register`, fd)
      .then((response) => {
        console.log(response);
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.accessToken)
        );
        localStorage.setItem("UserId", JSON.stringify(response.data.data?.id));
        if (response.status === 201) {
          navigate(`${PATH_GOTOMAIL}`);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          toast.warn(error.response.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    setErrors(errors);
    if (
      errors.email === "" &&
      errors.name === "" &&
      errors.confirmPassword === "" &&
      errors.password === "" &&
      errors.profilePicture === ""
    ) {
      signUpPostMethod();
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
    if (!name) {
      error["name"] = "Name Required!";
    } else if (name.length < 3) {
      error["name"] = "Please Enter a Valid Name!";
    } else {
      error["name"] = "";
    }

    if (!email) {
      error["email"] = "Email Required!";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error["email"] = "Please Enter Valid Email!";
    } else {
      error["email"] = "";
    }

    if (!password) {
      error["password"] = "Password Required!";
    } else if (
      password.length <= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(password)
    ) {
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
    if (!profilePicture) {
      error["profilePicture"] = "Picture Required!";
    } else {
      error["profilePicture"] = "";
    }
    return error;
  };

  // Profile image onchange event
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Validate the file type
      const allowedImageTypes = ["image/jpeg", "image/png", "image/gif"];
      if (allowedImageTypes.includes(file.type)) {
        // Valid image file
        setProfilePicture(file);
      } else {
        // Invalid file type
        alert("Please select a valid image file (JPEG, PNG, GIF).");
        // Optionally, you can clear the input or do other error handling
      }
    }
  };
  return (
    <>
      <div>
        <section className="createAccount mainBg">
        <figure className="headerLogo">
          <Link to="/">
            <img
              src="app/images/headerLogo.png"
              alt="Genaiguru header logo"
              title="Genaiguru"
            />
          </Link>
        </figure>
          <div className="wrapper400">
            <div className="backBtn">
              <Link to={PATH_LOGIN}>
                <i className="fa fa-angle-left" aria-hidden="true"></i>
              </Link>
              Back
            </div>
            <h1>
              <span>Create an account</span> with your name and email address!
            </h1>
            <form action="" className="accountCreate" onSubmit={onSubmit}>
              <div className="form_group flex">
                <label for="name">Your name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="GenAIGuru"
                  onKeyUp={onchangeCheck}
                  onChange={(e) => setname(e.target.value)}
                />
                {errors.name && <div className="error">{errors.name}</div>}
              </div>
              <div className="form_group flex">
                <label for="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="GenAIGuru@gmail.com"
                  onKeyUp={onchangeCheck}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
              <div className="form_group flex">
                <label for="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="****"
                  onKeyUp={onchangeCheck}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <div className="error">{errors.password}</div>
                )}
              </div>
              <div className="form_group flex">
                <label for="confirmPassword">Confirm password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="****"
                  onKeyUp={onchangeCheck}
                  onChange={(e) => setconfirmPassword(e.target.value)}
                />
                {errors.confirmPassword && (
                  <div className="error">{errors.confirmPassword}</div>
                )}
              </div>
              <div className="form_group flex">
                <label for="profilePicture">Choose Profile Picture</label>
                <input
                  type="file"
                  name="profilePicture"
                  placeholder="Choose Profile Picture"
                  onKeyUp={onchangeCheck}
                  onChange={handleImageChange}
                />
                {errors.profilePicture && (
                  <div className="error">{errors.profilePicture}</div>
                )}
              </div>
              <div className="form_group">
                <button className="loginBtn">Create account</button>
                <ToastContainer
                  autoClose={1000}
                  pauseOnHover={false}
                />
              </div>
            </form>
            <p className="termsText">
              By continuing, you agree to our <a href="#">Terms and Services</a>{" "}
              and <a href="#">Privacy Policy.</a>
            </p>
            <div className="starsImg">
              <img src="app/images/star.png" alt="Genaiguru stars" />
              <img src="app/images/star2.png" alt="Genaiguru stars" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login2;
