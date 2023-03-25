import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter, reset, resetCounter } from '../Action';


function CounterInput() {
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={()=> dispatch(incrementCounter())}>Increment</button>
        <button onClick={()=> dispatch(decrementCounter())}>Decrement</button>
        <button onClick={()=> dispatch(resetCounter())}>Reset</button>

    </div>
  )
}

export default CounterInput