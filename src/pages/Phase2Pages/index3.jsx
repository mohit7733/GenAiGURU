import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Index3 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section class="mainWrapper mobileMainWrap flex">
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

export default Index3;
