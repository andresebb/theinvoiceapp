//Creando el contexto
import React, { createContext, useState } from "react";

export const ModalContext = createContext();

const initialInvoice = {
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
  billToDate: "",
  billToTerms: "",
  billToDescription: "",
};

const list = {
  itemName: "",
  itemQty: "",
  itemPrice: "",
};

export const ModalProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [invoice, setInvoice] = useState(initialInvoice);
  const [listOfItem, setListOfItem] = useState([list]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInvoice({ ...invoice, [name]: value });
  };

  const addItemToList = (e) => {
    e.preventDefault();
    setListOfItem([...listOfItem, list]);
  };

  return (
    <ModalContext.Provider
      value={{
        show,
        setShow,
        invoice,
        handleInputChange,
        listOfItem,
        addItemToList,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};