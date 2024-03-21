import React from "react";
import CookieConsent from "react-cookie-consent";
const Cookie = () => {
  return (
    <div className="cookies">
      <CookieConsent
        enableDeclineButton
        location="bottom"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#232D3C", opacity: "0.9", borderRadius: "30px",alignItems:"center"}}
        buttonStyle={{
          color: "white",
          fontSize: "13px",
          background:
            "linear-gradient(87.97deg, #B03FCC 2.88%, #683FE4 25.56%, rgba(216, 63, 190, 0.94) 114.56%)",
          fontSize: "20px",
          margin: "10px 140px",
          marginLeft: "10px",
          borderRadius: "10px",
          
        }}
        declineButtonStyle={{
          fontSize: "13px",
          background:
            "linear-gradient(87.97deg, #B03FCC 2.88%, #683FE4 25.56%, rgba(216, 63, 190, 0.94) 114.56%)",
          fontSize: "20px",
          borderRadius: "10px",
        }}
        expires={365}
      >
        <div className="cookies-flex">
          <div className="Cookie-img">
            <img src="app/images/cookiesIcon.svg" alt="Cookies-icon" />
          </div>
          <div className="Cookie-text">
          <p>
          This site uses cookies in order to offer you the most relevant
            information.Please accept cookies for optimal performance.
          </p>
          </div>
        </div>
      </CookieConsent>
    </div>
  );
};
export default Cookie;
