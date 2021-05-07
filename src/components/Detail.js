import React, { useState, useEffect } from "react";
import "../assets/styles/detail.css";
import TotalBox from "./TotalBox";

const Detail = ({ data }) => {
  const [date, setDate] = useState(data.billToDate);
  const [time, setTime] = useState(null);
  const [expireNumber, setExpireNumber] = useState(0);
  const fechaActual = new Date(date.seconds * 1000);

  useEffect(() => {
    if (typeof date === "number") {
      setDate(date.seconds);
    }
    setTime(new Date(date.seconds * 1000).toDateString());
  }, [date]);

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

  return (
    <>
      <div className="detail-container">
        <div className="block">
          <div className="detail-number">
            <p>
              <span className="numeral">#</span>
              <span className="number">{data ? data.id : null}</span>
            </p>
            <p className="info-text">Graphic Design</p>
          </div>
          <div className="location">
            <p className="location-text">
              {data ? data.billFromStreet : null}
              <br /> {data ? data.billFromCity : null} <br />
              {data ? data.billFromCode : null} <br />
              {data ? data.billFromCountry : null}
            </p>
          </div>
        </div>
        <div className="date">
          <div className="date-left">
            <div>
              <p className="info-text">Invoice Date</p>
              <p className="big-date">{time}</p>
            </div>
            <div>
              <p className="info-text">Payment Due</p>
              <p className="big-date">{sumarDias(fechaActual, expireNumber)}</p>
            </div>
          </div>
          <div className="date-right">
            <p className="info-text">Bill to</p>
            <p className="big-date">{data.billToName}</p>
            <p className="location-text">
              {data.billToStreet}
              <br />
              {data.billToCity} <br />
              {data.billToCode} <br />
              {data.billToCountry}
            </p>
          </div>
        </div>
        <div className="sent-to ">
          <p className="info-text">Sent to</p>
          <p className="big-date">{data.billToEmail}</p>
        </div>
        <TotalBox list={data.itemList} total={data.grandTotal} />
      </div>
    </>
  );
};

export default Detail;
