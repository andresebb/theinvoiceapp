import React, { useContext, useState, useEffect, useRef } from "react";
import DeleteIcon from "../assets/images/icon-delete.svg";
import { ModalContext } from "../context";
import "../assets/styles/itemDetail.css";

const ItemDetail = () => {
  const {
    addItemToList,
    listOfItem,
    setListOfItem,
    invoice,
    setInvoice,
  } = useContext(ModalContext);
  const check = useRef(null);

  const [form, setForm] = useState({
    itemName: "",
    itemQty: 0,
    itemPrice: 0,
    itemTotal: 0,
  });

  useEffect(() => {
    getTotal();
  }, [form.itemPrice, form.itemQty]);

  const getTotal = () => {
    setForm({ ...form, itemTotal: form.itemQty * form.itemPrice });
    // console.log(form);
  };

  const onchange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();
    const { itemName, itemQty, itemPrice, itemTotal } = form;

    addItemToList(itemName, itemQty, itemPrice, itemTotal);

    //Button Disabled
    e.target.firstChild.lastChild.lastChild.lastChild.lastChild.firstChild.disabled =
      "true";

    check.current.style.color = "#7c5dfa";
  };

  const removeItem = (e) => {
    //Delete from DOM
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();

    const itemName =
      e.target.parentElement.parentElement.parentElement.parentElement
        .parentElement.parentElement.firstChild.lastChild.value;

    //Delete from ListOfItems
    const oficialItems = listOfItem.filter((item) => {
      return item.name !== itemName;
    });

    setInvoice({ ...invoice, itemList: oficialItems });
    setListOfItem(oficialItems);
  };

  return (
    <>
      <form onSubmit={hanldeSubmit}>
        <div className="item-list">
          <div className="block">
            <p className="info-text">Item Name</p>
            <input
              className="full-input"
              type="text"
              name="itemName"
              onChange={onchange}
            />
          </div>
          <div className="cost ">
            <div>
              <p className="info-text">Qty.</p>
              <input
                className="full-input"
                type="number"
                name="itemQty"
                onChange={onchange}
              />
            </div>
            <div>
              <p className="info-text">Price</p>
              <input
                className="full-input"
                type="number"
                name="itemPrice"
                onChange={onchange}
              />
            </div>
            <div>
              <div>
                <p className="info-text">Total</p>
              </div>
              <div className="total-continer">
                <p className="info-text-bold">{form.itemTotal}</p>
                <div className="action-container">
                  <button type="submit" className="send-check">
                    <i ref={check} class="fas fa-check-double"></i>
                  </button>
                  <button type="button" onClick={removeItem}>
                    <img src={DeleteIcon} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ItemDetail;
