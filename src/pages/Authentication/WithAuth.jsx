import React, { useState, useEffect } from "react";
import LoginPopup from "./LoginPopup";

const WithAuth = ({ children, callBack }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showsiginpopup, setShowsiginpopup] = useState(false);

  const userLoggedIn = JSON.parse(localStorage.getItem("userLoggedIn"));

  useEffect(() => {
    // Check if the user is logged in (you may use your own authentication logic)
    const checkLoginStatus = () => {
      // Example: Check login status using your authentication logic
      // const userIsLoggedIn = false;
      setIsLoggedIn(userLoggedIn);
    };
    checkLoginStatus();
  }, []);

  const handleClosePopup = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowsiginpopup(false);
  };


  // Render the wrapped components with the login state as a prop
  return (
    <div
      onClick={(e) => {
        if (isLoggedIn) {
          callBack();
        } else {
          setShowsiginpopup(true);
        }
      }}
    >
      {children}
      {showsiginpopup === true ? <LoginPopup onClosePopup={handleClosePopup}/> : null}
    </div>
  );
};

export default WithAuth;
