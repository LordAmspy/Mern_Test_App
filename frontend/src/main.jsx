
import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

/**
 * BrowserRouter:
 * Enables frontend routing.
 */

ReactDOM.createRoot(document.getElementById("root")).render(

  <BrowserRouter>
      <App />
  </BrowserRouter>
);
