import React, { useContext } from "react";
import "../assets/styles/modal.css";
import { ModalContext } from "../context";

const Modal = () => {
  const { setShow } = useContext(ModalContext);

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
          <button className="btn btn-modal">Cancel</button>
          <button
            className="btn danger btn-modal"
            onClick={() => setShow(false)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
