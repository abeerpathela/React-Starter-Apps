import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";  // DEFAULT IMPORT FIXED

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
