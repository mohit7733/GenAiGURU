import React, { useEffect, useState } from "react";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import axios from "axios";
import { getBaseURL } from "../../api/config";
import { useNavigate } from "react-router";
import { PATH_PROFILE } from "../../routes";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [coverPicture, setCoverPicture] = useState(null);

  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("token"));
  const userId = JSON.parse(localStorage.getItem("UserId"));

  useEffect(() => {
    axios
      .get(`${getBaseURL()}/auth/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setProfilePicture(response?.data?.profile_image);
        setName(response?.data?.name);
        setBio(response?.data?.bio);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedImageTypes = ["image/jpeg", "image/png", "image/gif"];
      if (allowedImageTypes.includes(file.type)) {
        setProfilePicture(file);
      } else {
        alert("Please select a valid profile image file (JPEG, PNG, GIF).");
      }
    }
  };
  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedImageTypes = ["image/jpeg", "image/png", "image/gif"];
      if (allowedImageTypes.includes(file.type)) {
        setCoverPicture(file);
      } else {
        alert("Please select a valid cover image file (JPEG, PNG, GIF).");
      }
    }
  };

  const onEditProfile = (e) => {
    e.preventDefault();
    let fd = new FormData();
    fd.append("user_id", userId);
    fd.append("bio", bio);
    fd.append("name", name);
    fd.append("cover_image", coverPicture);
    fd.append("profile_image", profilePicture);
    axios
      .post(`${getBaseURL()}/update-user-profile`, fd)
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
                <a href="#">Profile</a>{" "}
                <i class="fa fa-angle-right" aria-hidden="true"></i> Edit
                profile
              </p>
              <h1>Edit profile</h1>
            </div>
            {/* <!-- profile start here --> */}
            <div class="profile-img-box">
              <div class="profileImgChange">
                <p>Profile image</p>
                <figure>
                  <img src={profilePicture} />
                  <div class="imageChange">
                    <figure class="cameraImg">
                      <img
                        src="/app/images/camera-icon.png"
                        alt="Genaiguru camera-icon"
                        title="Genaiguru camera-icon"
                      />
                    </figure>
                    <input type="file" onChange={handleProfileImageChange} />
                  </div>
                </figure>
              </div>
              <p>
                <a href="#">Cover image</a>
              </p>
              <div class="cover-img-banner">
                <div class="banner-txt">
                  <div class="img-box cameraBgImg">
                    <figure>
                      <img
                        src="/app/images/camera-icon.png"
                        alt="Genaiguru camera-icon"
                        title="Genaiguru camera-icon"
                      />
                    </figure>
                    <input type="file" onChange={handleCoverImageChange} />
                  </div>
                  <h6>Replace cover image</h6>
                  <p>Optimal dimensions 1600 x 1200 px</p>
                </div>
              </div>
              <form>
                <div class="profile-edit">
                  <label for="name">Your Name</label>
                  <input
                    type="text"
                    placeholder="GenAIGuru kingdom"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div class="profile-edit">
                  <label for="name">Bio</label>
                  <textarea
                    name="bio"
                    value={bio}
                    onChange={(e) => {
                      setBio(e.target.value);
                    }}
                    id=""
                    cols="5"
                    rows="10"
                    placeholder="Philosophy student|| Content writer|| Avid Writer|| Storyteller|| Technical Writer|| Tech Trends ||"
                  ></textarea>
                </div>
                <button type="submit" onClick={onEditProfile}>
                  Save to change
                </button>
              </form>
            </div>

            {/* <!-- profile start here --> */}
          </div>
        </div>
      </section>
      {/* <!-- main section end here --> */}
      {/* <!-- profile edit mobile section start here --> */}
      <div class="mob_profile hideDes">
        <div class="mobileHead flex">
          <div class="backBtns">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
          </div>
          <h2>Edit profile</h2>
        </div>
        <div class="innerProfileEdits rightSection">
          <div class="profile-img-box">
            <p>
              <a href="#">Cover image</a>
            </p>
            <div class="cover-img-banner">
              <div class="banner-txt">
                <div class="img-box cameraBgImg">
                  <figure>
                    <img
                      src="/app/images/camera-icon.png"
                      alt="Genaiguru camera-icon"
                      title="Genaiguru camera-icon"
                    />
                  </figure>
                  <input type="file" />
                </div>
              </div>
            </div>
            <div class="profileImgChange">
              <p>Profile image</p>
              <figure>
                <img
                  src="/app/images/userIcon.png"
                  alt="Genaiguru user-icon"
                  title="Genaiguru user-icon"
                />
                <div class="imageChange">
                  <figure class="cameraImg">
                    <img
                      src="/app/images/camera-icon.png"
                      alt="Genaiguru camera-icon"
                      title="Genaiguru camera-icon"
                    />
                  </figure>
                  <input type="file" />
                </div>
              </figure>
            </div>
            <form action="">
              <div class="profile-edit">
                <label for="name">Your Name</label>
                <input type="text" placeholder="Prosing kingdom" />
              </div>
              <div class="profile-edit">
                <label for="name">Bio</label>
                <textarea
                  name=""
                  id=""
                  cols="5"
                  rows="10"
                  placeholder="Philosophy student|| Content writer|| Avid Writer|| Storyteller|| Technical Writer|| Tech Trends ||"
                ></textarea>
              </div>
              <button type="submit">Save to change</button>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- profile edit mobile section end here --> */}
    </div>
  );
};

export default EditProfile;
