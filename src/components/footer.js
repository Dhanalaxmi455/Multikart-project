import React from "react";
import styles from "../styles/footer.scss";
import {FaFacebookF} from "react-icons/fa";
import {AiOutlineGooglePlus,AiOutlineTwitter,AiOutlineInstagram,AiOutlineWifi} from "react-icons/ai";

export default function Footer(){
    return(
        <div className="container-footer">
         <img className="footer-img" src="https://multikart-react.vercel.app/assets/images/icon/logo/14.png" alt="logo"/>
<div className="footer-icons">
<p><FaFacebookF/></p>
<p><AiOutlineGooglePlus/></p>
<p><AiOutlineTwitter/></p>
<p><AiOutlineInstagram/></p>
<p><AiOutlineWifi/></p>
</div>

<div className="footer-names">
    <p>Womens</p>
    <p>Clothing</p>
    <p>Accessories</p>
    <p>Featured</p>
    <p>Service</p>
    <p>Cart</p>
    <p>My Order</p>
    <p>FAQ</p>
    <p>New Product</p>
    <p>Featured Product</p>
</div>
    </div>

   
    );
  
}