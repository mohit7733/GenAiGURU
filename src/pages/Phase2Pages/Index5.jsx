import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Index5 = () => {
  const navigate = useNavigate();
  const [displaySeePost, setDisplaySeePost] = useState(false);
  return (
    <div>
      <section class="mobileMainWrap  desktopPostCreate">
        <div class="full-width desktopHelp">
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
                          <img
                            src="app/images/micIcon.png"
                            alt="Genaiguru micIcon"
                            title="Speak Now"
                          />
                        </button>
                      </div>
                      <div class="form_group">
                        <button type="submit">
                          <img
                            src="app/images/sendButtonIcon.png"
                            title="Send"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="createPostForm">
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
                        setDisplaySeePost(true);
                      }}
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mobile Code Starts Here */}
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
      {displaySeePost && (
        <section class="loginPopup postPopup">
          <div class="wrapper">
            <figure>
              <img src="app/images/tickIcon.png" alt="" />
            </figure>
            <h2>Post successful</h2>
            <a href="#">See your post</a>
          </div>
        </section>
      )}
    </div>
  );
};

export default Index5;
