import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../utils/CartContext";

export default function Navbar() {
  const { totalQty } = useCart();

  return (
    <nav className="nav">
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Link
          to="/"
          style={{ fontWeight: 700, fontSize: 18, color: "white" }}
        >
          Mickey Shop
        </Link>
      </div>

      <div style={{ display: "flex", gap: 16 }}>
        <Link to="/">Dashboard</Link>
        <Link to="/cart">
          Cart{" "}
          {totalQty > 0 && (
            <span className="badge" style={{ marginLeft: 8 }}>
              {totalQty}
            </span>
          )}
        </Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/admin" style={{ fontWeight: 600, color: "#fbbf24" }}>
          Admin
        </Link>
      </div>
    </nav>
  );
}
