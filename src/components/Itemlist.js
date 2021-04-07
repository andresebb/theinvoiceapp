import React, { useContext, useState, useRef } from "react";
import ItemDetail from "./ItemDetail";
import { ModalContext } from "../context";
import "../assets/styles/itemList.css";
const list = {
  itemName: "",
  itemQty: "",
  itemPrice: "",
};

const Itemlist = () => {
  const { numberOfItems, setNumberOfItems } = useContext(ModalContext);

  const addItem = (e) => {
    setNumberOfItems([...numberOfItems, {}]);
  };

  return (
    <>
      <div className="itemList">
        <h3>Item List</h3>
        <div>
          {numberOfItems.map(() => (
            <ItemDetail />
          ))}
        </div>
      </div>
      <button className="btn-large" onClick={addItem}>
        + Add New Item
      </button>
    </>
  );
};

export default Itemlist;
