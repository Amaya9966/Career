import React, { useState, useRef, useEffect } from 'react';

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);
  const directionRef = useRef(null); // Ref per memorizzare la direzione del cambio

  useEffect(() => {
    // Funzione per controllare la direzione del cambio e aggiornare la ref
    const updateDirectionRef = () => {
      if (count > initialValue) {
        directionRef.current = 'up';
      } else if (count < initialValue) {
        directionRef.current = 'down';
      } else {
        directionRef.current = null;
      }
    };

    updateDirectionRef();

    // Stampa il valore della ref solo se è diverso dal valore precedente
    if (directionRef.current !== null) {
      console.log('Direction:', directionRef.current);
    }
  }, [count, initialValue]);

  // Funzione per incrementare il contatore
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Funzione per decrementare il contatore
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
