import React from "react";
import ArrowLeft from "../assets/images/icon-arrow-left.svg";
import "../assets/styles/goBack.css";

const GoBack = () => {
  return (
    <div className="go-back">
      <img src={ArrowLeft} alt="" />
      <p>Go back</p>
    </div>
  );
};

export default GoBack;
