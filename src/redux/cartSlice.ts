import { createSlice } from '@reduxjs/toolkit';
import { CartState } from '../utils/types';


const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.items.find(i => i.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            } else {
                state.items.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    quantity: 1,
                    price: action.payload.sellingPrice,
                });
            }
        },
    },
});

export const { addToCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;