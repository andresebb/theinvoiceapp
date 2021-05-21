import React, { useEffect, useState, useRef } from "react";

import "../assets/styles/invoice.css";

const Invoice = ({ data }) => {
  const [date, setDate] = useState(data.billToDate);
  const [time, setTime] = useState(null);
  const [expireNumber, setExpireNumber] = useState(0);
  const fechaActual = new Date(date.seconds * 1000);

  const status = useRef(null);
  const punto = useRef(null);

  useEffect(() => {
    // setDate(date.seconds);
    setTime(new Date(date.seconds * 1000).toDateString());
  }, []);

  useEffect(() => {
    getExpireNumber();
  }, []);

  const getExpireNumber = () => {
    if (data.billToTerms === "Net one week") {
      setExpireNumber(7);
    } else if (data.billToTerms === "Net 15 days") {
      setExpireNumber(15);
    } else if (data.billToTerms === "Net 30 days") {
      setExpireNumber(30);
    }
  };

  const sumarDias = (fecha, dias) => {
    fecha.setDate(fecha.getDate() + dias);
    return fecha.toDateString();
  };

  if (status.current != null) {
    switch (status.current.className) {
      case "status Pending":
        status.current.style.background = "#ff910015";
        status.current.style.color = "#ff8f00";
        punto.current.style.background = "#ff8f00";
        break;
      case "status Paid":
        status.current.style.background = "#EDFCF9";
        status.current.style.color = "#33D69F";
        punto.current.style.background = "#33D69F";
        break;
      case "status Draft":
        status.current.style.background = "#aeaeae15";
        status.current.style.color = "#333333";
        punto.current.style.background = "#333333";
        break;
    }
  }

  return (
    <div className="invoice-box">
      <div className="invoice-id">
        <p className="invoice-number">#{data.id}</p>
        <p className="info-text">{data.billToName}</p>
      </div>
      <div className="invoice-status">
        <div>
          <p className="info-text bold">
            Due {sumarDias(fechaActual, expireNumber)}
          </p>
          <p className="invoice-money">$ {data.grandTotal}</p>
        </div>
        <div ref={status} className={`status ${data.status}`}>
          <div ref={punto} className={`punto ${data.status}`}></div>
          <p>{data.status}</p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
