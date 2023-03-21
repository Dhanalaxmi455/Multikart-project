import React from "react";
import  "../styles/navbar.scss";
import { IoCall } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { RiAccountPinBoxFill } from "react-icons/ri";



export default function Navbar(){
    return(
        <div className="total">
    <div className="container">
        <p className="line">Welcome to Our store Multikart</p>
       
        <p className="linee" >
            <span><IoCall/></span>
             Call Us: 123 - 456 - 7890</p>
        <div className="container-last">
            <p className="container-last-iconn"><span><AiFillHeart/></span>Wishlist</p>
            <p  className="container-last-icon"><span><RiAccountPinBoxFill/></span>My Account</p>
          
        </div>
    </div>

</div>


   
    );
  
}

