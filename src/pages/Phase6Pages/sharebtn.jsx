import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FacebookShareButton } from "react-share";
import { TwitterShareButton } from "react-share";
import { FacebookIcon } from "react-share";
import { XIcon } from "react-share";
import WithAuth from "../Authentication/WithAuth";

export default function Sharebtn(props) {
  const [share, setShare] = useState({});
  const handleShareToggle = (itemId) => {
    setShare((prev) => ({
      ...prev,
      [itemId]: !prev[itemId] || false,
    }));
  };
  return (
    <Link
      onClick={() => handleShareToggle(props.id)}
      className="btn-icon"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <img
        style={share[props.id] ? { marginTop: "110px" } : { marginTop: "0px" }}
        src={"./app/images/share-icon.png"}
        title=""
        alt=""
      />
      {/* <WithAuth
        callBack={(e) => {
          console.log("Empty function issue", e);
        }}
      > */}
      {/* {(auth) =>
          auth && ( */}
      {/* <> */}
      <ul style={share[props.id] ? { display: "block" } : { display: "none" }}>
        <li style={{ marginTop: "20px", textAlign: "center" }}>
          <FacebookShareButton quote={props.title} url={props.url}>
            <FacebookIcon
              size="40px"
              logofillcolor="white"
              round="true"
            ></FacebookIcon>
          </FacebookShareButton>
          <TwitterShareButton title={props.title} url={props.url}>
            <XIcon size="40px" logofillcolor="white" round="true"></XIcon>
          </TwitterShareButton>
        </li>
      </ul>
      {/* </>
          )
        } */}
      {/* </WithAuth> */}
    </Link>
  );
}
