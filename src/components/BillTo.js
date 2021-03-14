import React from "react";
import "../assets/styles/billTo.css";
import Calendar from "../assets/images/icon-calendar.svg";
import ArrowDown from "../assets/images/icon-arrow-down.svg";

const BillTo = () => {
  return (
    <>
      <div className="bill-to">
        <h4 className="purple">Bill To</h4>
        <div className="block">
          <p className="info-text">Client's Name </p>
          <input className="full-input" type="text" />
        </div>
        <div className="block">
          <p className="info-text">Client's Email</p>
          <input className="full-input" type="text" />
        </div>
        <div className="block">
          <p className="info-text">Street Address</p>
          <input className="full-input" type="text" />
        </div>
        <div className="location block">
          <div className="location-container">
            <p className="info-text">City</p>
            <input className="full-input" type="text" />
          </div>
          <div className="location-container">
            <p className="info-text">Post Code</p>
            <input className="full-input" type="text" />
          </div>
        </div>
        <div className="block">
          <p className="info-text">Country</p>
          <input className="full-input" type="text" />
        </div>
        <div className="block">
          <p className="info-text">Invoice Date</p>
          <div className="input-img">
            <input className="full-input" type="text" />
            <img src={Calendar} alt="" />
          </div>
        </div>
        <div className="block">
          <p className="info-text">Payment Terms</p>
          <div className="input-img">
            <input className="full-input" type="text" />
            <img src={ArrowDown} alt="" />
          </div>
        </div>
        <div className="">
          <p className="info-text">Projects Description</p>
          <input className="full-input" type="text" />
        </div>
      </div>
    </>
  );
};

export default BillTo;
