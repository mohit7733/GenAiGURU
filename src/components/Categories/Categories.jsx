import axios from "axios";
import React, { useEffect, useState } from "react";
import { getBaseURL } from "../../api/config";

const Categories = () => {
  const [myInterests, setMyInterests] = useState();
  const token = JSON.parse(localStorage.getItem("token"));

  // Get API for Categories
  useEffect(() => {
    axios
      .get(`${getBaseURL()}/auth/userinterests`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMyInterests(response?.data?.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  return (
    <div>
      <div className="home-category">
        <div className="heading-link flex">
          <h3>Your Interests</h3>
        </div>
        <ul className="flex">
          {myInterests?.map((interest, index) => {
            return (
              <li key={index}>
                <a href="#">
                  <img
                    src="app/images/paint-board.png"
                    alt="Genaiguru paint-board"
                    title="Genaiguru paint-board"
                  />
                  <img
                    src="app/images/colorPaintBoard.png"
                    alt="Genaiguru colorPaintBoard"
                    title="Genaiguru colorPaintBoard"
                    className="hoverImg"
                  />{" "}
                  {interest.interest_name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
