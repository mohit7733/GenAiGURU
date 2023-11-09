import React from "react";
import { useNavigate } from "react-router-dom";

const Index6 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section class="mainWrapper flex">
        <div class="sideBarWrap">
          <figure class="headerLogo innersidebar">
            <a href="#">
              <img src="app/images/headerLogo.png" alt="" />
            </a>
          </figure>
          <div class="leftSidebar">
            <ul class="menu">
              <li class="active">
                <a href="#">
                  <figure>
                    <img src="app/images/homeIcon.png" alt="" />
                  </figure>
                  Home
                </a>
              </li>
              <li>
                <a href="#">
                  <figure>
                    <img src="app/images/guruGoldIcon.png" alt="" />
                  </figure>
                  Gurugold
                </a>
              </li>
              <li>
                <a href="#">
                  <figure>
                    <img src="app/images/guruKeepsIcon.png" alt="" />
                  </figure>
                  Guru keeps
                </a>
              </li>
              <li>
                <a href="#">
                  <figure>
                    <img src="app/images/guruJournalIcon.png" alt="" />
                  </figure>
                  Guru journal
                </a>
              </li>
              <li>
                <a href="#">
                  <figure>
                    <img src="app/images/teamGuruIcon.png" alt="" />
                  </figure>
                  Team guru
                </a>
              </li>
              <li>
                <a href="#">
                  <figure>
                    <img src="app/images/contactToGuruIcon.png" alt="" />
                  </figure>
                  Contact to guru genesis
                </a>
              </li>
              <li>
                <a href="#">
                  <figure>
                    <img src="app/images/settingIcon.png" alt="" />
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
                  <img src="app/images/facebookIconNew.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img src="app/images/youtubeIcon.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img src="app/images/twitter.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="rightSection">
          <div class="help-section writePost flex">
            <ul class="breadcrumb flex">
              <li>
                <a href="#">Home</a>
              </li>
              <li>Write a post</li>
            </ul>
            <div class="left_col">
              <div class="wrap">
                <div class="wrapperSearchs">
                  <div class="innerSearchForm flex">
                    <figure class="logoIcon">
                      <img src="app/images/searchIconLogoInner.png" alt="" />
                    </figure>
                    <form action="" class="flex searchFormLong">
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
                    </form>
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
                    <button type="submit" class="loginBtn">
                      Post
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="loginPopup postPopup">
        <div class="wrapper">
          <figure>
            <img src="app/images/tickIcon.png" alt="" />
          </figure>
          <h2>Post successful</h2>
          <a href="#">See your post</a>
        </div>
      </section>
    </div>
  );
};

export default Index6;
