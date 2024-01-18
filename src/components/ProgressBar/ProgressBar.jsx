import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./GradientProgressBar.css"; // Import the CSS file for styling

const ProgressBar = ({ startColor, endColor, idCSS, rotation }) => {
  let gradientTransform = `rotate(${rotation})`;

  return (
    <>
      {/* <div className="progress-bar-container">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: "butt",
            textSize: "16px",
            pathTransitionDuration: 0.5,
            pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
            textColor: "#f88",
            trailColor: "#808080",
            backgroundColor: "#3e98c7",
          })}
          strokeWidth={5}
        >
          <figure>
            <img
              src={image}
              alt="userIcon"
              title="userIcon"
              style={{ borderRadius: "100%" }}
            />
          </figure>
        </CircularProgressbar>
      </div> */}
      <svg style={{ height: "100px" }}>
        <defs>
          <linearGradient id={idCSS} gradientTransform={gradientTransform}>
            <stop offset="0%" stopColor={startColor} />
            <stop offset="100%" stopColor={endColor} />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default ProgressBar;
