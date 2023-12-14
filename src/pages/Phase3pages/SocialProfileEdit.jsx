import React, { useEffect, useState } from "react";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getBaseURL } from "../../api/config";
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

  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));

  // User details GET-API------
  useEffect(() => {
    axios
      .get(`${getBaseURL()}/auth/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
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

  const onSocialEditProfile = (e) => {
    e.preventDefault();
    let fd = new FormData();
    fd.append("user_id", userId);
    fd.append("facebook", linksObj.facebook);
    fd.append("youtube", linksObj.youtube);
    fd.append("twitter", linksObj.twitter);
    fd.append("linkedin", linksObj.linkedin);
    fd.append("instagram", linksObj.instagram);
    axios
      .post(`${getBaseURL()}/update-user-socialprofile`, fd)
      .then((response) => {
        if (response.status === 201) {
          alert("Saved");
          navigate(`${PATH_PROFILE}`);
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
  console.log(linksObj);
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
                <Link to="/phasepage1">Profile</Link>{" "}
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
                    <a onClick={() => setLinksObj({ twitter: "" })}>
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
                    <a onClick={() => setLinksObj({ facebook: "" })}>
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
                    <a onClick={() => setLinksObj({ youtube: "" })}>
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
                    <a onClick={() => setLinksObj({ linkedin: "" })}>
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
                    <a onClick={() => setLinksObj({ instagram: "" })}>
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
            {/* <!-- edit-profile start here --> */}
          </div>
        </div>
      </section>
      {/* <!-- main section end here --> */}
      {/* <!-- mobile social profile edit start here --> */}
      <div className="mob_profile hideDes">
        <div className="mobileHead flex">
          <div className="backBtns">
            <Link to="/phasepage1">
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
                    name=""
                    id=""
                    placeholder="https://twitter.com/home"
                  />
                  <a href="#">
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
                    name=""
                    id=""
                    placeholder="https://facebook.com/home"
                  />
                  <a href="#">
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
                    name=""
                    id=""
                    placeholder="https://twitter.com/home"
                  />
                  <a href="#">
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
                    name=""
                    id=""
                    placeholder="https://twitter.com/home"
                  />
                  <a href="#">
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
                    name=""
                    id=""
                    placeholder="https://twitter.com/home"
                  />
                  <a href="#">
                    <img
                      src="/app/images/input-cross-icon.png"
                      alt="Genaiguru input-cross-icon"
                      title="Genaiguru input-cross-icon"
                    />
                  </a>
                </div>
              </div>
              <button type="submit" className="social-profile">
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
