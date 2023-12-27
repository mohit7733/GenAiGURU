import React, { useEffect, useState } from "react";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import axios from "axios";
import { getBaseURL } from "../../api/config";
import ReactPlayer from "react-player";

const GuruKeeps = () => {
  const [savedData, setSavedData] = useState([]);

  const token = JSON.parse(localStorage.getItem("token"));
  const userId = JSON.parse(localStorage.getItem("UserId"));

  // Get API for Popular Blogs
  useEffect(() => {
    axios
      .get(`${getBaseURL()}/saved-items?user_id=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // setLatestBlog(response?.data?.blogs);
        console.log(response?.data?.data);
        setSavedData(response?.data?.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <MobileHeader />
      <section className="mainWrapper flex hideMob">
        <Sidebar />
        <div className="rightSection">
          <div className="full-width">
            <div className="keeps-container">
              <div className="gurukeeps-wrapper flex align-center space-between">
                <h1>Guru Keeps</h1>
                <span>{savedData.length} Saved</span>
              </div>
              <div className="interest-guru ">
                {savedData.map((data, index) => {
                  return (
                    <div className="wrap flex" key={index}>
                      {data.youtube_link ? (
                        <a>
                          <figure>
                            <ReactPlayer
                              url={data.youtube_link}
                              width="100%"
                              height="100%"
                            />
                          </figure>
                        </a>
                      ) : (
                        <figure>
                          <a href="#">
                            <img
                              src={data.photo}
                              alt="Genaiguru Guru-keeps"
                              title="Genaiguru Guru-keeps"
                            />
                          </a>
                        </figure>
                      )}

                      <div className="content">
                        <div className="flex space-between">
                          <div className="wrapper flex">
                            <figure>
                              <img
                                src={data.author_profile_image}
                                alt="Genaiguru user-icon"
                                title="Genaiguru user-icon"
                              />
                            </figure>
                            <div className="innerContent">
                              <h6>{data.author}</h6>
                              <p>{data.creation_date}</p>
                            </div>
                          </div>
                          <ul className="flex">
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/color-bookmarks.png"
                                  alt="Genaiguru bookmark"
                                  title="Genaiguru bookmark"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="app/images/dotsIcons.png"
                                  alt="Genaiguru dotsIcons"
                                  title="Genaiguru dotsIcons"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h5>
                          <a href="#">{data.title}</a>
                        </h5>
                        <p>{data.short_description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- main section end here --> */}
      <div className="mob_profile commanMobHead hideDes">
        <div className="mobileHead flex">
          <div className="hamburger">
            <img
              src="app/images/hamburgerIcon.png"
              alt="Genaiguru hamburger"
              title="Genaiguru hamburger "
            />
          </div>
          <h2>Guru keeps</h2>
          <p>39 Saved</p>
        </div>
        <div className="innerCommanContent">
          <div className="interest-sliders">
            <div className="wrap flex">
              <figure>
                <a href="#">
                  <img
                    src="app/images/gureu-keeps-1.png"
                    alt="Genaiguru Guru-keeps"
                    title="Genaiguru Guru-keeps"
                  />
                </a>
              </figure>
              <div className="content">
                <div className="wrapper flex">
                  <figure>
                    <img
                      src="app/images/authorImg.png"
                      alt="Genaiguru authorImg"
                      title="Genaiguru authorImg"
                    />
                  </figure>
                  <div className="innerContent">
                    <h6>Alex Smih</h6>
                    <p> Sep 15, 2023. 11:05 pm</p>
                  </div>
                </div>
                <p>
                  Navigating the World of ChatGPT and Its Open-source
                  Adversaries
                </p>
                <ul className="flex">
                  <li>
                    <a href="#">
                      <img
                        src="app/images/color-bookmarks.png"
                        alt="Genaiguru bookmarkIcon"
                        title="Genaiguru bookmarkIcon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="app/images/dotsIcons.png"
                        alt="Genaiguru dotsIcons"
                        title="Genaiguru dotsIcons"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="wrap flex">
              <figure>
                <a href="#">
                  <img
                    src="app/images/guru-keeps-2.png"
                    alt="Genaiguru Guru-keeps"
                    title="Genaiguru Guru-keeps"
                  />
                </a>
              </figure>
              <div className="content">
                <div className="wrapper flex">
                  <figure>
                    <img
                      src="app/images/authorImg.png"
                      alt="Genaiguru authorImg"
                      title="Genaiguru authorImg"
                    />
                  </figure>
                  <div className="innerContent">
                    <h6>Alex Smih</h6>
                    <p> Sep 15, 2023. 11:05 pm</p>
                  </div>
                </div>
                <p>
                  Navigating the World of ChatGPT and Its Open-source
                  Adversaries
                </p>
                <ul className="flex">
                  <li>
                    <a href="#">
                      <img
                        src="app/images/color-bookmarks.png"
                        alt="Genaiguru bookmarkIcon"
                        title="Genaiguru bookmarkIcon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="app/images/dotsIcons.png"
                        alt="Genaiguru dotsIcons"
                        title="Genaiguru dotsIcons"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="wrap flex">
              <figure>
                <img
                  src="app/images/interestSliderImg.png"
                  alt="Genaiguru interestSliderImg"
                  title="Genaiguru interestSliderImg"
                />
              </figure>
              <div className="content">
                <div className="wrapper flex">
                  <figure>
                    <img
                      src="app/images/authorImg.png"
                      alt="Genaiguru authorImg"
                      title="Genaiguru authorImg"
                    />
                  </figure>
                  <div className="innerContent">
                    <h6>Alex Smih</h6>
                    <p>Sep 15, 2023. 11:05 pm</p>
                  </div>
                </div>
                <p>
                  Navigating the World of ChatGPT and Its Open-source
                  Adversaries
                </p>
                <ul className="flex">
                  <li>
                    <a href="#">
                      <img
                        src="app/images/color-bookmarks.png"
                        alt="Genaiguru bookmarkIcon"
                        title="Genaiguru bookmarkIcon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="app/images/dotsIcons.png"
                        alt="Genaiguru dotsIcons"
                        title="Genaiguru dotsIcons"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="wrap flex">
              <figure>
                <a href="#">
                  <img
                    src="app/images/gureu-keeps-1.png"
                    alt="Genaiguru Guru-keeps"
                    title="Genaiguru Guru-keeps"
                  />
                </a>
              </figure>
              <div className="content">
                <div className="wrapper flex">
                  <figure>
                    <img
                      src="app/images/authorImg.png"
                      alt="Genaiguru authorImg"
                      title="Genaiguru authorImg"
                    />
                  </figure>
                  <div className="innerContent">
                    <h6>Alex Smih</h6>
                    <p> Sep 15, 2023. 11:05 pm</p>
                  </div>
                </div>
                <p>
                  Navigating the World of ChatGPT and Its Open-source
                  Adversaries
                </p>
                <ul className="flex">
                  <li>
                    <a href="#">
                      <img
                        src="app/images/color-bookmarks.png"
                        alt="Genaiguru bookmarkIcon"
                        title="Genaiguru bookmarkIcon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="app/images/dotsIcons.png"
                        alt="Genaiguru dotsIcons"
                        title="Genaiguru dotsIcons"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="wrap flex">
              <figure>
                <a href="#">
                  <img
                    src="app/images/guru-keeps-2.png"
                    alt="Genaiguru Guru-keeps"
                    title="Genaiguru Guru-keeps"
                  />
                </a>
              </figure>
              <div className="content">
                <div className="wrapper flex">
                  <figure>
                    <img
                      src="app/images/authorImg.png"
                      alt="Genaiguru authorImg"
                      title="Genaiguru authorImg"
                    />
                  </figure>
                  <div className="innerContent">
                    <h6>Alex Smih</h6>
                    <p> Sep 15, 2023. 11:05 pm</p>
                  </div>
                </div>
                <p>
                  Navigating the World of ChatGPT and Its Open-source
                  Adversaries
                </p>
                <ul className="flex">
                  <li>
                    <a href="#">
                      <img
                        src="app/images/color-bookmarks.png"
                        alt="Genaiguru bookmarkIcon"
                        title="Genaiguru bookmarkIcon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="app/images/dotsIcons.png"
                        alt="Genaiguru dotsIcons"
                        title="Genaiguru dotsIcons"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="wrap flex">
              <figure>
                <img
                  src="app/images/interestSliderImg.png"
                  alt="Genaiguru interestSliderImg"
                  title="Genaiguru interestSliderImg"
                />
              </figure>
              <div className="content">
                <div className="wrapper flex">
                  <figure>
                    <img
                      src="app/images/authorImg.png"
                      alt="Genaiguru authorImg"
                      title="Genaiguru authorImg"
                    />
                  </figure>
                  <div className="innerContent">
                    <h6>Alex Smih</h6>
                    <p>Sep 15, 2023. 11:05 pm</p>
                  </div>
                </div>
                <p>
                  Navigating the World of ChatGPT and Its Open-source
                  Adversaries
                </p>
                <ul className="flex">
                  <li>
                    <a href="#">
                      <img
                        src="app/images/color-bookmarks.png"
                        alt="Genaiguru bookmarkIcon"
                        title="Genaiguru bookmarkIcon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="app/images/dotsIcons.png"
                        alt="Genaiguru dotsIcons"
                        title="Genaiguru dotsIcons"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuruKeeps;
