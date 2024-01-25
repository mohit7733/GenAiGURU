import React, { useState, useEffect } from "react";
import { PATH_MOBLIE_SETTINGS, PATH_TERMS_AND_SERVICES } from "../../routes";
import { getBaseURL } from "../../api/config";
import axios from "axios";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState({
    title: "",
    description: "",
  });

  // get API for Privacy Policy.......
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`${getBaseURL()}/privacy-policy`, {})
      .then((response) => {
        setPrivacyPolicy({
          title: response?.data?.data?.title,
          description: response?.data?.data?.description,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      <div className="mob_privacy hideDes">
        <div className="mobileHead flex">
          <Link to={PATH_MOBLIE_SETTINGS} className="backBtns">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
      <div>
        <h5>Privacy & Policy</h5>
        <div className="privacy-banner">
          <img
            src="app/images/privacy-banner.png"
            alt="Genaiguru privacy-banner"
          />
        </div>
        <div className="privacy-vats commanContent">
          <div className="date"></div>
          <p>
            <p
              dangerouslySetInnerHTML={{
                __html: privacyPolicy.description,
              }}
            />
          </p>
        </div>
        <div className="service-terms">
          <ul>
            <li>
              <Link to={PATH_TERMS_AND_SERVICES}>Terms of service</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default PrivacyPolicy;
