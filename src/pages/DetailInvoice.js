import React, { useContext, useEffect, useState } from "react";
import Detail from "../components/Detail";
import GoBack from "../components/GoBack";
import "../assets/styles/detailInvoice.css";
import StatusBox from "../components/StatusBox";
import { ModalContext } from "../context";
import Modal from "../components/Modal";
import { db } from "../firebase";

const DetailInvoice = () => {
  const [actualInvoice, setActualInvoice] = useState(null);
  const { show, setShow } = useContext(ModalContext);

  const location = window.location.pathname.split(":");
  const idLocation = location[1];

  useEffect(() => {
    getInvoiceDetail();
  }, []);

  const getInvoiceDetail = () => {
    var docRef = db.collection("invoices").doc("QT3965");

    db.collection("invoices").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        docs.push({ ...doc.data() });
      });

      docs.find((invoice) => {
        if (invoice.id === idLocation) {
          setActualInvoice(invoice);
        }
      });
    });
  };

  return (
    <>
      <div className="detail">
        <GoBack />
        <StatusBox />
        {actualInvoice ? <Detail data={actualInvoice} /> : <p>Loading</p>}
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
