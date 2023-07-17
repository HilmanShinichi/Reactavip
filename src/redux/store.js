import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
    reducer: {
       Carts: cartReducer 
    }
})

console.log("oncreate store : ", store.getState());
store.subscribe(() => {
    console.log("STORE_CHANGE : ", store.getState())
})

export default store;