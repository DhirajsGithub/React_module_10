import { createSlice } from "@reduxjs/toolkit";
// A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
const initialState = { counter: 0, showCounter: true }
const counterSlice = createSlice({
    name : 'counter',   // any name, treat it as reducer function 
    // initialState : initialState,
    initialState,       // modern JS
    reducers : {      // all the if statments returns
        // the below methods will automatically be called for you depending on which action is trigger
        increment (state){
            // here we are allowed to mutate the state 
            // redux toolkit internally uses a package called imgur which will automatically clone the existing the state and override only that part which is changing
            state.counter ++;
        },
        decrement (state) {
            state.counter --;
        },
        // payloads
        increase (state, action) {
            state.counter += action.payload;
        },
        toggleCounter (state) {
            state.showCounter = !state.showCounter; 
        },

    }
});

export const counterActions = counterSlice.actions
export default counterSlice.reducer