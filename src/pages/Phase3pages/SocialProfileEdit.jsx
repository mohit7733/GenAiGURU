import React, { useState } from "react";
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
  });

  const navigate = useNavigate();

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

  return (
    <div>
      <MobileHeader />
      {/* <!-- main section start here --> */}
      <section class="mainWrapper flex hideMob">
        <Sidebar />
        <div className="rightSection">
          <div class=" full-width">
            {/* <!-- edit-profile start here --> */}
            <div class="profile-edit socialLinkEdit flex">
              <p>
                <Link to="/phasepage1">Profile</Link>{" "}
                <i class="fa fa-angle-right" aria-hidden="true"></i> Edit social
                profile
              </p>
              <h1>Edit social profile</h1>
            </div>
            {/* <!-- social-media --> */}
            <div class="profile-img-box">
              <form action="">
                <div class="url-box">
                  <p>Twitter</p>
                  <div class="social-box">
                    <label for="twitter">
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
                <div class="url-box">
                  <p>Facebook</p>
                  <div class="social-box">
                    <label for="twitter">
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
                <div class="url-box">
                  <p>Youtube</p>
                  <div class="social-box">
                    <label for="twitter">
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
                <div class="url-box">
                  <p>LinkedIn</p>
                  <div class="social-box">
                    <label for="twitter">
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
                <div class="url-box">
                  <p>Instagram</p>
                  <div class="social-box">
                    <label for="twitter">
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
                <button
                  type="submit"
                  class="social-profile"
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
      <div class="mob_profile hideDes">
        <div class="mobileHead flex">
          <div class="backBtns">
            <Link to="/phasepage1">
              <i class="fa fa-angle-left" aria-hidden="true"></i>
            </Link>
          </div>
          <h2>Edit social profile</h2>
        </div>
        <div class="socialEditInner rightSection">
          <div class="profile-img-box">
            <form action="">
              <div class="url-box">
                <p>Twitter</p>
                <div class="social-box">
                  <label for="twitter">
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
              <div class="url-box">
                <p>Facebook</p>
                <div class="social-box">
                  <label for="twitter">
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
              <div class="url-box">
                <p>Youtube</p>
                <div class="social-box">
                  <label for="twitter">
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
              <div class="url-box">
                <p>LinkedIn</p>
                <div class="social-box">
                  <label for="twitter">
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
              <div class="url-box">
                <p>Instagram</p>
                <div class="social-box">
                  <label for="twitter">
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
              <button type="submit" class="social-profile">
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
