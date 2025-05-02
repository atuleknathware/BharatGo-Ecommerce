import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    addProduct: (state, action) => {
      const exists = state.items.some((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setProducts, addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
