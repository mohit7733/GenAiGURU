import axios from "axios";
import React, { useEffect, useState } from "react";
import { getBaseURL } from "../../api/config";
import ArticleBasedInterest from "../ArticlesBasedInterest/ArticleBasedInterest";

const Categories = () => {
  const [myInterests, setMyInterests] = useState();
  const token = JSON.parse(localStorage.getItem("token"));
  const [articlesOnInterest, setArticlesOnInterest] = useState([]);
  const [displayedInterests, setDisplayedInterests] = useState(7);
  const [displayView, setDisplayView] = useState(true);
  const [defaultCategoryId, setDefaultCategoryId] = useState();
  const [selectedInterest, setSelectedInterest] = useState(null);
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
        setDefaultCategoryId(response?.data?.data[0]?.interest_id);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    onCategoryClick(false);
  }, [defaultCategoryId]);

  const onCategoryClick = (isScroll, categoryId = defaultCategoryId) => {
    const array = [categoryId];
    setSelectedInterest(categoryId);
    axios
      .post(`${getBaseURL()}/interestsarticles`, {
        interest_id: array,
      })
      .then((res) => {
        setArticlesOnInterest(res?.data?.articles);
      })
      .catch((errors) => {
        console.log(errors);
      });
    if (isScroll) {
      const scrollToMeDiv = document.getElementById("artilceBasesOnInterest");
      if (scrollToMeDiv) {
        scrollToMeDiv.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleViewMoreClick = () => {
    // Increment the number of displayed interests by 10
    setDisplayedInterests((prevCount) => prevCount + 10);
    setDisplayView(false);
  };
  const handleViewLessClick = () => {
    // Reset the number of displayed interests to the initial state
    setDisplayedInterests(7);
    setDisplayView(true);
  };

  return (
    <div>
      <div className="home-category">
        <div className="heading-link flex">
          <h3>Your Interests</h3>
        </div>
        <ul className="flex">
          {myInterests?.slice(0, displayedInterests).map((interest, index) => {
            return (
              <li key={index}>
                <a
                  className={
                    interest.interest_id == selectedInterest
                      ? "selectedInterestInHome"
                      : ""
                  }
                  onClick={() => {
                    onCategoryClick(true, interest.interest_id);
                  }}
                >
                  {interest.interest_id == selectedInterest ? (
                    <img
                      src="app/images/colorPaintBoard.png"
                      alt="Genaiguru colorPaintBoard"
                      title="Genaiguru colorPaintBoard"
                    />
                  ) : (
                    <>
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
                      />
                    </>
                  )}
                  {interest.interest_name}
                </a>
              </li>
            );
          })}
        </ul>
        {myInterests?.length > 7 && displayView && (
          <div className="btn-wrap">
            <button
              type="button"
              className="loginBtn"
              onClick={handleViewMoreClick}
            >
              View More
            </button>
          </div>
        )}
        {!displayView && (
          <div className="btn-wrap">
            <button
              type="button"
              className="loginBtn"
              onClick={handleViewLessClick}
            >
              View Less
            </button>
          </div>
        )}
      </div>
      <ArticleBasedInterest articlesOnInterest={articlesOnInterest} />
    </div>
  );
};

export default Categories;
