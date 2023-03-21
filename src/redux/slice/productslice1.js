import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
 const productSlice1 = createSlice({
    name: "Products",
    initialState: {
        value:[],
        error: null,
        status: "pending"
    },
    reducers: {},
    extraReducers: (builder) =>{ 
        builder.addCase(fetchProduct.pending, (state,action)=>{
            state.status = "pending";
            state.error = null;
        })
        .addCase(fetchProduct.fulfilled, (state,action)=>{
            state.status = "fulfilled";
            state.error = null;
            state.value = action.payload;

        })
        .addCase(fetchProduct.rejected, (state,action)=>{
            state.status = "rejected";
            state.error = action.payload;

        })
    }
 })

 export const fetchProduct = createAsyncThunk("Products/fetchProduct", async () =>{
    const url="https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668789733/React%20Class/A.%20Sravani/blog_pinvzg.json";

  
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
 export default productSlice1;