import React from "react";
import { useCart } from "../../utils/CartContext";
import { Link } from "react-router-dom";

export default function Cart(){
  const { cart, updateQty, removeFromCart, totalQty } = useCart();

  const totalPrice = cart.reduce((sum, it) => sum + it.price * it.qty, 0);

  return (
    <div>
      <h1 style={{fontSize:24, fontWeight:700}}>Keranjang ({totalQty})</h1>
      {cart.length === 0 ? (
        <div className="small">Keranjang kosong. <Link to="/">Belanja sekarang</Link></div>
      ) : (
        <div style={{display:'grid', gap:12, marginTop:12}}>
          {cart.map(item => (
            <div key={item.id} className="card" style={{display:'flex', alignItems:'center', gap:12}}>
              <img src={item.img} alt={item.name} style={{width:80, height:60, objectFit:'cover', borderRadius:6}} />
              <div style={{flex:1}}>
                <div style={{fontWeight:700}}>{item.name}</div>
                <div className="small">Rp {item.price.toLocaleString()}</div>
                <div style={{marginTop:8}}>
                  <input type="number" min="1" value={item.qty} onChange={(e)=> updateQty(item.id, Number(e.target.value))} style={{width:80}} />
                  <button className="button" style={{marginLeft:8}} onClick={()=> removeFromCart(item.id)}>Hapus</button>
                </div>
              </div>
              <div><strong>Rp {(item.price * item.qty).toLocaleString()}</strong></div>
            </div>
          ))}
          <div style={{textAlign:'right', fontWeight:700}}>Total: Rp {totalPrice.toLocaleString()}</div>
          <div style={{textAlign:'right'}}><Link to="/checkout" className="button">Checkout</Link></div>
        </div>
      )}
    </div>
  );
}