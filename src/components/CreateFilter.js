import React, { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/createInvoice.css";
import ArrowDown from "../assets/images/icon-arrow-down.svg";
import PlusIcon from "../assets/images/icon-plus.svg";

const CreateFilter = () => {
  const selector = useRef();
  const statusFilter = useRef();
  const arrow = useRef();

  const openFilterStatus = () => {
    if (statusFilter.current.style.display === "block") {
      statusFilter.current.style.display = "none";
      arrow.current.style.transform = "rotate(0deg)";
    } else {
      statusFilter.current.style.display = "block";
      arrow.current.style.transform = "rotate(180deg)";
    }
  };

  return (
    <div className="create-invoice">
      <div className="create-invoice-container">
        <div className="invoice-left">
          <h2>Invoices</h2>
          <p>No invoices</p>
        </div>
        <div className="invoice-right">
          <div className="filter-container-mayor">
            <button onClick={openFilterStatus} className="filter-container">
              <p>Filter</p>
              <img ref={arrow} src={ArrowDown} alt="" />
            </button>
            <div ref={statusFilter} className="container-status">
              <div className="filter-status-item">
                <input type="checkbox" name="" id="" />
                <p>Pending</p>
              </div>
              <div className="filter-status-item">
                <input type="checkbox" name="" id="" />
                <p>Paid</p>
              </div>
              <div className="filter-status-item">
                <input type="checkbox" name="" id="" />
                <p>Draft</p>
              </div>
            </div>
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
