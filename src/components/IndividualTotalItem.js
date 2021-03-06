import React from "react";

const IndividualTotalItem = ({ info }) => {
  return (
    <div className="total-item">
      <div className="text-left">
        <p className="info-black">{info.name}</p>
        <p className="info-text-bold">
          {info.qty} x $ {info.price}.00
        </p>
      </div>
      <div className="total-right">
        <p className="info-black">$ {info.total}.00</p>
      </div>
    </div>
  );
};

export default IndividualTotalItem;
