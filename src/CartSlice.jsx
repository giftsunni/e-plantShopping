import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: {},
    },
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            if (state.items[item.name]) {
                state.items[item.name].quantity += 1;
            } else {
                state.items[item.name] = { ...item, quantity: 1 };
            }
        },
        removeItem: (state, action) => {
            delete state.items[action.payload];
        },
        updateQuantity: (state, action) => {
            const { name, amount } = action.payload;
            if (state.items[name]) {
                state.items[name].quantity += amount;
                if (state.items[name].quantity <= 0) {
                    delete state.items[name]; // Remove item if quantity is 0
                }
            }
        },
    },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
