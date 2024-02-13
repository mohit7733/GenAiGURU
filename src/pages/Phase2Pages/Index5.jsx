import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Layout/Header";
import Sidebar from "../../components/Layout/Sidebar";
import MobileHeader from "../../components/Layout/MobileHeader";
import { BASE_PATH } from "../../routes";

const Index5 = () => {
  const navigate = useNavigate();
  const [displaySeePost, setDisplaySeePost] = useState(false);
  return (
    <div>
      <MobileHeader />
      <section class="mainWrapper mobileMainWrap flex desktopPostCreate">
        <Sidebar />
        <div className="rightSection PostWrapper">
          <div className="full-width">
            <div className="profile-edit socialLinkEdit flex">
              <p>
                <a href="#">Home</a>{" "}
                <i className="fa fa-angle-right" aria-hidden="true"></i>Write a
                post{" "}
              </p>
            </div>
            <div className="profile-img-box postWrapper_inner">
              <p>
                <a href="#">Write with AI</a>
              </p>
              <form className="help-section">
                <div className="profile-edit">
                  <label htmlFor="name">Blog Title</label>
                  <input
                    type="text"
                    placeholder="Type here"
                    name="name"
                    value=""
                  />
                </div>
                <div className="profile-edit">
                  <label htmlFor="name">Upload Thumbnail Image</label>
                  <input type="file" placeholder="" name="" value="" />
                </div>
                <div className="profile-edit input-group custom-file-button">
                  <label className="input-group-text" htmlFor="inputGroupFile">
                    Upload Banner Image
                  </label>
                  <input type="file" className="form-control" style={{}} />
                </div>
                <p
                  style={{
                    color: "#fff",
                    padding: "0px 10px",
                    margin: "12px 0 8px",
                    fontSize: "18px",
                  }}
                >
                  Select Interest
                </p>
                <div className="genaiguruSelect flex">
                  <select name="genaiguruSelect">
                    <option value="genaiguru">Select here</option>
                    <option value="genaiguru2">genaiguru2</option>
                    <option value="genaiguru3">genaiguru3</option>
                  </select>
                </div>
                <div className="profile-edit">
                  <label htmlFor="name">Short Description</label>
                  <textarea
                    name="bio"
                    id=""
                    cols="3"
                    rows="6"
                    placeholder="Text here... "
                  ></textarea>
                </div>
                <div className="wrapperSearchs" style={{ marginTop: "30px" }}>
                  <div className="innerSearchForm flex">
                    <figure className="logoIcon">
                      <img
                        src="app/images/searchIconLogoInner.png"
                        alt="Genaiguru search icon image"
                      />
                    </figure>
                    <div className="flex searchFormLong">
                      <div className="form_group">
                        <input type="text" placeholder="Search here" value="" />
                      </div>
                      <div className="form_group buttonGroup">
                        <button>
                          <img
                            src="app/images/sendButtonIcon.png"
                            alt="Genaiguru sendButtonIcon"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profile-edit">
                  <label htmlFor="name">Description</label>
                  <textarea
                    name="bio"
                    id=""
                    cols="6"
                    rows="12"
                    placeholder="Text here... "
                  ></textarea>
                </div>
                <button type="submit" style={{ padding: "20px !important" }}>
                  Post
                </button>
                <div className="Toastify"></div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Mobile Code Starts Here */}
      <div class="mobilePost">
        <div class="postHead flex">
          <div class="col_left flex">
            <div class="backBtns">
              <Link to={BASE_PATH}>
                <i class="fa fa-angle-left" aria-hidden="true"></i>
              </Link>{" "}
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
