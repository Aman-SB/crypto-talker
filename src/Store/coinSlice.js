import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    state : true
}

const coinSlice = createSlice({
    name : "coin" ,
    initialState , 
    reducers : {
        add : (state , actions ) => {

        }
    }
})

export const {add} = coinSlice.actions;

export default coinSlice.reducer;