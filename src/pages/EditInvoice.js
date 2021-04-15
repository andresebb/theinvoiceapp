import React, { useContext, useEffect } from "react";
import "../assets/styles/newInvoice.css";
import GoBack from "../components/GoBack";
import BillFrom from "../components/BillFrom";
import BillTo from "../components/BillTo";
import Itemlist from "../components/Itemlist";
import { ModalContext } from "../context";

const EditInvoice = () => {
  const { actualInvoice, getActualInvoice } = useContext(ModalContext);

  const location = window.location.pathname.split(":");
  const idLocation = location[1];

  useEffect(() => {
    getActualInvoice(idLocation);
  });

  return (
    <>
      {actualInvoice ? (
        <>
          <div className="new-invoice">
            <GoBack />
            <h2 className="title">Edit #{actualInvoice.id}</h2>
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
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default EditInvoice;
