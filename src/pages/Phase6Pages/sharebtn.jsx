import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FacebookShareButton } from "react-share";
import { TwitterShareButton } from "react-share";
import { FacebookIcon } from "react-share";
import { XIcon } from "react-share";
import { FacebookCount, TwitterCount } from "react-social";

export default function Sharebtn(props) {
  const [share, setShare] = useState({});
  const handleShareToggle = (itemId) => {
    setShare((prev) => ({
      ...prev,
      [itemId]: !prev[itemId] || false,
    }));
  };
  return (
    <a
      onClick={() => handleShareToggle(props.id)}
      className="btn-icon"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <img
        style={{ position: "absolute" }}
        // {share[props.id] ? { marginTop: "110px" } : { marginTop: "0px" }}
        src={"./app/images/share-icon.png"}
        title=""
        alt=""
      />
      <ul
        style={
          share[props.id] &&
          JSON.parse(localStorage.getItem("userLoggedIn")) == "true"
            ? { display: "block" }
            : { display: "none" }
        }
      >
        <li style={{ marginTop: "150px", textAlign: "center" }}>
          <FacebookShareButton quote={props.title} url={props.url}>
            <FacebookIcon
              size="40px"
              logofillcolor="white"
              round="true"
            ></FacebookIcon>
            <FacebookCount/>
          </FacebookShareButton>
          <TwitterShareButton title={props.title} url={props.url}>
            <XIcon size="40px" logofillcolor="white" round="true"></XIcon>
            <TwitterCount/>
          </TwitterShareButton>
        </li>
      </ul>
    </a>
  );
}
