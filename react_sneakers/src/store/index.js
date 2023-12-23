import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './itemsSlice';
import cartReducer from './cartSlice';
import favoriteReducer from './favoriteSlice';

export default configureStore({
 reducer: {
  items: itemsReducer,
  cart: cartReducer,
  favorite: favoriteReducer,
 }
})