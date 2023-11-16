import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Login2 = () => {
  const [displayGoToMail, setDisplayGoToMail] = useState(false);
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    setErrors(errors);
  };
  const onchangeCheck = (key,value) =>{
    const errors = {};
    if(!value){
      errors[key] = key +"Required !"
    }
    setErrors(errors);
   }
  const validate = () => {
    const error = {};
    if (!name) {
      error['name'] = "Name Required!";
    } else if (name.length < 3) {
      error['name'] = "Please Enter a Valid Name!";}
    else {
      error['name'] = "";
    }

    if (!email) {
      error['email'] = "Email Required!";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error['email'] = "Please Enter Valid Email!";
    } else {
      error['email'] = "";
    }

    if (!password) {
      error['password'] = "Password Required!";
    } else if (password.length < 8) {
      error['password'] = "Please Enter a Valid Password!";
    } else {
      error['password'] = "";
    }
    if (!confirmPassword) {
      error['confirmPassword'] = "Password Required!";
    } else if (confirmPassword != password) {
      error['confirmPassword'] = "Password not Matched!";
    } else {
      error['confirmPassword'] = "";
    }
    return error;
  };
  return (
    <>
      {" "}
      <div>
        <section class="createAccount mainBg">
          <div class="wrapper400">
            <div class="backBtn">
              <a href="#">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
              </a>
              Back
            </div>
            <h1>
              <span>Create an account</span> with your name and email address!
            </h1>
            <form action="" class="accountCreate" onSubmit={handleSubmit}>
              <div class="form_group flex">
                <label for="name">Your name</label>
                <input type="text" name="name" placeholder="GenAIGuru" 
                onKeyUp={onchangeCheck}
                  onChange={(e) => setname(e.target.value)}
                />
                {errors.name && <div className="error">{errors.name}</div>}
              </div>
              <div class="form_group flex">
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
              <div class="form_group flex">
                <label for="password">Password</label>
                <input type="password" name="password" placeholder="****" 
                  onKeyUp={onchangeCheck}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <div className="error">{errors.password}</div>}
              </div>
              <div class="form_group flex">
                <label for="confirmPassword">Confirm password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="****"
                  onKeyUp={onchangeCheck}
                  onChange={(e) => setconfirmPassword(e.target.value)}
                />
                 {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
              </div>
              <div class="form_group flex">
                <label for="profilePicture">Choose Profile Picture</label>
                <input
                  type="file"
                  name="profilePicture"
                  placeholder="Choose Profile Picture"
                  onKeyUp={onchangeCheck}
                  onChange={(e) => setconfirmPassword(e.target.value)}
                />
              </div>
              <div class="form_group">
                {/* <Link
                  class="loginBtn"
                  onClick={() => {
                    alert("Account Created")
                    setDisplayGoToMail(true);
                  }}
                >
                  Create account
                </Link> */}
                <button class="loginBtn">Create account</button> 
              </div>
            </form>
            <p class="termsText">
              By continuing, you agree to our <a href="#">Terms and Services</a>{" "}
              and <a href="#">Privacy Policy.</a>
            </p>
            <div class="starsImg">
              <img src="app/images/star.png" alt="Genaiguru stars" />
              <img src="app/images/star2.png" alt="Genaiguru stars" />
            </div>
          </div>
        </section>
        {displayGoToMail && (
          <section class="mailInbox mainBg">
            <div class="wrapper400">
              <div class="mailbox">
                <img
                  src="app/images/mailBox.png"
                  alt="Genaiguru mail image"
                  title="Genaiguru mail image"
                />
                <div class="topStarsImg">
                  <img src="app/images/star.png" alt="Genaiguru star" />
                  <img src="app/images/star2.png" alt="Genaiguru star" />
                </div>
                <h1>Check your email inbox</h1>
                <p>
                  Quick check your email box and confirm us that you would like
                  to create an account.
                </p>
                <Link to={"/login4"} class="loginBtn">
                  Go to the email inbox
                </Link>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Login2;
