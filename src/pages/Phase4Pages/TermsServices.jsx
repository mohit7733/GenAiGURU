import React, { useState, useEffect } from "react";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import axios from "axios";
import { getBaseURL } from "../../api/config";

const GuruGenesis = () => {
  const [termsServices, setTermsServices] = useState({
    title: "",
    description: "",
  });

  // get API for Terms & Services.......
  useEffect(() => {
    window.scrollTo(0, 0)
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
      <section class="mainWrapper flex hideMob">
        <Sidebar />
        <div className="rightSection">
          
            <div class="keeps-container">
              <div class="gurukeeps-wrapper ">
                <h1>Terms & Services</h1>
              </div>
              <div class="tab-content tab-content-2 active">
                <div class="about-content commanContent">
    
                  
                  <p>
                  <p dangerouslySetInnerHTML={{ __html: termsServices.description }} />
                  {/* {termsServices.description} */}
                    {/* Looking to upgrade your salary in the uk? Get the salary
                    you’re worth by learning to code. 98% employed within 12
                    months of qualifying. 28% of students are hired while on the
                    course. Change career. Career changing skills. Spaces
                    filling up fast. Looking to upgrade your salary in the uk?
                    Looking to upgrade your salary in the uk? Get the salary
                    you’re worth by learning to code. 98% employed within 12
                    months of qualifying. 28% of students are hired while on the
                    course. Change career. Career changing skills. Spaces
                    filling up fast.{" "} */}
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
