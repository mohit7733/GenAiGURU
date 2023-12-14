import React from "react";

const MobileSideBar = () => {
  return (
    <div>
      <section class="mobileMenus">
        <div class="menuWrapper">
          <div class="close">
            <img
              src="app/images/menuCloseIcon.png"
              alt="Genaiguru menu close icon"
              title="Genaiguru menu close"
            />
          </div>
          <div class="topSearch">
            <div class="searchbar flex">
              <figure class="icon">
                <img
                  src="app/images/searchIconHeader.png"
                  alt="Genaiguru small logo"
                  title="Genaiguru small logo"
                />
              </figure>
              <form action="">
                <div class="form_group">
                  <input type="search" placeholder="Search AI" />
                </div>
              </form>
            </div>
          </div>
          <ul class="menuLists">
            <li>
              <a href="#" target="_blank">
                <img
                  src="app/images/mobileMenuIcon1.png"
                  alt="Genaiguru write menu icon"
                  title="Genaiguru write menu icon"
                />
                Write
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img
                  src="app/images/mobileMenuIcon2.png"
                  alt="Genaiguru Gamification menu icon"
                  title="Genaiguru Gamification menu icon"
                />
                Gamification
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img
                  src="app/images/mobileMenuIcon3.png"
                  alt="Genaiguru Notifications menu icon"
                  title="Genaiguru Notifications menu icon"
                />
                Notifications
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img
                  src="app/images/mobileMenuIcon4.png"
                  alt="Genaiguru Bookmarked post menu icon"
                  title="Genaiguru Bookmarked post menu icon"
                />
                Bookmarked post
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img
                  src="app/images/mobileMenuIcon5.png"
                  alt="Genaiguru blog page menu icon"
                  title="Genaiguru blog page menu icon"
                />
                Blog page
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img
                  src="app/images/mobileMenuIcon6.png"
                  alt="Genaiguru profile menu icon"
                  title="Genaiguru profile menu icon"
                />
                Profile
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img
                  src="app/images/mobileMenuIcon7.png"
                  alt="Genaiguru About & Contact menu icon"
                  title="Genaiguru About & Contact menu icon"
                />
                About & Contact
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img
                  src="app/images/mobileMenuIcon8.png"
                  alt="Genaiguru My subscription menu icon"
                  title="Genaiguru My subscription menu icon"
                />
                My subscription
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img
                  src="app/images/mobileMenuIcon9.png"
                  alt="Genaiguru Settings menu icon"
                  title="Genaiguru Settings menu icon"
                />
                Settings
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img
                  src="app/images/mobileMenuIcon10.png"
                  alt="Genaiguru Log out menu icon"
                  title="Genaiguru Log out menu icon"
                />
                Log out
              </a>
            </li>
          </ul>
          <ul class="mobileSocials flex">
            <li>
              <a href="#" target="_blank">
                <img
                  src="app/images/facebookIconNew.png"
                  alt="Genaiguru facebook icons"
                  title="Genaiguru on facebook"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img
                  src="app/images/youtubeIcon.png"
                  alt="Genaiguru youtube icons"
                  title="Genaiguru on youtube"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img
                  src="app/images/twitter.png"
                  alt="Genaiguru twitter icons"
                  title="Genaiguru on twitter"
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MobileSideBar;
