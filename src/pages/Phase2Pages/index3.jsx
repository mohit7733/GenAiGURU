import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Layout/Header";
import Sidebar from "../../components/Layout/Sidebar";

const Index3 = ({ responseMessage }) => {
  console.log(responseMessage);
  const navigate = useNavigate();
  return (
    <div>
      <section className="">
        <div className="">
          <div className="help-section flex">
            <div className="left_col">
              <div className="wrap">
                <div className="userSearch flex">
                  <figure>
                    <img
                      src="app/images/userIcon.png"
                      alt="Genaiguru userIcon"
                      title="Genaiguru userIcon"
                    />
                  </figure>
                  <p>Suggest me some articles about blockchain</p>
                </div>
                <div className="searchResults">
                  <div className="headings flex">
                    <figure>
                      <img
                        src="app/images/searchIconLogoInner.png"
                        alt="Genaiguru search logo icon"
                        title="Genaiguru search logo icon"
                      />
                    </figure>
                    <h5>Below we suggest you best articles</h5>
                  </div>
                  <div className="boxes">
                    <a href="#">
                      {/* <h6>
                        By <span>Wade Warren</span>
                      </h6>
                      <ul className="dateTime flex">
                        <li>Sep 15, 2023</li>
                        <li>. 5 min read</li>
                      </ul> */}
                      {/* <p>{responseMessage.map((message) => message.message)}</p> */}
                      <p>{responseMessage}</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mobileHelp">
        <div className="mobileClose">
          <figure>
            <img
              src="app/images/mobileCloseIconImg.png"
              alt="mobile close icon"
            />
          </figure>
        </div>
        <div className="help-section flex">
          <div className="genaiguruSelect flex">
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
          <div className="left_col">
            <div className="wrap">
              <div className="userSearch flex">
                <figure>
                  <img
                    src="app/images/userIcon.png"
                    alt="Genaiguru userIcon"
                    title="Genaiguru userIcon"
                  />
                </figure>
                <p>Suggest me some articles about blockchain</p>
              </div>
              <div className="searchResults innerSearchResult">
                <div className="headings flex">
                  <figure>
                    <img
                      src="app/images/searchIconLogoInner.png"
                      alt="Genaiguru search logo icon"
                      title="Genaiguru search logo icon"
                    />
                  </figure>
                  <h5>Bellow we suggest you best articles</h5>
                </div>
                <div className="boxes">
                  <a href="#">
                    <h6>
                      By <span>Wade Warren</span>
                    </h6>
                    <ul className="dateTime flex">
                      <li>Sep 15, 2023</li>
                      <li>. 5 min read</li>
                    </ul>
                    <p>
                      Navigating the world of ChatGPT and Its open-source
                      adversaries
                    </p>
                  </a>
                </div>
                <div className="boxes">
                  <a href="#">
                    <h6>
                      By <span>Wade Warren</span>
                    </h6>
                    <ul className="dateTime flex">
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
              <div className="wrapperSearchs">
                <div className="innerSearchForm flex">
                  <figure className="logoIcon">
                    <img src="app/images/searchIconLogoInner.png" alt="" />
                  </figure>
                  <form action="" className="flex searchFormLong">
                    <div className="form_group">
                      <input type="text" placeholder="Ask me anything..." />
                    </div>
                    <div className="form_group micBtns">
                      <button type="button">
                        <img
                          src="app/images/micIcon.png"
                          alt="Genaiguru micIcon"
                          title="Genaiguru micIcon"
                        />
                      </button>
                    </div>
                    <div className="form_group">
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
