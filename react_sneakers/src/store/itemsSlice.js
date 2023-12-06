import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
 name: 'items',
 initialState: {
  items: []
 },
 reducers: {
  initItems: (state, data) => {
   let items = data.payload;
   state.items = items;
  },
 }
})

export const { initItems } = itemsSlice.actions;
export const selectItems = state => state.items.items;
export default itemsSlice.reducer;