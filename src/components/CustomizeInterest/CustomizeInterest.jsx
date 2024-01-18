import React from "react";
import { PATH_MOBLIE_SETTINGS } from "../../routes";
import { Link } from "react-router-dom";

const CustomizeInterest = () => {
  return (
    <div>
      <div className="mob_customizeinterest hideDes">
        <div className="mobileHead flex">
          <Link to={PATH_MOBLIE_SETTINGS} className="backBtns">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
      <h5>Edit your interest</h5>
      <div className="intrest-box">
        <ul className="flex">
          <li>
            <a href="#">Artificial intelligence</a>
          </li>
          <li>
            <a href="#">Blockchain</a>
          </li>
          <li>
            <a href="#">GPT</a>
          </li>
          <li>
            <a href="#">Topic 02</a>
          </li>
          <li>
            <a href="#">Open AI</a>
          </li>
          <li>
            <a href="#">Machine learning</a>
          </li>
          <li>
            <a href="#">Large language models</a>
          </li>
          <li>
            <a href="#">Bitcoin</a>
          </li>
          <li>
            <a href="#">Data science</a>
          </li>
          <li>
            <a href="#">Cryptocurrency</a>
          </li>
          <li>
            <a href="#">Mid-journey</a>
          </li>
          <li>
            <a href="#">NLP</a>
          </li>
          <li>
            <a href="#">Digital innovation</a>
          </li>
        </ul>
        <button type="submit" className="loginBtn">
          Save to change
        </button>
      </div>
    </div>
  );
};
export default CustomizeInterest;
