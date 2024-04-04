import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductDetails } from "../../types";
// import axios, { AxiosError } from 'axios';

const initState: ProductDetails = {
  id: "",
  tags: [],
  brand: "",
  image: "",
  sales: [],
  title: "",
  details: [],
  reviews: [],
  retailer: "",
  subtitle: "",
};

export const getProductData: any = createAsyncThunk(
  "product/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://api.myjson.online/v1/records/a3bc5eed-743d-46a9-902f-3eff98e9ffde"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    ...initState,
  },
  reducers: {
    setProductDetails(state, action: PayloadAction<ProductDetails>) {
      const productDetails = action.payload;
      return { ...state, ...productDetails };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductData.fulfilled, (state, action) => {
        return { ...state, ...action.payload.data, loading: false };
      })
      .addCase(getProductData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setProductDetails } = productSlice.actions;

export default productSlice.reducer;
