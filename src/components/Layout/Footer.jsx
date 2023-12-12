import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerNewsletter">
          <div className="newsletter">
            <h5>Joining our newsletter</h5>
            <form action="">
              <div className="form_group">
                <input type="email" placeholder="Email address" />
              </div>
              <div className="form_group">
                <button type="button" className="loginBtn">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="bottomFooter">
          <div className="imageText flex">
            <figure>
              <img
                src="app/images/footerLogo.png"
                alt="Genaiguru footer logo"
                title="Genaiguru logo"
              />
            </figure>
            <p>
              genaiguru.io is the world’s learning <br /> community to learn
              Technology subject.
            </p>
          </div>
          <ul className="footerSocial flex space-center">
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
      </footer>
    </>
  );
};

export default Footer;
