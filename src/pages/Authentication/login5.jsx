import React from "react";
import { Link, NavLink } from "react-router-dom";

const Login5 = () => {
  return (
    <div>
      <section class="interestSection mainBg">
        <div class="wrapper">
          <div class="cancelBtn">
            <a href="#">
              <i class="fa fa-times" aria-hidden="true"></i>
            </a>
            Cancel
          </div>
          <h1>Let’s choose your interest</h1>
          <p>This will help us create the best experience for you!</p>
          <ul>
            <li>Data science</li>
            <li>Bitcoin</li>
            <li>Large language models</li>
            <li>Cryptocurrency</li>
            <li>Digital innovation</li>
            <li>NLP</li>
            <li>Mid-journey</li>
            <li>Large language models</li>
            <li>Cryptocurrency</li>
            <li>Data science</li>
            <li>Bitcoin</li>
            <li>Machine learning</li>
            <li>Digital innovation</li>
          </ul>
          <div class="buttonText">
            <p>
              Selected <span>(4)</span>
            </p>
            <Link to={"/login6"} class="loginBtn">
              Continue
            </Link>
            {/* <a href="#" class="loginBtn">
              Continue
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login5;
