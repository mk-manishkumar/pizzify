import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
};

type CartState = {
  cart: CartItem[];
};

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemInCart = state.cart.find(item => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity += action.payload.quantity;
      } else {
        state.cart.push({ ...action.payload });
      }
    },

    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item) item.quantity += 1;
    },

    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },

    removeItem: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  clearCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
