import React, { useContext, useState } from "react";
import DeleteIcon from "../assets/images/icon-delete.svg";
import { ModalContext } from "../context";

const ItemDetail = () => {
  const { handleItemList } = useContext(ModalContext);

  return (
    <>
      <div className="item-list">
        <div className="block">
          <p className="info-text">Item Name</p>
          <input className="full-input" type="text" name="itemName" />
        </div>
        <div className="cost ">
          <div>
            <p className="info-text">Qty.</p>
            <input className="full-input" type="text" name="itemQty" />
          </div>
          <div>
            <p className="info-text">Price</p>
            <input className="full-input" type="text" name="itemPrice" />
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
    </>
  );
};

export default ItemDetail;
