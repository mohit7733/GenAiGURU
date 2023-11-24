import React from "react";
import { Link } from "react-router-dom";
import { PATH_SIGNIN } from "../../routes";

const Login7 = () => {
  return (
    <div>
      <section className="loginPopup">
        <div className="wrapper">
          <figure>
            <img
              src="app/images/tickIcon.png"
              alt="Genaiguru tick image"
              title="Genaiguru tick image"
            />
          </figure>
          <h2>Wow! You did Awesome.</h2>
          <Link to={PATH_SIGNIN}>Login</Link>
        </div>
      </section>
    </div>
  );
};

export default Login7;
