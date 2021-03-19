import React from "react";
import CreateFilter from "../components/CreateFilter";
import Empty from "../components/Empty";
import InvoiceList from "../components/InvoiceList";

const home = () => {
  return (
    <>
      <CreateFilter />
      <InvoiceList />
    </>
  );
};

export default home;
