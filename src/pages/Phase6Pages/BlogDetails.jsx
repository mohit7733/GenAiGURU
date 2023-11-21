import React from "react";
import Sidebar from "../../components/Layout/Sidebar";
import MobileHeader from "../../components/Layout/MobileHeader";

const BlogDetails = () => {
  return (
    <div>
      <MobileHeader />
      {/* <!-- main section start here --> */}
      <section class="mainWrapper flex hideMob">
        <Sidebar />
        <div className="rightSection">
          <div class="full-width">
            <div class="keeps-container blogDetails">
              <div class="gurukeeps-wrapper">
                <div class="row flex space-between">
                  <div class="blog-box">
                    <div class="innerBreadcrumb">
                      <p>
                        <a href="#">Articles</a>{" "}
                        <i class="fa fa-angle-right" aria-hidden="true"></i>{" "}
                        Blog details
                      </p>
                    </div>
                    <h1>Blog details</h1>
                  </div>
                  <div class="connect-box">
                    <ul class="flex">
                      <li>
                        <a href="#">
                          <figure>
                            <img src="./app/images/bookmarkIcon.png" alt="" />
                          </figure>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <figure>
                            <img src="./app/images/share-icon.png" alt="" />
                          </figure>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="blog-details">
                <h2>10 Great Java Frame- works used in 2023</h2>
                <div class="blogger flex">
                  <div class="blogger-profile">
                    <figure>
                      <img
                        src="./app/images/blog-img.png"
                        alt="Genaiguru blog-img"
                        title="Genaiguru blog-img"
                      />
                    </figure>
                  </div>
                  <div class="content-box">
                    <p>
                      By <a href="#">Wade Warren</a>
                    </p>
                    <p>Sep 15, 2023. 11:05 pm</p>
                  </div>
                  <div class="blog-img">
                    <figure>
                      <img
                        src="./app/images/web-deigner-learn-book.png"
                        alt="Genaiguru web-deigner-learn-book"
                        title="Genaiguru web-deigner-learn-book"
                      />
                    </figure>
                    <span>Photo by jan maelstrom on Unsplash</span>
                  </div>
                  <div class="blog-txt">
                    <p>
                      Looking to upgrade your salary in the uk? Get the salary
                      you’re worth by learning to code. 98% employed within 12
                      months of qualifying. 28% of students are hired while on
                      the course. Change career. Career changing skills. Spaces
                      filling up{" "}
                    </p>
                    <p>
                      Looking to upgrade your salary in the uk? Get the salary
                      you’re worth by learning to code. 98% employed within 12
                      months of qualifying. 28% of students are hired while on
                      the course. Change career. Career changing skills. Spaces
                      filling up{" "}
                    </p>
                    <h4>
                      10 Essential frameworks and libraries for java web
                      developers
                    </h4>
                    <p>
                      Looking to upgrade your salary in the uk? Get the salary
                      you’re worth by learning to code. 98% employed within 12
                      months of qualifying. 28% of students are hired while on
                      the course. Change career. Career changing skills. Spaces
                      filling up{" "}
                    </p>
                    <div class="blog-img">
                      <figure>
                        <img
                          src="./app/images/blog-img-2.png"
                          alt="Genaiguru blog-img-2"
                          title="Genaiguru blog-img-2"
                        />
                      </figure>
                    </div>
                    <p>
                      Looking to upgrade your salary in the uk? Get the salary
                      you’re worth by learning to code. 98% employed within 12
                      months of qualifying. 28% of students are hired while on
                      the course. Change career. Career changing skills. Spaces
                      filling up{" "}
                    </p>
                    <div class="comment-box">
                      <ul class="flex">
                        <li>
                          <a href="#">
                            <figure>
                              <img
                                src="./app/images/comment-01.png"
                                alt="Genaiguru comment-01"
                                title="Genaiguru comment-01"
                              />
                            </figure>
                            <span>Comment</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <figure>
                              <img
                                src="./app/images/help-circle.png"
                                alt="Genaiguru help-circle"
                                title="Genaiguru help-circle"
                              />
                            </figure>{" "}
                            <span>Ask question</span>
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* <!-- home interest section start here --> */}
                    <div class="home-interest">
                      <div class="heading-link flex">
                        <h3>Realted posts</h3>
                      </div>
                      <div class="interest-sliders">
                        <div class="wrap flex">
                          <figure>
                            <img
                              src="app/images/interestSliderImg.png"
                              alt="Genaiguru interestSliderImg"
                              title="Genaiguru interestSliderImg"
                            />
                          </figure>
                          <div class="content">
                            <div class="wrapper flex">
                              <figure>
                                <img
                                  src="app/images/authorImg.png"
                                  alt="Genaiguru authorImg"
                                  title="Genaiguru authorImg"
                                />
                              </figure>
                              <div class="innerContent">
                                <h6>Alex Smih</h6>
                                <p> Sep 15, 2023. 11:05 pm</p>
                              </div>
                            </div>
                            <p>
                              Navigating the World of ChatGPT and Its
                              Open-source Adversaries
                            </p>
                            <ul class="flex">
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
                        <div class="wrap flex">
                          <figure>
                            <img
                              src="app/images/interestSliderImg.png"
                              alt="Genaiguru interestSliderImg"
                              title="Genaiguru interestSliderImg"
                            />
                          </figure>
                          <div class="content">
                            <div class="wrapper flex">
                              <figure>
                                <img
                                  src="app/images/authorImg.png"
                                  alt="Genaiguru authorImg"
                                  title="Genaiguru authorImg"
                                />
                              </figure>
                              <div class="innerContent">
                                <h6>Alex Smih</h6>
                                <p>Sep 15, 2023. 11:05 pm</p>
                              </div>
                            </div>
                            <p>
                              Navigating the World of ChatGPT and Its
                              Open-source Adversaries
                            </p>
                            <ul class="flex">
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
                      <a href="#" class="viewAll">
                        View all
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- mobile section start here --> */}
      <div class="mob_profile commanMobHead hideDes">
        <div class="mobileHead flex">
          <div class="hamburger">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
          </div>
          <h2>Blog Details</h2>
          <div class="connect-box">
            <ul class="flex">
              <li>
                <a href="#">
                  <figure>
                    <img src="./app/images/sorting-icon.png" alt="" />
                  </figure>
                </a>
              </li>
              <li>
                <a href="#">
                  <figure>
                    <img src="./app/images/filter-icon.png" alt="" />
                  </figure>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="innerCommanContent">
          <div class="rightSection">
            <div class="keeps-container blogDetails">
              {/* <!-- blog-start --> */}
              <div class="blog-details">
                <h2>10 Great Java Frame- works used in 2023</h2>
                <div class="blogger flex">
                  <div class="blogger-profile">
                    <figure>
                      <img
                        src="./app/images/blog-img.png"
                        alt="Genaiguru blog-img"
                        title="Genaiguru blog-img"
                      />
                    </figure>
                  </div>
                  <div class="content-box">
                    <p>
                      By <a href="#">Wade Warren</a>
                    </p>
                    <p>Sep 15, 2023. 11:05 pm</p>
                  </div>
                  <div class="blog-img">
                    <figure>
                      <img
                        src="./app/images/web-deigner-learn-book.png"
                        alt="Genaiguru web-deigner-learn-book"
                        title="Genaiguru web-deigner-learn-book"
                      />
                    </figure>
                    <span>Photo by jan maelstrom on Unsplash</span>
                  </div>
                  <div class="blog-txt">
                    <p>
                      Looking to upgrade your salary in the uk? Get the salary
                      you’re worth by learning to code. 98% employed within 12
                      months of qualifying. 28% of students are hired while on
                      the course. Change career. Career changing skills. Spaces
                      filling up{" "}
                    </p>
                    <p>
                      Looking to upgrade your salary in the uk? Get the salary
                      you’re worth by learning to code. 98% employed within 12
                      months of qualifying. 28% of students are hired while on
                      the course. Change career. Career changing skills. Spaces
                      filling up{" "}
                    </p>
                    <h4>
                      10 Essential frameworks and libraries for java web
                      developers
                    </h4>
                    <p>
                      Looking to upgrade your salary in the uk? Get the salary
                      you’re worth by learning to code. 98% employed within 12
                      months of qualifying. 28% of students are hired while on
                      the course. Change career. Career changing skills. Spaces
                      filling up{" "}
                    </p>
                    <div class="blog-img">
                      <figure>
                        <img
                          src="./app/images/blog-img-2.png"
                          alt="Genaiguru blog-img-2"
                          title="Genaiguru blog-img-2"
                        />
                      </figure>
                    </div>
                    <p>
                      Looking to upgrade your salary in the uk? Get the salary
                      you’re worth by learning to code. 98% employed within 12
                      months of qualifying. 28% of students are hired while on
                      the course. Change career. Career changing skills. Spaces
                      filling up{" "}
                    </p>
                    <div class="comment-box">
                      <ul class="flex">
                        <li>
                          <a href="#">
                            <figure>
                              <img
                                src="./app/images/comment-01.png"
                                alt="Genaiguru comment-01"
                                title="Genaiguru comment-01"
                              />
                            </figure>
                            <span>Comment</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <figure>
                              <img
                                src="./app/images/help-circle.png"
                                alt="Genaiguru help-circle"
                                title="Genaiguru help-circle"
                              />
                            </figure>{" "}
                            <span>Ask question</span>
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* <!-- home interest section start here --> */}
                    <div class="home-interest">
                      <div class="heading-link flex">
                        <h3>Realted posts</h3>
                      </div>
                      <div class="interest-sliders">
                        <div class="wrap flex">
                          <figure>
                            <img
                              src="app/images/interestSliderImg.png"
                              alt="Genaiguru interestSliderImg"
                              title="Genaiguru interestSliderImg"
                            />
                          </figure>
                          <div class="content">
                            <div class="wrapper flex">
                              <figure>
                                <img
                                  src="app/images/authorImg.png"
                                  alt="Genaiguru authorImg"
                                  title="Genaiguru authorImg"
                                />
                              </figure>
                              <div class="innerContent">
                                <h6>Alex Smih</h6>
                                <p> Sep 15, 2023. 11:05 pm</p>
                              </div>
                            </div>
                            <p>
                              Navigating the World of ChatGPT and Its
                              Open-source Adversaries
                            </p>
                            <ul class="flex">
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
                        <div class="wrap flex">
                          <figure>
                            <img
                              src="app/images/interestSliderImg.png"
                              alt="Genaiguru interestSliderImg"
                              title="Genaiguru interestSliderImg"
                            />
                          </figure>
                          <div class="content">
                            <div class="wrapper flex">
                              <figure>
                                <img
                                  src="app/images/authorImg.png"
                                  alt="Genaiguru authorImg"
                                  title="Genaiguru authorImg"
                                />
                              </figure>
                              <div class="innerContent">
                                <h6>Alex Smih</h6>
                                <p>Sep 15, 2023. 11:05 pm</p>
                              </div>
                            </div>
                            <p>
                              Navigating the World of ChatGPT and Its
                              Open-source Adversaries
                            </p>
                            <ul class="flex">
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
                      <a href="#" class="viewAll">
                        View all
                      </a>
                    </div>
                    {/* <!-- home interest section end here --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- mobile section end here --> */}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
