//Creando el contexto
import React, { createContext, useEffect, useState } from "react";
import { db } from "./firebase";

export const ModalContext = createContext();

const startInvoice = {
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
  grandTotal: 0,
  status: "Pending",
};

export const ModalProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [listOfItem, setListOfItem] = useState([]);
  const [numberOfItems, setNumberOfItems] = useState([{ id: "1" }]);

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
    grandTotal: 0,
    status: "Pending",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInvoice({ ...invoice, [name]: value });
  };

  const addItemToList = (itemName, itemQty, itemPrice, itemTotal) => {
    const list = {
      name: itemName,
      qty: itemQty,
      price: itemPrice,
      total: itemTotal,
    };

    //ITEMLIST AHORA NO SIRVE NO SE

    //Esta fue la unica forma de que me agarra el itemList, por eso lo hice asi.
    setListOfItem([...listOfItem, list]);
    setInvoice({
      ...invoice,
      itemList: [...listOfItem, list],
      grandTotal: invoice.grandTotal + list.total,
    });
  };

  //Send invoice to Firebase
  const addNewInvoice = async () => {
    try {
      await db.collection("invoices").doc().set(invoice);
      console.log("todo bien");
      resetInvoice();
    } catch (e) {
      console.log(e);
    }
  };

  const resetInvoice = () => {
    setInvoice(startInvoice);
    setListOfItem([]);
    setNumberOfItems([{ id: 1 }]);
  };

  const generateId = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letter1 = characters.charAt(
      Math.floor(Math.random() * characters.length)
    );

    const letter2 = characters.charAt(
      Math.floor(Math.random() * characters.length)
    );

    const numbers = Math.floor(Math.random() * (9999 - 1000) + 1000);

    const result = `${letter1}${letter2}${numbers}`;

    return result;
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
        generateId,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
