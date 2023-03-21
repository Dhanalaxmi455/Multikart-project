import React from "react";
import productSlice from "../redux/slice/productslice";
import styles from "../styles/productcard.scss";
import {RiStarFill} from "react-icons/ri";
import {AiOutlineShoppingCart ,AiFillHeart} from "react-icons/ai";
import {BiSearchAlt2} from "react-icons/bi";
import {BsArrowRepeat} from "react-icons/bs";
import { addtocart,removeFromCart } from "../redux/slice/cartslice";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = ({data})=>{
   const cart = useSelector(state => state.cart);
   console.log(cart)
    const dispatch = useDispatch();
    return(

        <div className="productcard-container">
             
            <div className="productcard">
            <img className="productcard-img" src={data.images[0].src} />

<div className="productcard-container1">
<img className="productcard-imgg" src={data.images[0].src} />
<button className="button" ><AiOutlineShoppingCart onClick={()=>dispatch(addtocart(data))}/></button>
<button className="button"><AiFillHeart/></button>
<button className="button"><BiSearchAlt2/></button>
<button className="button"><BsArrowRepeat/></button>
</div>


     <div className="productcard-div">
       <div className="star"> 
       <p className="p" ><RiStarFill/>
        <RiStarFill/>
        <RiStarFill/>
        <RiStarFill/>
       </p>
       <p className="icon"> <RiStarFill/></p></div>
            <p className="productcard-title">{data.title}</p>
        <p className="productcard-price">${data.price}</p>
                {/* <p className="productcard-sale-price">${data.sale_price}</p>
                {data.price && <s className="productcard-price">${data.price}</s>} */}
            </div>
            </div>
           
        </div>
    )
}

export default ProductCard;