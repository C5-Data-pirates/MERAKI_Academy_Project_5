import { createSlice } from "@reduxjs/toolkit";
export const productSlice=createSlice({
    name:"product",
    initialState:{
        product:[]
    },
    reducers:{
        productby_id:(state,action)=>{
            state.product=action.payload
        }
    }
})



export const { productby_id } = productSlice.actions;

export default productSlice.reducer;