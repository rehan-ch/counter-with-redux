import React from 'react';
import { useSelector } from 'react-redux';

function CounterOutput() {
  const count = useSelector((state)=>state.count);
  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}

export default CounterOutput