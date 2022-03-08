import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../cart/cartSlice";
import likedSlice from "../liked/likedSlice";
import { goodsApi } from "./goodsAPI";

export const store = configureStore ({
    reducer:{
        cart:cartSlice,
        liked:likedSlice,
        [goodsApi.reducerPath]:goodsApi.reducer,
        
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(goodsApi.middleware)
})

