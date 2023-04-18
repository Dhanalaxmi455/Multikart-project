import React, { useState } from "react";
import "../styles/navbar1.scss";
import { FiSettings } from "react-icons/fi";
import { IoBagHandle } from "react-icons/io5";
import { Badge } from "@mui/material";
import Cart from "./cart";
import { useSelector } from "react-redux";





export default function Navbar1() {
  const [display, setDisplay] = useState(false);
  const cart = useSelector(state => state.Cart);

  // const [show ,setShow] = useState(false);


  // window.onscroll = () => {
  //   if (window.scrollY > 700) {
  //     setShow(true);
  //   }
  //   else {
  //     setShow(false);
  //   }
  // }

  return (
    <div className="nav"> 
      {/* className={show ? "show" : "nav"}  */}
      <div className="container-navbar1">
        <img className="navbar1-img" src="https://multikart-react.vercel.app/assets/images/icon/logo/14.png" alt="logo" />
        <div className="navbar1-search"><input className="input" placeholder="Find the Best for Your Pets" /></div>
        <div className="navbar1-icons">
          <p className="navbar1-icon"><FiSettings /></p>


          <p className="navbar1-icon" >
            <IoBagHandle onClick={() => setDisplay(true)} />
          </p>
        </div>
      </div>


      <div><Cart pass={display} setPass={setDisplay} /></div>
    </div>


  );
}