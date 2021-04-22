import React, { useEffect, useContext } from "react";
import CreateFilter from "../components/CreateFilter";
import { ModalContext } from "../context";
import InvoiceList from "../components/InvoiceList";

const Home = () => {
  const { resetActualInvoice, resetInvoice } = useContext(ModalContext);

  useEffect(() => {
    resetActualInvoice();
    resetInvoice();
  }, []);

  return (
    <>
      <CreateFilter />
      <InvoiceList />
    </>
  );
};

export default Home;
