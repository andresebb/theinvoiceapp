import React, { useEffect, useContext } from "react";
import Invoice from "./Invoice";
import Empty from "./Empty";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import { ModalContext } from "../context";

const InvoiceList = () => {
  const { invoices, setInvoices } = useContext(ModalContext);

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
          <div key={invoice.id}>
            <Link to={`detail:${invoice.id}`}>
              <Invoice key={invoice.id} data={invoice} />
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default InvoiceList;
