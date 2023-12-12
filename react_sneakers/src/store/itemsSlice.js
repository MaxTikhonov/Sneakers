import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
 name: 'items',
 initialState: {
  items: [],
  formatCost: []
 },
 reducers: {
  formatItems: (state, data) => {
   const cards = data.payload.reduce((accum, item, index) => {
    let a = new Intl.NumberFormat("ru-RU").format(item.price)
    accum[index] = a;
    return accum;
   }, [])
   state.formatCost = cards;
  },
  initItems: (state, data) => {
   let items = data.payload;
   state.items = items;
  },
 }
})

export const { initItems, formatItems } = itemsSlice.actions;
export const selectItems = state => state.items.items;
export const selectFormatCost = state => state.items.formatCost;
export default itemsSlice.reducer;