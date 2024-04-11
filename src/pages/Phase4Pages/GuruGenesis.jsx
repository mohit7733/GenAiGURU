import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import axios from "axios";
import { getBaseURL } from "../../api/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MobileSideBar from "../../components/Layout/MobileSideBar";

const GuruGenesis = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState([]);
  const [activeTab, setActiveTab] = useState(1);
  const [faq, setFaq] = useState([]);
  const [isVisible, setIsVisible] = useState();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [contactUsDetails, setContactUsDetails] = useState({
    fullName: "",
    email: "",
    comment: "",
  });
  const [aboutus, setAboutus] = useState({
    title: "",
    description: "",
  });

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  // get API for About-us.......
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`${getBaseURL()}/about-us`, {})
      .then((response) => {
        setAboutus({
          title: response?.data?.data?.title,
          description: response?.data?.data?.description,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // get API for FAQ.......

  useEffect(() => {
    axios
      .get(`${getBaseURL()}/faq`)
      .then((response) => {
        // Handle the successful response
        setFaq(response.data.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleContactUsDetails = (e) => {
    setContactUsDetails({
      ...contactUsDetails,
      [e.target.name]: e.target.value,
    });
  };

  const onchangeCheck = (key, value) => {
    const errors = {};
    if (!value) {
      errors[key] = key + "Required !";
    }
    setErrors(errors);
  };

  const validate = () => {
    const error = {};
    if (!fullname) {
      error["fullname"] = "Name Required!";
    } else {
      error["fullname"] = "";
    }
    if (!email) {
      error["email"] = "Email Required!";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error["email"] = "Please Enter Valid Email!";
    } else {
      error["email"] = "";
    }
    if (!comment) {
      error["comment"] = "Comment Required!";
    } else {
      error["comment"] = "";
    }

    return error;
  };

  const onContact = (e) => {
    e.preventDefault();
    const errors = validate();
    if (errors.fullname == "" && errors.email == "" && errors.comment == "") {
      axios
        .post(`${getBaseURL()}/contact-us`, {
          name: fullname,
          email: email,
          comment: comment,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            toast.success(response.data.message, {
              position: toast.POSITION.TOP_CENTER,
            });
            setFullName("");
            setComment("");
            setEmail("");
          }
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
            toast.error(error.response.data.message, {
              position: toast.POSITION.TOP_CENTER,
            });
          } else if (error.request) {
            console.log("network error");
          } else {
            console.log(error);
          }
        });
    } else {
      setErrors(errors);
    }
  };

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div>
      <MobileHeader />
      {/* <!-- main section start here --> */}
      <section class="mainWrapper flex hideMob">
        <Sidebar />
        <div className="rightSection">
          <div class="full-width">
            <div class="keeps-container">
              <div class="gurukeeps-wrapper ">
                <h1>Contact GenAIGuru</h1>
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
                      GenAIGuru
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
                      {faq.map((faqdata, index) => (
                        <div class="faq-box">
                          <div
                            class="accordion"
                            onClick={(e) =>
                              setIsVisible(isVisible == index ? -1 : index)
                            }
                          >
                            <h4>{faqdata.question}</h4>
                            <div
                              class="leftArrow"
                              style={{
                                transform:
                                  isVisible === index
                                    ? "rotate(90deg)"
                                    : "rotate(0deg)",
                                transition: "transform 0.3s ease",
                              }}
                            >
                              <img
                                src="app/images/arrow-left.png"
                                alt="Genaiguru arrow-left"
                              />
                            </div>
                          </div>
                          <div
                            class="panel"
                            style={
                              isVisible == index ? { display: "block" } : {}
                            }
                          >
                            <p>{faqdata.answer}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div class="contact-container">
                      <h4>Contact us</h4>
                      <form action="" onSubmit={onContact}>
                        <div class="contact-box">
                          <label for="">Full Name</label>
                          <input
                            type="text"
                            placeholder="GenAIGuru"
                            name="fullName"
                            value={fullname}
                            // onChange={handleContactUsDetails}
                            onChange={(e) => setFullName(e.target.value)}
                            onKeyUp={onchangeCheck}
                          />
                          {errors["fullname"] && (
                            <div className="error">{errors.fullname}</div>
                          )}
                        </div>
                        <div class="contact-box">
                          <label for="">Email</label>
                          <input
                            type="email"
                            placeholder="genaiguru@gmail.com"
                            name="email"
                            value={email}
                            // onChange={handleContactUsDetails}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyUp={onchangeCheck}
                          />
                          {errors["email"] && (
                            <div className="error">{errors.email}</div>
                          )}
                        </div>
                        <div class="contact-box">
                          <label for="">Comment</label>
                          <textarea
                            name="comment"
                            placeholder="Philosophy student|| Content writer|| Avid Writer|| Storyteller|| Technical Writer|| Tech Trends ||"
                            value={comment}
                            // onChange={handleContactUsDetails}
                            onChange={(e) => setComment(e.target.value)}
                            onKeyUp={onchangeCheck}
                          ></textarea>
                          {errors["comment"] && (
                            <div className="error">{errors.comment}</div>
                          )}
                        </div>
                        <button class="loginBtn">Contact</button>
                        <ToastContainer autoClose={1000} />
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
                  <div class="about-content commanContent">
                    <h4>{aboutus.title}</h4>
                    <p>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: aboutus.description,
                        }}
                      />
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- main section end here --> */}
      {/* <!-- mobile section start here --> */}
      <div class="mob_profile commanMobHead hideDes">
        <div class="mobileHead flex">
          <div class="hamburger" onClick={toggleMobileSidebar}>
            <img src="app/images/hamburgerIcon.png" alt="Genaiguru hamburger" />
          </div>
          <h2>Contact & About us</h2>
        </div>
        <div class="innerCommanContent contactFaq">
          <div class="rightSection">
            <div class="keeps-container">
              <div class="gurukeeps-wrapper ">
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
                <div class="tab-content tab-content-1 active">
                  <div class="contact-wrapper flex">
                    <div class="faq-container">
                      <h5>FAQ</h5>
                      {faq.map((faqdata, index) => (
                        <div class="faq-box">
                          <div
                            class="accordion"
                            onClick={(e) =>
                              setIsVisible(isVisible == index ? -1 : index)
                            }
                          >
                            <h4>{faqdata.question}</h4>
                            <div
                              class="leftArrow"
                              style={{
                                transform:
                                  isVisible === index
                                    ? "rotate(90deg)"
                                    : "rotate(0deg)",
                                transition: "transform 0.3s ease",
                              }}
                            >
                              <img
                                src="app/images/arrow-left.png"
                                alt="Genaiguru arrow-left"
                              />
                            </div>
                          </div>
                          <div
                            class="panel"
                            style={
                              isVisible == index ? { display: "block" } : {}
                            }
                          >
                            <p>{faqdata.answer}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div class="contact-container">
                      <h4>Contact us</h4>
                      <form action="" onSubmit={onContact}>
                        <div class="contact-box">
                          <label for="">Full Name</label>
                          <input
                            type="text"
                            placeholder="Prosing"
                            onChange={(e) => setFullName(e.target.value)}
                            onKeyUp={onchangeCheck}
                          />
                          {errors["fullname"] && (
                            <div className="error">{errors.fullname}</div>
                          )}
                        </div>
                        <div class="contact-box">
                          <label for="">Email</label>
                          <input
                            type="text"
                            placeholder="prosing@gmail.com"
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyUp={onchangeCheck}
                          />
                          {errors["email"] && (
                            <div className="error">{errors.email}</div>
                          )}
                        </div>
                        <div class="contact-box">
                          <label for="">Comment</label>
                          <textarea
                            name="comment"
                            placeholder="Philosophy student|| Content writer|| Avid Writer|| Storyteller|| Technical Writer|| Tech Trends ||"
                            onChange={(e) => setComment(e.target.value)}
                            onKeyUp={onchangeCheck}
                          ></textarea>
                          {errors["comment"] && (
                            <div className="error">{errors.comment}</div>
                          )}
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
                <div class="tab-content tab-content-2 active">
                  <div class="about-content">
                    <h4>{aboutus.title}</h4>
                    <p>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: aboutus.description,
                        }}
                      />
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- mobile section end here --> */}
      {isMobileSidebarOpen && (
        <MobileSideBar toggleMobileSidebar={toggleMobileSidebar} />
      )}
    </div>
  );
};

export default GuruGenesis;
