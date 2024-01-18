import React from "react";

const ProfileBadges = ({ claimedBadges }) => {
  return (
    <div className="badges-box">
      <ul className="flex ">
        {claimedBadges?.map((badge, index) => {
          return (
            <li key={index}>
              <a>
                <img
                  src={badge.badge_image}
                  alt="badge_image"
                  title="badge_image"
                />
                <span>{badge.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProfileBadges;
