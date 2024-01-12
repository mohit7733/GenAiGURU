import React, { useEffect, useState } from "react";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import axios from "axios";
import { getBaseURL } from "../../api/config";
import { useNavigate } from "react-router";
import { PATH_PROFILE } from "../../routes";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const EditProfile = ({ settingsPage }) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [bio, setBio] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [coverPicture, setCoverPicture] = useState("");
  const [errors, setErrors] = useState([]);

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
        setCoverPicture(response?.data?.cover_image);
        setName(response?.data?.name);
        setTitle(response?.data?.title);
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
        // alert("Please select a valid profile image file (JPEG, PNG, GIF).");
        toast.warn("Please select JPEG, PNG, GIF.", {
          position: toast.POSITION.TOP_CENTER
        });
        <ToastContainer autoClose={1000}/>
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
        // alert("Please select a valid cover image file (JPEG, PNG, GIF).");
        toast.warn("Please select JPEG, PNG, GIF.", {
          position: toast.POSITION.TOP_CENTER
        });
        
      }
    }
  };

  const onEditProfile = (e) => {
    e.preventDefault();
    const errors = validate();
    // setErrors(errors);
    if (errors.name == "" && errors.title == "") {
      let fd = new FormData();
      fd.append("user_id", userId);
      fd.append("bio", bio);
      fd.append("name", name);
      fd.append("title", title);
      fd.append("cover_image", coverPicture);
      fd.append("profile_image", profilePicture);
      axios
        .post(`${getBaseURL()}/update-user-profile`, fd)
        .then((response) => {
          if (response.status === 201) {
            toast.success("Saved !", {
              position: toast.POSITION.TOP_CENTER,
            });
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
    } else {
      setErrors(errors);
    }
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
    // if (!profilePicture) {
    //   error["profilePicture"] = "Profile Picture Required!";
    // } else {
    //   error["profilePicture"] = "";
    // }
    if (!name) {
      error["name"] = "Name Required!";
    } else {
      error["name"] = "";
    }
    if (!title) {
      error["title"] = "Title Required!";
    } else {
      error["title"] = "";
    }
    return error;
  };

  return (
    <div>
      {settingsPage ? <></> : <MobileHeader />}

      {/* <!-- main section start here --> */}
      <section className="mainWrapper flex hideMob">
        {settingsPage ? <></> : <Sidebar />}

        <div className="rightSection">
          <div className=" full-width">
            {/* <!-- edit-profile start here --> */}
            {settingsPage ? (
              <></>
            ) : (
              <div className="profile-edit socialLinkEdit flex">
                <p>
                  <a href="#">Profile</a>{" "}
                  <i className="fa fa-angle-right" aria-hidden="true"></i> Edit
                  <Link to={PATH_PROFILE}>Profile</Link>{" "}
                </p>
                <h1>Edit profile</h1>
              </div>
            )}
            {/* <!-- profile start here --> */}
            <div className="profile-img-box">
              <div className="profileImgChange">
                <p>Profile image*</p>
                <figure>
                  {profilePicture && (
                    <img
                      src={
                        typeof profilePicture == "object"
                          ? URL.createObjectURL(profilePicture || "")
                          : profilePicture
                      }
                    />
                  )}

                  <div className="imageChange">
                    <figure className="cameraImg">
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
              <div className="cover-img-banner">
                <div className="banner-txt">
                  <div className="img-box cameraBgImg">
                    <figure>
                      {coverPicture && (
                        <img
                          src={
                            typeof coverPicture == "object"
                              ? URL.createObjectURL(coverPicture || "")
                              : coverPicture
                          }
                        />
                      )}
                    </figure>
                    <input type="file" onChange={handleCoverImageChange} />
                  </div>
                  <h6>Replace cover image</h6>
                  <p>Optimal dimensions 1600 x 1200 px</p>
                </div>
              </div>
              <form>
                <div className="profile-edit">
                  <label htmlFor="name">Your Name*</label>
                  <input
                    type="text"
                    placeholder="GenAIGuru kingdom"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    onKeyUp={onchangeCheck}
                  />
                  {errors["name"] && <div className="error">{errors.name}</div>}
                </div>
                <div className="profile-edit">
                  <label htmlFor="title">Title*</label>
                  <input
                    type="text"
                    placeholder="UI Content"
                    name="title"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    onKeyUp={onchangeCheck}
                  />
                  {errors["title"] && (
                    <div className="error">{errors.title}</div>
                  )}
                </div>
                <div className="profile-edit">
                  <label htmlFor="name">Bio</label>
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
                <ToastContainer autoClose={1000} />
              </form>
            </div>

            {/* <!-- profile start here --> */}
          </div>
        </div>
      </section>
      {/* <!-- main section end here --> */}
      {/* <!-- profile edit mobile section start here --> */}
      <div className="mob_profile hideDes">
        <div className="mobileHead flex">
          <Link to={PATH_PROFILE} className="backBtns">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </Link>
          <h2>Edit profile</h2>
        </div>
        <div className="innerProfileEdits rightSection">
          <div className="profile-img-box">
            <p>
              <a href="#">Cover image</a>
            </p>
            <div className="cover-img-banner">
              <div className="banner-txt">
                <div className="img-box cameraBgImg">
                  <figure>
                    {coverPicture && (
                      <img
                        src={
                          typeof coverPicture == "object"
                            ? URL.createObjectURL(coverPicture || "")
                            : coverPicture
                        }
                      />
                    )}
                  </figure>
                  <input type="file"  onChange={handleCoverImageChange}/>
                </div>
              </div>
            </div>
            <div className="profileImgChange">
              <p>Profile image</p>
              <figure>
                {profilePicture && (
                  <img
                    src={
                      typeof profilePicture == "object"
                        ? URL.createObjectURL(profilePicture || "")
                        : profilePicture
                    }
                  />
                )}
                <div className="imageChange">
                  <figure className="cameraImg">
                    <img
                      src="/app/images/camera-icon.png"
                      alt="Genaiguru camera-icon"
                      title="Genaiguru camera-icon"
                    />
                  </figure>
                  <input type="file"  onChange={handleProfileImageChange}/>
                </div>
              </figure>
            </div>
            <form action="">
              <div className="profile-edit">
                <label htmlFor="name">Your Name*</label>
                <input
                  type="text"
                  placeholder="GenAIGuru kingdom"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  onKeyUp={onchangeCheck}
                />
                {errors["name"] && <div className="error">{errors.name}</div>}
              </div>
              <div className="profile-edit">
                <label htmlFor="title">Title*</label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  onKeyUp={onchangeCheck}
                  placeholder="UI Content"
                />
                {errors["title"] && <div className="error">{errors.title}</div>}
              </div>
              <div className="profile-edit">
                <label htmlFor="name">Bio</label>
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
        </div>
      </div>
      {/* <!-- profile edit mobile section end here --> */}
    </div>
  );
};

export default EditProfile;
