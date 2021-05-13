import React, { useContext } from "react";
import "../assets/styles/modal.css";
import { db } from "../firebase";
import { ModalContext } from "../context";
import { useHistory } from "react-router-dom";

const Modal = () => {
  const { setShow, actualInvoice, resetInvoice } = useContext(ModalContext);

  let history = useHistory();

  const deleteInvoice = async () => {
    try {
      setShow(false);
      await db.collection("invoices").doc(actualInvoice.idFirebase).delete();
      history.push("/");
      resetInvoice();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="modal">
      <div className="modal-container">
        <div>
          <h2>Confirm Deletion</h2>
          <p className="modal-text">
            Are you sure you want to delete invoice #XM9141? This action cannot
            be undone.
          </p>
        </div>
        <div className="modal-btn-container">
          <div></div>
          <button className="btn btn-modal" onClick={() => setShow(false)}>
            Cancel
          </button>
          <button className="btn danger btn-modal" onClick={deleteInvoice}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
