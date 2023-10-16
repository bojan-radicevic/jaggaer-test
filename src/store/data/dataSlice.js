import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { STATUS } from 'util/constants/defaultValues';
import { fetchData } from 'store/data/dataAPI';

const initialState = {
  article: null,
  cart: null,
  user: null,
  status: STATUS.IDLE,
  hasError: false,
  isAddToCartVisible: false
};

export const fetchDataAction = createAsyncThunk('data/fetchData', async () => {
  const { data } = await fetchData();
  return { data };
});

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    resetHasError: state => {
      state.hasError = false;
    },
    addToCart: (state, action) => {
      state.cart = { ...state.cart, items: state.cart.items + action.payload };
    },
    setAddToCartVisibility: (state, action) => {
      state.isAddToCartVisible = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDataAction.pending, state => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchDataAction.fulfilled, (state, action) => {
        const { data } = action.payload;
        state.article = data?.article;
        state.cart = data?.cart;
        state.user = data?.user;
        state.status = STATUS.IDLE;
        state.hasError = false;
      })
      .addCase(fetchDataAction.rejected, state => {
        state.status = STATUS.IDLE;
        state.hasError = true;
      });
  }
});

export const { resetHasError, addToCart, setAddToCartVisibility } =
  dataSlice.actions;

export default dataSlice.reducer;
