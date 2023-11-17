import React from "react";

const SocialProfileEdit = () => {
  return (
    <div>
      {/* <!-- header section end here -->

  <!-- main section start here --> */}
      <section class="">
        <div class=" full-width">
          {/* <!-- edit-profile start here --> */}
          <div class="profile-edit socialLinkEdit flex">
            <p>
              <a href="#">Profile</a>{" "}
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
          {/* <!-- edit-profile start here --> */}
        </div>
      </section>
      {/* <!-- main section end here --> */}
    </div>
  );
};

export default SocialProfileEdit;
