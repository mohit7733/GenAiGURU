import React from "react";

const EditProfile = () => {
  return (
    <div>
      <section class="">
        <div class=" full-width">
          {/* <!-- edit-profile start here --> */}
          <div class="profile-edit socialLinkEdit flex">
            <p>
              <a href="#">Profile</a>{" "}
              <i class="fa fa-angle-right" aria-hidden="true"></i> Edit profile
            </p>
            <h1>Edit profile</h1>
          </div>
          {/* <!-- profile start here --> */}
          <div class="profile-img-box">
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
                <h6>Replace cover image</h6>
                <p>Optimal dimensions 1600 x 1200 px</p>
              </div>
            </div>
            <form action="">
              <div class="profile-edit">
                <label for="name">Your Name</label>
                <input type="text" placeholder="GenAIGuru kingdom" />
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

          {/* <!-- profile start here --> */}
        </div>
      </section>
      {/* <!-- main section end here --> */}
    </div>
  );
};

export default EditProfile;
