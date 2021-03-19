import React, { useContext } from "react";
import { ModalContext } from "../context";
import "../assets/styles/billFrom.css";

const BillFrom = () => {
  const { invoice, handleInputChange } = useContext(ModalContext);


  return (
    <>
      <div className="bill-from">
        <h4 className="purple">Bill From</h4>
        <div className="block">
          <p className="info-text">Street Address</p>
          <input className="full-input" type="text" name="billFromStreet" onChange={handleInputChange} />
        </div>
        <div className="location block">
          <div className="location-container">
            <p className="info-text">City</p>
            <input className="full-input" type="text" name="billFromCity" onChange={handleInputChange} />
          </div>
          <div className="location-container">
            <p className="info-text">Post Code</p>
            <input className="full-input" name="billFromCode" type="text" onChange={handleInputChange} />
          </div>
        </div>
        <div className="country">
          <p className="info-text">Country</p>
          <input className="full-input" name="billFromCountry" type="text" onChange={handleInputChange} />
        </div>
      </div>
    </>
  );
};

export default BillFrom;
