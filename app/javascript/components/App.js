// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Greeting from "./Greeting";
import { GreetingProvider } from './GreetingContext'; // Make sure this path is correct

const App = () => (
  <GreetingProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </Router>
  </GreetingProvider>
);

export default App;
