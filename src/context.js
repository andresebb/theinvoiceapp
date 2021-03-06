//Creando el contexto
import React, { createContext, useState } from "react";
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
  const [actualInvoice, setActualInvoice] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [invoices, setInvoices] = useState([]);

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
    idOfFirebase: null,
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

  const resetActualInvoice = async () => {
    await setActualInvoice(null);
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

  const getActualInvoice = (idLocation) => {
    db.collection("invoices").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        setInvoice({
          ...invoice,
          idOfFirebase: doc.id,
        });
        docs.push({ ...doc.data(), idFirebase: doc.id });
      });

      docs.find((invoice) => {
        if (invoice.id === idLocation) {
          setActualInvoice(invoice);
          setInvoice(invoice);
        }
      });
    });
  };

  const getInvoiceById = async (id) => {
    const doc = await db.collection("invoices").doc(id).get();
    setActualInvoice({ ...doc.data() });
    setInvoice({ ...doc.data() });
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
        actualInvoice,
        setActualInvoice,
        resetActualInvoice,
        resetInvoice,
        getActualInvoice,
        getInvoiceById,
        setDueDate,
        dueDate,
        invoices,
        setInvoices,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
