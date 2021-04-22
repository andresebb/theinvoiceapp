import React, { useContext, useEffect } from "react";
import Detail from "../components/Detail";
import GoBack from "../components/GoBack";
import "../assets/styles/detailInvoice.css";
import StatusBox from "../components/StatusBox";
import { ModalContext } from "../context";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

const DetailInvoice = () => {
  const { show, setShow, actualInvoice, getInvoiceById } = useContext(
    ModalContext
  );

  const location = window.location.pathname.split(":");
  const idLocation = location[1];

  useEffect(() => {
    getInvoiceById(idLocation);
  }, []);

  return (
    <>
      <div className="detail">
        <GoBack />
        {actualInvoice ? (
          <>
            <StatusBox state={actualInvoice.status} />
            <Detail data={actualInvoice} />
            <div className="option dos">
              <Link to={`/edit:${actualInvoice.id}`} className="btn ">
                Edit
              </Link>
              <button className="btn danger" onClick={() => setShow(true)}>
                Delete
              </button>
              <button className="btn morado">Mark as Paid</button>
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
