import React, { useContext } from "react";
import Detail from "../components/Detail";
import GoBack from "../components/GoBack";
import "../assets/styles/detailInvoice.css";
import StatusBox from "../components/StatusBox";
import { ModalContext } from "../context";
import Modal from "../components/Modal";

const DetailInvoice = () => {
  const { show, setShow } = useContext(ModalContext);

  console.log(show);

  return (
    <>
      <div className="detail">
        <GoBack />
        <StatusBox />
        <Detail />
      </div>
      <div className="option dos">
        <button className="btn ">Edit</button>
        <button className="btn danger" onClick={() => setShow(true)}>
          Delete
        </button>
        <button className="btn morado">Mark as Paid</button>
      </div>
      {show ? <Modal /> : <div></div>}
    </>
  );
};

export default DetailInvoice;
