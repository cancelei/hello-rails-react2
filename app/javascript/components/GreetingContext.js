import React, { createContext, useState, useEffect } from 'react';

export const GreetingContext = createContext();

export const GreetingProvider = ({ children }) => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    async function fetchGreeting() {
      const response = await fetch('/greetings/random');
      const data = await response.json();
      setGreeting(data.message);
    }

    fetchGreeting();
  }, []);

  return (
    <GreetingContext.Provider value={{ greeting }}>
      {children}
    </GreetingContext.Provider>
  );
};
