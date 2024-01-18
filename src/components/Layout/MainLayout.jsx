import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getBaseURL } from "../../api/config";
import SilverPopup from "../../pages/Phase5Pages/SilverPopup";
import FixedAIButtonLogo from "../FixedAIButton/FixedAIButtonLogo";
const MainLayout = ({ children }) => {
  // const [showPopUp, setShowPopUp] = useState(false);
  // const [claimedBadges, setClaimedBadges] = useState([]);

  // // const userId = JSON.parse(localStorage.getItem("UserId"));

  // // fetchBadges API
  // useEffect(() => {
  //   const fetchBadges = async () => {
  //     try {
  //       const response = await axios.get(`${getBaseURL()}/game-badges`, {
  //         params: {
  //           user_id: JSON.parse(localStorage.getItem("UserId")),
  //           claimed: "no",
  //         },
  //       });
  //       console.log(response?.data?.data);
  //       setClaimedBadges(response?.data?.data);
  //       if (response?.data?.data.length > 0) {
  //         setShowPopUp(true);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user points:", error.message);
  //     }
  //   };
  //   fetchBadges();
  // }, []);

  // console.log(claimedBadges);
  return (
    <div>
      <section className="">
        <div className="">{children}</div>
        <FixedAIButtonLogo />
        <Outlet />
      </section>
      <Outlet />
    </div>
  );
};

export default MainLayout;
