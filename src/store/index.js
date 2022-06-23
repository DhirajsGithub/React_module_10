// Redux tool kit 
// $ npm install @ reduxjs/toolkit
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth"
// import { createSlice } from "@reduxjs/toolkit";
// // A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
// const initialState = { counter: 0, showCounter: true }
// const counterSlice = createSlice({
//     name : 'counter',   // any name, treat it as reducer function 
//     // initialState : initialState,
//     initialState,       // modern JS
//     reducers : {      // all the if statments returns
//         // the below methods will automatically be called for you depending on which action is trigger
//         increment (state){
//             // here we are allowed to mutate the state 
//             // redux toolkit internally uses a package called imgur which will automatically clone the existing the state and override only that part which is changing
//             state.counter ++;
//         },
//         decrement (state) {
//             state.counter --;
//         },
//         // payloads
//         increase (state, action) {
//             state.counter += action.payload;
//         },
//         toggleCounter (state) {
//             state.showCounter = !state.showCounter; 
//         },

//     }
// });

// const initialAuthState = ({
//     isAuthenticated : false,
// })

// const authSlice = createSlice({
//     name : 'authentication',
//     initialState : initialAuthState,
//     reducers : {
//         login(state){
//             state.isAuthenticated = true;
//         },
//         logout (state) {
//             state.isAuthenticated = false;
//         }
//     }
// })


// creating a store with configureStore 
const store = configureStore({
    // it wants reudcer as a key
    // global main reducer
    // reducer : counterSlice.reducer           // NOTE: how create a reducers obj in counterSlice and how we add it in the store

    // multiple state slices
    // reducer : {counter :  counterSlice.reducer, auth: authSlice.reducer}
    reducer : {counter :  counterReducer, auth: authReducer}
})
// it makes merging multiple reducers into one reducer easier thereafter.
// export const counterActions = counterSlice.actions;       // with this we can use all methods define in createSlice
// export const authActions = authSlice.actions;
export default store;  



// // reducer function 
// const initialState = { counter: 0, showCounter: true }
// const counterReducer = (state = initialState, action) => {

//     // state.counter ++;
//     // return state ; 
//     // wrong approach, while working with redux we should always override the existing state

//     if (action.type === "increment")
//         return {
//             counter: state.counter + 1,
//             showCounter : state.showCounter,      // need to showCounter snapshot coz if action.type == increment and we only have counter: state.counter + 1 then this will override the initalState
//         };
        
//         // attaching payloads to the actions
//     if(action.type === "increase"){
//         return {
//             counter : state.counter + action.amount,
//             showCounter : state.showCounter,
//         }
//     }
//     if (action.type === "decrement")
//         return {
//             counter: state.counter - 1,
//             showCounter : state.showCounter,
//         };
//     if(action.type === "toggle"){
//         return {
//             counter: state.counter,
//             showCounter : !state.showCounter,
//         }
//     }
 
//     return state;
// };
 
// creating our store
// const store = configureStore({ reducer: counterReducer });
 
// export default store;