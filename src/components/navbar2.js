import React from "react";
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
import  "../styles/navbar2.scss";

 function Navbar2(){
    return(
  <div className="nav2">
      <div className="container-navbar2">
  <p className="navbar2-p">HOME<MdOutlineKeyboardArrowDown/></p>
  <p className="navbar2-p">SHOPS<MdOutlineKeyboardArrowDown/></p>
  <p className="navbar2-p">PRODUCTS<MdOutlineKeyboardArrowDown/></p>
  <p className="navbar2-p">FEATURES<MdOutlineKeyboardArrowDown/></p>
  <p className="navbar2-p">PAGES<MdOutlineKeyboardArrowDown/></p>
  <p className="navbar2-p">BLOGS<MdOutlineKeyboardArrowDown/></p>

</div></div> 
    );
   
}
export default Navbar2;