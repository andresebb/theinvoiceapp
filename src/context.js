//Creando el contexto
import React, { createContext, useEffect, useState } from "react";
import { db } from "./firebase";

export const ModalContext = createContext();

let itemos;

const initialInvoice = {
  id: "",
  billFromStreet: "",
  billFromCity: "",
  billFromCode: "",
  billFromCountry: "",
  billToName: "",
  billToEmail: "",
  billToStreet: "",
  billToCity: "",
  billToCode: "",
  billToCountry: "",
  billToDate: new Date(),
  billToTerms: "",
  billToDescription: "",
  itemList: "",
};

export const ModalProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [listOfItem, setListOfItem] = useState([]);
  const [numberOfItems, setNumberOfItems] = useState([{}]);

  const [invoice, setInvoice] = useState({
    id: "",
    billFromStreet: "",
    billFromCity: "",
    billFromCode: "",
    billFromCountry: "",
    billToName: "",
    billToEmail: "",
    billToStreet: "",
    billToCity: "",
    billToCode: "",
    billToCountry: "",
    billToDate: new Date(),
    billToTerms: "",
    billToDescription: "",
    itemList: [],
    status: "Pending",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInvoice({ ...invoice, [name]: value });
  };

  const addItemToList = async (itemName, itemQty, itemPrice, itemTotal) => {
    const list = {
      name: itemName,
      qty: itemQty,
      price: itemPrice,
      total: itemTotal,
    };

    //Esta fue la unica forma de que me agarra el itemList, por eso lo hice asi.
    setListOfItem([...listOfItem, list]);
    setInvoice({ ...invoice, itemList: [...listOfItem, list] });
  };

  //Send invoice to Firebase
  const addNewInvoice = async () => {
    console.log(invoice);

    // try {
    //   await db.collection("invoices").doc().set(invoice);
    //   console.log("todo bien");
    // } catch (e) {
    //   console.log(e);
    // }
  };

  return (
    <ModalContext.Provider
      value={{
        show,
        setShow,
        invoice,
        setInvoice,
        handleInputChange,
        listOfItem,
        setListOfItem,
        addItemToList,
        addNewInvoice,
        numberOfItems,
        setNumberOfItems,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
