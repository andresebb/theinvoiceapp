import React from "react";
import { Link } from "react-router-dom";
import ArrowLeft from "../assets/images/icon-arrow-left.svg";
import "../assets/styles/goBack.css";

const GoBack = () => {
  return (
    <Link to="/" className="go-back">
      <img src={ArrowLeft} alt="" />
      <p>Go back</p>
    </Link>
  );
};

export default GoBack;
