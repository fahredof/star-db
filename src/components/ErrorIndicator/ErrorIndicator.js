import React from "react";
import "./ErrorIndicator.css";

import deathStar from "./png/death-star-icon.png"
const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
        <span>
        <img
            className="star"
            src={deathStar}
            alt="error"
        />
        </span>
        <span className="boom">BOOM!</span>
        <span>
            something has gone terribly wrong
        </span>
        <span>
            (but we already sent the droids)
        </span>
    </div>
  );
};

export default ErrorIndicator;