import React from "react";
import "../assets/styles/statusBox.css";

const StatusBox = () => {
  return (
    <div className="status-box">
      <p className="info-text">Status</p>
      <div className="status">
        <div className="punto"></div>
        <p>Pending</p>
      </div>
    </div>
  );
};

export default StatusBox;
