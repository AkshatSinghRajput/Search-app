import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppData from "./Context/AppData";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppData>
      <App />
    </AppData>
  </React.StrictMode>
);
