import React, { useEffect, useState } from "react";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getBaseURL } from "../../api/config";
import { PATH_BLOG_DETAILS } from "../../routes";

const Latestblog = () => {
  const sliderRef = useRef();
  const [latestBlog, setLatestBlog] = useState([]);

  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));

  // Get API for Popular Blogs
  useEffect(() => {
    axios
      .get(`${getBaseURL()}/latest-blogs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setLatestBlog(response.data.blogs);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // Slide code
  var settings2 = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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

  const onBlogClick = (BlogId) => {
    navigate(`${PATH_BLOG_DETAILS}?id=${BlogId}`);
  };
  return (
    <>
      <div className="blog-wrap">
        <div className="heading-link flex">
          <h1>Latest blog</h1>
          <Link to="/BlogDetails">View all</Link>
        </div>
        <div className="blog-slider ">
          <Slider
            ref={sliderRef}
            {...settings2}
            id="Slider-4"
            className="slider_test"
          >
            {latestBlog.map((blog, index) => {
              return (
                <div key={index}>
                  <div className="wrap">
                    <div onClick={() => onBlogClick(blog.id)}>
                      <figure>
                        <img
                          src={blog.photo}
                          alt="Genaiguru blog image"
                          title="Genaiguru blog image"
                        />
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
                            title="Genaiguru arrow button"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Latestblog;
