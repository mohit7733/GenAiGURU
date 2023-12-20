import axios from "axios";
import React, { useEffect, useState } from "react";
import { getBaseURL } from "../../api/config";
import ArticleBasedInterest from "../ArticlesBasedInterest/ArticleBasedInterest";

const Categories = () => {
  const [myInterests, setMyInterests] = useState();
  const token = JSON.parse(localStorage.getItem("token"));
  const [articlesOnInterest, setArticlesOnInterest] = useState([]);

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
        console.log(myInterests);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const onCategoryClick = (categoryId) => {
    console.log(categoryId);
    axios
      .post(`${getBaseURL()}/articles?interest_id=${categoryId}`)
      .then((res) => {
        console.log(res?.data);
        setArticlesOnInterest(res?.data?.articles);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

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
                <a
                  onClick={() => {
                    onCategoryClick(interest.interest_id);
                  }}
                >
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
      <ArticleBasedInterest articlesOnInterest={articlesOnInterest} />
    </div>
  );
};

export default Categories;
