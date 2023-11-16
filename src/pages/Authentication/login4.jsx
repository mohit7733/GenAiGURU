import React from "react";
import { Link } from "react-router-dom";

const Login4 = () => {
  return (
    <div>
      {" "}
      {/* <div class="loader">
        <img
          src="app/images/lodingLogo.png"
          alt="Genaiguru logo"
          title="Genaiguru Logo"
        />
      </div> */}
      <section class="welcomeSection mainBg">
        <div class="wrapper400">
          <h1>
            Welcome <span>👋</span>
          </h1>
          <h2>GenAIGuru</h2>
          <figure>
            <img
              src="app/images/welcomeLogo.png"
              class="welcomeLogo"
              alt="Genaiguru main logo"
              title="Genaiguru logo"
            />
          </figure>
          <Link to={"/login5"} class="loginBtn">
            Add your interest{" "}
          </Link>
          {/* <a href="#" class="loginBtn">
            Add your interest
          </a> */}
          <div class="starsImg">
            <img src="app/images/star.png" alt="Genaiguru star" />
            <img src="app/images/star2.png" alt="Genaiguru star" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login4;
