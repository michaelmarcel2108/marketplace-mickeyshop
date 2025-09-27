import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout(){
  return (
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <Navbar />
      <main className="container" style={{flex:1}}>
        <Outlet />
      </main>
      <footer style={{textAlign:'center', padding:'12px 0', background:'#111827', color:'#fff'}}>
        Mickey Shop - 2455011003
      </footer>
    </div>
  );
}