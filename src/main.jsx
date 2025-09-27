import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { CartProvider } from "./utils/CartContext";
import { RatingProvider } from "./utils/RatingContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <RatingProvider>
        <App />
        </RatingProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);