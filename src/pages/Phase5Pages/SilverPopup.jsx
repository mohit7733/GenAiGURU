import React from "react";

const SilverPopup = () => {
  return (
    <div>
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
          <div class="guru-gold-silver">
            <div class="innerBreadcrumb">
              <p>
                <a href="#">Achievement</a>{" "}
                <i class="fa fa-angle-right" aria-hidden="true"></i> Silver
              </p>
            </div>
            <h1>Silver</h1>
            <div class="silver-coin-box">
              <div class="silverWrap">
                <ul class="flex userPro">
                  <li>
                    <figure>
                      <img
                        src="./app/images/userIcon.png"
                        alt="Genaiguru userIcon"
                        title="Genaiguru userIcon"
                      />
                      <img
                        class="profileImageTag"
                        src="app/images/profileImageTag.png"
                      />
                    </figure>
                  </li>
                  <li>
                    <h3>
                      Silver{" "}
                      <img
                        src="app/images/headingProfileIcons.png"
                        alt="Genaiguru headingProfileIcons"
                        title="Genaiguru headingProfileIcons"
                      />
                    </h3>{" "}
                    <p>Coins: 20,000/50,000</p>
                  </li>
                </ul>
                <div class="rangeWrap">
                  <input
                    class="range"
                    type="range"
                    value="50"
                    min="0"
                    max="100"
                  ></input>
                </div>
                <p class="profileBottomText">
                  Earn more 47000 coins to ge next label
                </p>
              </div>
            </div>
            {/* <!-- points start here --> */}
            <div class="points-box">
              <ul>
                <li>
                  <div class="img-box">
                    <figure class="active">
                      <img
                        src="./app/images/check-sgn.png"
                        alt="Genaiguru check-sgn"
                        title="Genaiguru check-sgn"
                      />
                    </figure>
                  </div>
                  <div class="content">
                    <h6>Active on site</h6>
                    <p>Total 3,000 hours 60 Days</p>
                  </div>
                </li>
                <li>
                  <div class="img-box">
                    <figure class="active">
                      <img src="./app/images/check-sgn.png" alt="" />
                    </figure>
                  </div>
                  <div class="content">
                    <h6>Earn 20,000 points</h6>
                    <p>In 60 Days</p>
                  </div>
                </li>
                <li>
                  <div class="img-box">
                    <figure class="active">
                      <img
                        src="./app/images/check-sgn.png"
                        alt="Genaiguru check-sgn"
                        title="Genaiguru check-sgn"
                      />
                    </figure>
                  </div>
                  <div class="content">
                    <h6>Create at-least 20 post</h6>
                    <p>Total 3,000 hours 60 Days</p>
                  </div>
                </li>
                <li>
                  <div class="img-box">
                    <figure class="active">
                      <img
                        src="./app/images/check-sgn.png"
                        alt="Genaiguru check-sgn"
                        title="Genaiguru check-sgn"
                      />
                    </figure>
                  </div>
                  <div class="content">
                    <h6>Get 20,00 points</h6>
                    <p>Total 3,000 hours 60 Days</p>
                  </div>
                </li>
                <li>
                  <div class="img-box">
                    <figure class="active">
                      <img
                        src="./app/images/check-sgn.png"
                        alt="Genaiguru check-sgn"
                        title="Genaiguru check-sgn"
                      />
                    </figure>
                  </div>
                  <div class="content">
                    <h6>Get 20,00 points</h6>
                    <p>Total 3,000 hours 60 Days</p>
                  </div>
                </li>
                <li>
                  <div class="img-box">
                    <figure class="active">
                      <img
                        src="./app/images/check-sgn.png"
                        alt="Genaiguru check-sgn"
                        title="Genaiguru check-sgn"
                      />
                    </figure>
                  </div>
                  <div class="content">
                    <h6>Get 20,00 points</h6>
                    <p>In 60 Days</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="buttonWrap">
              <a href="#" class="loginBtn">
                Claim
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- login popup start here --> */}
      <section class="loginPopup silverPopup">
        <div class="wrapper">
          <figure>
            <img
              src="app/images/medal-second-place.png"
              alt="Genaiguru medal-second-place.png"
              title="Genaiguru medal-second-place.png"
            />
            <div class="dotsImg">
              <span></span>
              <span></span>
            </div>
          </figure>
          <div class="labelInner">
            <h6>Label 2</h6>
            <p>Coins: 50,000</p>
          </div>
          <h2>You’ve just earned a new label</h2>
          <a href="#" class="loginBtn">
            See your post
          </a>
          {/* <!-- <a href="#">Add your interest</a> --> */}
        </div>
      </section>
      {/* <!-- login popup end here -->   */}
    </div>
  );
};

export default SilverPopup;
