import { Cart, ProductCard } from './../services/interfaces';
import { createSlice } from '@reduxjs/toolkit';
const initialState: Cart = {
    cart : [],
}
const cartSlice = createSlice({
    name: 'addtocart',
    initialState,
    reducers: {
        addToCart :(state, action) => {
            console.log(action);
            const item = state.cart.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
                } else {
            state.cart.push({...action.payload, quantity: 1});
  }
        }
    }
})
export const { addToCart } = cartSlice.actions
export default cartSlice.reducer;