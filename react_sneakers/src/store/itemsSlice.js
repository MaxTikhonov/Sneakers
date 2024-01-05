import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
 name: 'items',
 initialState: {
  itemsObj: {}
 },
 reducers: {
  initItems: (state, data) => {
   state.itemsObj = data.payload.reduce((accum, item) => {
    accum[item['id']] = item;
    return accum;
   }, {})
  },
  changeFavorite: (state, data) => {
   state.itemsObj[data.payload].favorite ? state.itemsObj[data.payload].favorite = false : state.itemsObj[data.payload].favorite = true;
  }
 }
})

export const { initItems, changeFavorite } = itemsSlice.actions;
export const selectItemsObj = state => state.items.itemsObj;
export default itemsSlice.reducer;