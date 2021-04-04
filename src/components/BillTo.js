import React, { useState, useContext, useEffect, useRef } from "react";
import "../assets/styles/billTo.css";
import { ModalContext } from "../context";
import Calendario from "../assets/images/icon-calendar.svg";
import ArrowDown from "../assets/images/icon-arrow-down.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BillTo = () => {
  const { invoice, handleInputChange, setInvoice } = useContext(ModalContext);
  const [payOption, setPayOption] = useState();
  const [startDate, setStartDate] = useState(new Date());

  const textPay = useRef(null);
  const paymentBox = useRef(null);
  const arrow = useRef(null);

  useEffect(() => {
    setInvoice({ ...invoice, billToDate: startDate });
    console.log(startDate);
  }, [startDate]);

  const handlePaymentOption = (e) => {
    let option = e.target.textContent;
    textPay.current.textContent = option;
    setPayOption(option);
    setInvoice({ ...invoice, billToTerms: option });
    handleVisibility();
  };

  const handleVisibility = () => {
    if (paymentBox.current.style.display === "block") {
      paymentBox.current.style.display = "none";
    } else {
      paymentBox.current.style.display = "block";
    }

    if (arrow.current.style.transform === "rotate(180deg)") {
      arrow.current.style.transform = "rotate(0deg)";
    } else {
      arrow.current.style.transform = "rotate(180deg)";
    }
  };

  return (
    <>
      <div className="bill-to">
        <h4 className="purple">Bill To</h4>
        <div className="block">
          <p className="info-text">Client's Name </p>
          <input
            className="full-input"
            type="text"
            name="billToName"
            onChange={handleInputChange}
          />
        </div>
        <div className="block">
          <p className="info-text">Client's Email</p>
          <input
            className="full-input"
            type="text"
            name="billToEmail"
            onChange={handleInputChange}
          />
        </div>
        <div className="block">
          <p className="info-text">Street Address</p>
          <input
            className="full-input"
            type="text"
            name="billToStreet"
            onChange={handleInputChange}
          />
        </div>
        <div className="location block">
          <div className="location-container">
            <p className="info-text">City</p>
            <input
              className="full-input"
              type="text"
              name="billToCity"
              onChange={handleInputChange}
            />
          </div>
          <div className="location-container">
            <p className="info-text">Post Code</p>
            <input
              className="full-input"
              type="text"
              name="billToCode"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="block">
          <p className="info-text">Country</p>
          <input
            className="full-input"
            type="text"
            name="billToCountry"
            onChange={handleInputChange}
          />
        </div>
        <div className="block date-box">
          <p className="info-text">Invoice Date</p>
          <div className="input-img">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            <img src={Calendario} alt="" />
          </div>
          <div></div>
        </div>
        <div className="block">
          <p className="info-text">Payment Terms</p>
          <div className="input-img">
            <p
              className="full-input payment-text"
              type=""
              ref={textPay}
              value={payOption}
              name="billToTerms"
              onClick={handleVisibility}
            />
            <img src={ArrowDown} alt="" ref={arrow} />
          </div>
          <div className="payment-box info-text" ref={paymentBox}>
            <p className="payment-option" onClick={handlePaymentOption}>
              Net one week
            </p>
            <p className="payment-option" onClick={handlePaymentOption}>
              Net 15 days
            </p>
            <p className="payment-option" onClick={handlePaymentOption}>
              Net 30 days
            </p>
          </div>
        </div>
        <div className="">
          <p className="info-text">Projects Description</p>
          <input
            className="full-input"
            type="text"
            name="billToDescription"
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );
};

export default BillTo;
