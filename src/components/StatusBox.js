import React, { useEffect, useRef } from "react";
import "../assets/styles/statusBox.css";

const StatusBox = ({ state }) => {
  const status = useRef(null);
  const punto = useRef(null);

  useEffect(() => {
    getColor();
  }, [status, state]);

  const getColor = () => {
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
  };

  return (
    <div className="status-box">
      <p className="info-text">Status</p>
      <div ref={status} className={`status ${state}`}>
        <div ref={punto} className={`punto ${state}`}></div>
        <p>{state}</p>
      </div>
    </div>
  );
};

export default StatusBox;
