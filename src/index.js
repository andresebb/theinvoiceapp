import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import { ModalProvider } from "./context";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
