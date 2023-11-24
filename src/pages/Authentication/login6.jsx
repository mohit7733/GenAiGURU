import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PATH_ADDINTERESTS, PATH_REGISTER_COMPLETE } from "../../routes";
import axios from "axios";
import { getBaseURL } from "../../api/config";

const Login6 = () => {
  const navigate = useNavigate();
  // State to store data from the API
  const [expertData, setExpertData] = useState([]);
  const [selectedExpertsIndex, setSelectedExpertsIndex] = useState([]);
  const token = JSON.parse(localStorage.getItem("registerToken"));
  const userId = JSON.parse(localStorage.getItem("UserId"));

  /* UseEffect for Get Expert Writer's API */
  useEffect(() => {
    axios
      .get(`${getBaseURL()}/expert-users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const expertsWithInitialFollowState = response.data.experts.map(
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
    fetch(`${getBaseURL()}/follow-experts`, {
      method: "POST",
      body: JSON.stringify({
        // user_id: userId,
        expert_ids: selectedExpertsIndex,
      }),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigate(`${PATH_REGISTER_COMPLETE}`);
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
          <ul className="profileList">
            {expertData.map((Writer, index) => {
              return (
                <li key={Writer.id}>
                  <figure>
                    <img
                      src="app/images/bigAvatar.png"
                      alt="Genaiguru user img"
                      title="Genaiguru user image"
                    />
                  </figure>
                  <div className="names">
                    <h5>{Writer.name}</h5>
                    <p>{Writer.role_user}</p>
                  </div>
                  <div className="btnWrap">
                    <Link
                      className="btnSecond"
                      onClick={() => handleFollowClick(Writer.id)}
                    >
                      {Writer.isFollowing ? "Following" : "Follow"}
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="buttonText">
            <Link className="loginBtn" onClick={sendExpertsIDOnContinue}>
              Continue
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login6;
