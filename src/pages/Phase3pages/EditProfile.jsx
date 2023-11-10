import React from "react";

const EditProfile = () => {
  return (
    <div>
      <header class="flex">
        <div class="hamburger">
          <img
            src="app/images/hamburgerIcon.png"
            alt="Genaiguru hamburger"
            title="Genaiguru hamburger "
          />
        </div>
        <figure class="headerLogo">
          <a href="#">
            <img
              src="app/images/headerLogo.png"
              alt="Genaiguru header logo"
              title="Genaiguru logo"
            />
          </a>
        </figure>
        <div class="searchbar flex">
          <figure class="icon">
            <img
              src="app/images/searchIconHeader.png"
              alt="Genaiguru small logo"
              title="Genaiguru small logo"
            />
          </figure>
          <form action="">
            <div class="form_group">
              <input type="search" placeholder="Search genaiguru" />
            </div>
          </form>
        </div>
        <ul class="leftSide flex">
          <li class="headerIcon">
            <a href="#">
              <img
                src="app/images/notificationIcon.png"
                alt="Genaiguru notificationIcon"
                title="Genaiguru notificationIcon"
              />
            </a>
          </li>
          <li class="headerIcon">
            <a href="#">
              <img
                src="app/images/elementsIcon.png"
                alt="Genaiguru elementsIcon"
                title="Genaiguru elementsIcon"
              />{" "}
              <span class="count">22</span>
            </a>
          </li>
          <li class="secondaryBtn">
            <a href="#">
              <img
                src="app/images/padIcon.png"
                alt="Genaiguru padIcon"
                title="Genaiguru padIcon"
              />{" "}
              Write to AI
            </a>
          </li>
          <li class="secondaryBtn mobile">
            <a href="#">
              <img
                src="app/images/padIcon.png"
                alt="Genaiguru mobile padIcon"
                title="Genaiguru mobile padIcon"
              />
              Write
            </a>
          </li>
          <li class="userIcon">
            <a href="#">
              <img
                src="app/images/userIcon.png"
                alt="Genaiguru user image"
                title="Genaiguru user image"
              />
            </a>
            <ul class="userNav">
              <li>
                <a href="#">Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      </header>
      {/* <!-- header section end here --> */}

      {/* <!-- main section start here --> */}
      <section class="mainWrapper flex">
        <div class="leftSidebar">
          <ul class="menu">
            <li>
              <a href="#">
                <figure>
                  <img
                    src="app/images/homeIcon.png"
                    alt="Genaiguru home icon"
                    title="Genaiguru home icon"
                  />
                </figure>
                Home
              </a>
            </li>
            <li>
              <a href="#">
                <figure>
                  <img
                    src="app/images/guruGoldIcon.png"
                    alt="Genaiguru guruGoldIcon"
                    title="Genaiguru guruGoldIcon"
                  />
                </figure>
                Gurugold
              </a>
            </li>
            <li>
              <a href="#">
                <figure>
                  <img
                    src="app/images/guruKeepsIcon.png"
                    alt="Genaiguru guruKeepsIcon"
                    title="Genaiguru guruKeepsIcon"
                  />
                </figure>
                Guru keeps
              </a>
            </li>
            <li>
              <a href="#">
                <figure>
                  <img
                    src="app/images/guruJournalIcon.png"
                    alt="Genaiguru guruJournalIcon"
                    title="Genaiguru guruJournalIcon"
                  />
                </figure>
                Guru journal
              </a>
            </li>
            <li>
              <a href="#">
                <figure>
                  <img
                    src="app/images/teamGuruIcon.png"
                    alt="Genaiguru teamGuruIcon"
                    title="Genaiguru teamGuruIcon"
                  />
                </figure>
                Team guru
              </a>
            </li>
            <li>
              <a href="#">
                <figure>
                  <img
                    src="app/images/contactToGuruIcon.png"
                    alt="Genaiguru contactToGuruIcon"
                    title="Genaiguru contactToGuruIcon"
                  />
                </figure>
                Contact to guru genesis
              </a>
            </li>
            <li>
              <a href="#">
                <figure>
                  <img
                    src="app/images/settingIcon.png"
                    alt="Genaiguru settingIcon"
                    title="Genaiguru settingIcon"
                  />
                </figure>
                Settings
              </a>
            </li>
          </ul>
          <div class="newsletter">
            <h5>Joining our newsletter</h5>
            <form action="">
              <div class="form_group">
                <input type="email" placeholder="Email address" />
              </div>
              <div class="form_group">
                <button type="button" class="loginBtn">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <ul class="bottom-menu">
            <li>
              <a href="#">Terms & Services</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
          </ul>
          <ul class="social-icons flex">
            <li>
              <a href="#" target="_blank">
                <img
                  src="app/images/facebookIconNew.png"
                  alt="Genaiguru facebook icon"
                  title="Genaiguru on facebook"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img
                  src="app/images/youtubeIcon.png"
                  alt="Genaiguru youtube icon"
                  title="Genaiguru on youtube"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img
                  src="app/images/twitter.png"
                  alt="Genaiguru twitter icon"
                  title="Genaiguru on twitter"
                />
              </a>
            </li>
          </ul>
        </div>
        <div class="rightSection">
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

          {/* <!-- profile start here --> */}
        </div>
      </section>
      {/* <!-- main section end here --> */}
    </div>
  );
};

export default EditProfile;
