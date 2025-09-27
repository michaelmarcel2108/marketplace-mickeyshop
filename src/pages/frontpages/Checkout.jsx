import React from "react";
import { useCart } from "../../utils/CartContext";
import { Link } from "react-router-dom";

export default function Checkout(){
  const { cart } = useCart();
  const totalPrice = cart.reduce((sum, it) => sum + it.price * it.qty, 0);

  return (
    <div>
      <h1 style={{fontSize:24, fontWeight:700}}>Checkout</h1>
      <div className="card" style={{marginTop:12}}>
        <div className="small">Items: {cart.length}</div>
        <div style={{marginTop:8}}>Total: Rp {totalPrice.toLocaleString()}</div>
        {cart.length === 0 ? (
          <div style={{marginTop:8}}>Keranjang kosong. <Link to="/">Kembali</Link></div>
        ) : (
          <div style={{marginTop:12}}>
            <button className="button">Bayar Sekarang</button>
          </div>
        )}
      </div>
    </div>
  );
}