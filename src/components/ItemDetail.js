import React, { useContext, useState, useEffect } from "react";
import DeleteIcon from "../assets/images/icon-delete.svg";
import { ModalContext } from "../context";

const ItemDetail = () => {
  const { addItemToList } = useContext(ModalContext);

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
    console.log(form);
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
                <img src={DeleteIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default ItemDetail;
