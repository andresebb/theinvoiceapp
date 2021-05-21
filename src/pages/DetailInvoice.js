import React, { useContext, useEffect } from "react";
import Detail from "../components/Detail";
import GoBack from "../components/GoBack";
import "../assets/styles/detailInvoice.css";
import StatusBox from "../components/StatusBox";
import { ModalContext } from "../context";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { useHistory } from "react-router-dom";

const DetailInvoice = () => {
  const {
    show,
    setShow,
    actualInvoice,
    getActualInvoice,
    invoice,
    resetInvoice,
  } = useContext(ModalContext);

  const location = window.location.pathname.split(":");
  const idLocation = location[1];
  let history = useHistory();

  useEffect(() => {
    getActualInvoice(idLocation);
  }, []);

  const markAsPaid = async () => {
    try {
      await db
        .collection("invoices")
        .doc(actualInvoice.idFirebase)
        .update({ ...invoice, status: "Paid" });
      // history.push("/");
      resetInvoice();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="detail">
        <GoBack />
        {actualInvoice ? (
          <>
            <StatusBox state={actualInvoice.status} />
            <Detail data={actualInvoice} />
            <div className="option dos">
              <Link to={`/edit:${actualInvoice.id}`} className="btn discard">
                Edit
              </Link>
              <button className="btn danger" onClick={() => setShow(true)}>
                Delete
              </button>
              <Link to="/" className="btn morado" onClick={markAsPaid}>
                Mark as paid
              </Link>
            </div>
            {show ? <Modal /> : <div></div>}
          </>
        ) : (
          <p>Loading</p>
        )}
      </div>
    </>
  );
};

export default DetailInvoice;
