import React from "react";
import "../assets/styles/invoice.css";
import ArrowDown from "../assets/images/icon-arrow-down.svg";
import PlusIcon from "../assets/images/icon-plus.svg";

const CreateFilter = () => {
  return (
    <div className="invoice">
      <div className="invoice-container">
        <div className="invoice-left">
          <h2>Invoices</h2>
          <p>No invoices</p>
        </div>
        <div className="invoice-right">
          <div className="filter-container">
            <p>Filter</p>
            <img src={ArrowDown} alt="" />
          </div>
          <div className="new-container">
            <div className="plus">
              <img src={PlusIcon} alt="" />
            </div>
            <p className="new">New</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateFilter;
