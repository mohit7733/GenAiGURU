import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import {
  BASE_PATH,
  PATH_ADDINTERESTS,
  PATH_REGISTER_COMPLETE,
} from "../../routes";
import axios from "axios";
import { getBaseURL } from "../../api/config";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Login6 = () => {
  const navigate = useNavigate();
  // State to store data from the API
  const [expertData, setExpertData] = useState([]);
  const [selectedExpertsIndex, setSelectedExpertsIndex] = useState([]);

  const token = JSON.parse(localStorage.getItem("token"));
  const userId = JSON.parse(localStorage.getItem("UserId"));

  /* UseEffect for Get Expert Writer's API */
  useEffect(() => {
    axios
      .get(`${getBaseURL()}/authors`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const expertsWithInitialFollowState = response.data.authors.map(
          (expert) => ({
            ...expert,
            isFollowing: false,
          })
        );
        setExpertData(expertsWithInitialFollowState);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const sendExpertsIDOnContinue = () => {
    if (selectedExpertsIndex == 0) {
      toast.warn("Follow Atleast One Experts", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    fetch(`${getBaseURL()}/auth/follow-author`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author_ids: selectedExpertsIndex,
      }),
    })
      .then((res) => {
        console.log(res);
        if (selectedExpertsIndex.length >= 1) {
          if (res.status === 200) {
            navigate(`${PATH_REGISTER_COMPLETE}`);
            localStorage.setItem("userLoggedIn", JSON.stringify("true"));
          }
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // Function to handle Follow button click for a specific expert
  const handleFollowClick = (expertId) => {
    setExpertData((prevExpertData) =>
      prevExpertData.map((expert) =>
        expert.id === expertId
          ? { ...expert, isFollowing: !expert.isFollowing }
          : expert
      )
    );

    const indexExists = selectedExpertsIndex.includes(expertId);
    setSelectedExpertsIndex((prevIndices) =>
      indexExists
        ? prevIndices.filter((prevIndex) => prevIndex !== expertId)
        : [...prevIndices, expertId]
    );
  };

  var sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
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

  return (
    <div>
      <section className="interestSection second mainBg">
        <div className="wrapper">
          <div className="cancelBtn">
            <Link to={PATH_ADDINTERESTS}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </Link>
            Cancel
          </div>
          <h1>You can follow expert writer!</h1>
          <p>
            You will find the best posts in the feed according <br /> to your
            following authors.
          </p>

          <div className="profileList followexperts">
            <Slider {...sliderSettings}>
              {expertData.map((Writer, index) => {
                return (
                  <li key={Writer.id}>
                    <figure>
                      <img
                        src={Writer.profile_image}
                        alt="Genaiguru user img"
                        title="Genaiguru user image"
                      />
                    </figure>
                    <div className="names">
                      <h5>{Writer.name}</h5>
                      <p>{Writer.title}</p>
                    </div>
                    <div className="btnWrap">
                      <Link
                        className={
                          selectedExpertsIndex.includes(Writer.id)
                            ? "selectedExperts"
                            : "btnSecond"
                        }
                        onClick={() => handleFollowClick(Writer.id)}
                      >
                        {Writer.isFollowing ? "Following" : "Follow"}
                      </Link>
                    </div>
                  </li>
                );
              })}
            </Slider>
          </div>

          <div className="buttonText">
            <Link className="loginBtn" onClick={sendExpertsIDOnContinue}>
              Continue
            </Link>
            <ToastContainer autoClose={1000} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login6;
