import React from "react";
import "./assets/styles/index.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import NewInvoice from "./pages/NewInvoice";
import DetailInvoice from "./pages/DetailInvoice";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EditInvoice from "./pages/EditInvoice";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/new" component={NewInvoice} />
          <Route exact path="/detail:id" component={DetailInvoice} />
          <Route exact path="/edit:id" component={EditInvoice} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
