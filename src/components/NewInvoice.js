import React from "react";
import "../assets/styles/newInvocie.css";

const NewInvoice = () => {
  return (
    <div className="new-invoice">
      <h2 className="title">New Invoice</h2>
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
          <input className="full-input" type="text" />
        </div>
        <div className="block">
          <p className="info-text">Payment Terms</p>
          <input className="full-input" type="text" />
        </div>
        <div className="block">
          <p className="info-text">Projects Description</p>
          <input className="full-input" type="text" />
        </div>
      </div>
    </div>
  );
};

export default NewInvoice;
