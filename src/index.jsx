import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="https://afurta.github.io/react__test-app/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
