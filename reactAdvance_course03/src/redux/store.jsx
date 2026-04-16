import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice.jsx";

export const store=configureStore({         // yeh ek aisa store create kar dega jisme humara centralized data present hai 
    reducer:{
        counter:counterReducer
    }
})