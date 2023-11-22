import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Layout/Header";
import Sidebar from "../../components/Layout/Sidebar";

const Index7 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <section class="mainWrapper mobileMainWrap flex">
        <Sidebar />
        <div class="rightSection innerRight desktopHelp">
          <div class="help-section flex">
            <div class="genaiguruSelect flex">
              <figure>
                <img
                  src="app/images/genaiguruSelectImg.png"
                  alt="Genaiguru select image icon"
                  title="Genaiguru select image icon"
                />
              </figure>
              <select name="genaiguruSelect">
                <option value="genaiguru">genaiguru</option>
                <option value="genaiguru2">genaiguru2</option>
                <option value="genaiguru3">genaiguru3</option>
              </select>
            </div>
            <div class="left_col">
              <div class="wrap">
                <div class="wrapperSearchs">
                  <div class="innerSearchForm flex">
                    <figure class="logoIcon">
                      <img
                        src="app/images/searchIconLogoInner.png"
                        alt="Genaiguru search icon image"
                        title="Genaiguru search icon image"
                      />
                    </figure>
                    <div class="flex searchFormLong">
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
                            alt="Genaiguru sendButtonIcon"
                            title="Send"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="userSearch flex">
                  <figure>
                    <img src="app/images/userIcon.png" alt="" />
                  </figure>
                  <p>Suggest me some articles about blockchain</p>
                </div>
                <div class="searchResults">
                  <div class="headings flex">
                    <figure>
                      <img
                        src="app/images/searchIconLogoInner.png"
                        alt=" Genaiguru heading icon new"
                        title="Genaiguru heading icon new"
                      />
                    </figure>
                    <h5>Bellow we suggest you best videos</h5>
                  </div>
                  <div class="videoBoxes flex">
                    <figure>
                      <a href="#">
                        <img
                          src="app/images/interestSliderImg.png"
                          alt="Genaiguru video image"
                          title="Genaiguru video image"
                        />
                        <div class="timing flex">
                          <img src="app/images/videoIcon.png" alt="" />
                          3:38
                        </div>
                      </a>
                    </figure>
                    <div class="content">
                      <p>
                        <a href="#">
                          It’s a catch-22 for young startups: how do...
                        </a>
                      </p>
                      <ul>
                        <li>Alex Smith</li>
                        <li>24 M Views</li>
                        <li>3 months</li>
                      </ul>
                      <p class="tags">#finance #crypto #economy</p>
                    </div>
                  </div>
                  <div class="videoBoxes flex">
                    <figure>
                      <a href="#">
                        <img
                          src="app/images/interestSliderImg.png"
                          alt="Genaiguru video image"
                          title="Genaiguru video image"
                        />
                        <div class="timing flex">
                          <img src="app/images/videoIcon.png" alt="" />
                          3:38
                        </div>
                      </a>
                    </figure>
                    <div class="content">
                      <p>
                        <a href="#">
                          It’s a catch-22 for young startups: how do...
                        </a>
                      </p>
                      <ul>
                        <li>Alex Smith</li>
                        <li>24 M Views</li>
                        <li>3 months</li>
                      </ul>
                      <p class="tags">#finance #crypto #economy</p>
                    </div>
                  </div>
                  <div class="videoBoxes flex">
                    <figure>
                      <a href="#">
                        <img
                          src="app/images/interestSliderImg.png"
                          alt="Genaiguru video image"
                          title="Genaiguru video image"
                        />
                        <div class="timing flex">
                          <img src="app/images/videoIcon.png" alt="" />
                          3:38
                        </div>
                      </a>
                    </figure>
                    <div class="content">
                      <p>
                        <a href="#">
                          It’s a catch-22 for young startups: how do...
                        </a>
                      </p>
                      <ul>
                        <li>Alex Smith</li>
                        <li>24 M Views</li>
                        <li>3 months</li>
                      </ul>
                      <p class="tags">#finance #crypto #economy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="mobileHelp">
        <div class="mobileClose">
          <figure>
            <img
              src="app/images/mobileCloseIconImg.png"
              alt="mobile close icon"
            />
          </figure>
        </div>
        <div class="help-section flex">
          <div class="genaiguruSelect flex">
            <figure>
              <img
                src="app/images/genaiguruSelectImg.png"
                alt="Genaiguru genaiguruSelectImg"
                title="Genaiguru genaiguruSelectImg"
              />
            </figure>
            <select name="genaiguruSelect">
              <option value="genaiguru">genaiguru</option>
              <option value="genaiguru2">genaiguru2</option>
              <option value="genaiguru3">genaiguru3</option>
            </select>
          </div>
          <div class="left_col">
            <div class="wrap">
              <div class="userSearch flex">
                <figure>
                  <img
                    src="app/images/userIcon.png"
                    alt="Genaiguru userIcon"
                    title="Genaiguru userIcon"
                  />
                </figure>
                <p>Suggest me some articles about blockchain</p>
              </div>
              <div class="searchResults innerSearchResult">
                <div class="headings flex">
                  <figure>
                    <img
                      src="app/images/searchIconLogoInner.png"
                      alt=" Genaiguru heading icon new"
                      title="Genaiguru heading icon new"
                    />
                  </figure>
                  <h5>Bellow we suggest you best videos</h5>
                </div>
                <div class="videoBoxes flex">
                  <figure>
                    <a href="#">
                      <img
                        src="app/images/interestSliderImg.png"
                        alt="Genaiguru video image"
                        title="Genaiguru video image"
                      />
                      <div class="timing flex">
                        <img src="app/images/videoIcon.png" alt="" />
                        3:38
                      </div>
                    </a>
                  </figure>
                  <div class="content">
                    <p>
                      <a href="#">
                        It’s a catch-22 for young startups: how do...
                      </a>
                    </p>
                    <ul>
                      <li>Alex Smith</li>
                      <li>24 M Views</li>
                      <li>3 months</li>
                    </ul>
                    <p class="tags">#finance #crypto #economy</p>
                  </div>
                </div>
                <div class="videoBoxes flex">
                  <figure>
                    <a href="#">
                      <img
                        src="app/images/interestSliderImg.png"
                        alt="Genaiguru video image"
                        title="Genaiguru video image"
                      />
                      <div class="timing flex">
                        <img src="app/images/videoIcon.png" alt="" />
                        3:38
                      </div>
                    </a>
                  </figure>
                  <div class="content">
                    <p>
                      <a href="#">
                        It’s a catch-22 for young startups: how do...
                      </a>
                    </p>
                    <ul>
                      <li>Alex Smith</li>
                      <li>24 M Views</li>
                      <li>3 months</li>
                    </ul>
                    <p class="tags">#finance #crypto #economy</p>
                  </div>
                </div>
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
                        <img
                          src="app/images/micIcon.png"
                          alt="Genaiguru micIcon"
                          title="Genaiguru micIcon"
                        />
                      </button>
                    </div>
                    <div class="form_group">
                      <button
                        type="submit"
                        onClick={() => {
                          navigate("/index5");
                        }}
                      >
                        <img
                          src="app/images/sendButtonIcon.png"
                          alt="Genaiguru sendButtonIcon"
                          title="Genaiguru sendButtonIcon"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index7;
