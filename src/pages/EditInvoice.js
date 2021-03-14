import React from "react";
import "../assets/styles/newInvoice.css";
import GoBack from "../components/GoBack";
import BillFrom from "../components/BillFrom";
import BillTo from "../components/BillTo";
import Itemlist from "../components/Itemlist";

const EditInvoice = () => {
  return (
    <>
      <div className="new-invoice">
        <GoBack />
        <h2 className="title">Edit #XM9141</h2>
        <BillFrom />
        <BillTo />
        <Itemlist />
      </div>
      <div className="option">
        <button className="btn">Discard</button>
        <button className="btn black">Save as Draf</button>
        <button className="btn morado">Save & Send</button>
      </div>
    </>
  );
};

export default EditInvoice;
