import React from "react";
import productSlice1 from "../redux/slice/productslice1";
import  "../styles/productcard1.scss";
import { useDispatch, useSelector } from "react-redux";

const ProductCard1 = ({data})=>{
   const cart = useSelector(state => state.cart);
   console.log(cart)
    const dispatch = useDispatch();


    return(
<>

        <div className="productcard1-container">
           <img className="productcard1-img" src={data.img} />
           <div className="product">
           <p className="productcard-title">{data.title}</p>
        <p className="productcard-desc">{data.desc}</p>
        <hr></hr>
        <p className="productcard-date">{data.date}</p>
        
           </div>
        </div>
        </>
    )
}

export default ProductCard1;