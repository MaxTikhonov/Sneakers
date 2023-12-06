import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
 name: 'cart',
 initialState: {
  value: {},
  valueArr: []
 },
 reducers: {
  addItem: (state, data) => {
   let articul = data.payload;
   state.value[articul.id] = articul;
   state.valueArr = Object.values(state.value);
  },
  removeItem: (state, data) => {
   let articul = data.payload;
   delete state.value[articul];
   state.valueArr = Object.values(state.value);
  }
 }
})

export const { addItem, removeItem } = cartSlice.actions;
export const selectCart = state => state.cart.value;
export const selectCartArr = state => state.cart.valueArr;
export default cartSlice.reducer;