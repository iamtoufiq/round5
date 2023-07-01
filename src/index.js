import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Contexst from "./Contexst";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Contexst>
      <App />
    </Contexst>
  </React.StrictMode>
);

reportWebVitals();
