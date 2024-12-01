
import { createSlice, createSelector } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Array to store cart items
  },
  reducers: {
    // Add an item to the cart
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      if (existingItem) {
        // Increment quantity if the item already exists
        existingItem.quantity += 1;
      } else {
        // Add the item with an initial quantity of 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    // Remove the last item from the cart (stack behavior)
    removeItem: (state) => {
      if (state.items.length > 0) {
        state.items.pop();
      }
    },

    // Clear all items from the cart
    clearCart: (state) => {
      state.items = [];
    },

    // Remove a specific item from the cart by ID
    removeSpecificItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.card.info.id !== action.payload.id
      );
    },

    // Decrease the quantity of a specific item
    decreaseItemQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.card.info.id === action.payload.id
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          // Remove the item from the cart if quantity is 0
          state.items = state.items.filter(
            (item) => item.card.info.id !== action.payload.id
          );
        }
      }
    },
  },
});

// Selector to calculate the total price of items in the cart
export const selectTotalPrice = createSelector(
  [(state) => state.cart.items],
  (items) =>
    items.reduce(
      (total, item) =>
        total + ((item.card.info.price || item.card.info.defaultPrice) / 100) * item.quantity,
      0
    )
);

export const {
  addItem,
  removeItem,
  clearCart,
  removeSpecificItem,
  decreaseItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
