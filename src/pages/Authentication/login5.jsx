import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getBaseURL, getHeaders } from "../../api/config";

const Login5 = () => {
  const [interestData, setInterestData] = useState([]);
  const token = getHeaders();
  useEffect(() => {
    axios
      .get(`${getBaseURL()}/auth/interests`, {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      })
      .then((response) => {
        setInterestData(response.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log(token, "Token");
  console.log(interestData);
  return (
    <div>
      <section className="interestSection mainBg">
        <div className="wrapper">
          <div className="cancelBtn">
            <a href="#">
              <i className="fa fa-times" aria-hidden="true"></i>
            </a>
            Cancel
          </div>
          <h1>Let’s choose your interest</h1>
          <p>This will help us create the best experience for you!</p>
          <ul>
            {interestData.map((data) => {
              return <li>{data.interestName}</li>;
            })}
          </ul>
          <div className="buttonText">
            <p>
              Selected <span>(4)</span>
            </p>
            <Link to={"/login6"} className="loginBtn">
              Continue
            </Link>
            {/* <a href="#" className="loginBtn">
              Continue
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login5;
