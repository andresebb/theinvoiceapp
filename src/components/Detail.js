import React from "react";
import "../assets/styles/detail.css";
import TotalBox from "./TotalBox";

const Detail = () => {
  return (
    <>
      <div className="detail-container">
        <div className="block">
          <div className="detail-number">
            <p>
              <span className="numeral">#</span>
              <span className="number">XM9141</span>
            </p>
            <p className="info-text">Graphic Design</p>
          </div>
          <div className="location">
            <p className="location-text">
              19 Union Terrace <br /> London <br /> El 3EZ <br /> United kingdom
            </p>
          </div>
        </div>
        <div className="date">
          <div className="date-left">
            <div>
              <p className="info-text">Invoice Date</p>
              <p className="big-date">21 Aug 2021</p>
            </div>
            <div>
              <p className="info-text">Payment Due</p>
              <p className="big-date">20 Sep 2021</p>
            </div>
          </div>
          <div className="date-right">
            <p className="info-text">Bill to</p>
            <p className="big-date">Alex Grim</p>
            <p className="location-text">
              84 Church Way <br />
              Broadford <br />
              BD19PB <br />
              United Kingdom
            </p>
          </div>
        </div>
        <div className="sent-to ">
          <p className="info-text">Sent to</p>
          <p className="big-date">alexgrim@gmail.com</p>
        </div>
        <TotalBox />
      </div>
    </>
  );
};

export default Detail;
