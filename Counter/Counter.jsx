import React, { useState } from 'react';
import CounterDisplay from './CounterDisplay';

const Counter = ({ initialValue, decrementAmount }) => {
  const [count, setCount] = useState(initialValue);

  const decrement = () => {
    setCount(prevCount => prevCount - decrementAmount);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return (
    <div>
      <CounterDisplay count={count} />
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
