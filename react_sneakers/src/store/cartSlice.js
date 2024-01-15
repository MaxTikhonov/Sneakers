import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
 name: 'cart',
 initialState: {
  value: {},
  valueArr: [],
  chosenAmount: {},
  purchasedItems: {},
  purchased: false
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
   delete state.chosenAmount[articul];
   state.valueArr = Object.values(state.value);
  },
  buyItems: (state, data) => {
   state.purchasedItems = data.payload;
  },
  clearItems: (state) => {
   state.chosenAmount = {};
   state.valueArr = [];
   state.value = {};
  },
  switchPurchased: (state, data) => {
   state.purchased = !state.purchased;
  }
 }
})

export const { addItem, removeItem, minusItem, buyItems, clearItems, switchPurchased } = cartSlice.actions;
export const selectCart = state => state.cart.value;
export const selectCartArr = state => state.cart.valueArr;
export const selectChosenAmount = state => state.cart.chosenAmount;
export const selectPurchasedItems = state => state.cart.purchasedItems;
export const selectPurchased = state => state.cart.purchased;
export default cartSlice.reducer;