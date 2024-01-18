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
            title="Genaiguru privacy-banner"
          />
        </div>
        <div className="privacy-vats commanContent">
          {/* <h3>{privacyPolicy.title}</h3> */}
          <div className="date">
            {/* <p>
                          Effactive date: <span> March 24, 2023</span>
                        </p> */}
          </div>
          <p>
            <p
              dangerouslySetInnerHTML={{
                __html: privacyPolicy.description,
              }}
            />

            {/* Looking to upgrade your salary in the uk? Get the salary
                        you’re worth by learning to code. 98% employed within 12
                        months of qualifying. 28% of students are hired while on
                        the course. Change career. Career changing skills.
                        Spaces filling up fast. Looking to upgrade your salary
                        in{" "} */}
            {/* {privacyPolicy.description} */}
          </p>
        </div>
        <div className="service-terms">
          <ul>
            <li>
              <Link to={PATH_TERMS_AND_SERVICES}>Terms of service</Link>
            </li>
            {/* <li>
                          <a href="#">Privacy Policy</a>
                        </li> */}
          </ul>

          {/* <h5>Terms of service</h5>
                      <p>
                        Looking to upgrade your salary in the uk? Get the salary
                        you’re worth by learning to code. 98% employed within 12
                        months of qualifying. 28% of students are hired while on
                        the course. Change career. Career changing skills.
                        Spaces filling up fast. Looking to upgrade your salary
                        in the uk? Looking to upgrade your salary in the uk? Get
                        the salary you’re worth by learning to code. 98%
                        employed within 12 months of qualifying. 28% of students
                        are hired while on the course. Change career. Career
                        changing skills. Spaces filling up fast.
                      </p> */}
        </div>
      </div>
    </div>
  );
};
export default PrivacyPolicy;
