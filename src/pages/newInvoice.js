import React, { useContext, useEffect, useState } from "react";
import "../assets/styles/newInvoice.css";
import GoBack from "../components/GoBack";
import BillFrom from "../components/BillFrom";
import BillTo from "../components/BillTo";
import { ModalContext } from "../context";

import Itemlist from "../components/Itemlist";

const NewInvoice = () => {
  const { invoice, setInvoice, addNewInvoice } = useContext(ModalContext);

  useEffect(() => {
    generateId();
  }, []);

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

    setInvoice({ ...invoice, id: result });
  };

  return (
    <>
      <div className="new-invoice">
        <GoBack />
        <h2 className="title">New Invoice</h2>
        <BillFrom />
        <BillTo />
        <Itemlist />
      </div>
      <div className="option">
        <button className="btn">Discard</button>
        <button className="btn black">Save as Draf</button>
        <button className="btn morado" onClick={addNewInvoice}>
          Save & Send
        </button>
      </div>
    </>
  );
};

export default NewInvoice;
