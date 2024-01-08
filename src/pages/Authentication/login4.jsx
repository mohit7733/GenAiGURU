import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PATH_ADDINTERESTS } from "../../routes";
import axios from "axios";
import { getBaseURL } from "../../api/config";

const Login4 = () => {
  const [userDetalis, setUserDetalis] = useState([]);

  const token = JSON.parse(localStorage.getItem("token"));
          // localStorage.setItem("UserId", JSON.stringify(response?.data?.id));

  // Get API for get user detalis
  useEffect(() => {
    axios
      .get(`${getBaseURL()}/auth/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserDetalis(response.data);
          localStorage.setItem("UserId", JSON.stringify(response?.data?.id));

      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <section className="welcomeSection mainBg">
        <div className="wrapper400">
          <h1>
            Welcome <span>👋</span>
          </h1>
          <h2>{userDetalis.name}</h2>
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
