import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../utils/CartContext";

export default function ProductCard({ p }) {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <img
        src={p.img}
        alt={p.name}
        style={{
          width: "100%",
          height: 140,
          objectFit: "cover",
          borderRadius: 6,
        }}
      />

      <h3 style={{ marginTop: 8 }}>{p.name}</h3>
      <div className="small">Category: {p.category_name}</div>

      <div
        style={{
          marginTop: 8,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <strong>Rp {p.price.toLocaleString()}</strong>
        <div className="small">{p.stock} pcs</div>
      </div>

      <div
        style={{
          marginTop: 5,
          display: "flex",
          gap: 5,
        }}
      >
        <Link
          to={`/product/${p.slug}`}
          state={p}
          className="small"
          style={{ textDecoration: "underline" }}
        >
          Lihat Detail
        </Link>

        <button
          className="button"
          onClick={() => addToCart(p)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
