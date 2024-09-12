import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    addedToCart: {}
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
          existingItem.quantity++;
        } else {
          state.items.push({ name, image, cost, quantity: 1 });
          state.addedToCart[name] = true;
        }
    },
    removeItem: (state, action) => {
        const { name, image, cost } = action.payload;
        state.items = state.items.filter(item => item.name !== name);
        state.addedToCart[name] = false;
    },
    updateQuantity: (state, action) => {
        const {name, amount} = action.payload
        const item = state.items.find(item => item.name === name)
        console.log(item)
        if(item){
            item.quantity = amount
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
