import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App.jsx";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
