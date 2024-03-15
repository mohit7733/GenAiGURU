import React from "react";
import { getBaseURL } from "../../api/config";
import axios from "axios";

const SilverPopup = ({ claimedBadges, onClose }) => {
  const userId = JSON.parse(localStorage.getItem("UserId"));
  const token = JSON.parse(localStorage.getItem("token"));

  const fetchBadges = async (badge_id) => {
    try {
      axios.post(
        `${getBaseURL()}/claim-user-badge?user_id=${userId}&badge_id=${badge_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // if (claimedBadges.length <= 0) {
      onClose();
      // }
    } catch (error) {
      console.error("Error fetching user points:", error.message);
    }
  };
  return (
    <div>
      {/* <!-- login popup start here --> */}
      {claimedBadges?.map((badges, index) => {
        return (
          <section class="loginPopup silverPopup" key={index}>
            <div class="wrapper">
              <figure>
                <img
                  src={badges.badge_image}
                  alt="Genaiguru medal-second-place.png"
                  title="Genaiguru medal-second-place.png"
                />
                {/* <div class="dotsImg">
              <span></span>
              <span></span>
            </div> */}
              </figure>
              <div class="labelInner">
                <h6>{badges.name} </h6>
              </div>
              <h2>You’ve just earned a new Badge</h2>
              <a
                class="loginBtn"
                onClick={() => {
                  fetchBadges(badges.badge_id);
                  console.log(badges.badge_id);
                }}
              >
                Claim Now
              </a>
            </div>
          </section>
        );
      })}

      {/* <!-- login popup end here -->   */}
    </div>
  );
};

export default SilverPopup;
