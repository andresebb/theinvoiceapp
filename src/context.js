//Creando el contexto
import React, { createContext, useState } from "react";

export const ModalContext = createContext();

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
  billToDate: "",
  billToTerms: "",
  billToDescription: "",
  itemList: [],
};

export const ModalProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [invoice, setInvoice] = useState(initialInvoice);
  const [listOfItem, setListOfItem] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInvoice({ ...invoice, [name]: value });
  };

  const addItemToList = (itemName, itemQty, itemPrice, itemTotal) => {
    // console.log(`${itemName} ${itemQty} ${itemPrice} `);

    const list = {
      name: itemName,
      qty: itemQty,
      price: itemPrice,
      total: itemTotal,
    };

    setListOfItem([...listOfItem, list]);
  };

  const handleItemList = (e) => {
    e.preventDefault();
  };

  const addNewInvoice = async () => {
    setInvoice({ ...invoice, itemList: listOfItem });

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
        handleInputChange,
        listOfItem,
        setInvoice,
        addItemToList,
        handleItemList,
        addNewInvoice,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
