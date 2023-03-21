
import React, { useState } from "react";
import{GrNext,GrPrevious} from 'react-icons/gr';
// import "../styles/carousel1.scss"
import ProductItems from "./productitems";

export default function Carousel(){
    const [count,setcount] = useState(0);

    function previous(){
        setcount(count-1);
        let body = document.getElementById('container');
        if(count>0){
            body.style.transform += "translateX(100rem)";
            body.style.transition = ".2s";
        }else{
            body.style.transform += "translateX(0)";
            setcount(0)
        }
    }
    function Next(){
        setcount(count+1);
        let body = document.getElementById("container");
        if(count<2){
            body.style.transform +="translateX(-100rem)";
            body.style.transition = ".2s";
        }else{
            body.style.transform += "translateX(0)";
            setcount(2);
        }
    }
    return(
        <div className="carousel-container">
            <div id="container" className="carousel-item-cont">
                <div className="carousel-item">
                   <ProductItems/>
                </div>
              
              
            </div>
            <div className="prev" onClick={previous}><GrPrevious/></div>
            <div className="next" onClick={Next}><GrNext/></div>
        </div>
        
    
    )
}