import React, { useEffect, useState } from "react";
import { Link, NavLink, useActionData } from "react-router-dom";
import userimageIcon from "../../../src/assets/images/person.png";
import { RouterElement } from "../../routes";
const Index = () => {
  return (
    <>
      {/* <div className="loader">
        <img
          src="app/images/lodingLogo.png"
          alt="Genaiguru logo"
          title="Genaiguru Logo"
        />
      </div> */}

      <header className="flex">
        <div className="hamburger">
          <img
            src="app/images/hamburgerIcon.png"
            alt="Genaiguru hamburger"
            title="Genaiguru hamburger "
          />
        </div>
        <figure className="headerLogo">
          <a href="#">
            <img
              src="app/images/headerLogo.png"
              alt="Genaiguru header logo"
              title="Genaiguru logo"
            />
          </a>
        </figure>
        <div className="searchbar flex">
          <figure className="icon">
            <img
              src="app/images/searchIconHeader.png"
              alt="Genaiguru small logo"
              title="Genaiguru small logo"
            />
          </figure>
          <form action="">
            <div className="form_group">
              <input type="search" placeholder="Search genaiguru" />
            </div>
          </form>
        </div>
        <ul className="leftSide flex">
          <li className="headerIcon">
            <a href="#">
              <img
                src="app/images/notificationIcon.png"
                alt="Genaiguru notificationIcon"
                title="Genaiguru notificationIcon"
              />
            </a>
          </li>
          <li className="headerIcon">
            <a href="#">
              <img
                src="app/images/elementsIcon.png"
                alt="Genaiguru elementsIcon"
                title="Genaiguru elementsIcon"
              />{" "}
              <span className="count">22</span>
            </a>
          </li>
          <li className="secondaryBtn">
            <a href="#">
              <img
                src="app/images/padIcon.png"
                alt="Genaiguru padIcon"
                title="Genaiguru padIcon"
              />{" "}
              Write to AI
            </a>
          </li>
          <li className="secondaryBtn mobile">
            <a href="#">
              <img
                src="app/images/padIcon.png"
                alt="Genaiguru mobile padIcon"
                title="Genaiguru mobile padIcon"
              />{" "}
              Write
            </a>
          </li>
          <li className="userIcon">
            <Link to={"/login"}>
              <img
                src={userimageIcon}
                alt="Genaiguru user image"
                title="Genaiguru user image"
              />
            </Link>

          </li>
        </ul>
      </header>
      <section className="mainWrapper flex">
        <div className="leftSidebar">
          <ul className="menu">
            <li>
              <a href="#">
                <figure>
                  <img
                    src="app/images/homeIcon.png"
                    alt="Genaiguru home icon"
                    title="Genaiguru home icon"
                  />
                </figure>
                Home
              </a>
            </li>
            <li>
              <a href="#">
                <figure>
                  <img
                    src="app/images/guruGoldIcon.png"
                    alt="Genaiguru guruGoldIcon"
                    title="Genaiguru guruGoldIcon"
                  />
                </figure>
                Gurugold
              </a>
            </li>
            <li>
              <a href="#">
                <figure>
                  <img
                    src="app/images/guruKeepsIcon.png"
                    alt="Genaiguru guruKeepsIcon"
                    title="Genaiguru guruKeepsIcon"
                  />
                </figure>
                Guru keeps
              </a>
            </li>
            <li>
              <a href="#">
                <figure>
                  <img
                    src="app/images/guruJournalIcon.png"
                    alt="Genaiguru guruJournalIcon"
                    title="Genaiguru guruJournalIcon"
                  />
                </figure>
                Guru journal
              </a>
            </li>
            <li>
              <a href="#">
                <figure>
                  <img
                    src="app/images/teamGuruIcon.png"
                    alt="Genaiguru teamGuruIcon"
                    title="Genaiguru teamGuruIcon"
                  />
                </figure>
                Team guru
              </a>
            </li>
            <li>
              <a href="#">
                <figure>
                  <img
                    src="app/images/contactToGuruIcon.png"
                    alt="Genaiguru contactToGuruIcon"
                    title="Genaiguru contactToGuruIcon"
                  />
                </figure>
                Contact to guru genesis
              </a>
            </li>
            <li>
              <a href="#">
                <figure>
                  <img
                    src="app/images/settingIcon.png"
                    alt="Genaiguru settingIcon"
                    title="Genaiguru settingIcon"
                  />
                </figure>
                Settings
              </a>
            </li>
          </ul>
          <div className="newsletter">
            <h5>Joining our newsletter</h5>
            <form action="">
              <div className="form_group">
                <input type="email" placeholder="Email address" />
              </div>
              <div className="form_group">
                <button type="button" className="loginBtn">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <ul className="bottom-menu">
            <li>
              <a href="#">Terms & conditions</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
          </ul>
          <ul className="social-icons flex">
            <li>
              <a href="#" target="_blank">
                <img
                  src="app/images/facebookIconNew.png"
                  alt="Genaiguru facebook icon"
                  title="Genaiguru on facebook"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img
                  src="app/images/youtubeIcon.png"
                  alt="Genaiguru youtube icon"
                  title="Genaiguru on youtube"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img
                  src="app/images/twitter.png"
                  alt="Genaiguru twitter icon"
                  title="Genaiguru on twitter"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="rightSection">
          <div className="blog-wrap">
            <h1>Latest blog</h1>
            <div className="blog-slider ">
              <div>
                <div className="wrap">
                  <a href="#">
                    <figure>
                      <img
                        src="app/images/blogImgOne.png"
                        alt="Genaiguru blog image"
                        title="Genaiguru blog image"
                      />
                    </figure>
                    <div className="layer">
                      <h5>
                        Discover the Latest <br /> Breakthroughs in AI{" "}
                      </h5>
                      <button type="button">
                        <img
                          src="app/images/blogArrowBtnImg.png"
                          alt="Genaiguru arrow button"
                          title="Genaiguru arrow button"
                        />
                      </button>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <div className="wrap">
                  <a href="#">
                    <figure>
                      <img
                        src="app/images/blogImgTwo.png"
                        alt="Genaiguru blog image"
                        title="Genaiguru blog image"
                      />
                    </figure>
                    <div className="layer">
                      <h5>
                        Discover the Latest <br /> Breakthroughs in AI{" "}
                      </h5>
                      <button type="button">
                        <img
                          src="app/images/blogArrowBtnImg.png"
                          alt="Genaiguru arrow button"
                          title="Genaiguru arrow button"
                        />
                      </button>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <div className="wrap">
                  <a href="#">
                    <figure>
                      <img
                        src="app/images/blogImgOne.png"
                        alt="Genaiguru blog image"
                        title="Genaiguru blog image"
                      />
                    </figure>
                    <div className="layer">
                      <h5>
                        Discover the Latest <br /> Breakthroughs in AI{" "}
                      </h5>
                      <button type="button">
                        <img
                          src="app/images/blogArrowBtnImg.png"
                          alt="Genaiguru arrow button"
                          title="Genaiguru arrow button"
                        />
                      </button>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <div className="wrap">
                  <a href="#">
                    <figure>
                      <img
                        src="app/images/blogImgTwo.png"
                        alt="Genaiguru blog image"
                        title="Genaiguru blog image"
                      />
                    </figure>
                    <div className="layer">
                      <h5>
                        Discover the Latest <br /> Breakthroughs in AI{" "}
                      </h5>
                      <button type="button">
                        <img
                          src="app/images/blogArrowBtnImg.png"
                          alt="Genaiguru arrow button"
                          title="Genaiguru arrow button"
                        />
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="video-section">
            <div className="heading-link flex">
              <h3>Popular youtube videos</h3>
              <a href="#">View all</a>
            </div>
            <div className="mobileVideoSection">
              <div className="wrap">
                <a href="#">
                  <figure>
                    <img
                      src="app/images/videoImg.png"
                      alt="Genaiguru video image"
                      title="Genaiguru video image"
                    />
                  </figure>
                  <div className="layer">
                    <div className="price flex">
                      <img
                        src="app/images/orangeStrike.png"
                        alt="Genaiguru orangeStrike"
                        title="Genaiguru orangeStrike"
                      />
                      17
                    </div>
                    <h5>
                      It’s a catch-22 for young startups: How do you attract
                      investors?{" "}
                    </h5>
                    <div className="author-tag flex">
                      <div className="col_left">
                        <div className="wrapper flex">
                          <figure>
                            <img
                              src="app/images/authorImg.png"
                              alt="Genaiguru author image"
                              title="Genaiguru author image"
                            />
                          </figure>
                          <div className="content">
                            <h6>Alex Smih</h6>
                            <p>24 M view . 3 month ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="col_right flex">
                        <img
                          src="app/images/videoIcon.png"
                          alt="Genaiguru video button"
                          title="Genaiguru video button"
                        />
                        3:38
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="videoBoxes flex">
                <figure>
                  <a href="#">
                    <img
                      src="app/images/interestSliderImg.png"
                      alt="Genaiguru video image"
                      title="Genaiguru video image"
                    />
                    <div className="timing flex">
                      <img
                        src="app/images/videoIcon.png"
                        alt="Genaiguru videoIcon"
                        title="Genaiguru videoIcon"
                      />
                      3:38
                    </div>
                  </a>
                </figure>
                <div className="content">
                  <p>
                    <a href="#">
                      It’s a catch-22 for young startups: how do you attract
                      investors?{" "}
                    </a>
                  </p>
                  <ul>
                    <li>Alex Smith</li>
                    <li>24 M Views</li>
                    <li>3 months</li>
                  </ul>
                  <p className="tags">#finance #crypto #economy</p>
                </div>
              </div>
              <div className="videoBoxes flex">
                <figure>
                  <a href="#">
                    <img
                      src="app/images/interestSliderImg.png"
                      alt="Genaiguru video image"
                      title="Genaiguru video image"
                    />
                    <div className="timing flex">
                      <img
                        src="app/images/videoIcon.png"
                        alt="Genaiguru videoIcon"
                        title="Genaiguru videoIcon"
                      />
                      3:38
                    </div>
                  </a>
                </figure>
                <div className="content">
                  <p>
                    <a href="#">
                      It’s a catch-22 for young startups: how do you attract
                      investors?{" "}
                    </a>
                  </p>
                  <ul>
                    <li>Alex Smith</li>
                    <li>24 M Views</li>
                    <li>3 months</li>
                  </ul>
                  <p className="tags">#finance #crypto #economy</p>
                </div>
              </div>
              <a href="#" className="viewAll">
                View all
              </a>
            </div>
            <div className="video-slider">
              <div>
                <div className="wrap">
                  <a href="#">
                    <figure>
                      <img
                        src="app/images/videoImg.png"
                        alt="Genaiguru video image"
                        title="Genaiguru video image"
                      />
                    </figure>
                    <div className="layer">
                      <div className="price flex">
                        <img
                          src="app/images/orangeStrike.png"
                          alt="Genaiguru orangeStrike"
                          title="Genaiguru orangeStrike"
                        />
                        17
                      </div>
                      <h5>
                        It’s a catch-22 for young startups: How do you attract
                        investors?{" "}
                      </h5>
                      <div className="author-tag flex">
                        <div className="col_left">
                          <div className="wrapper flex">
                            <figure>
                              <img
                                src="app/images/authorImg.png"
                                alt="Genaiguru authorImg"
                                title="Genaiguru authorImg"
                              />
                            </figure>
                            <div className="content">
                              <h6>Alex Smih</h6>
                              <p>24 M view . 3 month ago</p>
                            </div>
                          </div>
                          <ul className="flex">
                            <li>#finance</li>
                            <li>#crypto</li>
                            <li>#economy</li>
                          </ul>
                        </div>
                        <div className="col_right flex">
                          <img
                            src="app/images/videoIcon.png"
                            alt="Genaiguru videoIcon"
                            title="Genaiguru videoIcon"
                          />
                          3:38
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <div className="wrap">
                  <a href="#">
                    <figure>
                      <img
                        src="app/images/videoImg.png"
                        alt="Genaiguru video image"
                        title="Genaiguru video image"
                      />
                    </figure>
                    <div className="layer">
                      <div className="price flex">
                        <img
                          src="app/images/orangeStrike.png"
                          alt="Genaiguru orangeStrike"
                          title="Genaiguru orangeStrike"
                        />
                        17
                      </div>
                      <h5>
                        It’s a catch-22 for young startups: How do you attract
                        investors?{" "}
                      </h5>
                      <div className="author-tag flex">
                        <div className="col_left">
                          <div className="wrapper flex">
                            <figure>
                              <img
                                src="app/images/authorImg.png"
                                alt="Genaiguru authorImg"
                                title="Genaiguru authorImg"
                              />
                            </figure>
                            <div className="content">
                              <h6>Alex Smih</h6>
                              <p>24 M view . 3 month ago</p>
                            </div>
                          </div>
                          <ul className="flex">
                            <li>#finance</li>
                            <li>#crypto</li>
                            <li>#economy</li>
                          </ul>
                        </div>
                        <div className="col_right flex">
                          <img
                            src="app/images/videoIcon.png"
                            alt="Genaiguru videoIcon"
                            title="Genaiguru videoIcon"
                          />
                          3:38
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <div className="wrap">
                  <a href="#">
                    <figure>
                      <img
                        src="app/images/videoImg.png"
                        alt="Genaiguru video image"
                        title="Genaiguru video image"
                      />
                    </figure>
                    <div className="layer">
                      <div className="price flex">
                        <img
                          src="app/images/orangeStrike.png"
                          alt="Genaiguru orangeStrike"
                          title="Genaiguru orangeStrike"
                        />
                        17
                      </div>
                      <h5>
                        It’s a catch-22 for young startups: How do you attract
                        investors?{" "}
                      </h5>
                      <div className="author-tag flex">
                        <div className="col_left">
                          <div className="wrapper flex">
                            <figure>
                              <img
                                src="app/images/authorImg.png"
                                alt="Genaiguru authorImg"
                                title="Genaiguru authorImg"
                              />
                            </figure>
                            <div className="content">
                              <h6>Alex Smih</h6>
                              <p>24 M view . 3 month ago</p>
                            </div>
                          </div>
                          <ul className="flex">
                            <li>#finance</li>
                            <li>#crypto</li>
                            <li>#economy</li>
                          </ul>
                        </div>
                        <div className="col_right flex">
                          <img
                            src="app/images/videoIcon.png"
                            alt="Genaiguru videoIcon"
                            title="Genaiguru videoIcon"
                          />
                          3:38
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <div className="wrap">
                  <a href="#">
                    <figure>
                      <img
                        src="app/images/videoImg.png"
                        alt="Genaiguru video image"
                        title="Genaiguru video image"
                      />
                    </figure>
                    <div className="layer">
                      <div className="price flex">
                        <img
                          src="app/images/orangeStrike.png"
                          alt="Genaiguru orangeStrike"
                          title="Genaiguru orangeStrike"
                        />
                        17
                      </div>
                      <h5>
                        It’s a catch-22 for young startups: How do you attract
                        investors?{" "}
                      </h5>
                      <div className="author-tag flex">
                        <div className="col_left">
                          <div className="wrapper flex">
                            <figure>
                              <img
                                src="app/images/authorImg.png"
                                alt="Genaiguru authorImg"
                                title="Genaiguru authorImg"
                              />
                            </figure>
                            <div className="content">
                              <h6>Alex Smih</h6>
                              <p>24 M view . 3 month ago</p>
                            </div>
                          </div>
                          <ul className="flex">
                            <li>#finance</li>
                            <li>#crypto</li>
                            <li>#economy</li>
                          </ul>
                        </div>
                        <div className="col_right flex">
                          <img
                            src="app/images/videoIcon.png"
                            alt="Genaiguru videoIcon"
                            title="Genaiguru videoIcon"
                          />
                          3:38
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <div className="wrap">
                  <a href="#">
                    <figure>
                      <img
                        src="app/images/videoImg.png"
                        alt="Genaiguru video image"
                        title="Genaiguru video image"
                      />
                    </figure>
                    <div className="layer">
                      <div className="price flex">
                        <img
                          src="app/images/orangeStrike.png"
                          alt="Genaiguru orangeStrike"
                          title="Genaiguru orangeStrike"
                        />
                        17
                      </div>
                      <h5>
                        It’s a catch-22 for young startups: How do you attract
                        investors?{" "}
                      </h5>
                      <div className="author-tag flex">
                        <div className="col_left">
                          <div className="wrapper flex">
                            <figure>
                              <img
                                src="app/images/authorImg.png"
                                alt="Genaiguru authorImg"
                                title="Genaiguru authorImg"
                              />
                            </figure>
                            <div className="content">
                              <h6>Alex Smih</h6>
                              <p>24 M view . 3 month ago</p>
                            </div>
                          </div>
                          <ul className="flex">
                            <li>#finance</li>
                            <li>#crypto</li>
                            <li>#economy</li>
                          </ul>
                        </div>
                        <div className="col_right flex">
                          <img
                            src="app/images/videoIcon.png"
                            alt="Genaiguru videoIcon"
                            title="Genaiguru videoIcon"
                          />
                          3:38
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="video-section second">
            <div className="heading-link flex">
              <h3>Popular articles</h3>
              <a href="#">View all</a>
            </div>
            <div className="article-slider">
              <div>
                <div className="wrap">
                  <a href="#">
                    <figure>
                      <img
                        src="app/images/videoImg.png"
                        alt="Genaiguru video image"
                        title="Genaiguru video image"
                      />
                    </figure>
                    <div className="layer">
                      <div className="price flex">
                        <img
                          src="app/images/orangeStrike.png"
                          alt="Genaiguru orangeStrike"
                          title="Genaiguru orangeStrike"
                        />
                        17
                      </div>
                      <h5>
                        It’s a catch-22 for young startups: How do you attract
                        investors?{" "}
                      </h5>
                      <div className="author-tag flex">
                        <div className="col_left">
                          <div className="wrapper flex">
                            <figure>
                              <img
                                src="app/images/authorImg.png"
                                alt="Genaiguru authorImg"
                                title="Genaiguru authorImg"
                              />
                            </figure>
                            <div className="content">
                              <h6>Alex Smih</h6>
                              <p>24 M view . 3 month ago</p>
                            </div>
                          </div>
                          <ul className="flex">
                            <li>#finance</li>
                            <li>#crypto</li>
                            <li>#economy</li>
                          </ul>
                        </div>
                        <div className="col_right flex">
                          <img
                            src="app/images/videoIcon.png"
                            alt="Genaiguru videoIcon"
                            title="Genaiguru videoIcon"
                          />
                          3:38
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <div className="wrap">
                  <a href="#">
                    <figure>
                      <img
                        src="app/images/videoImg.png"
                        alt="Genaiguru video image"
                        title="Genaiguru video image"
                      />
                    </figure>
                    <div className="layer">
                      <div className="price flex">
                        <img
                          src="app/images/orangeStrike.png"
                          alt="Genaiguru orangeStrike"
                          title="Genaiguru orangeStrike"
                        />
                        17
                      </div>
                      <h5>
                        It’s a catch-22 for young startups: How do you attract
                        investors?{" "}
                      </h5>
                      <div className="author-tag flex">
                        <div className="col_left">
                          <div className="wrapper flex">
                            <figure>
                              <img
                                src="app/images/authorImg.png"
                                alt="Genaiguru authorImg"
                                title="Genaiguru authorImg"
                              />
                            </figure>
                            <div className="content">
                              <h6>Alex Smih</h6>
                              <p>24 M view . 3 month ago</p>
                            </div>
                          </div>
                          <ul className="flex">
                            <li>#finance</li>
                            <li>#crypto</li>
                            <li>#economy</li>
                          </ul>
                        </div>
                        <div className="col_right flex">
                          <img
                            src="app/images/videoIcon.png"
                            alt="Genaiguru videoIcon"
                            title="Genaiguru videoIcon"
                          />
                          3:38
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <div className="wrap">
                  <a href="#">
                    <figure>
                      <img
                        src="app/images/videoImg.png"
                        alt="Genaiguru video image"
                        title="Genaiguru video image"
                      />
                    </figure>
                    <div className="layer">
                      <div className="price flex">
                        <img
                          src="app/images/orangeStrike.png"
                          alt="Genaiguru orangeStrike"
                          title="Genaiguru orangeStrike"
                        />
                        17
                      </div>
                      <h5>
                        It’s a catch-22 for young startups: How do you attract
                        investors?{" "}
                      </h5>
                      <div className="author-tag flex">
                        <div className="col_left">
                          <div className="wrapper flex">
                            <figure>
                              <img
                                src="app/images/authorImg.png"
                                alt="Genaiguru authorImg"
                                title="Genaiguru authorImg"
                              />
                            </figure>
                            <div className="content">
                              <h6>Alex Smih</h6>
                              <p>24 M view . 3 month ago</p>
                            </div>
                          </div>
                          <ul className="flex">
                            <li>#finance</li>
                            <li>#crypto</li>
                            <li>#economy</li>
                          </ul>
                        </div>
                        <div className="col_right flex">
                          <img
                            src="app/images/videoIcon.png"
                            alt="Genaiguru videoIcon"
                            title="Genaiguru videoIcon"
                          />
                          3:38
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <div className="wrap">
                  <a href="#">
                    <figure>
                      <img
                        src="app/images/videoImg.png"
                        alt="Genaiguru video image"
                        title="Genaiguru video image"
                      />
                    </figure>
                    <div className="layer">
                      <div className="price flex">
                        <img
                          src="app/images/orangeStrike.png"
                          alt="Genaiguru orangeStrike"
                          title="Genaiguru orangeStrike"
                        />
                        17
                      </div>
                      <h5>
                        It’s a catch-22 for young startups: How do you attract
                        investors?{" "}
                      </h5>
                      <div className="author-tag flex">
                        <div className="col_left">
                          <div className="wrapper flex">
                            <figure>
                              <img
                                src="app/images/authorImg.png"
                                alt="Genaiguru authorImg"
                                title="Genaiguru authorImg"
                              />
                            </figure>
                            <div className="content">
                              <h6>Alex Smih</h6>
                              <p>24 M view . 3 month ago</p>
                            </div>
                          </div>
                          <ul className="flex">
                            <li>#finance</li>
                            <li>#crypto</li>
                            <li>#economy</li>
                          </ul>
                        </div>
                        <div className="col_right flex">
                          <img
                            src="app/images/videoIcon.png"
                            alt="Genaiguru videoIcon"
                            title="Genaiguru videoIcon"
                          />
                          3:38
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <div className="wrap">
                  <a href="#">
                    <figure>
                      <img
                        src="app/images/videoImg.png"
                        alt="Genaiguru video image"
                        title="Genaiguru video image"
                      />
                    </figure>
                    <div className="layer">
                      <div className="price flex">
                        <img
                          src="app/images/orangeStrike.png"
                          alt="Genaiguru orangeStrike"
                          title="Genaiguru orangeStrike"
                        />
                        17
                      </div>
                      <h5>
                        It’s a catch-22 for young startups: How do you attract
                        investors?{" "}
                      </h5>
                      <div className="author-tag flex">
                        <div className="col_left">
                          <div className="wrapper flex">
                            <figure>
                              <img
                                src="app/images/authorImg.png"
                                alt="Genaiguru authorImg"
                                title="Genaiguru authorImg"
                              />
                            </figure>
                            <div className="content">
                              <h6>Alex Smih</h6>
                              <p>24 M view . 3 month ago</p>
                            </div>
                          </div>
                          <ul className="flex">
                            <li>#finance</li>
                            <li>#crypto</li>
                            <li>#economy</li>
                          </ul>
                        </div>
                        <div className="col_right flex">
                          <img
                            src="app/images/videoIcon.png"
                            alt="Genaiguru videoIcon"
                            title="Genaiguru videoIcon"
                          />
                          3:38
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="featuredArticle">
            <div className="heading-link flex">
              <h3>
                <span className="destop-view">Featured articles</span>{" "}
                <span className="mobile-view">Popular article</span>
              </h3>
            </div>
            <div className="featuredSlider">
              <div>
                <div className="wrap">
                  <a href="#">
                    <figure>
                      <img
                        src="app/images/videoImg.png"
                        alt="Genaiguru video image"
                        title="Genaiguru video image"
                      />
                    </figure>
                    <div className="layer">
                      <div className="price flex">
                        <img
                          src="app/images/orangeStrike.png"
                          alt="Genaiguru orangeStrike"
                          title="Genaiguru orangeStrike"
                        />
                        17
                      </div>
                      <h5>
                        It’s a catch-22 for young startups: How do you attract
                        investors?{" "}
                      </h5>
                      <div className="author-tag flex">
                        <div className="col_left">
                          <div className="wrapper flex">
                            <figure>
                              <img
                                src="app/images/authorImg.png"
                                alt="Genaiguru authorImg"
                                title="Genaiguru authorImg"
                              />
                            </figure>
                            <div className="content">
                              <h6>Alex Smih</h6>
                              <p>24 M view . 3 month ago</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <div className="wrap">
                  <a href="#">
                    <figure>
                      <img
                        src="app/images/videoImg.png"
                        alt="Genaiguru video image"
                        title="Genaiguru video image"
                      />
                    </figure>
                    <div className="layer">
                      <div className="price flex">
                        <img
                          src="app/images/orangeStrike.png"
                          alt="Genaiguru orangeStrike"
                          title="Genaiguru orangeStrike"
                        />
                        17
                      </div>
                      <h5>
                        It’s a catch-22 for young startups: How do you attract
                        investors?{" "}
                      </h5>
                      <div className="author-tag flex">
                        <div className="col_left">
                          <div className="wrapper flex">
                            <figure>
                              <img
                                src="app/images/authorImg.png"
                                alt="Genaiguru authorImg"
                              />
                            </figure>
                            <div className="content">
                              <h6>Alex Smih</h6>
                              <p>24 M view . 3 month ago</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <div className="wrap">
                  <a href="#">
                    <figure>
                      <img
                        src="app/images/videoImg.png"
                        alt="Genaiguru video image"
                        title="Genaiguru video image"
                      />
                    </figure>
                    <div className="layer">
                      <div className="price flex">
                        <img
                          src="app/images/orangeStrike.png"
                          alt="Genaiguru orangeStrike"
                          title="Genaiguru orangeStrike"
                        />
                        17
                      </div>
                      <h5>
                        It’s a catch-22 for young startups: How do you attract
                        investors?{" "}
                      </h5>
                      <div className="author-tag flex">
                        <div className="col_left">
                          <div className="wrapper flex">
                            <figure>
                              <img
                                src="app/images/authorImg.png"
                                alt="Genaiguru authorImg"
                                title="Genaiguru authorImg"
                              />
                            </figure>
                            <div className="content">
                              <h6>Alex Smih</h6>
                              <p>24 M view . 3 month ago</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="boxWrap flex">
              <div className="box">
                <figure>
                  <img
                    src="app/images/featuredArticleImgMobile.jpg"
                    alt="Genaiguru featured article image"
                    title="Genaiguru featured article image"
                  />
                </figure>
                <h5>It’s a catch-22 for young s: how do you ... </h5>
                <ul>
                  <li>Alex Smith</li>
                  <li>24 M Views</li>
                  <li>3 months</li>
                </ul>
                <p className="tags">#finance #crypto #economy</p>
              </div>
              <div className="box">
                <figure>
                  <img
                    src="app/images/featuredArticleImgMobile.jpg"
                    alt="Genaiguru featured article image"
                    title="Genaiguru featured article image"
                  />
                </figure>
                <h5>It’s a catch-22 for young s: how do you ... </h5>
                <ul>
                  <li>Alex Smith</li>
                  <li>24 M Views</li>
                  <li>3 months</li>
                </ul>
                <p className="tags">#finance #crypto #economy</p>
              </div>
            </div>
            <a href="#" className="viewAll">
              View all
            </a>
          </div>

          <div className="home-category">
            <div className="heading-link flex">
              <h3>Categories</h3>
            </div>
            <ul className="flex">
              <li>
                <a href="#">
                  <img
                    src="app/images/paint-board.png"
                    alt="Genaiguru paint-board"
                    title="Genaiguru paint-board"
                  />{" "}
                  <img
                    src="app/images/colorPaintBoard.png"
                    alt="Genaiguru colorPaintBoard"
                    title="Genaiguru colorPaintBoard"
                    className="hoverImg"
                  />{" "}
                  AI in Healthcare
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="app/images/paint-board.png"
                    alt="Genaiguru paint-board"
                    title="Genaiguru paint-board"
                  />{" "}
                  <img
                    src="app/images/colorPaintBoard.png"
                    alt="Genaiguru colorPaintBoard"
                    title="Genaiguru colorPaintBoard"
                    className="hoverImg"
                  />{" "}
                  Data science
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="app/images/paint-board.png"
                    alt="Genaiguru paint-board"
                    title="Genaiguru paint-board"
                  />{" "}
                  <img
                    src="app/images/colorPaintBoard.png"
                    alt="Genaiguru colorPaintBoard"
                    title="Genaiguru colorPaintBoard"
                    className="hoverImg"
                  />{" "}
                  Large Language models
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="app/images/paint-board.png"
                    alt="Genaiguru paint-board"
                    title="Genaiguru paint-board"
                  />{" "}
                  <img
                    src="app/images/colorPaintBoard.png"
                    alt="Genaiguru colorPaintBoard"
                    title="Genaiguru colorPaintBoard"
                    className="hoverImg"
                  />{" "}
                  Data science
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="app/images/paint-board.png"
                    alt="Genaiguru paint-board"
                    title="Genaiguru paint-board"
                  />{" "}
                  <img
                    src="app/images/colorPaintBoard.png"
                    alt="Genaiguru colorPaintBoard"
                    title="Genaiguru colorPaintBoard"
                    className="hoverImg"
                  />{" "}
                  Data science
                </a>
              </li>
            </ul>
          </div>

          <div className="home-interest">
            <div className="heading-link flex">
              <h3>Articles based on your interest</h3>
              <a href="#">View all</a>
            </div>
            <div className="interest-slider">
              <div>
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
                            src="app/images/bookmarkIcon.png"
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
              <div>
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
                            src="app/images/bookmarkIcon.png"
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
              <div>
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
                            src="app/images/bookmarkIcon.png"
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
              <div>
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
                            src="app/images/bookmarkIcon.png"
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
              <div>
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
                            src="app/images/bookmarkIcon.png"
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
            <a href="#" className="viewAll">
              View all
            </a>
          </div>
        </div>
      </section>
      <div className="fixedBtn">
        <figure>
          <img src="app/images/fixedButtonLogo.png" alt="" />
        </figure>
      </div>
      <footer>
        <div className="footerNewsletter">
          <div className="newsletter">
            <h5>Joining our newsletter</h5>
            <form action="">
              <div className="form_group">
                <input type="email" placeholder="Email address" />
              </div>
              <div className="form_group">
                <button type="button" className="loginBtn">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="bottomFooter">
          <div className="imageText flex">
            <figure>
              <img
                src="app/images/footerLogo.png"
                alt="Genaiguru footer logo"
                title="Genaiguru logo"
              />
            </figure>
            <p>
              genaiguru.io is the world’s learning <br /> community to learn
              Technology subject.
            </p>
          </div>
          <ul className="footerSocial flex space-center">
            <li>
              <a href="#" target="_blank">
                <img
                  src="app/images/facebookIconNew.png"
                  alt="Genaiguru facebook icon"
                  title="Genaiguru on facebook"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img
                  src="app/images/youtubeIcon.png"
                  alt="Genaiguru youtube icon"
                  title="Genaiguru on youtube"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img
                  src="app/images/twitter.png"
                  alt="Genaiguru twitter icon"
                  title="Genaiguru on twitter"
                />
              </a>
            </li>
          </ul>
          <ul className="footerMenu flex">
            <li>
              <a href="#">Q&A Page</a>
            </li>
            <li>
              <a href="#">Blog articles page</a>
            </li>
            <li>
              <a href="#">Abc</a>
            </li>
          </ul>
          <ul className="footerMenu flex">
            <li>
              <a href="#">About page</a>
            </li>
            <li>
              <a href="#">Privacy policy page</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </footer>

    </>
  );
};

export default Index;
