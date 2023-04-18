
import React, { useState } from "react";
import { CarouselImages } from "./carouselimages";
import {FaArrowAltCircleLeft,FaArrowAltCircleRight} from "react-icons/fa"

const ImageSlider = ({slides})=>{
    const [curr,setCurr] = useState(0);
    const length = slides.length;

    const nextSlide = () =>{
        setCurr(curr === length-1 ? 0: curr+1)
    };
    const prevSlide = () =>{
        setCurr(curr === 0 ? length-1 : curr-1)
    };
    console.log(curr);

    // if(!Array.isArray(slides) || slides.length<=0){
    //     return null;
    // }

    return(
        <div className="slider-container">
             <div className="carousel-container">
                
             <p className="carousel-p">Every Pet is Different</p>
                                    <h1 className="carousel-h1">LET'S SHOP</h1>
                                    <button className="btn">SHOP NOW</button>

                                    
            <FaArrowAltCircleLeft className="left-btn" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right-btn" onClick={nextSlide} />
           
           {CarouselImages.map((slide,index)=>{
               return(
                <div className={index === curr ? "slide active":"slide"}
                key={index}> 
                  {index===curr &&  <img className="img" src={slide.image} alt="logo"/>}
                </div>
            
               )
            })
           }
           
        </div>
        </div>
    )
}
export default ImageSlider;

// import React, { useState } from "react";

// import{GrNext,GrPrevious} from 'react-icons/gr';
// import "../styles/carousel.scss"

// export default function Carousel(){
//     const [count,setcount] = useState(0);

//     function previous(){
//         setcount(count-1);
//         let body = document.getElementById('container');
//         if(count>0){
//             body.style.transform += "translateX(100rem)";
//             body.style.transition = ".2s";
//         }else{
//             body.style.transform += "translateX(0)";
//             setcount(0)
//         }
//     }
//     function Next(){
//         setcount(count+1);
//         let body = document.getElementById("container");
//         if(count<2){
//             body.style.transform +="translateX(-100rem)";
//             body.style.transition = ".2s";
//         }else{
//             body.style.transform += "translateX(0)";
//             setcount(2);
//         }
//     }
//     return(
//         <div className="carousel-container">
//             <div id="container" className="carousel-item-cont">
//                 <div className="carousel-item">
                
//                     <p className="carousel-p">Every Pet is Different</p>
//                     <h1 className="carousel-h1">LET'S SHOP</h1>
//                     <button className="btn">SHOP NOW</button>
//                 </div>
//                 <div className="carousel-item1">
                  
//                     <p className="carousel-p">Anything That Pets Want </p>
//                     <h1 className="carousel-h1">SAVE 20%</h1>
//                     <button className="btn">SHOP NOW</button>
//                 </div>
              
//             </div>
//             <div className="prev" onClick={previous}><GrPrevious/></div>
//             <div className="next" onClick={Next}><GrNext/></div>
//         </div>
        
    
//     )
// }
