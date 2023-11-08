// Greeting.js
import React, { useContext } from 'react';
import { GreetingContext } from './GreetingContext';

const Greeting = () => {
  const { greeting } = useContext(GreetingContext);

  // Remove the useEffect and fetchGreeting function

  return (
    <div>
      {greeting ? <h1>{greeting}</h1> : <p>Loading...</p>}
    </div>
  );
};

export default Greeting;
