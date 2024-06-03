import React, { useEffect, useState } from "react";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getBaseURL } from "../../api/config";
import { PATH_BLOG_DETAILS, PATH_FEATURED_CONTENT } from "../../routes";

const Latestblog = () => {
  const sliderRef = useRef();
  const [latestBlog, setLatestBlog] = useState([]);
  const [featured, setFeatured] = useState("");

  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));
  const userId = JSON.parse(localStorage.getItem("UserId"));

  // Get API for Popular Blogs
  useEffect(() => {
    axios
      .get(`${getBaseURL()}/featured-post?type=blog&user_id=${userId}`)
      .then((response) => {
        setLatestBlog(response.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  let numvid = 0;
  if (latestBlog.length < 3) {
    numvid = latestBlog.length;
  } else {
    numvid = 3;
  }
  // Slide code
  var settings2 = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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

  const onBlogClick = (BlogID, titles) => {
    const trimmedTitle = titles.trim();
    console.log("Trimmed title:", trimmedTitle);
    const replacedTitle = trimmedTitle.replace(/\s+/g, "-");
    console.log("Replaced title:", replacedTitle);
    navigate(`${PATH_BLOG_DETAILS}?id=${BlogID}?title=${replacedTitle}`);
  };
  return (
    <>
      <div className="blog-wrap">
        <div className="heading-link flex">
          <h1>Latest blog</h1>
          <Link to={PATH_FEATURED_CONTENT}>View all</Link>
        </div>
        <div className="blog-slider ">
          <Slider
            ref={sliderRef}
            {...settings2}
            id="Slider-2"
            className="slider_test"
          >
            {latestBlog.map(
              (blog, index) =>
                blog.featured === "yes" && (
                  <div
                    className={numvid < 3 ? "popularvid wrap" : "wrap"}
                    key={index}
                    onClick={() => onBlogClick(blog.id, blog.title)}
                  >
                    <figure>
                      <img src={blog.photo} alt="Genaiguru blog image" />
                    </figure>
                    <div className="layer">
                      <h5>
                        {blog.title}
                        {/* <br />
            {blog.content} */}
                      </h5>
                      <button type="button">
                        <img
                          src="app/images/blogArrowBtnImg.png"
                          alt="Genaiguru arrow button"
                        />
                      </button>
                    </div>
                  </div>
                )
            )}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Latestblog;
