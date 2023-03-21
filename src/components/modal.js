
import { useEffect, useState } from "react"
import React from "react";
import {AiOutlineCloseCircle} from "react-icons/ai";
import "../styles/modal.scss";

export default function Model (){
    const [model, setModel] = useState(false)
   useEffect(()=>{
    setTimeout(()=>{
        setModel(true)
      },3000)
   },[])
    return(
        <div className="model-container">
            <div className={model ? "model":"model-none"}>
             <p onClick={()=>setModel(false)} className="close"><AiOutlineCloseCircle/></p>

            <div className="model-content">
                <img  src="https://multikart-react.vercel.app/_next/static/media/Offer-banner.ff0b2a90.png"/>
               <h3>NEWSLETTER</h3>
               <input name="email" placeholder="enter your mail" />
            <button>SUBSCRIBE</button></div>
            
          </div>
     </div>
     )

}