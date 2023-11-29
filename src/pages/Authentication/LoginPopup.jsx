import React from "react";

const LoginPopup = () => {
  return (
    <div>
      <section className="login_popup loginOption">
        <div className="wrapper400 stars">
          <div className="cross-icon">
            <img src="/app/images/close.png" alt="Close Icon" />
          </div>

          <h1>
            <span>Hello!</span> Join with us by your info
          </h1>
          <p>Join with us by your social account or sign up with email</p>
          <ul>
            <li>
              <a className="flex" href="/login">
                <img
                  src="app/images/googleIcon.png"
                  alt="Genaiguru google icon"
                  title="Genaiguru on google"
                />{" "}
                Continue with Google
              </a>
            </li>
            <li>
              <div>
                <span style={{ transition: "opacity 0.5s ease 0s" }}>
                  <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
                  />
                  <button type="button" className="kep-login-facebook metro">
                    <i className="fa fa-facebook"></i>Continue with Facebook
                  </button>
                  <style>
                    {`
                    .kep-login-facebook {
                      font-family: Helvetica, sans-serif;
                      font-weight: 700;
                      -webkit-font-smoothing: antialiased;
                      color: #fff;
                      cursor: pointer;
                      display: inline-block;
                      font-size: calc(.27548vw + 12.71074px);
                      text-decoration: none;
                      text-transform: uppercase;
                      transition: background-color .3s, border-color .3s;
                      background-color: #4c69ba;
                      border: calc(.06887vw + .67769px) solid #4c69ba;
                      padding: calc(.34435vw + 13.38843px) calc(.34435vw + 18.38843px);
                    }

                    .kep-login-facebook.small {
                      padding: calc(.34435vw + 3.38843px) calc(.34435vw + 8.38843px);
                    }

                    .kep-login-facebook.medium {
                      padding: calc(.34435vw + 8.38843px) calc(.34435vw + 13.38843px);
                    }

                    .kep-login-facebook.metro {
                      border-radius: 0;
                    }

                    .kep-login-facebook .fa {
                      margin-right: calc(.34435vw + 3.38843px);
                    }
                  `}
                  </style>
                </span>
              </div>
            </li>
            <li>
              <a className="flex" href="/signup">
                Sign up with Email
              </a>
            </li>
          </ul>
          <p className="alreadyAccount">
            Already have an account? <a href="/signin">Log in</a>
          </p>
          
        </div>
      </section>
    </div>
  );
};

export default LoginPopup;
