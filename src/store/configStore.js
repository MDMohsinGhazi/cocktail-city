import { configureStore } from "@reduxjs/toolkit";
import cocktailReducer from "./cocktailSlice";

export const store = configureStore({
  reducer: {
    cocktail: cocktailReducer,
  },
});
