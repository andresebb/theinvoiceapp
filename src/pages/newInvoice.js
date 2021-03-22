import React, { useContext } from "react";
import "../assets/styles/newInvoice.css";
import GoBack from "../components/GoBack";
import BillFrom from "../components/BillFrom";
import BillTo from "../components/BillTo";
import { ModalContext } from "../context";
import { db } from "../firebase";

import Itemlist from "../components/Itemlist";

const NewInvoice = () => {
  const { invoice } = useContext(ModalContext);

  const addNewInvoice = async () => {
    console.log(invoice);
    // try {
    //   await db.collection("invoices").doc().set(invoice);
    //   console.log("todo bien");
    // } catch (e) {
    //   console.log(e);
    // }
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
