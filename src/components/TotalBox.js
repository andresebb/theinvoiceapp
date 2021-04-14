import React, { useContext } from "react";
import "../assets/styles/totalBox.css";
import IndividualTotalItem from "./IndividualTotalItem";
import { ModalContext } from "../context";

const TotalBox = ({ list, total }) => {
  const { generateId } = useContext(ModalContext);

  return (
    <>
      <div className="total-box">
        {list.map((data) => {
          return <IndividualTotalItem key={generateId()} info={data} />;
        })}
        <div className="grand-total">
          <p className="grand-total-text">Grand Total</p>
          <p className="grand-total-number">$ {total}.00</p>
        </div>
      </div>
    </>
  );
};

export default TotalBox;
