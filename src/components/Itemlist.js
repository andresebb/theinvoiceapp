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
  const { numberOfItems, setNumberOfItems, actualInvoice } = useContext(
    ModalContext
  );

  const addItem = (e) => {
    let vin = generateId();
    setNumberOfItems([...numberOfItems, { id: vin }]);
  };

  const generateId = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letter1 = characters.charAt(
      Math.floor(Math.random() * characters.length)
    );

    const letter2 = characters.charAt(
      Math.floor(Math.random() * characters.length)
    );

    const numbers = Math.floor(Math.random() * (9999 - 1000) + 1000);

    const result = `${letter1}${letter2}${numbers}`;

    return result;
  };

  return (
    <>
      <div className="itemList">
        <h3>Item List</h3>
        <div>
          {numberOfItems.map(({ id }) => (
            <ItemDetail key={id} />
          ))}

          {actualInvoice ? (
            <>
              {actualInvoice.itemList.map((data) => (
                <ItemDetail data={data} />
              ))}
            </>
          ) : (
            <>
              <p>Chao</p>
            </>
          )}
        </div>
      </div>
      <button className="btn-large" onClick={addItem}>
        + Add New Item
      </button>
    </>
  );
};

export default Itemlist;
