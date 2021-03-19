import React from "react";
import "../assets/styles/invoice.css";

const Invoice = () => {
  return (
    <div className="invoice-box">
      <div className="invoice-id">
        <p className="invoice-number">#RT3080</p>
        <p className="info-text">Jensen Huang</p>
      </div>
      <div className="invoice-status">
        <div>
          <p className="info-text">Due 19 Aug 2021</p>
          <p className="invoice-money">$ 1,800.90</p>
        </div>
        <div className="status">
          <div className="punto"></div>
          <p>Pending</p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
