import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../api/Auth";
import { PATH_FORGOT_PASSWORD, PATH_LOGIN } from "../../routes";
const Login8 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin();
  };
  const onLogin = async () => {
    let payload = {
      email: email,
      password: password,
    };
     if (email.length === 0 && password.length === 0) {
        toast.error("Enter Email and Password !", {
          position: toast.POSITION.TOP_CENTER,
        });
    }
    else if (email.length === 0 || password.length === 0) {
      toast.error(email.length===0?"Please Enter Email !":"Please Enter Password !", {
        position: toast.POSITION.TOP_CENTER,
      });
  }
     else {
      return login(payload)
        .then((res) => {
          console.log(res, "response");
          localStorage.setItem("token", JSON.stringify(res.data.accessToken));
          localStorage.setItem("userLoggedIn", JSON.stringify("true"));
          if (res.status === 200) {
            toast.success("Login Successful !", {
              position: toast.POSITION.TOP_CENTER,
            });
            setTimeout(() => {
              navigate("/");
            }, [2000]);
          }
        })
        .catch((err) => {
          toast.error("Incorrect Email or Password !", {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    }
  };

  return (
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
              />
            </div>
            <div className="form_group flex">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="****"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form_group">
              <Link to={PATH_FORGOT_PASSWORD}>
                <p
                  className=""
                  style={{
                    color: "white",
                    display: "flex",
                    fontSize: "14px",
                    marginTop: "5px",
                  }}
                >
                  Forgot Password?
                </p>
              </Link>

              <button className="loginBtn" onClick={handleSubmit}>
                Login
              </button>
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
      {/* <!-- account create section end here --> */}
    </div>
  );
};

export default Login8;
