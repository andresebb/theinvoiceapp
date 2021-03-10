import React from "react";
import "../assets/styles/newInvocie.css";
import Calendar from "../assets/images/icon-calendar.svg";
import ArrowDown from "../assets/images/icon-arrow-down.svg";
import DeleteIcon from "../assets/images/icon-delete.svg";

const NewInvoice = () => {
  return (
    <>
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
          <div className="block">
            <p className="info-text">Projects Description</p>
            <input className="full-input" type="text" />
          </div>
        </div>
        <div className="item-list">
          <h3>Item List</h3>
          <div className="block">
            <p className="info-text">Item Name</p>
            <input className="full-input" type="text" />
          </div>
          <div className="cost ">
            <div>
              <p className="info-text">Qty.</p>
              <input className="full-input" type="text" />
            </div>
            <div>
              <p className="info-text">Price</p>
              <input className="full-input" type="text" />
            </div>
            <div>
              <div>
                <p className="info-text">Total</p>
              </div>
              <div className="total-continer">
                <p className="info-text-bold">156.00</p>
                <img src={DeleteIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <button className="btn-large">+ Add New Item</button>
      </div>
      <div className="option">
        <button className="btn">Discard</button>
        <button className="btn black">Save as Draf</button>
        <button className="btn morado">Save & Send</button>
      </div>
    </>
  );
};

export default NewInvoice;
