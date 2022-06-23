import { Component } from 'react';
import classes from './Counter.module.css';

import { useSelector, useDispatch, connect } from 'react-redux';
// A hook to access the redux store's state. This hook takes a selector function as an argument. The selector is called with the store state.
// useDispatch --> A hook to access the redux dispatch function.

import { counterActions } from '../store/counter';



const Counter = () => {
  // const counter = useSelector(state => state.counter);
  const counter = useSelector(state => state.counter.counter );
    // React Redux will automatically set up a subscription to the Redux store for this component. So your component will be updated and will receive the latest counter automatically whenever that data changes in the Redux store.

  const dispatch = useDispatch();

  // working with multiple state properties
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    // dispatch({ type: 'increment' });
    dispatch(counterActions.increment());
  };

  const increaseHandler = () =>{
    // dispatch({type: 'increase', amount : 10});
    dispatch(counterActions.increase(10));       // {type : SOME_UNIQUE_IDENTIFIER, payload: 10}
  }

  const decrementHandler = () => {
    // dispatch({ type: 'decrement' });
    dispatch(counterActions.decrement());
  };


  const toggleCounterHandler = () => {
    // dispatch({type : 'toggle'});
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div> }
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase By 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);