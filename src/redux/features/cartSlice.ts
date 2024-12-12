import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
    id: string;
    tittle: string;
    img: string;
    price: number;
    quantity: number;
}

const initialState : Array<IProduct> = [];

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
      addToCart: (state, action: PayloadAction<IProduct>) => {
        const productIndex = state.findIndex((pro) => pro.id === action.payload.id);
        if (productIndex === -1) {
          state.push(action.payload);
        } else {
          state[productIndex].quantity += action.payload.quantity;
        }
      },
  
      removeFromCart: (state, action: PayloadAction<string>) => {
        return state.filter((item) => item.id !== action.payload);
      },
    },
  });
  
  export const { addToCart, removeFromCart } = cartSlice.actions;
  export default cartSlice.reducer;
  