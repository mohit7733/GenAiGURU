import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import axios from "axios";
import { getBaseURL } from "../../api/config";
import { BASE_PATH, PATH_BLOG_DETAILS } from "../../routes";

const FeaturedContent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [indexTab, setIndexTab] = useState();

  const [buttonClicked, setButtonClicked] = useState(false);

  const [myInterests, setMyInterests] = useState([]);
  const [userSelectedIneterests, setUserSelectedIneterests] = useState([]);

  const [latestBlog, setLatestBlog] = useState([]);
  const [interestBlog, setInterestBlogs] = useState([]);

  const navigate = useNavigate();
  const sliderRef = useRef();

  const token = JSON.parse(localStorage.getItem("token"));
  const userId = JSON.parse(localStorage.getItem("UserId"));

  // Get API for Popular Blogs
  useEffect(() => {
    axios
      .get(`${getBaseURL()}/latest-blogs?user_id=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setLatestBlog(response?.data?.blogs);
      })
      .catch((err) => {
        console.log(err.message);
      });
    setButtonClicked(false);
  }, [buttonClicked]);

  const getAllInterests = () => {
    axios
      .get(`${getBaseURL()}/auth/interests`, {
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
  };

  const getSelectedInterest = () => {
    axios
      .get(`${getBaseURL()}/auth/userinterests`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserSelectedIneterests(response?.data?.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // Get API for ALL interests and User Selected Interset
  useEffect(() => {
    getAllInterests();
    getSelectedInterest();
  }, []);

  // Function to merge and remove duplicates based on interest_id and id
  const mergeAndRemoveDuplicates = (arr1, arr2, key1, key2) => {
    const uniqueMap = new Map();

    // Add items from arr1 to uniqueMap
    arr1.forEach((item) => uniqueMap.set(item[key1], item));

    // Add items from arr2 to uniqueMap, overwriting duplicates
    arr2.forEach((item) => uniqueMap.set(item[key2], item));

    // Convert uniqueMap values back to an array
    const mergedInterests = Array.from(uniqueMap.values());

    return mergedInterests;
  };

  // Specify the key names to use for comparison
  const keyForUserSelected = "interest_id";
  const keyForMyInterests = "id";

  // Merge and remove duplicates
  const mergedInterests = mergeAndRemoveDuplicates(
    userSelectedIneterests,
    myInterests,
    keyForUserSelected,
    keyForMyInterests
  );

  console.log(mergedInterests);

  // Function to handle tab click
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const onBlogClick = (BlogId) => {
    navigate(`${PATH_BLOG_DETAILS}?id=${BlogId}`);
  };

  // API for Blogs on Clinking Interest in Slider
  const onInterestClick = (interestid, e) => {
    const array = [interestid];
    axios
      .post(`${getBaseURL()}/blogs-by-interests`, {
        interest_id: array,
      })
      .then((response) => {
        console.log(response?.data);
        setInterestBlogs(response?.data?.blogs);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // Slider Code
  var settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
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

  var sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const onBlogSave = (blogID) => {
    axios
      .post(`${getBaseURL()}/save-blog`, {
        user_id: userId,
        blog_id: blogID,
      })
      .then((res) => {
        console.log(res?.data);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  const onBlogUnSave = (blogID) => {
    axios
      .post(`${getBaseURL()}/unsave-blog`, {
        user_id: userId,
        blog_id: blogID,
      })
      .then((res) => {
        console.log(res?.data);
      })
      .catch((errors) => {
        console.log(errors);
      });
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
                    Blog
                  </p>
                </div>
                {/* <h1>Featured content</h1> */}
                {/* <!-- tab-link start here --> */}
                <div className="row space-between align-center">
                  <div className="connect-link flex align-center">
                    {/* All Tab div */}
                    <div style={{ width: "2%" }}>
                      <li className={activeTab === 0 ? "active" : ""}>
                        <Link
                          onClick={() => handleTabClick(0)}
                          className={activeTab === 0 ? "tab active" : ""}
                          data-toggle-target=".tab-content-0"
                        >
                          All
                        </Link>
                      </li>
                    </div>
                    {/* Slider Div */}
                    <div
                      style={{
                        width: "85%",
                        paddingLeft: "46px",
                        paddingRight: "46px",
                      }}
                    >
                      <Slider {...sliderSettings}>
                        {mergedInterests?.map((interest, index) => (
                          <li
                            key={index}
                            className={activeTab === index + 1 ? "active" : ""}
                          >
                            <div
                              style={{
                                marginLeft: "5px",
                                marginRight: "5px",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <Link
                                onClick={() => {
                                  handleTabClick(index + 1);
                                  setIndexTab(index + 1);
                                  onInterestClick(interest.id);
                                }}
                                className={
                                  activeTab === index + 1 ? "tab active" : ""
                                }
                                data-toggle-target={`.tab-content-${index + 1}`}
                              >
                                {interest?.interestName}
                              </Link>
                            </div>
                          </li>
                        ))}
                      </Slider>
                    </div>
                    {/* Sort by and Filter By Div  */}
                    <div className="connect-box" style={{ width: "11%" }}>
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
                </div>
                {/* <!-- tab-link start here --> */}
              </div>
              {/* <!-- tab-content here --> */}
              {activeTab === 0 && (
                <div
                  className={
                    activeTab === 0 && "tab-content tab-content-0 active"
                  }
                >
                  <div className="interest-guru ">
                    {latestBlog.map((blog, index) => {
                      return (
                        <div key={index}>
                          <div className="wrap flex">
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
                                      src={blog.author_profile_image}
                                      alt="profile"
                                    />
                                  </figure>
                                  <div className="innerContent">
                                    <h6>{blog.author}</h6>
                                    <p>{blog.creation_date}</p>
                                  </div>
                                </div>
                                <ul className="flex">
                                  <li
                                    onClick={() => {
                                      blog.saved === "yes"
                                        ? onBlogUnSave(blog.id)
                                        : onBlogSave(blog.id);
                                      setButtonClicked(!buttonClicked);
                                    }}
                                  >
                                    <a>
                                      <img
                                        src={
                                          blog.saved === "yes"
                                            ? "app/images/color-bookmarks.png"
                                            : "./app/images/bookmarkIcon.png"
                                        }
                                        alt={
                                          blog.saved === "yes"
                                            ? "coloredbookmarkIcon"
                                            : "bookmarkIcon"
                                        }
                                        title={
                                          blog.saved === "yes"
                                            ? "coloredbookmarkIcon"
                                            : "bookmarkIcon"
                                        }
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a>
                                      <img
                                        src="app/images/dotsIcons.png"
                                        alt="Genaiguru dots-icon"
                                        title="Genaiguru dots-icon"
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </div>

                              <h5
                                onClick={() => onBlogClick(blog.id)}
                                style={{ cursor: "pointer" }}
                              >
                                {blog.title}
                              </h5>
                              <p>{blog.short_description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              {/* <!-- 2nd --> */}
              {activeTab === indexTab && (
                <div
                  className={
                    activeTab === indexTab &&
                    `tab-content tab-content-${indexTab} active`
                  }
                >
                  {interestBlog.length < 1 ? (
                    <h1>Data Not Found</h1>
                  ) : (
                    <div className="interest-guru ">
                      {interestBlog.map((interest, index) => {
                        return (
                          <div className="wrap flex">
                            <figure>
                              <img src={interest.banner_image} />
                            </figure>
                            <div className="content">
                              <div className="flex space-between">
                                <div className="wrapper flex">
                                  <figure>
                                    <img
                                      src={interest.author_profile_image}
                                      alt="Genaiguru userIcon"
                                      title="Genaiguru userIcon"
                                    />
                                  </figure>
                                  <div className="innerContent">
                                    <h6>{interest.author}</h6>
                                    <p>{interest.creation_date}</p>
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
                              <h5
                                onClick={() => onBlogClick(interest.id)}
                                style={{ cursor: "pointer" }}
                              >
                                {interest.title}
                              </h5>
                              <p>{interest.short_description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
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
                      {/* <div className="">
                        <Slider {...sliderSettings} className="slider_test">
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
                            {myInterests?.map((interest, index) => (
                              <li
                                key={index}
                                className={activeTab === 5 ? "active" : ""}
                              >
                                <Link
                                  onClick={() => handleTabClick(5)}
                                  className={
                                    activeTab === 5 ? "tab active" : ""
                                  }
                                  data-toggle-target=".tab-content-5"
                                >
                                  {interest?.interest_name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </Slider>
                      </div> */}
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
          <h2>Blog</h2>
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
                      {latestBlog.map((blog, index) => {
                        return (
                          <div className="wrap flex" key={index}>
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
                                    src={blog.author_profile_image}
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
                                <li
                                  onClick={() => {
                                    blog.saved === "yes"
                                      ? onBlogUnSave(blog.id)
                                      : onBlogSave(blog.id);
                                    setButtonClicked(!buttonClicked);
                                  }}
                                >
                                  <a>
                                    <img
                                      src={
                                        blog.saved === "yes"
                                          ? "app/images/color-bookmarks.png"
                                          : "./app/images/bookmarkIcon.png"
                                      }
                                      alt={
                                        blog.saved === "yes"
                                          ? "coloredbookmarkIcon"
                                          : "bookmarkIcon"
                                      }
                                      title={
                                        blog.saved === "yes"
                                          ? "coloredbookmarkIcon"
                                          : "bookmarkIcon"
                                      }
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
                        );
                      })}
                    </div>
                  </div>
                </div>
                {/* <!-- 2nd --> */}
                <div className="tab-content tab-content-2 ">
                  <div className="interest-guru ">
                    <div className="interest-sliders">
                      <div className="wrap flex">
                        <figure>
                          <a>
                            <img
                              src=""
                              alt="Genaiguru Guru-keeps"
                              title="Genaiguru Guru-keeps"
                            />
                          </a>
                        </figure>
                        <div className="content">
                          <div className="wrapper flex">
                            <figure>
                              <img
                                src=""
                                alt="Genaiguru authorImg"
                                title="Genaiguru authorImg"
                              />
                            </figure>
                            <div className="innerContent">
                              <h6>author</h6>
                              <p> creation_date</p>
                            </div>
                          </div>
                          <p style={{ cursor: "pointer" }}>title</p>
                          <ul className="flex">
                            <li>
                              <a>
                                <img
                                  src={"app/images/color-bookmarks.png"}
                                  alt={"coloredbookmarkIcon"}
                                  title={"coloredbookmarkIcon"}
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
    </div>
  );
};

export default FeaturedContent;
