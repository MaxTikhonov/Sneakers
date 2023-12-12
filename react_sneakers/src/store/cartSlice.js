import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
 name: 'cart',
 initialState: {
  value: {},
  valueArr: [],
  chosenAmount: {}
 },
 reducers: {
  addItem: (state, data) => {
   let articul = data.payload;
   if (!state.value[articul.id]) {
    state.value[articul.id] = articul;
    state.valueArr = Object.values(state.value);
   }
   state.chosenAmount[articul.id] ? state.chosenAmount[articul.id]++ : state.chosenAmount[articul.id] = 1;
  },
  minusItem: (state, data) => {
   let articul = data.payload;
   if (state.chosenAmount[articul]) {
    state.chosenAmount[articul]--;
   }
   if (state.chosenAmount[articul] <= 0) {
    delete state.value[articul];
    state.valueArr = Object.values(state.value);
    delete state.chosenAmount[articul]
   }
  },
  removeItem: (state, data) => {
   let articul = data.payload;
   delete state.value[articul];
   delete state.chosenAmount[articul]
   state.valueArr = Object.values(state.value);
  }
 }
})

export const { addItem, removeItem, minusItem } = cartSlice.actions;
export const selectCart = state => state.cart.value;
export const selectCartArr = state => state.cart.valueArr;
export const selectChosenAmount = state => state.cart.chosenAmount;
export default cartSlice.reducer;