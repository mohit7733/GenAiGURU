import React from "react";
import { getBaseURL } from "../../api/config";
import axios from "axios";

const LevelPopup = ({ claimedLevels, onClose }) => {
  const userId = JSON.parse(localStorage.getItem("UserId"));

  const fetchBadges = async () => {
    try {
      axios.post(`${getBaseURL()}/claim-user-level?user_id=${userId}`);
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
      return (
      <section class="loginPopup silverPopup">
        <div class="wrapper">
          <figure>
            <img
              src={claimedLevels.rank_image}
              alt="Genaiguru medal-second-place.png"
              title="Genaiguru medal-second-place.png"
            />
          </figure>
          <div class="labelInner">
            <h6>{claimedLevels.name} </h6>
          </div>
          <h2>You’ve Achieved New Level</h2>
          <a
            class="loginBtn"
            onClick={() => {
              fetchBadges();
              //   console.log(badges.badge_id);
            }}
          >
            Ok
          </a>
        </div>
      </section>
      );
    </div>
  );
};

export default LevelPopup;
