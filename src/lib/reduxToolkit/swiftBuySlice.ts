import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { CartStateTypes, ProductCartProps } from "../types/cartTypes";
const initialState: CartStateTypes = { products: [] };

export const swiftBuySlice = createSlice({
  name: "swiftBuyStore",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductCartProps>) => {
      const item = state.products.find(
        (product: { id: string }) => product.id === action.payload.id,
      );
      if (item) {
        item.quantity! += action.payload.quantity!;
      } else {
        state.products.push(action.payload);
      }
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.products.find(
        (item: { id: string }) => item.id === action.payload,
      );
      if (item) {
        item.quantity!++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.products.find(
        (item: { id: string }) => item.id === action.payload,
      );
      if (item) {
        if (item.quantity === 1) {
          item.quantity = 1;
        } else {
          item.quantity!--;
        }
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product: { id: string }) => product.id !== action.payload,
      );
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});
export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = swiftBuySlice.actions;
export default swiftBuySlice.reducer;
