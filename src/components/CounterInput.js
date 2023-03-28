import React from 'react';
import { useDispatch } from 'react-redux';
import {CounterIncrement, CounterDecrement} from '../reducers/Action';

function CounterInput() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={()=> dispatch(CounterIncrement())}>+</button>
      <button onClick={()=> dispatch(CounterDecrement())}>-</button>
    </div>
  )
}

export default CounterInput;