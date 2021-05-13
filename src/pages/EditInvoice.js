import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../assets/styles/newInvoice.css";
import GoBack from "../components/GoBack";
import BillFrom from "../components/BillFrom";
import BillTo from "../components/BillTo";
import Itemlist from "../components/Itemlist";
import { ModalContext } from "../context";
import { db } from "../firebase";

const EditInvoice = () => {
  const { actualInvoice, resetInvoice, invoice, getActualInvoice, setInvoice } =
    useContext(ModalContext);

  const location = window.location.pathname.split(":");
  const idLocation = location[1];
  let history = useHistory();

  useEffect(() => {
    getActualInvoice(idLocation);
  }, []);

  //Edit invoice on the firestore
  const handleEditInvoice = async () => {
    try {
      await db
        .collection("invoices")
        .doc(actualInvoice.idFirebase)
        .update(invoice);
      history.push("/");
      resetInvoice();
    } catch (e) {
      console.log(e);
    }
  };

  const markAsDraft = async () => {
    try {
      await db
        .collection("invoices")
        .doc(actualInvoice.idFirebase)
        .update({ ...invoice, status: "Draft" });
      history.push("/");
      resetInvoice();
    } catch (e) {
      console.log(e);
    }
  };

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
            <button className="btn black" onClick={markAsDraft}>
              Save as Draf
            </button>
            <button className="btn morado" onClick={handleEditInvoice}>
              Save & Update
            </button>
          </div>
        </>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default EditInvoice;
