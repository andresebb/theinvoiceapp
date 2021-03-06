import React from "react";
import "../assets/styles/header.css";
import Logo from "../assets/images/logo.svg";
import Avatar from "../assets/images/image-avatar.jpg";
import Moon from "../assets/images/icon-moon.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src={Logo} alt="" />
          <div className="logo-background"></div>
        </div>
        <div className="imgs-container">
          <div className="moon-container">
            <img src={Moon} alt="" />
          </div>
          <div className="avatar-container">
            <img src={Avatar} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
