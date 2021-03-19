import React from "react";
import Invoice from "./Invoice";

const InvoiceList = () => {
  return (
    <div className="invoices">
      <Invoice />
      <Invoice />
    </div>
  );
};

export default InvoiceList;
