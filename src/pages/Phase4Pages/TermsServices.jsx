import React, { useState, useEffect } from "react";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import axios from "axios";
import { getBaseURL } from "../../api/config";
import { Link } from "react-router-dom";
import { PATH_PRIVACY_POLICY } from "../../routes";

const GuruGenesis = () => {
  const [termsServices, setTermsServices] = useState({
    title: "",
    description: "",
  });

  // get API for Terms & Services.......
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`${getBaseURL()}/terms-conditions`, {})
      .then((response) => {
        setTermsServices({
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
      <MobileHeader />
      {/* <!-- main section start here --> */}
      <section class="mainWrapper flex ">
        <Sidebar />
        <div className="rightSection">
          <div class="keeps-container">
            <div class="gurukeeps-wrapper ">
              <div className="mob_terms hideDes">
                <div className="mobileHead flex">
                  <Link to={PATH_PRIVACY_POLICY} className="backBtns">
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
              <h1>Terms & Services</h1>
            </div>
            <div class="tab-content tab-content-2 active">
              <div class="about-content commanContent">
                <p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: termsServices.description,
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuruGenesis;
