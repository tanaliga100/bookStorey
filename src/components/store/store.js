import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/cart-slice";
import UiSlice from "./slices/ui-slice";

const store = configureStore({
  reducer: {
    ui: UiSlice.reducer,
    cart: CartSlice.reducer,
  },
});

export default store;
