import React, { useState, useEffect } from "react";
import Invoice from "./Invoice";
import Empty from "./Empty";
import { db } from "../firebase";
import { Link } from "react-router-dom";

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getInvoices();
  }, []);

  // Get Data from Firebase
  const getInvoices = async () => {
    db.collection("invoices").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.data());
        docs.push({ ...doc.data() });
      });
      setInvoices(docs);
      // console.log(invoices);
    });
  };

  return (
    <div className="invoices">
      {invoices.length === 0 ? (
        <Empty />
      ) : (
        invoices.map((invoice) => (
          <Link to={`detail:${invoice.id}`}>
            <Invoice key={invoice.id} data={invoice} />
          </Link>
        ))
      )}
    </div>
  );
};

export default InvoiceList;
