import React from "react";
import styles from "../styles/home1.scss";


export default function Home1(){
    return(
<>
    <div className="container-home1">
        <div className="images">
      <img className="home1-img" src="https://multikart-react.vercel.app/assets/images/pets/banner/1.jpg"   alt=""/>
      <p className="home1-p">CLOTHES</p>
        </div>
        <div className="image">
      <img className="home1-img" src="https://multikart-react.vercel.app/assets/images/pets/banner/2.jpg" alt=""/>
      <p className="home1-pp">GROOM</p>
      </div>
      <div className="images">
      <img className="home1-img" src="https://multikart-react.vercel.app/assets/images/pets/banner/3.jpg" alt=""/>
      <p className="home1-p">FOOD</p>
      </div>
      <div className="image">
      <img className="home1-img" src="https://multikart-react.vercel.app/assets/images/pets/banner/4.jpg" alt=""/>
      <p className="home1-pp">HOME</p>
      </div>
      <div className="image">
      <img className="home1-img" src="https://multikart-react.vercel.app/assets/images/pets/banner/5.jpg" alt=""/>
      <p className="home1-pp">CATS</p>
      </div>
      <div className="image">
      <img className="home1-img" src="https://multikart-react.vercel.app/assets/images/pets/banner/6.jpg" alt=""/>
      <p className="home1-pp">BOWLS</p>
      </div>
    </div>

<h3 className="h3">Special Offer</h3>
<h1>TOP COLLECTION</h1>
</>
    );
  
}