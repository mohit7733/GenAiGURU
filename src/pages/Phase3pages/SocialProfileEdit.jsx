import React, { useEffect, useState } from "react";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getBaseURL } from "../../api/config";
import { toast, ToastContainer } from "react-toastify";
import { PATH_PROFILE } from "../../routes";

const SocialProfileEdit = () => {
  const userId = JSON.parse(localStorage.getItem("UserId"));

  const [linksObj, setLinksObj] = useState({
    facebook: "",
    twitter: "",
    youtube: "",
    instagram: "",
    linkedin: "",
  });
  const [errors, setErrors] = useState({
    instagram: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
  });

  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));

  // User details GET-API------
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`${getBaseURL()}/auth/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setLinksObj({
          facebook:
            response?.data?.facebook === undefined ||
            response?.data?.facebook === null ||
            response?.data?.facebook === "undefined" ||
            response?.data?.facebook === "null"
              ? ""
              : response?.data?.facebook,
          youtube:
            response?.data?.youtube === undefined ||
            response?.data?.youtube === null ||
            response?.data?.youtube === "undefined" ||
            response?.data?.youtube === "null"
              ? ""
              : response?.data?.youtube,
          twitter:
            response?.data?.twitter === undefined ||
            response?.data?.twitter === null ||
            response?.data?.twitter === "undefined" ||
            response?.data?.twitter === "null"
              ? ""
              : response?.data?.twitter,
          instagram:
            response?.data?.instagram === undefined ||
            response?.data?.instagram === null ||
            response?.data?.instagram === "undefined" ||
            response?.data?.instagram === "null"
              ? ""
              : response?.data?.instagram,
          linkedin:
            response?.data?.linkedin === undefined ||
            response?.data?.linkedin === null ||
            response?.data?.linkedin === "undefined" ||
            response?.data?.linkedin === "null"
              ? ""
              : response?.data?.linkedin,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleChangeLinks = (e) => {
    setLinksObj({ ...linksObj, [e.target.name]: e.target.value });
  };

  const handleClearLinks = (platform) => {
    setLinksObj((prevLinksObj) => ({
      ...prevLinksObj,
      [platform]: "",
    }));
  };

  const isValidInstagramLink = (link) => {
    // Regular expression to match Instagram profile URLs
    const instagramRegex =
      /^(https?:\/\/)?(www\.)?instagram\.com\/[a-zA-Z0-9_.]+\/?$/;

    return instagramRegex.test(link);
  };
  const isValidTwitterLink = (link) => {
    // Regular expression to match Twitter profile URLs
    const twitterRegex =
      /^(https?:\/\/)?(www\.)?twitter\.com\/[a-zA-Z0-9_]+\/?$/;
    return twitterRegex.test(link);
  };

  const isValidFacebookLink = (link) => {
    // Regular expression to match Facebook profile or page URLs
    const facebookRegex =
      /^(https?:\/\/)?(www\.)?facebook\.com\/[a-zA-Z0-9_.]+\/?$/;
    return facebookRegex.test(link);
  };

  const isValidLinkedInLink = (link) => {
    // Regular expression to match LinkedIn profile URLs
    const linkedInRegex =
      /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/;
    return linkedInRegex.test(link);
  };

  const isValidYouTubeLink = (link) => {
    // Regular expression to match YouTube channel URLs
    const youtubeRegex =
      /^(https?:\/\/)?(www\.)?youtube\.com\/(channel|user)\/[a-zA-Z0-9_-]+\/?$/;
    return youtubeRegex.test(link);
  };

  const onSocialEditProfile = (e) => {
    e.preventDefault();

    const updatedErrors = {
      instagram: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
    };

    // Validation for Instagram link
    const instagramLink = linksObj.instagram;
    if (instagramLink && !isValidInstagramLink(instagramLink)) {
      updatedErrors.instagram = "Please enter a valid Instagram profile link.";
    }

    // Validation for Twitter link
    const twitterLink = linksObj.twitter;
    if (twitterLink && !isValidTwitterLink(twitterLink)) {
      updatedErrors.twitter = "Please enter a valid Twitter profile link.";
    }

    // Validation for Facebook link
    const facebookLink = linksObj.facebook;
    if (facebookLink && !isValidFacebookLink(facebookLink)) {
      updatedErrors.facebook =
        "Please enter a valid Facebook profile or page link.";
    }

    // Validation for LinkedIn link
    const linkedInLink = linksObj.linkedin;
    if (linkedInLink && !isValidLinkedInLink(linkedInLink)) {
      updatedErrors.linkedin = "Please enter a valid LinkedIn profile link.";
    }

    // Validation for YouTube link
    const youtubeLink = linksObj.youtube;
    if (youtubeLink && !isValidYouTubeLink(youtubeLink)) {
      updatedErrors.youtube = "Please enter a valid YouTube channel link.";
    }

    // Update errors state
    setErrors(updatedErrors);

    // Check if there are any errors before saving
    if (Object.values(updatedErrors).some((error) => error !== "")) {
      return;
    }

    let fd = new FormData();
    fd.append("user_id", userId);
    fd.append("facebook", linksObj.facebook);
    fd.append("youtube", linksObj.youtube);
    fd.append("twitter", linksObj.twitter);
    fd.append("linkedin", linksObj.linkedin);
    fd.append("instagram", linksObj.instagram);
    axios
      .post(`${getBaseURL()}/update-user-socialprofile`, fd, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 201) {
          // alert("Saved");
          toast.success("Social Links Saved", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
            closeButton: ({ closeToast }) => (
              <button
                className="custom-close-button"
                onClick={closeToast}
                style={{
                  position: "relative",
                  background: "transparent",
                  // Add custom styles for the close button, such as fontSize
                  fontSize: "14px",
                  height: "10px",
                  width: "10px", // Adjust the font size as needed
                  // Add other styles as needed
                }}
              >
                x
              </button>
            ),
          });
          setTimeout(() => {
            navigate(`${PATH_PROFILE}`);
          }, 3000);
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

  return (
    <div>
      <MobileHeader />
      {/* <!-- main section start here --> */}
      <section className="mainWrapper flex hideMob">
        <Sidebar />
        <div className="rightSection">
          <div className=" full-width">
            {/* <!-- edit-profile start here --> */}
            <div className="profile-edit socialLinkEdit flex">
              <p>
                <Link to={PATH_PROFILE}>Profile</Link>{" "}
                <i className="fa fa-angle-right" aria-hidden="true"></i> Edit
                social profile
              </p>
              <h1>Edit social profile</h1>
            </div>
            {/* <!-- social-media --> */}
            <div className="profile-img-box">
              <form action="">
                <div className="url-box">
                  <p>Twitter</p>
                  <div className="social-box">
                    <label htmlFor="twitter">
                      <img
                        src="/app/images/twitter.png"
                        alt="Genaiguru twitter"
                        title="Genaiguru-twitter"
                      />
                    </label>
                    <input
                      type="url"
                      name="twitter"
                      value={linksObj.twitter}
                      onChange={handleChangeLinks}
                      id=""
                      placeholder="Add your profile link here."
                    />
                    <a onClick={() => handleClearLinks("twitter")}>
                      <img
                        src="/app/images/input-cross-icon.png"
                        alt="Genaiguru input-cross-icon"
                        title="Genaiguru input-cross-icon"
                      />
                    </a>
                  </div>
                  <p style={{ color: "red" }}>{errors.twitter}</p>
                </div>
                <div className="url-box">
                  <p>Facebook</p>
                  <div className="social-box">
                    <label htmlFor="twitter">
                      <img
                        src="/app/images/facebookIcon.png"
                        alt="Genaiguru Facebook"
                        title="Genaiguru Facebook"
                      />
                    </label>
                    <input
                      type="url"
                      name="facebook"
                      value={linksObj.facebook}
                      onChange={handleChangeLinks}
                      placeholder="Add your profile link here."
                    />
                    <a onClick={() => handleClearLinks("facebook")}>
                      <img
                        src="/app/images/input-cross-icon.png"
                        alt="Genaiguru input-cross-icon"
                        title="Genaiguru input-cross-icon"
                      />
                    </a>
                  </div>
                  <p style={{ color: "red" }}>{errors.facebook}</p>
                </div>
                <div className="url-box">
                  <p>Youtube</p>
                  <div className="social-box">
                    <label htmlFor="twitter">
                      <img
                        src="/app/images/youtubeIcon.png"
                        alt="Genaiguru youtube"
                        title="Genaiguru youtube"
                      />
                    </label>
                    <input
                      type="url"
                      name="youtube"
                      value={linksObj.youtube}
                      onChange={handleChangeLinks}
                      placeholder="Add your profile link here."
                    />
                    <a onClick={() => handleClearLinks("youtube")}>
                      <img
                        src="/app/images/input-cross-icon.png"
                        alt="Genaiguru input-cross-icon"
                        title="Genaiguru input-cross-icon"
                      />
                    </a>
                  </div>
                  <p style={{ color: "red" }}>{errors.youtube}</p>
                </div>
                <div className="url-box">
                  <p>LinkedIn</p>
                  <div className="social-box">
                    <label htmlFor="twitter">
                      <img
                        src="/app/images/linkdin-icon.png"
                        alt="Genaiguru LinkedIn"
                        title="Genaiguru LinkedIn"
                      />
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      value={linksObj.linkedin}
                      onChange={handleChangeLinks}
                      placeholder="Add your profile link here."
                    />
                    <a onClick={() => handleClearLinks("linkedin")}>
                      <img
                        src="/app/images/input-cross-icon.png"
                        alt="Genaiguru input-cross-icon"
                        title="Genaiguru input-cross-icon"
                      />
                    </a>
                  </div>
                  <p style={{ color: "red" }}>{errors.linkedin}</p>
                </div>
                <div className="url-box">
                  <p>Instagram</p>
                  <div className="social-box">
                    <label htmlFor="twitter">
                      <img
                        src="/app/images/insta-icon.png"
                        alt="Genaiguru twitter"
                        title="Genaiguru twitter"
                      />
                    </label>
                    <input
                      type="url"
                      name="instagram"
                      value={linksObj.instagram}
                      onChange={handleChangeLinks}
                      placeholder="Add your profile link here."
                    />
                    <a onClick={() => handleClearLinks("instagram")}>
                      <img
                        src="/app/images/input-cross-icon.png"
                        alt="Genaiguru input-cross-icon"
                        title="Genaiguru input-cross-icon"
                      />
                    </a>
                  </div>
                  <p style={{ color: "red" }}>{errors.instagram}</p>
                </div>
                <button
                  type="submit"
                  className="social-profile"
                  onClick={onSocialEditProfile}
                >
                  Save to change
                </button>
                <ToastContainer autoClose={1000} />
              </form>
            </div>
            {/* <!-- edit-profile start here --> */}
          </div>
        </div>
      </section>
      {/* <!-- main section end here --> */}
      {/* <!-- mobile social profile edit start here --> */}
      <div className="mob_profile hideDes">
        <div className="mobileHead flex">
          <div className="backBtns">
            <Link to={PATH_PROFILE}>
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </Link>
          </div>
          <h2>Edit social profile</h2>
        </div>
        <div className="socialEditInner rightSection">
          <div className="profile-img-box">
            <form action="">
              <div className="url-box">
                <p>Twitter</p>
                <div className="social-box">
                  <label htmlFor="twitter">
                    <img
                      src="/app/images/twitter.png"
                      alt="Genaiguru twitter"
                      title="Genaiguru-twitter"
                    />
                  </label>
                  <input
                    type="url"
                    name="twitter"
                    value={linksObj.twitter}
                    onChange={handleChangeLinks}
                    id=""
                    placeholder="Add your profile link here."
                  />
                  <a onClick={() => handleClearLinks("twitter")}>
                    <img
                      src="/app/images/input-cross-icon.png"
                      alt="Genaiguru input-cross-icon"
                      title="Genaiguru input-cross-icon"
                    />
                  </a>
                </div>
              </div>
              <div className="url-box">
                <p>Facebook</p>
                <div className="social-box">
                  <label htmlFor="twitter">
                    <img
                      src="/app/images/facebookIcon.png"
                      alt="Genaiguru Facebook"
                      title="Genaiguru Facebook"
                    />
                  </label>
                  <input
                    type="url"
                    name="facebook"
                    value={linksObj.facebook}
                    onChange={handleChangeLinks}
                    placeholder="Add your profile link here."
                  />
                  <a onClick={() => handleClearLinks("facebook")}>
                    <img
                      src="/app/images/input-cross-icon.png"
                      alt="Genaiguru input-cross-icon"
                      title="Genaiguru input-cross-icon"
                    />
                  </a>
                </div>
              </div>
              <div className="url-box">
                <p>Youtube</p>
                <div className="social-box">
                  <label htmlFor="twitter">
                    <img
                      src="/app/images/youtubeIcon.png"
                      alt="Genaiguru youtube"
                      title="Genaiguru youtube"
                    />
                  </label>
                  <input
                    type="url"
                    name="youtube"
                    value={linksObj.youtube}
                    onChange={handleChangeLinks}
                    placeholder="Add your profile link here."
                  />
                  <a onClick={() => handleClearLinks("youtube")}>
                    <img
                      src="/app/images/input-cross-icon.png"
                      alt="Genaiguru input-cross-icon"
                      title="Genaiguru input-cross-icon"
                    />
                  </a>
                </div>
              </div>
              <div className="url-box">
                <p>LinkedIn</p>
                <div className="social-box">
                  <label htmlFor="twitter">
                    <img
                      src="/app/images/linkdin-icon.png"
                      alt="Genaiguru LinkedIn"
                      title="Genaiguru LinkedIn"
                    />
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    value={linksObj.linkedin}
                    onChange={handleChangeLinks}
                    placeholder="Add your profile link here."
                  />
                  <a onClick={() => handleClearLinks("linkedin")}>
                    <img
                      src="/app/images/input-cross-icon.png"
                      alt="Genaiguru input-cross-icon"
                      title="Genaiguru input-cross-icon"
                    />
                  </a>
                </div>
              </div>
              <div className="url-box">
                <p>Instagram</p>
                <div className="social-box">
                  <label htmlFor="twitter">
                    <img
                      src="/app/images/insta-icon.png"
                      alt="Genaiguru twitter"
                      title="Genaiguru twitter"
                    />
                  </label>
                  <input
                    type="url"
                    name="instagram"
                    value={linksObj.instagram}
                    onChange={handleChangeLinks}
                    placeholder="Add your profile link here."
                  />
                  <a onClick={() => handleClearLinks("instagram")}>
                    <img
                      src="/app/images/input-cross-icon.png"
                      alt="Genaiguru input-cross-icon"
                      title="Genaiguru input-cross-icon"
                    />
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className="social-profile"
                onClick={onSocialEditProfile}
              >
                Save to change
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- mobile social profile edit end here --> */}
    </div>
  );
};

export default SocialProfileEdit;
