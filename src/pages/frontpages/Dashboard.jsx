import React from "react";
import ProductCard from "../../components/ProductCard";
import products from "../../utils/products.json";

export default function Dashboard(){
  return (
    <div>
      <h1 style={{fontSize:24, fontWeight:700, marginBottom:12}}>Dashboard Produk</h1>
      <div className="grid">
        {products.map(p => <ProductCard key={p.id} p={p} />)}
      </div>
    </div>
  );
}