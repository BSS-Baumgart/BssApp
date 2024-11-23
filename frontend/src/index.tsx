import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "primereact/resources/themes/lara-dark-blue/theme.css"; // Styl PrimeReact
import "primereact/resources/primereact.min.css"; // Podstawowe CSS
import "primeicons/primeicons.css"; // Ikony
import "primeflex/primeflex.css"; // Układ

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
