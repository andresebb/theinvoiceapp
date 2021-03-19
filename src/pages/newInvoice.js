import React, { useContext } from "react";
import "../assets/styles/newInvoice.css";
import GoBack from "../components/GoBack";
import BillFrom from "../components/BillFrom";
import BillTo from "../components/BillTo";
import { ModalContext } from "../context";

import Itemlist from "../components/Itemlist";

const NewInvoice = () => {
  const { invoice } = useContext(ModalContext);

  const hanldeSubmit = () => {
    console.log("hola");
    console.log(invoice);
  };

  return (
    <>
      <div className="new-invoice">
        <GoBack />
        <h2 className="title">New Invoice</h2>
        <form onSubmit={hanldeSubmit}>
          <BillFrom />
          <BillTo />
          <Itemlist />
        </form>
      </div>
      <div className="option">
        <button className="btn">Discard</button>
        <button className="btn black">Save as Draf</button>
        <button className="btn morado" onClick={hanldeSubmit}>
          Save & Send
        </button>
      </div>
    </>
  );
};

export default NewInvoice;
