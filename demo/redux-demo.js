const redux = require('redux');

// reducer function 
const counterReducer = (state = {counter : 0}, action)=>{
    // return {
    //     counter : state.counter +1 ,
    // }
    if (action.type === 'increment'){
        return {
            counter : state.counter +1 ,
        }
    }
    if (action.type === 'decrement'){
        return {
            counter : state.counter - 1 ,
        }
    }
}

// central data (state)/store
const store = redux.legacy_createStore(counterReducer);
// redux.createStore is deprecated hence 

console.log(store.getState());
// when we use action in reducer funtion then it will be undefine 

// counterSubscriber will run only when we dispatch a store 
const counterSubscriber = ()=>{
    // we can get to that latest state after it was changed
    const latestState = store.getState();
    console.log(latestState);
    // initially the counterReducer runs then counter set to 1 when we dispatch the store the counterReducer runs again leading to counter increase by 1 again
    // counterReducer won't return initially coz it will only return when certain action is trigger
}

// subscription
store.subscribe(counterSubscriber);  // only point to the subscribe funtion

// type as an identifier
store.dispatch({type : 'increment'})



/*
> .js file  > npm init -y > npm install redux > require redux > use redux properties

the reducer funtion --> should be pure function (same input leads to same output)
inputs: oldState, dispatched function 
output New State Objects 


*/