import React, { useRef, useState } from 'react'
import { BASE_PATH, PATH_BLOG_DETAILS } from '../../routes';
import MobileHeader from '../../components/Layout/MobileHeader';
import Sidebar from '../../components/Layout/Sidebar';
import { Link, useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const FeaturedArticles = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [myInterests, setMyInterests] = useState();
    const [latestBlog, setLatestBlog] = useState([]);
    const navigate = useNavigate();
    const sliderRef = useRef();
    const token = JSON.parse(localStorage.getItem("token"));
     // Function to handle tab click
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const onBlogClick = (BlogId) => {
    navigate(`${PATH_BLOG_DETAILS}?id=${BlogId}`);
  };

    // Slider Code
  var settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div>
    <MobileHeader />
    <section className="mainWrapper flex hideMob">
      <Sidebar />
      <div className="rightSection">
        <div className="">
          <div className="keeps-container featuredConatiner">
            <div className="gurukeeps-wrapper">
              <div className="innerBreadcrumb">
                <p>
                  <Link to={BASE_PATH}>Home</Link>{" "}
                  <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                  Featured Articles
                </p>
              </div>
              {/* <h1>Featured Articles</h1> */}
              {/* <!-- tab-link start here --> */}
              <div className="row flex space-between align-center">
                <ul className="connect-link flex">
                  <li className={activeTab === 1 ? "active" : ""}>
                    <Link
                      onClick={() => handleTabClick(1)}
                      className={activeTab === 1 ? "tab active" : ""}
                      data-toggle-target=".tab-content-1"
                    >
                      All
                    </Link>
                  </li>
                  <li className={activeTab === 2 ? "active" : ""}>
                    <Link
                      onClick={() => handleTabClick(2)}
                      className={activeTab === 2 ? "tab active" : ""}
                      data-toggle-target=".tab-content-2"
                    >
                      Ai in healthcare
                    </Link>
                  </li>
                  <li className={activeTab === 3 ? "active" : ""}>
                    <Link
                      onClick={() => handleTabClick(3)}
                      className={activeTab === 3 ? "tab active" : ""}
                      data-toggle-target=".tab-content-3"
                    >
                      ML in finance
                    </Link>
                  </li>
                  <li className={activeTab === 4 ? "active" : ""}>
                    <Link
                      onClick={() => handleTabClick(4)}
                      className={activeTab === 4 ? "tab active" : ""}
                      data-toggle-target=".tab-content-4"
                    >
                      Crypto
                    </Link>
                  </li>
                  <li className={activeTab === 5 ? "active" : ""}>
                    <Link
                      onClick={() => handleTabClick(5)}
                      className={activeTab === 5 ? "tab active" : ""}
                      data-toggle-target=".tab-content-5"
                    >
                      Bitcoin
                    </Link>
                  </li>
                </ul>
                <div className="connect-box">
                  <ul className="flex">
                    <li>
                      <Link to="/sortbydate">
                        <figure>
                          <img src="./app/images/sorting-icon.png" alt="" />
                        </figure>
                      </Link>
                    </li>
                    <li>
                      <Link to="/featuredpopup">
                        <figure>
                          <img src="./app/images/filter-icon.png" alt="" />
                        </figure>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- tab-link start here --> */}
            </div>
            {/* <!-- tab-content here --> */}
            {activeTab === 1 && (
              <div
                className={
                  activeTab === 1 && "tab-content tab-content-1 active"
                }
              >
                <div className="interest-guru ">
                  {latestBlog.map((blog, index) => {
                    return (
                      <>
                        <a
                          className="wrap flex"
                          onClick={() => onBlogClick(blog.id)}
                          key={index}
                        >
                          <figure>
                            <img
                              src={blog.photo}
                              alt="Genaiguru gureu-keeps-1"
                              title="Genaiguru gureu-keeps-1"
                            />
                          </figure>
                          <div className="content">
                            <div className="flex space-between">
                              <div className="wrapper flex">
                                <figure>
                                  <img
                                    src={blog.profilePhoto}
                                    alt="userIcon"
                                  />
                                </figure>
                                <div className="innerContent">
                                  <h6>{blog.author}</h6>
                                  <p>{blog.creation_date}</p>
                                </div>
                              </div>
                              <ul className="flex">
                                <li>
                                  <a href="#">
                                    <img
                                      src="app/images/color-bookmarks.png"
                                      alt="Genaiguru color-bookmarks"
                                      title="Genaiguru color-bookmarks"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      src="app/images/dotsIcons.png"
                                      alt="Genaiguru dots-icon"
                                      title="Genaiguru dots-icon"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h5>{blog.title}</h5>
                            <p>
                              Looking to upgrade your salary in the uk? Get
                              the salary you’re worth by learning to code. 98%
                              employed within 12 months of qualifying....
                            </p>
                          </div>
                        </a>
                      </>
                    );
                  })}
                </div>
              </div>
            )}
            {/* <!-- 2nd --> */}
            {activeTab === 2 && (
              <div
                className={
                  activeTab === 2 && "tab-content tab-content-2 active"
                }
              >
                {" "}
                <div className="interest-guru ">
                  <div className="wrap flex">
                    <figure>
                      <img
                        src="app/images/guru-keeps-2.png"
                        alt="Genaiguru guru-keeps-2"
                        title="Genaiguru guru-keeps-2"
                      />
                    </figure>
                    <div className="content">
                      <div className="flex space-between">
                        <div className="wrapper flex">
                          <figure>
                            <img
                              src="app/images/userIcon.png"
                              alt=" Genaiguru userIcon"
                              title="Genaiguru userIcon"
                            />
                          </figure>
                          <div className="innerContent">
                            <h6>AEsther Howard</h6>
                            <p>Sep 15, 2023. 11:05 pm</p>
                          </div>
                        </div>
                        <ul className="flex">
                          <li>
                            <a href="#">
                              <img
                                src="app/images/color-bookmarks.png"
                                alt="Genaiguru color-bookmarks"
                                title="Genaiguru color-bookmarks"
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
                        Navigating the World of ChatGPT and Its Open-source
                        Adversaries
                      </h5>
                      <p>
                        Looking to upgrade your salary in the uk? Get the
                        salary you’re worth by learning to code. 98% employed
                        within 12 months of qualifying....
                      </p>
                    </div>
                  </div>
                  <div className="wrap flex">
                    <figure>
                      <img
                        src="app/images/guru-keeps-3.png"
                        alt="Genaiguru guru-keeps-3"
                        title="Genaiguru guru-keeps-3"
                      />
                    </figure>
                    <div className="content">
                      <div className="flex space-between">
                        <div className="wrapper flex">
                          <figure>
                            <img
                              src="app/images/userIcon.png"
                              alt="Genaiguru userIcon"
                              title="Genaiguru userIcon"
                            />
                          </figure>
                          <div className="innerContent">
                            <h6>Esther Howard</h6>
                            <p>Sep 15, 2023. 11:05 pm</p>
                          </div>
                        </div>
                        <ul className="flex">
                          <li>
                            <a href="#">
                              <img
                                src="app/images/color-bookmarks.png"
                                alt="Genaiguru color-bookmarks"
                                title="Genaiguru color-bookmarks"
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
                        Navigating the World of ChatGPT and Its Open-source
                        Adversaries
                      </h5>
                      <p>
                        Looking to upgrade your salary in the uk? Get the
                        salary you’re worth by learning to code. 98% employed
                        within 12 months of qualifying....
                      </p>
                    </div>
                  </div>
                  <div className="wrap flex">
                    <figure>
                      <img
                        src="app/images/gureu-keeps-1.png"
                        alt="Genaiguru gureu-keeps-1"
                        title="Genaiguru gureu-keeps-1"
                      />
                    </figure>
                    <div className="content">
                      <div className="flex space-between">
                        <div className="wrapper flex">
                          <figure>
                            <img
                              src="app/images/userIcon.png"
                              alt="Genaiguru userIcon"
                              title="Genaiguru userIcon"
                            />
                          </figure>
                          <div className="innerContent">
                            <h6>Esther Howard</h6>
                            <p>Sep 15, 2023. 11:05 pm</p>
                          </div>
                        </div>
                        <ul className="flex">
                          <li>
                            <a href="#">
                              <img
                                src="app/images/color-bookmarks.png"
                                alt="Genaiguru color-bookmarks"
                                title="Genaiguru color-bookmarks"
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
                        Navigating the World of ChatGPT and Its Open-source
                        Adversaries
                      </h5>
                      <p>
                        Looking to upgrade your salary in the uk? Get the
                        salary you’re worth by learning to code. 98% employed
                        within 12 months of qualifying....
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* <!-- 3rd --> */}
            {activeTab === 3 && (
              <div
                className={
                  activeTab === 3 && "tab-content tab-content-3 active"
                }
              >
                <div className="interest-guru ">
                  <div className="wrap flex">
                    <figure>
                      <img
                        src="app/images/guru-keeps-3.png"
                        alt="Genaiguru guru-keeps-3"
                        title="Genaiguru guru-keeps-3"
                      />
                    </figure>
                    <div className="content">
                      <div className="flex space-between">
                        <div className="wrapper flex">
                          <figure>
                            <img
                              src="app/images/userIcon.png"
                              alt="Genaiguru userIcon"
                              title="Genaiguru userIcon"
                            />
                          </figure>
                          <div className="innerContent">
                            <h6>Esther Howard</h6>
                            <p>Sep 15, 2023. 11:05 pm</p>
                          </div>
                        </div>
                        <ul className="flex">
                          <li>
                            <a href="#">
                              <img
                                src="app/images/color-bookmarks.png"
                                alt="Genaiguru color-bookmarks"
                                title="Genaiguru color-bookmarks"
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
                        Navigating the World of ChatGPT and Its Open-source
                        Adversaries
                      </h5>
                      <p>
                        Looking to upgrade your salary in the uk? Get the
                        salary you’re worth by learning to code. 98% employed
                        within 12 months of qualifying....
                      </p>
                    </div>
                  </div>
                  <div className="wrap flex">
                    <figure>
                      <img
                        src="app/images/gureu-keeps-1.png"
                        alt="Genaiguru gureu-keeps-1"
                        title="Genaiguru gureu-keeps-1"
                      />
                    </figure>
                    <div className="content">
                      <div className="flex space-between">
                        <div className="wrapper flex">
                          <figure>
                            <img
                              src="app/images/userIcon.png"
                              alt="Genaiguru userIcon"
                              title="Genaiguru userIcon"
                            />
                          </figure>
                          <div className="innerContent">
                            <h6>Esther Howard</h6>
                            <p>Sep 15, 2023. 11:05 pm</p>
                          </div>
                        </div>
                        <ul className="flex">
                          <li>
                            <a href="#">
                              <img
                                src="app/images/color-bookmarks.png"
                                alt="Genaiguru color-bookmarks"
                                title=" Genaiguru color-bookmarks"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="app/images/dotsIcons.png"
                                alt="Genaiguru dots-icon"
                                title="Genaiguru dotsIcons"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h5>
                        Navigating the World of ChatGPT and Its Open-source
                        Adversaries
                      </h5>
                      <p>
                        Looking to upgrade your salary in the uk? Get the
                        salary you’re worth by learning to code. 98% employed
                        within 12 months of qualifying....
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* <!-- 4th --> */}
            {activeTab === 4 && (
              <div
                className={
                  activeTab === 4 && "tab-content tab-content-4 active"
                }
              >
                <div className="interest-guru ">
                  <div className="wrap flex">
                    <figure>
                      <img
                        src="app/images/gureu-keeps-1.png"
                        alt="Genaiguru gureu-keeps-1"
                        title="Genaiguru gureu-keeps-1"
                      />
                    </figure>
                    <div className="content">
                      <div className="flex space-between">
                        <div className="wrapper flex">
                          <figure>
                            <img
                              src="app/images/userIcon.png"
                              alt="Genaiguru userIcon"
                              title=" Genaiguru userIcon"
                            />
                          </figure>
                          <div className="innerContent">
                            <h6>Esther Howard</h6>
                            <p>Sep 15, 2023. 11:05 pm</p>
                          </div>
                        </div>
                        <ul className="flex">
                          <li>
                            <a href="#">
                              <img
                                src="app/images/color-bookmarks.png"
                                alt="Genaiguru color-bookmarks"
                                title="Genaiguru color-bookmarks"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="app/images/dotsIcons.png"
                                alt="Genaiguru  dotsIcons"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h5>
                        Navigating the World of ChatGPT and Its Open-source
                        Adversaries
                      </h5>
                      <p>
                        Looking to upgrade your salary in the uk? Get the
                        salary you’re worth by learning to code. 98% employed
                        within 12 months of qualifying....
                      </p>
                    </div>
                  </div>
                  <div className="wrap flex">
                    <figure>
                      <img
                        src="app/images/guru-keeps-2.png"
                        alt="Genaiguru guru-keeps-2"
                        title=" Genaiguru guru-keeps-2"
                      />
                    </figure>
                    <div className="content">
                      <div className="flex space-between">
                        <div className="wrapper flex">
                          <figure>
                            <img
                              src="app/images/userIcon.png"
                              alt="Genaiguru usericon"
                              title="Genaiguru userIcon"
                            />
                          </figure>
                          <div className="innerContent">
                            <h6>AEsther Howard</h6>
                            <p>Sep 15, 2023. 11:05 pm</p>
                          </div>
                        </div>
                        <ul className="flex">
                          <li>
                            <a href="#">
                              <img
                                src="app/images/color-bookmarks.png"
                                alt="Genaiguru color-bookmarks"
                                title="Genaiguru color-bookmarks"
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
                        Navigating the World of ChatGPT and Its Open-source
                        Adversaries
                      </h5>
                      <p>
                        Looking to upgrade your salary in the uk? Get the
                        salary you’re worth by learning to code. 98% employed
                        within 12 months of qualifying....
                      </p>
                    </div>
                  </div>
                  <div className="wrap flex">
                    <figure>
                      <img
                        src="app/images/guru-keeps-3.png"
                        alt="Genaiguru guru-keeps-3"
                      />
                    </figure>
                    <div className="content">
                      <div className="flex space-between">
                        <div className="wrapper flex">
                          <figure>
                            <img
                              src="app/images/userIcon.png"
                              alt="Genaiguru user-icon"
                              title="Genaiguru userIcon "
                            />
                          </figure>
                          <div className="innerContent">
                            <h6>Esther Howard</h6>
                            <p>Sep 15, 2023. 11:05 pm</p>
                          </div>
                        </div>
                        <ul className="flex">
                          <li>
                            <a href="#">
                              <img
                                src="app/images/color-bookmarks.png"
                                alt="Genaiguru color-bookmarks "
                                title="Genaiguru color-bookmarks"
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
                        Navigating the World of ChatGPT and Its Open-source
                        Adversaries
                      </h5>
                      <p>
                        Looking to upgrade your salary in the uk? Get the
                        salary you’re worth by learning to code. 98% employed
                        within 12 months of qualifying....
                      </p>
                    </div>
                  </div>
                  <div className="wrap flex">
                    <figure>
                      <img
                        src="app/images/gureu-keeps-1.png"
                        alt="Genaiguru gureu-keeps-1"
                        title="Genaiguru gureu-keeps-1 "
                      />
                    </figure>
                    <div className="content">
                      <div className="flex space-between">
                        <div className="wrapper flex">
                          <figure>
                            <img
                              src="app/images/userIcon.png"
                              alt="Genaiguru userIcon"
                              title="Genaiguru userIcon"
                            />
                          </figure>
                          <div className="innerContent">
                            <h6>Esther Howard</h6>
                            <p>Sep 15, 2023. 11:05 pm</p>
                          </div>
                        </div>
                        <ul className="flex">
                          <li>
                            <a href="#">
                              <img
                                src="app/images/color-bookmarks.png"
                                alt="Genaiguru color-bookmarks"
                                title="Genaiguru color-bookmarks"
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
                        Navigating the World of ChatGPT and Its Open-source
                        Adversaries
                      </h5>
                      <p>
                        Looking to upgrade your salary in the uk? Get the
                        salary you’re worth by learning to code. 98% employed
                        within 12 months of qualifying....
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* <!-- 5th --> */}
            {activeTab === 5 && (
              <div
                className={
                  activeTab === 5 && "tab-content tab-content-5 active"
                }
              >
                <div className="interest-guru ">
                  <div className="wrap flex">
                    <figure>
                      <img
                        src="app/images/guru-keeps-2.png"
                        alt="Genaiguru guru-keeps-2"
                      />
                    </figure>
                    <div className="content">
                      <div className="flex space-between">
                        <div className="wrapper flex">
                          <figure>
                            <img
                              src="app/images/userIcon.png"
                              alt="Genaiguru user-icon"
                              title="Genaiguru user-icon"
                            />
                          </figure>
                          <div className="innerContent">
                            <h6>AEsther Howard</h6>
                            <p>Sep 15, 2023. 11:05 pm</p>
                          </div>
                        </div>
                        <ul className="flex">
                          <li>
                            <a href="#">
                              <img
                                src="app/images/color-bookmarks.png"
                                alt="Genaiguru color-bookmarks"
                                title="Genaiguru color-bookmarks"
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
                        Navigating the World of ChatGPT and Its Open-source
                        Adversaries
                      </h5>
                      <p>
                        Looking to upgrade your salary in the uk? Get the
                        salary you’re worth by learning to code. 98% employed
                        within 12 months of qualifying....
                      </p>
                    </div>
                  </div>
                  <div className="wrap flex">
                    <figure>
                      <img
                        src="app/images/guru-keeps-3.png"
                        alt="Genaiguru guru-keeps-3"
                        title="Genaiguru guru-keeps-3"
                      />
                    </figure>
                    <div className="content">
                      <div className="flex space-between">
                        <div className="wrapper flex">
                          <figure>
                            <img
                              src="app/images/userIcon.png"
                              alt="Genaiguru usericon"
                            />
                          </figure>
                          <div className="innerContent">
                            <h6>Esther Howard</h6>
                            <p>Sep 15, 2023. 11:05 pm</p>
                          </div>
                        </div>
                        <ul className="flex">
                          <li>
                            <a href="#">
                              <img
                                src="app/images/color-bookmarks.png"
                                alt="Genaiguru color-bookmarks"
                                title="Genaiguru color-bookmarks"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="app/images/dotsIcons.png"
                                alt="Genaiguru dotsIcons "
                                title="Genaiguru dotsIcons"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h5>
                        Navigating the World of ChatGPT and Its Open-source
                        Adversaries
                      </h5>
                      <p>
                        Looking to upgrade your salary in the uk? Get the
                        salary you’re worth by learning to code. 98% employed
                        within 12 months of qualifying....
                      </p>
                    </div>
                  </div>
                  <div className="wrap flex">
                    <figure>
                      <img
                        src="app/images/gureu-keeps-1.png"
                        alt="Genaiguru gureu-keeps-1"
                        title="Genaiguru gureu-keeps-1"
                      />
                    </figure>
                    <div className="content">
                      <div className="flex space-between">
                        <div className="wrapper flex">
                          <figure>
                            <img
                              src="app/images/userIcon.png"
                              alt="Genaiguru userIcon"
                              title="Genaiguru userIcon"
                            />
                          </figure>
                          <div className="innerContent">
                            <h6>Esther Howard</h6>
                            <p>Sep 15, 2023. 11:05 pm</p>
                          </div>
                        </div>
                        <ul className="flex">
                          <li>
                            <a href="#">
                              <img
                                src="app/images/color-bookmarks.png"
                                alt="Genaiguru color-bookmarks"
                                title="Genaiguru color-bookmarks"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="app/images/dotsIcons.png"
                                alt="Genaiguru dotsIcons"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h5>
                        Navigating the World of ChatGPT and Its Open-source
                        Adversaries
                      </h5>
                      <p>
                        Looking to upgrade your salary in the uk? Get the
                        salary you’re worth by learning to code. 98% employed
                        within 12 months of qualifying....
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {false && (
              <>
                <div className="home-category">
                  <div className="heading-link flex">
                    <h3>Categories</h3>
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
                <div className="youtube-wraper">
                  <h3>Youtube channel</h3>
                  <div className="wrap-container channelSlider">
                    <Slider
                      ref={sliderRef}
                      {...settings2}
                      id="Slider-4"
                      className="slider_test"
                    >
                      <div>
                        <div className="channel-box">
                          <a href="#">
                            <figure>
                              <img
                                src="./app/images/channel-1.png"
                                alt="Genaiguru channel-1"
                                title="Genaiguru channel-1"
                              />
                            </figure>
                          </a>
                          <h6>Coodkeno</h6>
                          <p>27.7M subscribers</p>
                          <div className="btnWrap">
                            <button type="button">Subscribe</button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="channel-box">
                          <a href="#">
                            <figure>
                              <img
                                src="./app/images/channel-1.png"
                                alt="Genaiguru channel-1"
                                title="Genaiguru channel-1"
                              />
                            </figure>
                          </a>
                          <h6>Coodkeno</h6>
                          <p>27.7M subscribers</p>
                          <div className="btnWrap">
                            <button type="button">Subscribe</button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="channel-box">
                          <a href="#">
                            <figure>
                              <img
                                src="./app/images/channel-1.png"
                                alt="Genaiguru channel-1"
                                title="Genaiguru channel-1"
                              />
                            </figure>
                          </a>
                          <h6>Coodkeno</h6>
                          <p>27.7M subscribers</p>
                          <div className="btnWrap">
                            <button type="button">Subscribe</button>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
    {/* <!-- mobile section start here --> */}
    <div className="mob_profile commanMobHead hideDes">
      <div className="mobileHead flex">
        <Link to={BASE_PATH} className="hamburger">
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </Link>
        <h2>Featured Articles</h2>
        <div className="connect-box">
          <ul className="flex">
            <li>
              <Link to="/sortbydate">
                <figure>
                  <img src="./app/images/sorting-icon.png" alt="" />
                </figure>
              </Link>
            </li>
            <li>
              <Link to="/featuredpopup">
                <figure>
                  <img src="./app/images/filter-icon.png" alt="" />
                </figure>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="innerCommanContent">
        <div className="mob_tab_list">
          <div className="rightSection">
            <div className="keeps-container">
              <div className="gurukeeps-wrapper">
                {/* <!-- tab-link start here --> */}
                <ul className="connect-link flex">
                  <li>
                    <a
                      href="#"
                      className="tab active"
                      data-toggle-target=".tab-content-1"
                    >
                      All
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="tab "
                      data-toggle-target=".tab-content-2"
                    >
                      Ai in healthcare
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="tab "
                      data-toggle-target=".tab-content-3"
                    >
                      ML in finance
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="tab "
                      data-toggle-target=".tab-content-4"
                    >
                      Crypto
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="tab "
                      data-toggle-target=".tab-content-5"
                    >
                      Bitcoin
                    </a>
                  </li>
                </ul>
                {/* <!-- tab-link start here --> */}
              </div>
              {/* <!-- tab-content here --> */}
              <div className="tab-content tab-content-1 active">
                <div className="interest-guru ">
                  <div className="interest-sliders">
                    {/* {latestBlog.map((blog, index) => {
                      return (
                        <a
                          className="wrap flex"
                          onClick={() => onBlogClick(blog.id)}
                          key={index}
                        >
                          <figure>
                            <Link>
                              <img
                                src={blog.photo}
                                alt="Genaiguru Guru-keeps"
                                title="Genaiguru Guru-keeps"
                              />
                            </Link>
                          </figure>
                          <div className="content">
                            <div className="wrapper flex">
                              <figure>
                                <img
                                  src={blog.profilePhoto}
                                  alt="user_icon"
                                />
                              </figure>
                              <div className="innerContent">
                                <h6>{blog.author}</h6>
                                <p>{blog.creation_date}</p>
                              </div>
                            </div>
                            <p>{blog.title}</p>
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
                        </a>
                      );
                    })} */}
                  </div>
                </div>
              </div>
              {/* <!-- 2nd --> */}
              <div className="tab-content tab-content-2 ">
                <div className="interest-guru ">
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
                  </div>
                </div>
              </div>
              {/* <!-- 3rd --> */}
              <div className="tab-content tab-content-3">
                <div className="interest-guru ">
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
              {/* <!-- 4th --> */}
              <div className="tab-content tab-content-4">
                <div className="interest-guru ">
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
                  </div>
                </div>
              </div>
              {/* <!-- 5th --> */}
              <div className="tab-content tab-content-5">
                <div className="interest-guru ">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- mobile section end here --> */}
  </div>  )
}

export default FeaturedArticles