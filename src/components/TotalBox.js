import React from "react";
import "../assets/styles/totalBox.css";

const TotalBox = () => {
  return (
    <>
      <div className="total-box">
        <div className="total-item">
          <div className="text-left">
            <p className="info-black">Banner Design</p>
            <p className="info-text-bold">1 x $ 156.00</p>
          </div>
          <div className="total-right">
            <p className="info-black">$ 156.00</p>
          </div>
        </div>
        <div className="total-item">
          <div className="text-left">
            <p className="info-black">Email Design</p>
            <p className="info-text-bold">2 x $ 200.00</p>
          </div>
          <div className="total-right">
            <p className="info-black">$ 400.00</p>
          </div>
        </div>
        <div className="grand-total">
          <p className="grand-total-text">Grand Total</p>
          <p className="grand-total-number">$ 556.00</p>
        </div>
      </div>
    </>
  );
};

export default TotalBox;
