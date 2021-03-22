import React, { useContext, useState } from "react";
import ItemDetail from "./ItemDetail";
import { ModalContext } from "../context";
import "../assets/styles/itemList.css";
const list = {
  itemName: "",
  itemQty: "",
  itemPrice: "",
};

const Itemlist = () => {
  const [itemListForm, setItemListForm] = useState([list]);
  const { invoice, listOfItem, addItemToList } = useContext(ModalContext);

  // const addItem = (e) => {
  //   e.preventDefault();
  //   setItemListForm([...itemListForm, list]);
  //   console.log(itemListForm);
  // };

  return (
    <>
      <div className="itemList">
        <h3>Item List</h3>
        {listOfItem.map(() => (
          <ItemDetail id="55" />
        ))}
      </div>
      <button className="btn-large" onClick={addItemToList}>
        + Add New Item
      </button>
    </>
  );
};

export default Itemlist;
