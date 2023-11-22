import React from "react";
import { Link } from "react-router-dom";
import { PATH_ADDINTERESTS } from "../../routes";

const Login4 = () => {
  return (
    <div>
      <section className="welcomeSection mainBg">
        <div className="wrapper400">
          <h1>
            Welcome <span>👋</span>
          </h1>
          <h2>GenAIGuru</h2>
          <figure>
            <img
              src="app/images/welcomeLogo.png"
              className="welcomeLogo"
              alt="Genaiguru main logo"
              title="Genaiguru logo"
            />
          </figure>
          <Link to={PATH_ADDINTERESTS} className="loginBtn">
            Add your interest
          </Link>
      
          <div className="starsImg">
            <img src="app/images/star.png" alt="Genaiguru star" />
            <img src="app/images/star2.png" alt="Genaiguru star" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login4;
