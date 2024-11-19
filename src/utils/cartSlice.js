import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({ // it takes a config to creat a slice
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        // action and reducer function which modify the slice of store
        addItem:(state, action)=> 
        {   //mutating the state
            state.items.push(action.payload);

        },
        removeItem:(state)=>
        {
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0;
            // or return {items:[]}
        }
    }

});
export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;