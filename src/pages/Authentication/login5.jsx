import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getBaseURL, getHeaders } from "../../api/config";
import { PATH_FOLLOWEXPERTS, BASE_PATH, PATH_WELCOME } from "../../routes";
import { toast ,ToastContainer} from "react-toastify";

const Login5 = () => {
  const navigate = useNavigate();
  const [interestData, setInterestData] = useState([]);
  const [selectedInterestIndex, setSelectedInterestIndex] = useState([]);

  const registerToken = JSON.parse(localStorage.getItem("token"));
  const userId = JSON.parse(localStorage.getItem("UserId"));

  /* UseEffect for Get Interest API */
  useEffect(() => {
    axios
      .get(`${getBaseURL()}/interests`, {
        headers: {
          Authorization: `Bearer ${registerToken}`,
        },
      })
      .then((response) => {
        setInterestData(response.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  /* send Interests API on Clicking Continue button */
  const sendInterestsOnContinue = () => {
    if (selectedInterestIndex.length == 0) {
      // alert("Please Select Atleast One Interest");
      toast.warn("Please Select Atleast One Interest !", {
        position: toast.POSITION.TOP_CENTER
      });
    }
    fetch(`${getBaseURL()}/myinterests`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        interest_id: selectedInterestIndex,
      }),
    })
      .then((res) => {
        console.log(res);
        if (selectedInterestIndex.length >= 1) {
          navigate(`${PATH_FOLLOWEXPERTS}`);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const addInterestIndex = (index) => {
    const indexExists = selectedInterestIndex.includes(index);

    setSelectedInterestIndex((prevIndices) =>
      indexExists
        ? prevIndices.filter((prevIndex) => prevIndex !== index)
        : [...prevIndices, index]
    );
  };

  return (
    <div>
      <section className="interestSection mainBg">
        <div className="wrapper">
          <div className="cancelBtn">
            <Link to={PATH_WELCOME}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </Link>
            Cancel
          </div>
          <h1>Let’s choose your interest</h1>
          <p>This will help us create the best experience for you!</p>
          <ul>
            {interestData.map((data, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    addInterestIndex(data.id);
                  }}
                  className={
                    selectedInterestIndex.includes(data.id) ? "selected" : ""
                  }
                >
                  {data.interestName}
                </li>
              );
            })}
          </ul>
          <div className="buttonText">
            {selectedInterestIndex.length !== 0 && (
              <p>
                Selected <span>{selectedInterestIndex.length}</span>
              </p>
            )}
            <button className="loginBtn"  onClick={sendInterestsOnContinue} >
              Continue
            </button>
            <ToastContainer  autoClose={1000} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login5;
