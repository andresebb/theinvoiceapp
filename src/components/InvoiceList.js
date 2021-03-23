import React, { useState, useEffect } from "react";
import Invoice from "./Invoice";
import Empty from "./Empty";
import { db } from "../firebase";

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getInvoices();
  }, []);

  const getInvoices = async () => {
    db.collection("invoices").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        console.log(doc);
        docs.push({ ...doc.data() });
      });
      setInvoices(docs);
      console.log(invoices);
    });
  };

  return (
    <div className="invoices">
      {invoices.length === 0 ? (
        <Empty />
      ) : (
        invoices.map((invoice) => <Invoice key={invoice.id} data={invoice} />)
      )}
    </div>
  );
};

export default InvoiceList;
