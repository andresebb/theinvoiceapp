import React, { useRef, useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/createInvoice.css";
import ArrowDown from "../assets/images/icon-arrow-down.svg";
import PlusIcon from "../assets/images/icon-plus.svg";
import { ModalContext } from "../context";
import { db } from "../firebase";

const CreateFilter = () => {
  const { setInvoices } = useContext(ModalContext);

  const [estados, setEstados] = useState({
    Pending: false,
    Paid: false,
    Draft: false,
  });

  const statusFilter = useRef();
  const arrow = useRef();

  const openFilterStatus = () => {
    if (statusFilter.current.style.display === "block") {
      statusFilter.current.style.display = "none";
      arrow.current.style.transform = "rotate(0deg)";
    } else {
      statusFilter.current.style.display = "block";
      arrow.current.style.transform = "rotate(180deg)";
    }
  };

  //Filter de firebase dependiendo
  const filterStatusInvoices = (e) => {
    let { name, checked } = e.target;

    console.log((estados[name] = checked));

    const filtrados = Object.keys(estados).filter((x) => estados[x]);

    getInvoicesFiltrados(filtrados);
  };

  const getInvoicesFiltrados = async (filtrados) => {
    db.collection("invoices").onSnapshot((querySnapshot) => {
      const filterInvoices = [];
      const oficilInvoices = [];
      querySnapshot.forEach((doc) => {
        oficilInvoices.push({ ...doc.data() });

        // console.log(doc.data());
        if (doc.data().status === filtrados[0]) {
          filterInvoices.push({ ...doc.data() });
        }
        if (doc.data().status === filtrados[1]) {
          filterInvoices.push({ ...doc.data() });
        }
        if (doc.data().status === filtrados[2]) {
          filterInvoices.push({ ...doc.data() });
        }
      });

      setInvoices(filterInvoices);

      if (filterInvoices.length === 0) {
        setInvoices(oficilInvoices);
      }
      // console.log(filterInvoices);
      // console.log(invoices);
    });
  };

  return (
    <div className="create-invoice">
      <div className="create-invoice-container">
        <div className="invoice-left">
          <h2>Invoices</h2>
          <p>No invoices</p>
        </div>
        <div className="invoice-right">
          <div className="filter-container-mayor">
            <button onClick={openFilterStatus} className="filter-container">
              <p>Filter</p>
              <img ref={arrow} src={ArrowDown} alt="" />
            </button>
            <div ref={statusFilter} className="container-status">
              <div className="filter-status-item">
                <input
                  type="checkbox"
                  name="Pending"
                  id=""
                  onChange={filterStatusInvoices}
                />
                <p>Pending</p>
              </div>
              <div className="filter-status-item">
                <input
                  type="checkbox"
                  id=""
                  name="Paid"
                  onChange={filterStatusInvoices}
                />
                <p>Paid</p>
              </div>
              <div className="filter-status-item">
                <input
                  type="checkbox"
                  id=""
                  name="Draft"
                  onChange={filterStatusInvoices}
                />
                <p>Draft</p>
              </div>
            </div>
          </div>
          <div className="new-container">
            <Link to="/new" className="plus">
              <img src={PlusIcon} alt="" />
            </Link>
            <p className="new">New</p>
            {/* <input
              type="range"
              value="5"
              min="0"
              max="10"
              id="slider"
              onChange={() => console.log(selector)}
            />
            <div id="selector" ref={selector}>
              <div className="selectorbtn"></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateFilter;
