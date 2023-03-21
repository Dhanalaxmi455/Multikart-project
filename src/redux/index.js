import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slice/productslice';
import  cartSlice from './slice/cartslice';
import productSlice1 from './slice/productslice1';
 const store =  configureStore({
    reducer:{
    Product : productSlice.reducer,
     Cart:  cartSlice.reducer,
     Products:productSlice1.reducer
    }
})
 export default store;

