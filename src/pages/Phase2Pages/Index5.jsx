import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Index5 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section class="mainWrapper mobileMainWrap flex desktopPostCreate">
        <div class="sideBarWrap mobileSideBar">
          <figure class="headerLogo innersidebar">
            <a href="#">
              <img
                src="app/images/headerLogo.png"
                alt="Genaiguru header logo"
                title="Genaiguru"
              />
            </a>
          </figure>
          <div class="leftSidebar">
            <ul class="menu">
              <li class="active">
                <Link to={"/"}>
                  <figure>
                    <img
                      src="app/images/homeIcon.png"
                      alt="Genaiguru homeIcon"
                      title="Genaiguru homeIcon"
                    />
                  </figure>
                  Home
                </Link>
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
                  Guru Gold
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
                  Guru Keeps
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
                  Guru Journal
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
                  Team Guru
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
                  Contact
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
                <a href="#">Terms & service</a>
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
                    alt="Genaiguru facebookIconNew"
                    title="Genaiguru on facebook"
                  />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img
                    src="app/images/youtubeIcon.png"
                    alt="Genaiguru youtubeIcon"
                    title="Genaiguru on youtube"
                  />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img
                    src="app/images/twitter.png"
                    alt="Genaiguru twitter"
                    title="Genaiguru on twitter"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="rightSection innerRight desktopHelp">
          <div class="help-section writePost flex">
            <ul class="breadcrumb flex">
              <li>
                <a href="#">Home</a>
              </li>
              <li>Write a post</li>
            </ul>
            <div class="left_col">
              <div class="wrap">
                <h1>What would you like to write a blog article about</h1>
                <div class="wrapperSearchs">
                  <div class="innerSearchForm flex">
                    <figure class="logoIcon">
                      <img src="app/images/searchIconLogoInner.png" alt="" />
                    </figure>
                    <div action="" class="flex searchFormLong">
                      <div class="form_group">
                        <input type="text" placeholder="Ask me anything..." />
                      </div>
                      <div class="form_group micBtns">
                        <button type="button">
                          <img src="app/images/micIcon.png" alt="Genaiguru micIcon"
                            title="Speak Now" />
                        </button>
                      </div>
                      <div class="form_group">
                        <button type="submit">
                          <img src="app/images/sendButtonIcon.png"  
                            title="Send"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <form action="" class="createPostForm">
                  <div class="searchResults">
                    <div class="headings flex">
                      <h5>Bellow we suggest you best videos</h5>
                    </div>
                    <div class="form_group">
                      <span
                        class="textarea"
                        id="postContent"
                        role="textbox"
                        contenteditable
                      ></span>
                    </div>
                    <div class="form_group videoShow">
                      <figure>
                        <img src="app/images/postCreateImg.jpg" alt="" />
                        <div class="timing flex">
                          <img src="app/images/videoIcon.png" alt="" />
                          3:38
                        </div>
                      </figure>
                    </div>
                    <div class="form_group imageIcons">
                      <figure>
                        <img src="app/images/imageIcon.png" alt="" />
                      </figure>
                    </div>
                  </div>
                  <p class="tags">#finance #crypto #economy</p>
                  <div class="form_group">
                    <button
                      type="submit"
                      class="loginBtn"
                      onClick={() => {
                        navigate("/index6");
                      }}
                    >
                      Post
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="mobilePost">
        <div class="postHead flex">
          <div class="col_left flex">
            <div class="backBtns">
              <i class="fa fa-angle-left" aria-hidden="true"></i>
            </div>
            <p>Write a post</p>
          </div>
          <div class="col_right">
            <button
              type="button"
              class="loginBtn"
              onClick={() => {
                navigate("/index6");
              }}
            >
              Post
            </button>
          </div>
        </div>
        <div class="help-section writePost flex">
          <div class="wrap">
            <h1>What would you like to write a blog article about</h1>
            <div class="createPostForm">
              <div class="searchResults">
                <div class="headings flex">
                  <h5>
                    It’s a catch-22 for young startups: how do you attract
                    investors?
                  </h5>
                </div>
                <div class="form_group">
                  <span
                    class="textarea"
                    id="postContent"
                    role="textbox"
                    contenteditable
                  ></span>
                </div>
                <div class="form_group videoShow">
                  <figure>
                    <img src="app/images/postCreateImg.jpg" alt="" />
                    <div class="timing flex">
                      <img src="app/images/videoIcon.png" alt="" />
                      3:38
                    </div>
                  </figure>
                </div>
                <div class="form_group imageIcons">
                  <figure>
                    <img src="app/images/imageIcon.png" alt="" />
                  </figure>
                </div>
              </div>
              <p class="tags">#finance #crypto #economy</p>
            </div>
            <div class="wrapperSearchs">
              <div class="innerSearchForm flex">
                <figure class="logoIcon">
                  <img src="app/images/searchIconLogoInner.png" alt="" />
                </figure>
                <div class="flex searchFormLong">
                  <div class="form_group">
                    <input type="text" placeholder="Ask me anything..." />
                  </div>
                  <div class="form_group micBtns">
                    <button type="button">
                      <img src="app/images/micIcon.png" />
                    </button>
                  </div>
                  <div class="form_group">
                    <button type="submit">
                      <img src="app/images/sendButtonIcon.png" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="fixedBtn">
        <figure>
          <img
            src="app/images/fixedButtonLogo.png"
            alt="Genaiguru scroll button"
            title="Genaiguru scroll button"
          />
        </figure>
      </div>
    </div>
  );
};

export default Index5;
