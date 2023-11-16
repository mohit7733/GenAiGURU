import React from "react";

const Sortbydate = () => {
  return (
    <div>
      <section class="loginPopup filterPopup">
        <div class="wrapper">
          <div class="headingContent">
            <h5>Sort by date</h5>
            <ul>
              <li>
                Today <span>Aug19</span>
              </li>
              <li>
                Yesterday <span>Aug19</span>
              </li>
              <li>
                Last week <span>Aug19</span>
              </li>
            </ul>
          </div>
          <a href="#" class="loginBtn">
            Done
          </a>
        </div>
      </section>
    </div>
  );
};

export default Sortbydate;
