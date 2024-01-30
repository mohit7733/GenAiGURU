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
            <img src={claimedLevels.popup_image} />
          </figure>
          <div class="labelInner">
            <h4 style={{ color: "white" }}>Level-{claimedLevels.level} </h4>
            <h4>{claimedLevels.name} </h4>
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
