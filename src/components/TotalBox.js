import React from "react";
import "../assets/styles/totalBox.css";
import IndividualTotalItem from "./IndividualTotalItem";

const TotalBox = ({ list }) => {
  console.log(list);
  return (
    <>
      <div className="total-box">
        {list.map(({ data }) => {
          return <IndividualTotalItem data={data} />;
        })}
        <div className="grand-total">
          <p className="grand-total-text">Grand Total</p>
          <p className="grand-total-number">$ 556.00</p>
        </div>
      </div>
    </>
  );
};

export default TotalBox;
