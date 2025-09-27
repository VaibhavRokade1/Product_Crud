import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../features/productSlice";
export const store = configureStore({
  reducer: {
    app: ProductReducer,
  },
});

export default store;
