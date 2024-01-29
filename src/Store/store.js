import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "./coinSlice";
import authReducer from "./authSlice";

const store = configureStore({
    reducer : {
        coin : authReducer ,
    }
})

export default store;