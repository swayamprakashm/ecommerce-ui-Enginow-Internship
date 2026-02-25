import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ✅ Remove default browser spacing
document.body.style.margin = "0";
document.body.style.padding = "0";
document.documentElement.style.margin = "0";
document.documentElement.style.padding = "0";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);