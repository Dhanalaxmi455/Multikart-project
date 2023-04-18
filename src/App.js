import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';


import './App.scss';
import Navbar from '../src/components/navbar';
import Navbar1 from '../src/components/navbar1';
import Navbar2 from '../src/components/navbar2';
import Home from "./components/home";
import Home1 from "./components/home1";
import Home2 from './components/home2';
import Carousel from './components/carousel';
import Footer from './components/footer';
import Footer1 from './components/footer1';
import ProductItems from './components/productitems';
import Cart from './components/cart';
// import {FiShoppingBag} from "react-icons/fi"
import ProductItems1 from './components/productitems1';
import Modal from "../src/components/modal"
import ImageSlider from './components/carousel';
import { CarouselImages } from './components/carouselimages';

function App() {

  return (
    <>


      <Navbar />
      <Navbar1 />
      <Cart />
      <Navbar2 />

      <ImageSlider slides={CarouselImages} />

      <Modal />
      <Home />
      <Home1 />
      <ProductItems />

      <Home2 />
      <ProductItems />
      <ProductItems1 />

      <Footer />
      <Footer1 />
    </>


  );
}

export default App;
