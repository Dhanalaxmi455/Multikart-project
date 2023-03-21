
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/slice/productslice1";
import ProductCard1 from "./productcard1";
import "../styles/productitems1.scss";

const ProductItems1 = ()=>{
    const product = useSelector(state => state.Products.value)
    console.log(product);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProduct())
    },[])
    
    return(
      <>
      
<h3 className="h3">OUR COLLECTIONS</h3>
<h1>special Products</h1>
        <div className="productitems">
         
            {product.length && product.map(e=><ProductCard1 data={e}/>)}
        </div>
    
</>
    )
}

export default ProductItems1;