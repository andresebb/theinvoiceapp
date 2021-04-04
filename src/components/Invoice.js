import React, { useEffect, useState } from "react";
import "../assets/styles/invoice.css";

const Invoice = ({ data }) => {
  const [date, setDate] = useState(data.billToDate);
  let time;

  useEffect(() => {
    // setDate(date.seconds);
    time = new Date(date.seconds * 1000).toDateString();
    console.log(time);
  }, []);

  console.log(data);

  return (
    <div className="invoice-box">
      <div className="invoice-id">
        <p className="invoice-number">#{data.id}</p>
        <p className="info-text">{data.billToName}</p>
      </div>
      <div className="invoice-status">
        <div>
          <p className="info-text">{time}</p>
          <p className="invoice-money">$ 1,800.990</p>
        </div>
        <div className="status">
          <div className="punto"></div>
          <p>Pending</p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
