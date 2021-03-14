import React from "react";
import "../assets/styles/billFrom.css";

const BillFrom = () => {
  return (
    <>
      <div className="bill-from">
        <h4 className="purple">Bill From</h4>
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
        <div className="country">
          <p className="info-text">Country</p>
          <input className="full-input" type="text" />
        </div>
      </div>
    </>
  );
};

export default BillFrom;
