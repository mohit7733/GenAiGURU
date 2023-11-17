import React, { useState } from "react";
import { Link } from "react-router-dom";

const GuruGenesis = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div>
      {/* <!-- main section start here --> */}
      <section>
        <div class="full-width">
          <div class="keeps-container">
            <div class="gurukeeps-wrapper ">
              <h1>Contact to Guru Genesis</h1>
              {/* <!-- tab-link start here --> */}
              <ul class="connect-link flex">
                <li className={activeTab === 1 ? " active" : ""}>
                  <Link
                    onClick={() => handleTabClick(1)}
                    className={activeTab === 1 ? "tab active" : ""}
                    data-toggle-target=".tab-content-1"
                  >
                    Contact us
                  </Link>
                </li>
                <li className={activeTab === 2 ? "active" : ""}>
                  <Link
                    onClick={() => handleTabClick(2)}
                    className={activeTab === 2 ? "tab active" : ""}
                    data-toggle-target=".tab-content-2"
                  >
                    Guru genesis
                  </Link>
                </li>
              </ul>
              {/* <!-- tab-link start here --> */}
            </div>
            {/* <!--  faq tab-content here --> */}
            {activeTab === 1 && (
              <div
                className={
                  activeTab === 1 && "tab-content tab-content-1 active"
                }
              >
                {" "}
                <div class="contact-wrapper flex">
                  <div class="faq-container">
                    <h5>FAQ</h5>
                    <div class="faq-box">
                      <div class="accordion">
                        <h4>What impact have commons users had so far </h4>
                        <div class="leftArrow">
                          <img
                            src="app/images/arrow-left.png"
                            alt="Genaiguru arrow-left"
                            title="Genaiguru arrow-left"
                          />
                        </div>
                      </div>
                      <div class="panel">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                    <div class="faq-box">
                      <div class="accordion">
                        <h4>What impact have commons users had so far </h4>
                        <div class="leftArrow">
                          <img
                            src="app/images/arrow-left.png"
                            alt="Genaiguru arrow-left"
                            title="Genaiguru arrow-left"
                          />
                        </div>
                      </div>
                      <div class="panel">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                    <div class="faq-box">
                      <div class="accordion">
                        <h4>What impact have commons users had so far </h4>
                        <div class="leftArrow">
                          <img
                            src="app/images/arrow-left.png"
                            alt="Genaiguru arrow-left"
                            title="Genaiguru arrow-left"
                          />
                        </div>
                      </div>
                      <div class="panel">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="contact-container">
                    <h4>Contact us</h4>
                    <form action="">
                      <div class="contact-box">
                        <label for="">Full Name</label>
                        <input type="text" placeholder="GenAIGuru" />
                      </div>
                      <div class="contact-box">
                        <label for="">Email</label>
                        <input type="text" placeholder="genaiguru@gmail.com" />
                      </div>
                      <div class="contact-box">
                        <label for="">Comment</label>
                        <textarea
                          name="comment"
                          placeholder="Philosophy student|| Content writer|| Avid Writer|| Storyteller|| Technical Writer|| Tech Trends ||"
                        ></textarea>
                      </div>
                      <button type="submit" class="loginBtn">
                        Contact
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
            {/* <!--  faq tab-content end here --> */}
            {activeTab === 2 && (
              <div
                className={
                  activeTab === 2 && "tab-content tab-content-2 active"
                }
              >
                <div class="about-content">
                  <h4>About us</h4>
                  <p>
                    Looking To Upgrade Your Salary In The UK? Get The Salary
                    You’re Worth By Learning To Code. 98% Employed Within 12
                    Months Of Qualifying. 28% Of Students Are Hired While On The
                    Course. Change Career. Career Changing Skills. Spaces
                    Filling Up Fast. Looking To Upgrade Your Salary In The UK?{" "}
                  </p>
                </div>
                <div class="about-content">
                  <h4>Terms of service </h4>
                  <p>
                    Looking to upgrade your salary in the uk? Get the salary
                    you’re worth by learning to code. 98% employed within 12
                    months of qualifying. 28% of students are hired while on the
                    course. Change career. Career changing skills. Spaces
                    filling up fast. Looking to upgrade your salary in the uk?
                    Looking to upgrade your salary in the uk? Get the salary
                    you’re worth by learning to code. 98% employed within 12
                    months of qualifying. 28% of students are hired while on the
                    course. Change career. Career changing skills. Spaces
                    filling up fast.{" "}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* <!-- main section end here --> */}
    </div>
  );
};

export default GuruGenesis;
