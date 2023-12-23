import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
 name: 'favorite',
 initialState: {
  value: {}
 },
 reducers: {
  addFavorite: (state, data) => {
   let articul = data.payload;
   if (!state.value[articul]) {
    state.value[articul] = articul;
   }
  },
  removeFavorite: (state, data) => {
   let articul = data.payload;
   delete state.value[articul];
  }
 }
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export const selectFavorite = state => state.favorite.value;
export default favoriteSlice.reducer;