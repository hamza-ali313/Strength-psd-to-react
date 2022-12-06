import { configureStore } from '@reduxjs/toolkit'
import cartSliceReducer from "./CartSlice"
import CocktailSliceReducer from "./CocktailSlice"

export const Store = configureStore({
  reducer: {
    cart:cartSliceReducer,
    Cocktail:CocktailSliceReducer

  }
 
})
