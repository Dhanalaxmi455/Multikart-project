import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slice/productslice";
import ProductCard from "./productcard";
import  "../styles/productitems.scss";

const ProductItems = ()=>{
    const products = useSelector(state => state.Product.value)
    console.log(products);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
    
    return(
      
       
        <div className="productitems">
         
            {products.length && products.map(e=><ProductCard data={e}/>)}
        </div>
    

    )
}

export default ProductItems;
