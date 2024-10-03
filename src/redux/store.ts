import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./productsSlice";
import { cartReducer } from "./cartSlice";

const store = configureStore({
    reducer: {
        productsData: productsReducer,
        cartData: cartReducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;