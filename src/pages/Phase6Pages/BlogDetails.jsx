import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Layout/Sidebar";
import MobileHeader from "../../components/Layout/MobileHeader";
import { useLocation } from "react-router";
import axios from "axios";
import { getBaseURL } from "../../api/config";

const BlogDetails = () => {
  const [blogDetail, setBlogDetail] = useState({
    author: "",
    profilePhoto: "",
    content: "",
    title: "",
    banner_image: "",
    creation_date: "",
  });

  const token = JSON.parse(localStorage.getItem("token"));

  // useLocation to get id from url
  let location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const blogId = queryParam.get("id");

  useEffect(() => {
    axios
      .get(`${getBaseURL()}/latest-blogs?id=${blogId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setBlogDetail({
          author: response?.data?.blog_details?.author,
          profilePhoto: response?.data?.blog_details?.photo,
          content: response?.data?.blog_details?.content,
          title: response?.data?.blog_details?.title,
          banner_image: response?.data?.blog_details?.banner_image,
          // creation_date: response?.data?.blog_details?.creation_date,
        });
        console.log(response?.data?.blog_details);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      <MobileHeader />
      {/* <!-- main section start here --> */}
      <section className="mainWrapper flex hideMob">
        <Sidebar />
        <div className="rightSection">
          <div className="full-width">
            <div className="keeps-container blogDetails">
              <div className="gurukeeps-wrapper">
                <div className="row flex space-between">
                  <div className="blog-box">
                    <div className="innerBreadcrumb">
                      <p>
                        <a href="#">Articles</a>{" "}
                        <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                        Blog details
                      </p>
                    </div>
                    <h1>Blog details</h1>
                  </div>
                  <div className="connect-box">
                    <ul className="flex">
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
              <div className="blog-details">
                <h2>{blogDetail.title}</h2>
                <div className="blogger flex">
                  <div className="blogger-profile">
                    <figure>
                      <img
                        src={blogDetail.profilePhoto}
                        alt="Genaiguru blog-img"
                        title="Genaiguru blog-img"
                      />
                    </figure>
                  </div>
                  <div className="content-box">
                    <p>
                      By <a href="#">{blogDetail.author}</a>
                    </p>
                    {/* <p>{blogDetail.creation_date}</p> */}
                  </div>
                  <div className="blog-img">
                    <figure>
                      <img
                        src={blogDetail.banner_image}
                        alt="Genaiguru web-deigner-learn-book"
                        title="Genaiguru web-deigner-learn-book"
                      />
                    </figure>
                    <span>Photo by jan maelstrom on Unsplash</span>
                  </div>
                  <div className="blog-txt">
                    <div
                      className="blog-txt"
                      dangerouslySetInnerHTML={{ __html: blogDetail.content }}
                    />
                    {/* <div className="blog-img">
                      <figure>
                        <img
                          src={"./app/images/blog-img-2.png"}
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
                    </p> */}
                    <div className="comment-box">
                      <ul className="flex">
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
                    <div className="home-interest">
                      <div className="heading-link flex">
                        <h3>Related posts</h3>
                      </div>
                      <div className="interest-sliders">
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
                              Navigating the World of ChatGPT and Its
                              Open-source Adversaries
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
                              Navigating the World of ChatGPT and Its
                              Open-source Adversaries
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
                      <a href="#" className="viewAll">
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
      <div className="mob_profile commanMobHead hideDes">
        <div className="mobileHead flex">
          <div className="hamburger">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </div>
          <h2>Blog Details</h2>
          <div className="connect-box">
            <ul className="flex">
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
        <div className="innerCommanContent">
          <div className="rightSection">
            <div className="keeps-container blogDetails">
              {/* <!-- blog-start --> */}
              <div className="blog-details">
                <h2>10 Great Java Frame- works used in 2023</h2>
                <div className="blogger flex">
                  <div className="blogger-profile">
                    <figure>
                      <img
                        src="./app/images/blog-img.png"
                        alt="Genaiguru blog-img"
                        title="Genaiguru blog-img"
                      />
                    </figure>
                  </div>
                  <div className="content-box">
                    <p>
                      By <a href="#">Wade Warren</a>
                    </p>
                    <p>Sep 15, 2023. 11:05 pm</p>
                  </div>
                  <div className="blog-img">
                    <figure>
                      <img
                        src="./app/images/web-deigner-learn-book.png"
                        alt="Genaiguru web-deigner-learn-book"
                        title="Genaiguru web-deigner-learn-book"
                      />
                    </figure>
                    <span>Photo by jan maelstrom on Unsplash</span>
                  </div>
                  <div className="blog-txt">
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
                    <div className="blog-img">
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
                    <div className="comment-box">
                      <ul className="flex">
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
                    <div className="home-interest">
                      <div className="heading-link flex">
                        <h3>Related posts</h3>
                      </div>
                      <div className="interest-sliders">
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
                              Navigating the World of ChatGPT and Its
                              Open-source Adversaries
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
                              Navigating the World of ChatGPT and Its
                              Open-source Adversaries
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
                      <a href="#" className="viewAll">
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
