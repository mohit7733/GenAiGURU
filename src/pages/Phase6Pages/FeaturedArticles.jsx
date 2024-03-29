import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { ToastContainer, toast } from "react-toastify";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { getBaseURL } from "../../api/config";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import { BASE_PATH, PATH_ARTICLE_DETAILS } from "../../routes";
import WithAuth from "../Authentication/WithAuth";
import FeaturedContentPopup from "./FeaturedContentPopup";
import Pagination from "./Pagination";
import userimageIcon from "../../assets/images/person.png";

const FeaturedArticles = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const [indexTab, setIndexTab] = useState();
  const [filter, setFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [buttonClicked, setButtonClicked] = useState(false);
  const [totalArticles, setTotalArticles] = useState("");

  const [myInterests, setMyInterests] = useState();
  const [userSelectedIneterests, setUserSelectedIneterests] = useState([]);
  const [mergedInterests1, setMergedInterests] = useState([]);
  const [articles, setArticles] = useState([]);
  const [interestArticles, setInterestArticles] = useState([]);
  const [interestid, setInterestid] = useState("");

  const navigate = useNavigate();
  const sliderRef = useRef();

  const token = JSON.parse(localStorage.getItem("token"));
  const userId = JSON.parse(localStorage.getItem("UserId"));

  // Get API for Popular articles View ALL
  useEffect(() => {
    axios
      .get(
        `${getBaseURL()}/articles?user_id=${userId}&page_number=${currentPage}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        window.scrollTo(0, 0);
        setTotalArticles(response.data.total_count);
        // console.log(response?.data?.articles);
        setArticles(response?.data?.articles);
        setButtonClicked(false);
        if (interestid != "") {
          onInterestClick(interestid);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [buttonClicked, currentPage]);

  const date = new Date();
  const data = date.setDate(date.getDate());
  const dateObject = new Date(data);
  const currentTime = dateObject.toISOString().split("T")[0];

  //Pagination code Starts here
  const articlesPerPage = 10;
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  //Optional used only when mobile have different UI
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  //Pagination ends

  const Featuredpopup = (popularity, sortby, currentDate) => {
    console.log(popularity, sortby, currentDate, currentTime, "test");

    axios
      .get(
        `${getBaseURL()}/articles?from_date=${currentDate}&to_date=${currentTime}&filter_by=` +
          popularity,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setArticles(response?.data?.articles);
        setTotalArticles(response.data.total_count);
        console.log(response?.data, "test1");
        setFilter(false);
      })
      .catch(
        (err) => {
          console.log(err.message, " articles api error");
          toast.error("No data found.", {
            position: toast.POSITION.TOP_CENTER,
          });
          <ToastContainer autoClose={1000} />;
          setFilter(false);
        },
        [currentDate]
      );
  };

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
  // Get API for Interests
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`${getBaseURL()}/interests`, {
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
    getSelectedInterest();
  }, []);

  // Specify the key names to use for comparison
  const keyForUserSelected = "interest_id";
  const keyForMyInterests = "id";

  // Merge and remove duplicates
  useEffect(() => {
    if (myInterests?.length > 0) {
      const mergedInterests = mergeAndRemoveDuplicates(
        userSelectedIneterests,
        myInterests,
        keyForUserSelected,
        keyForMyInterests
      );
      setMergedInterests(mergedInterests);
    }
  }, [myInterests, userSelectedIneterests]);
  console.log(mergedInterests1, "merge");

  // Function to handle tab click
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const onArticleClick = (AricleID, titles) => {
    const trimmedTitle = titles.trim();
    console.log("Trimmed title:", trimmedTitle);
    const replacedTitle = trimmedTitle.replace(/\s+/g, "-");
    console.log("Replaced title:", replacedTitle);
    navigate(`${PATH_ARTICLE_DETAILS}?id=${AricleID}?title=${replacedTitle}`);
  };

  // Slider Code
  var settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    arrows: true,
    slidesToScroll: 1,
    autoplay: false,
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
    infinite: false,
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
          dots: true,
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

  const onArticleSave = (articleID) => {
    axios
      .post(
        `${getBaseURL()}/save-article`,
        {
          user_id: userId,
          article_id: articleID,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res?.data);
        toast.success("Article Saved", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  const onArticleUnSave = (articleID) => {
    axios
      .post(
        `${getBaseURL()}/unsave-article`,
        {
          user_id: userId,
          article_id: articleID,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res?.data);
        toast.success("Article Unaved", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  // API for Articles on Clinking Interest in Slider
  const onInterestClick = (interestid, e) => {
    const array = [interestid];
    axios
      .post(`${getBaseURL()}/interestsarticles`, {
        interest_id: array,
        user_id: userId,
      })
      .then((response) => {
        console.log(response?.data, "test");
        setInterestArticles(response?.data?.articles);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <ToastContainer autoClose={1000} pauseOnHover={false} />

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
                        {mergedInterests1?.map((interest, index) => (
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
                                  setInterestid(interest.id);
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
                        {/* <li>
                          <Link to="/sortbydate">
                            <figure>
                              <img src="./app/images/sorting-icon.png" alt="" />
                            </figure>
                          </Link>
                        </li> */}
                        <li>
                          <Link to="" onClick={(e) => setFilter(true)}>
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
                    {currentArticles?.map((article, index) => {
                      return (
                        <div key={index}>
                          <div className="wrap flex">
                            <figure>
                              <img
                                src={article.photo}
                                alt="Genaiguru gureu-keeps-1"
                              />
                            </figure>
                            <div className="content">
                              <div className="flex space-between">
                                <div className="wrapper flex">
                                  <figure>
                                    <img
                                      src={
                                        article.author_profile_image ||
                                        userimageIcon
                                      }
                                      alt="userIcon"
                                    />
                                  </figure>
                                  <div className="innerContent">
                                    <h6>{article.author}</h6>
                                    <p>{article.creation_date}</p>
                                  </div>
                                </div>
                                <WithAuth
                                  callBack={(e) => {
                                    console.log("dd");
                                  }}
                                >
                                  <ul className="flex">
                                    <li
                                      onClick={() => {
                                        article.saved === "yes"
                                          ? onArticleUnSave(article.id)
                                          : onArticleSave(article.id);
                                        setButtonClicked(!buttonClicked);
                                      }}
                                    >
                                      <a>
                                        <img
                                          src={
                                            article.saved === "yes"
                                              ? "app/images/color-bookmarks.png"
                                              : "./app/images/bookmarkIcon.png"
                                          }
                                          alt={
                                            article.saved === "yes"
                                              ? "coloredbookmarkIcon"
                                              : "bookmarkIcon"
                                          }
                                          // title={
                                          //   article.saved === "yes"
                                          //     ? "coloredbookmarkIcon"
                                          //     : "bookmarkIcon"
                                          // }
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <img
                                          src="app/images/dotsIcons.png"
                                          alt="Genaiguru dots-icon"
                                        />
                                      </a>
                                    </li>
                                  </ul>
                                </WithAuth>
                              </div>
                              <h5
                                onClick={() =>
                                  onArticleClick(article.id, article.title)
                                }
                                style={{ cursor: "pointer" }}
                              >
                                {article.title}
                              </h5>
                              <p>{article.short_description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <Pagination
                      token="Articles"
                      totalItems={totalArticles}
                      itemsPerPage={articlesPerPage}
                      currentPage={currentPage}
                      onPageChange={handlePageChange}
                    />
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
                  {interestArticles.length < 1 ? (
                    <h3>Data Not Found</h3>
                  ) : (
                    <div className="interest-guru ">
                      {interestArticles.map((interest, index) => {
                        return (
                          <div className="wrap flex">
                            <figure>
                              <img
                                src={interest.banner_image}
                                alt="Genaiguru gureu-keeps-1"
                              />
                            </figure>
                            <div className="content">
                              <div className="flex space-between">
                                <div className="wrapper flex">
                                  <figure>
                                    <img
                                      src={
                                        interest.author_profile_image ||
                                        userimageIcon
                                      }
                                      alt="Genaiguru userIcon"
                                    />
                                  </figure>
                                  <div className="innerContent">
                                    <h6>{interest.author}</h6>
                                    <p>{interest.creation_date}</p>
                                  </div>
                                </div>
                                <ul className="flex">
                                  <li
                                    onClick={() => {
                                      interest.saved === "yes"
                                        ? onArticleUnSave(interest.id)
                                        : onArticleSave(interest.id);
                                      setButtonClicked(!buttonClicked);
                                    }}
                                  >
                                    <a>
                                      <img
                                        src={
                                          interest.saved === "yes"
                                            ? "app/images/color-bookmarks.png"
                                            : "./app/images/bookmarkIcon.png"
                                        }
                                        alt={
                                          interest.saved === "yes"
                                            ? "coloredbookmarkIcon"
                                            : "bookmarkIcon"
                                        }
                                        // title={
                                        //   article.saved === "yes"
                                        //     ? "coloredbookmarkIcon"
                                        //     : "bookmarkIcon"
                                        // }
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
                              <h5
                                onClick={() =>
                                  onArticleClick(interest.id, interest.title)
                                }
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
                      {mergedInterests1?.map((interest, index) => {
                        return (
                          <li key={index}>
                            <a href="#">
                              <img
                                src="app/images/paint-board.png"
                                alt="Genaiguru paint-board"
                              />
                              <img
                                src="app/images/colorPaintBoard.png"
                                alt="Genaiguru colorPaintBoard"
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
      {filter ? <FeaturedContentPopup Featuredpopup={Featuredpopup} /> : ""}
      {/* <!-- mobile section start here --> */}
      <div className="mob_profile commanMobHead hideDes">
        <div className="mobileHead flex">
          <Link to={BASE_PATH} className="hamburger">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </Link>
          <h2>Featured Articles</h2>
          <div className="connect-box">
            <ul className="flex">
              {/* <li>
                <Link to="/sortbydate">
                  <figure>
                    <img src="./app/images/sorting-icon.png" alt="" />
                  </figure>
                </Link>
              </li> */}
              <li>
                <Link to="" onClick={(e) => setFilter(true)}>
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
                      <Slider {...settings2}>
                        {mergedInterests1?.map((interest, index) => (
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
                                  setInterestid(interest.id);
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
                      <div className="interest-sliders">
                        {currentArticles?.map((article, index) => {
                          return (
                            <a className="wrap flex" key={index}>
                              <figure>
                                <Link>
                                  <img
                                    src={article.photo}
                                    alt="Genaiguru Guru-keeps"
                                  />
                                </Link>
                              </figure>
                              <div className="content">
                                <div className="wrapper flex">
                                  <figure>
                                    <img
                                      src={
                                        article.author_profile_image ||
                                        userimageIcon
                                      }
                                      alt="user_icon"
                                    />
                                  </figure>
                                  <div className="innerContent">
                                    <h6>{article.author}</h6>
                                    <p>{article.creation_date}</p>
                                  </div>
                                </div>
                                <p
                                  onClick={() =>
                                    onArticleClick(article.id, article.title)
                                  }
                                >
                                  {article.title}
                                </p>
                                <ul className="flex">
                                  <li
                                    onClick={() => {
                                      // Toggle between onBlogSave and onBlogUnSave based on the condition
                                      article.saved === "yes"
                                        ? onArticleUnSave(article.id)
                                        : onArticleSave(article.id);
                                      setButtonClicked(!buttonClicked);
                                    }}
                                  >
                                    <a>
                                      <img
                                        src={
                                          article.saved === "yes"
                                            ? "app/images/color-bookmarks.png"
                                            : "./app/images/bookmarkIcon.png"
                                        }
                                        alt={
                                          article.saved === "yes"
                                            ? "coloredbookmarkIcon"
                                            : "bookmarkIcon"
                                        }
                                        // title={
                                        //   article.saved === "yes"
                                        //     ? "coloredbookmarkIcon"
                                        //     : "bookmarkIcon"
                                        // }
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
                            </a>
                          );
                        })}
                        {isMobile && (
                          <Pagination
                            token="Articles"
                            totalItems={totalArticles}
                            itemsPerPage={articlesPerPage}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                          />
                        )}
                      </div>
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
                    {interestArticles.length < 1 ? (
                      <h1>Data Not Found</h1>
                    ) : (
                      <div className="interest-guru ">
                        {interestArticles.map((interest, index) => {
                          return (
                            <div className="wrap flex">
                              <figure>
                                <img
                                  src={interest.banner_image}
                                  alt="Genaiguru gureu-keeps-1"
                                />
                              </figure>
                              <div className="content">
                                <div className="flex space-between">
                                  <div className="wrapper flex">
                                    <figure>
                                      <img
                                        src={
                                          interest.author_profile_image ||
                                          userimageIcon
                                        }
                                        alt="Genaiguru userIcon"
                                      />
                                    </figure>
                                    <div className="innerContent">
                                      <h6>{interest.author}</h6>
                                      <p>{interest.creation_date}</p>
                                    </div>
                                  </div>
                                  <ul className="flex">
                                    <li
                                      onClick={() => {
                                        interest.saved === "yes"
                                          ? onArticleUnSave(interest.id)
                                          : onArticleSave(interest.id);
                                        setButtonClicked(!buttonClicked);
                                      }}
                                    >
                                      <a>
                                        <img
                                          src={
                                            interest.saved === "yes"
                                              ? "app/images/color-bookmarks.png"
                                              : "./app/images/bookmarkIcon.png"
                                          }
                                          alt={
                                            interest.saved === "yes"
                                              ? "coloredbookmarkIcon"
                                              : "bookmarkIcon"
                                          }
                                          // title={
                                          //   article.saved === "yes"
                                          //     ? "coloredbookmarkIcon"
                                          //     : "bookmarkIcon"
                                          // }
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
                                <p
                                  onClick={() =>
                                    onArticleClick(interest.id, articles.title)
                                  }
                                  style={{ cursor: "pointer" }}
                                >
                                  {interest.title}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- mobile section end here --> */}
    </div>
  );
};

export default FeaturedArticles;
