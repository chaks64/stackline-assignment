import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductDetails } from "../../types";
import axios, { AxiosError } from 'axios';

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

export const getProductData: any = createAsyncThunk('product/fetchProducts', async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<ProductDetails>('https://api.myjson.online/v1/records/521b1191-89a7-443a-b1fc-9ffa7cd93741');
      if(response.status !== 200){
        throw new Error("Issue with the response, please try later")
      }
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        return rejectWithValue(err.response.data);
      } else if (err.request) {
        return rejectWithValue('No response received from server');
      } else {
        return rejectWithValue('An error occurred while processing the request');
      }
    }
  });

  const productSlice = createSlice({
	name: 'product',
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

