import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Layout/Header";
import Sidebar from "../../components/Layout/Sidebar";

const Index3 = () => {
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
                            title="Speak Now"
                          />
                        </button>
                      </div>
                      <div class="form_group">
                        <button
                          type="submit"
                          onClick={() => {
                            navigate("/index7");
                          }}
                        >
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
                    <img
                      src="app/images/userIcon.png"
                      alt="Genaiguru userIcon"
                      title="Genaiguru userIcon"
                    />
                  </figure>
                  <p>Suggest me some articles about blockchain</p>
                </div>
                <div class="searchResults">
                  <div class="headings flex">
                    <figure>
                      <img
                        src="app/images/searchIconLogoInner.png"
                        alt="Genaiguru search logo icon"
                        title="Genaiguru search logo icon"
                      />
                    </figure>
                    <h5>Bellow we suggest you best articles</h5>
                  </div>
                  <div class="boxes">
                    <a href="#">
                      <h6>
                        By <span>Wade Warren</span>
                      </h6>
                      <ul class="dateTime flex">
                        <li>Sep 15, 2023</li>
                        <li>. 5 min read</li>
                      </ul>
                      <p>
                        Navigating the world of ChatGPT and Its open-source
                        adversaries
                      </p>
                    </a>
                  </div>
                  <div class="boxes">
                    <a href="#">
                      <h6>
                        By <span>Wade Warren</span>
                      </h6>
                      <ul class="dateTime flex">
                        <li>Sep 15, 2023</li>
                        <li>. 5 min read</li>
                      </ul>
                      <p>
                        Navigating the world of ChatGPT and Its open-source
                        adversaries
                      </p>
                    </a>
                  </div>
                  <div class="boxes">
                    <a href="#">
                      <h6>
                        By <span>Wade Warren</span>
                      </h6>
                      <ul class="dateTime flex">
                        <li>Sep 15, 2023</li>
                        <li>. 5 min read</li>
                      </ul>
                      <p>
                        Navigating the world of ChatGPT and Its open-source
                        adversaries
                      </p>
                    </a>
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
                      alt="Genaiguru search logo icon"
                      title="Genaiguru search logo icon"
                    />
                  </figure>
                  <h5>Bellow we suggest you best articles</h5>
                </div>
                <div class="boxes">
                  <a href="#">
                    <h6>
                      By <span>Wade Warren</span>
                    </h6>
                    <ul class="dateTime flex">
                      <li>Sep 15, 2023</li>
                      <li>. 5 min read</li>
                    </ul>
                    <p>
                      Navigating the world of ChatGPT and Its open-source
                      adversaries
                    </p>
                  </a>
                </div>
                <div class="boxes">
                  <a href="#">
                    <h6>
                      By <span>Wade Warren</span>
                    </h6>
                    <ul class="dateTime flex">
                      <li>Sep 15, 2023</li>
                      <li>. 5 min read</li>
                    </ul>
                    <p>
                      Navigating the world of ChatGPT and Its open-source
                      adversaries
                    </p>
                  </a>
                </div>
              </div>
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
                          navigate("/index7");
                        }}
                      >
                        <img
                          src="app/images/sendButtonIcon.png"
                          alt="Genaiguru sendButtonIcon"
                          title="Genaiguru sendButtonIcon"
                        />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index3;
