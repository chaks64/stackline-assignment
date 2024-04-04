import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    photo: productReducer

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;