import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import { getBaseURL } from "../../api/config";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import EditProfile from "../Phase3pages/EditProfile";
import { PATH_EDIT_PROFILE, PATH_PROFILE } from "../../routes";

const Settings = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [idea, setIdea] = useState("");
  const [errors, setErrors] = useState([]);
  // const [selectedFile, setSelectedFile] = useState(null);

  const [selectedFiles, setSelectedFiles] = useState([]);
  const userId = JSON.parse(localStorage.getItem("UserId"));

  const navigate = useNavigate();
  // validation for feedback
  const onSubmit = (event) => {
    event.preventDefault();
    const errors = validate1();
    setErrors(errors);
    let fd = new FormData();
    fd.append("user_id", userId);
    fd.append("comment", idea);
    fd.append("media", selectedFiles);
    axios
      .post(`${getBaseURL()}/send-feedback`, fd)
      .then((response) => {
        if (response.status === 200) {
          toast.success("Feedback Sent Successfully", {
            position: toast.POSITION.TOP_CENTER,
          });
          setIdea("");
          setSelectedFiles([]);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };
  const validate1 = () => {
    const error = {};
    if (!idea) {
      error["idea"] = "Feedback Required!";
    } else {
      error["idea"] = "";
    }
    return error;
  };

  // Function to handle tab click
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  //  validation code for old password and new password
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    setErrors(errors);
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
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var SpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/;
    if (!password) {
      error["password"] = "Password Required!";
    } else if (!password.match(lowerCase)) {
      error["password"] = "Password Should Contains lowercase letters !";
    } else if (!password.match(upperCase)) {
      error["password"] = "Password Should Contain Uppercase letters !";
    } else if (!password.match(numbers)) {
      error["password"] = "Password Should Contains Numbers also !";
    } else if (!password.match(SpecialCharacter)) {
      error["password"] = "Password Should Contains Special Character also !";
    } else if (password.length < 8) {
      error["password"] = "Password length Should be more than 8.";
    } else {
      error["password"] = "";
    }
    if (!confirmPassword) {
      error["confirmPassword"] = "Password Required!";
    } else if (!confirmPassword.match(lowerCase)) {
      error["confirmPassword"] = "Password Should Contains lowercase letters !";
    } else if (!confirmPassword.match(upperCase)) {
      error["confirmPassword"] = "Password Should Contain Uppercase letters !";
    } else if (!confirmPassword.match(numbers)) {
      error["confirmPassword"] = "Password Should Contains Numbers also !";
    } else if (!confirmPassword.match(SpecialCharacter)) {
      error["confirmPassword"] =
        "Password Should Contains Special Character also !";
    } else if (confirmPassword.length < 8) {
      error["confirmPassword"] = "Password length Should be more than 8.";
    } else {
      error["confirmPassword"] = "";
    }
    return error;
  };
  // code for get input img and video in feedback

  const FileInput = ({ onFilesChange }) => {
    const handleFilesChange = (e) => {
      const files = Array.from(e.target.files);
      onFilesChange(files);
    };

    return (
      <input
        type="file"
        accept="image/*,video/*"
        multiple
        onChange={handleFilesChange}
      />
    );
  };

  const FeedbackGallery = ({ files }) => {
    return (
      <div
        style={{
          display: "flex",
        }}
      >
        {files.map((file, index) => (
          <div key={index} className="file-preview">
            {file.type.startsWith("image/") ? (
              <img
                width="100"
                height="100"
                src={URL.createObjectURL(file)}
                alt={`Image Preview ${index}`}
              />
            ) : file.type.startsWith("video/") ? (
              <div>
                <video
                  width="100"
                  height="100"
                  src={URL.createObjectURL(file)}
                  alt={`Video Preview ${index}`}
                />
              </div>
            ) : (
              <p>Unsupported file type</p>
            )}
          </div>
        ))}
      </div>
    );
  };
  const handleFilesChange = (files) => {
    setSelectedFiles([...selectedFiles, ...files]);
  };

  return (
    <div>
      <MobileHeader />
      {/* <!-- mobile header start here --> */}
      <div className="mob_profile commanMobHead heightAuto hideDes">
        <div className="mobileHead flex">
          <div className="hamburger">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </div>
          <h2>Edit Profile</h2>
        </div>
      </div>
      {/* <!-- mobile header end here --> */}
      <section className="mainWrapper flex">
        <Sidebar />
        <div className="rightSection">
          <div className=" full-width">
            {/* <!-- setting start --> */}
            <div className="setting-wrapper flex">
              <h1>Settings</h1>
              <div className="setting-container">
                <ul className="connect-link">
                  <li className={activeTab === 1 ? " active" : ""}>
                    <Link
                      onClick={() => handleTabClick(1)}
                      className={activeTab === 1 ? "tab" : ""}
                      data-toggle-target=".tab-content-2"
                    >
                      <figure>
                        <img
                          src="./app/images/password.png"
                          alt="Genaiguru password"
                          title="Genaiguru password"
                        />
                      </figure>
                      <span>Edit password</span>
                    </Link>
                  </li>
                  <li className={activeTab === 2 ? " active" : ""}>
                    <Link
                      to={PATH_PROFILE}
                      onClick={() => {
                        handleTabClick(2);
                      }}
                      className={activeTab === 2 ? "tab" : ""}
                      data-toggle-target=".tab-content-1"
                    >
                      <figure>
                        <img
                          src="./app/images/profile.png"
                          alt="Genaiguru profile"
                          title="Genaiguru profile"
                        />
                      </figure>
                      <span>Profile</span>
                    </Link>
                  </li>
                  <li className={activeTab === 3 ? " active" : ""}>
                    <Link
                      onClick={() => handleTabClick(3)}
                      className={activeTab === 3 ? "tab" : ""}
                      data-toggle-target=".tab-content-3"
                    >
                      <figure>
                        <img
                          src="./app/images/customize-intrest.png"
                          alt="Genaiguru Customize"
                          title="Genaiguru Customize"
                        />
                      </figure>
                      <span>Customize your interest</span>
                    </Link>
                  </li>
                  <li className={activeTab === 4 ? " active" : ""}>
                    <Link
                      onClick={() => handleTabClick(4)}
                      className={activeTab === 4 ? "tab" : ""}
                      data-toggle-target=".tab-content-4"
                    >
                      <figure>
                        <img
                          src="./app/images/notification.png"
                          alt="Genaiguru notification"
                          title="Genaiguru notification"
                        />
                      </figure>
                      <span>Notification settings</span>
                    </Link>
                  </li>
                  <li className={activeTab === 5 ? " active" : ""}>
                    <Link
                      onClick={() => handleTabClick(5)}
                      className={activeTab === 5 ? "tab" : ""}
                      data-toggle-target=".tab-content-5"
                    >
                      <figure>
                        <img
                          src="./app/images/privacy-policy.png"
                          alt="Genaiguru Privacy"
                          title="Genaiguru Privacy"
                        />
                      </figure>
                      <span>Privacy policy</span>
                    </Link>
                  </li>
                  <li className={activeTab === 6 ? " active" : ""}>
                    <Link
                      onClick={() => handleTabClick(6)}
                      className={activeTab === 6 ? "tab" : ""}
                      data-toggle-target=".tab-content-6"
                    >
                      <figure>
                        <img
                          src="./app/images/Q&a.png"
                          alt="Genaiguru Q&A"
                          title="Genaiguru Q&A"
                        />
                      </figure>
                      <span>Q&A</span>
                    </Link>
                  </li>
                  <li className={activeTab === 7 ? " active" : ""}>
                    <Link
                      onClick={() => handleTabClick(7)}
                      className={activeTab === 7 ? "tab" : ""}
                      data-toggle-target=".tab-content-7"
                    >
                      <figure>
                        <img
                          src="./app/images/feedd-back-admin.png"
                          alt="Genaiguru feedd-back-admin"
                          title="Genaiguru feedd-back-admin"
                        />
                      </figure>
                      <span>Send feedback</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="setting-box">
                {activeTab === 2 && (
                  // <div className="tab-content tab-content-1 active">
                  <div
                    className={
                      activeTab === 2 && "tab-content tab-content-2 active"
                    }
                  >
                    {/* Profile Page added here as a component based on props Header and sidebar is hidden */}
                    {/* <EditProfile settingsPage={true} /> */}
                  </div>
                )}
                {/* <!-- password here --> */}
                {activeTab === 1 && (
                  <div
                    className={
                      activeTab === 1 &&
                      "tab-content tab-content-1 passChangeTab active"
                    }
                  >
                    {/* <div className="tab-content tab-content-2 passChangeTab"> */}
                    {/* <!-- password --> */}
                    <h5>Change password</h5>
                    <form action="">
                      <div className="password-box">
                        <label for="">Old password*</label>
                        <input
                          type="password"
                          name=""
                          id=""
                          placeholder="****"
                          onChange={(e) => setPassword(e.target.value)}
                          onKeyUp={onchangeCheck}
                        />
                        {errors["password"] && (
                          <div className="error">{errors.password}</div>
                        )}
                      </div>
                      <div className="password-box">
                        <label for="">New password*</label>
                        <input
                          type="password"
                          name=""
                          id=""
                          placeholder="****"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          onKeyUp={onchangeCheck}
                        />
                        {errors["confirmPassword"] && (
                          <div className="error">{errors.confirmPassword}</div>
                        )}
                      </div>
                      <div className="form_group">
                        <button
                          type="submit"
                          className="loginBtn"
                          onClick={handleSubmit}
                        >
                          Save to Change
                        </button>
                      </div>
                    </form>
                  </div>
                )}
                {/* <!-- password-  here -->
          <!-- intrest here --> */}
                {activeTab === 3 && (
                  <div
                    className={
                      activeTab === 3 && "tab-content tab-content-3 active"
                    }
                  >
                    {/* <div className="tab-content tab-content-3"> */}
                    {/* <!-- intrest  --> */}
                    <h5>Edit your interest</h5>
                    <div className="intrest-box">
                      <ul className="flex">
                        <li>
                          <a href="#">Artificial intelligence</a>
                        </li>
                        <li>
                          <a href="#">Blockchain</a>
                        </li>
                        <li>
                          <a href="#">GPT</a>
                        </li>
                        <li>
                          <a href="#">Topic 02</a>
                        </li>
                        <li>
                          <a href="#">Open AI</a>
                        </li>
                        <li>
                          <a href="#">Machine learning</a>
                        </li>
                        <li>
                          <a href="#">Large language models</a>
                        </li>
                        <li>
                          <a href="#">Bitcoin</a>
                        </li>
                        <li>
                          <a href="#">Data science</a>
                        </li>
                        <li>
                          <a href="#">Cryptocurrency</a>
                        </li>
                        <li>
                          <a href="#">Mid-journey</a>
                        </li>
                        <li>
                          <a href="#">NLP</a>
                        </li>
                        <li>
                          <a href="#">Digital innovation</a>
                        </li>
                      </ul>
                      <button type="submit" className="loginBtn">
                        Save to change
                      </button>
                    </div>
                  </div>
                )}
                {/* <!-- privacy --> */}
                {activeTab === 5 && (
                  <div
                    className={
                      activeTab === 5 && "tab-content tab-content-5 active"
                    }
                  >
                    {/* <div className="tab-content tab-content-4"> */}
                    {/* <!-- privacy --> */}
                    <h5>Privacy & Policy</h5>
                    <div className="privacy-banner">
                      <img
                        src="app/images/privacy-banner.png"
                        alt="Genaiguru privacy-banner"
                        title="Genaiguru privacy-banner"
                      />
                    </div>
                    <div className="privacy-vats">
                      <h3>Privacy policy</h3>
                      <div className="date">
                        <p>
                          Effactive date: <span> March 24, 2023</span>
                        </p>
                      </div>
                      <p>
                        Looking to upgrade your salary in the uk? Get the salary
                        you’re worth by learning to code. 98% employed within 12
                        months of qualifying. 28% of students are hired while on
                        the course. Change career. Career changing skills.
                        Spaces filling up fast. Looking to upgrade your salary
                        in{" "}
                      </p>
                    </div>
                    <div className="service-terms">
                      <ul>
                        <li>
                          <a href="#">Terms of service</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                      </ul>

                      <h5>Terms of service</h5>
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
                      </p>
                    </div>
                  </div>
                )}
                {/* <!-- Tell us problem --> */}
                {activeTab === 7 && (
                  <div
                    className={
                      activeTab === 7 && "tab-content tab-content-7 active"
                    }
                  >
                    {/* <div className="tab-content tab-content-5"> */}
                    <div className="feedbackSection">
                      <h5>Tell us the problem</h5>
                      <div className="problem-container">
                        <h3>Send us some feedback!</h3>
                        <p>
                          Do you have a suggestion or found some bug? Let us
                          know in the below.
                        </p>
                      </div>
                      <form action="" onSubmit={onSubmit}>
                        <div className="form_group">
                          <label for="">Describe your issue or idea*</label>
                          <textarea
                            name="feedback"
                            value={idea}
                            id=""
                            cols="30"
                            rows="5"
                            placeholder="Type here"
                            onChange={(e) => setIdea(e.target.value)}
                            onKeyUp={onchangeCheck}
                          ></textarea>
                          {errors["idea"] && (
                            <div className="error">{errors.idea}</div>
                          )}
                        </div>
                        <div className="form_group">
                          <p>Screenshot or videos (optional)</p>
                          <div className="add-idea">
                            <div className="wrapper">
                              <img
                                src="app/images/addIconsImg.png"
                                alt="Genaiguru addIconsImg"
                                title="Genaiguru addIconsImg"
                              />
                              <FileInput onFilesChange={handleFilesChange} />
                            </div>
                            {selectedFiles.length > 0 && (
                              <div>
                                <FeedbackGallery files={selectedFiles} />
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="form_group">
                          <button type="submit" className="loginBtn">
                            Submit
                          </button>
                          <ToastContainer autoClose={1000} />
                        </div>
                      </form>
                    </div>
                  </div>
                )}
                {/* <!-- tell us problem --> */}
                {activeTab === 6 && (
                  <div
                    className={
                      activeTab === 6 && "tab-content tab-content-6 active"
                    }
                  >
                    {/* <div className="tab-content tab-content-6"> */}
                    <h5>Q&A</h5>
                  </div>
                )}
                {/* <!-- notification --> */}
                {activeTab === 4 && (
                  <div
                    className={
                      activeTab === 4 && "tab-content tab-content-4 active"
                    }
                  >
                    {/* <div className="tab-content tab-content-7"> */}
                    <div className="notification">
                      <form action="">
                        <div className="notification flex space-between">
                          <label for="">Email notifications</label>
                          <label className="onoffbtn">
                            <input type="checkbox" />
                          </label>
                        </div>
                        <div className="notification flex space-between">
                          <label for="">Push notifications</label>
                          <label className="onoffbtn">
                            <input type="checkbox" />
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- main section end here --> */}
    </div>
  );
};

export default Settings;
