import React, { useRef } from "react";
import { Link } from "react-router-dom"
import "../assets/styles/createInvoice.css";
import ArrowDown from "../assets/images/icon-arrow-down.svg";
import PlusIcon from "../assets/images/icon-plus.svg";

const CreateFilter = () => {
  const selector = useRef();

  return (
    <div className="create-invoice">
      <div className="create-invoice-container">
        <div className="invoice-left">
          <h2>Invoices</h2>
          <p>No invoices</p>
        </div>
        <div className="invoice-right">
          <div></div>
          <div className="filter-container">
            <p>Filter</p>
            <img src={ArrowDown} alt="" />
          </div>
          <div className="new-container">
            <Link to="/new" className="plus">
              <img src={PlusIcon} alt="" />
            </Link>
            <p className="new">New</p>
            {/* <input
              type="range"
              value="5"
              min="0"
              max="10"
              id="slider"
              onChange={() => console.log(selector)}
            />
            <div id="selector" ref={selector}>
              <div className="selectorbtn"></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateFilter;
