import React from "react";
import { Link, NavLink } from "react-router-dom";
import { PATH_ADDINTERESTS } from "../../routes";

const Login6 = () => {
  return (
    <div>
      {/* <div class="loader">
        <img
          src="app/images/lodingLogo.png"
          alt="Genaiguru logo"
          title="Genaiguru Logo"
        />
      </div> */}

      <section class="interestSection second mainBg">
        <div class="wrapper">
          <div class="cancelBtn">
            <Link to={PATH_ADDINTERESTS}>
              <i class="fa fa-times" aria-hidden="true"></i>
            </Link>
            Cancel
          </div>
          <h1>You can follow expert writer!</h1>
          <p>
            You will find the best posts in the feed according <br /> to your
            following authors.
          </p>
          <ul class="profileList">
            <li>
              <figure>
                <img
                  src="app/images/bigAvatar.png"
                  alt="Genaiguru user img"
                  title="Genaiguru user image"
                />
              </figure>
              <div class="names">
                <h5>Jms Mittan</h5>
                <p>UX Content writer</p>
              </div>
              <div class="btnWrap">
                <a href="#" class="btnSecond">
                  Follow
                </a>
              </div>
            </li>
            <li>
              <figure>
                <img
                  src="app/images/bigAvatar.png"
                  alt="Genaiguru user img"
                  title="Genaiguru user image"
                />
              </figure>
              <div class="names">
                <h5>Jms Mittan</h5>
                <p>UX Content writer</p>
              </div>
              <div class="btnWrap">
                <a href="#" class="btnSecond">
                  Following
                </a>
              </div>
            </li>
            <li>
              <figure>
                <img
                  src="app/images/bigAvatar.png"
                  alt="Genaiguru user img"
                  title="Genaiguru user image"
                />
              </figure>
              <div class="names">
                <h5>Jms Mittan</h5>
                <p>UX Content writer</p>
              </div>
              <div class="btnWrap">
                <a href="#" class="btnSecond">
                  Follow
                </a>
              </div>
            </li>
            <li>
              <figure>
                <img
                  src="app/images/bigAvatar.png"
                  alt="Genaiguru user img"
                  title="Genaiguru user image"
                />
              </figure>
              <div class="names">
                <h5>Jms Mittan</h5>
                <p>UX Content writer</p>
              </div>
              <div class="btnWrap">
                <a href="#" class="btnSecond">
                  Following
                </a>
              </div>
            </li>
            <li>
              <figure>
                <img
                  src="app/images/bigAvatar.png"
                  alt="Genaiguru user img"
                  title="Genaiguru user image"
                />
              </figure>
              <div class="names">
                <h5>Jms Mittan</h5>
                <p>UX Content writer</p>
              </div>
              <div class="btnWrap">
                <a href="#" class="btnSecond">
                  Follow
                </a>
              </div>
            </li>
            <li>
              <figure>
                <img
                  src="app/images/bigAvatar.png"
                  alt="Genaiguru user img"
                  title="Genaiguru user image"
                />
              </figure>
              <div class="names">
                <h5>Jms Mittan</h5>
                <p>UX Content writer</p>
              </div>
              <div class="btnWrap">
                <a href="#" class="btnSecond">
                  Following
                </a>
              </div>
            </li>
          </ul>
          <div class="buttonText">
            <Link to={"/login7"} class="loginBtn">
              Continue
            </Link>
            {/* <a href="#" class="loginBtn">
              Continue
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login6;
