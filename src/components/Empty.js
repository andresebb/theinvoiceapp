import React from "react";
import "../assets/styles/empty.css";
import EmptyLogo from "../assets/images/illustration-empty.svg";

const Empty = () => {
  return (
    <div className="empty">
      <div className="empty-container">
        <div className="img-container">
          <img src={EmptyLogo} alt="" />
        </div>
        <div className="empty-text">
          <h2>There is nothing there</h2>
          <p>
            Create an invoice by clicking the <strong> New </strong>button and
            get started
          </p>
        </div>
      </div>
    </div>
  );
};

export default Empty;
