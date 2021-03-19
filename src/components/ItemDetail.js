import React, { useContext, useState } from "react";
import DeleteIcon from "../assets/images/icon-delete.svg";
import { ModalContext } from "../context";

const ItemDetail = () => {
  const list = {
    itemName: "",
    itemQty: "",
    itemPrice: "",
  };

  const [itemList, setItemList] = useState([]);

  const handleItemList = (e) => {
    const { name, value } = e.target;
  };

  return (
    <>
      <div className="item-list">
        <div className="block">
          <p className="info-text">Item Name</p>
          <input
            className="full-input"
            type="text"
            name="itemName"
            onChange={handleItemList}
          />
        </div>
        <div className="cost ">
          <div>
            <p className="info-text">Qty.</p>
            <input
              className="full-input"
              type="text"
              name="itemQty"
              onChange={handleItemList}
            />
          </div>
          <div>
            <p className="info-text">Price</p>
            <input
              className="full-input"
              type="text"
              name="itemPrice"
              onChange={handleItemList}
            />
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
