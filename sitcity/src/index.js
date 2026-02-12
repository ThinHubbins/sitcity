import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Page loader fade out
window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");

  if (loader) {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 2s ease";
    setTimeout(() => loader.remove(), 500);
  }
});

// Performance measuring (optional)
reportWebVitals();
