import React from "react";
import DeleteIcon from "../assets/images/icon-delete.svg";

import "../assets/styles/itemList.css";

const Itemlist = () => {
  return (
    <>
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
    </>
  );
};

export default Itemlist;
