import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
 const productSlice = createSlice({
    name: "Product",
    initialState: {
        value:[],
        error: null,
        status: "pending"
    },
    reducers: {},
    extraReducers: (builder) =>{ 
        builder.addCase(fetchProducts.pending, (state,action)=>{
            state.status = "pending";
            state.error = null;
        })
        .addCase(fetchProducts.fulfilled, (state,action)=>{
            state.status = "fulfilled";
            state.error = null;
            state.value = action.payload;

        })
        .addCase(fetchProducts.rejected, (state,action)=>{
            state.status = "rejected";
            state.error = action.payload;

        })
    }
 })

 export const fetchProducts = createAsyncThunk("Product/fetchProducts", async () =>{
    const url="https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668789732/React%20Class/A.%20Sravani/products_qa4whp.json";

  
        try{
            const {data}=await axios.get(url);
            console.log(data);
           return data;
             
        }
        catch(error){
            console.log(error);
        }   
    }
 )
 export default productSlice;