import React from 'react';
import logo from './logo.svg';
import classes from 'App.module.css';
import Algorithms from './components/Algorithms/Algorithms';

function App() {
  return (
    <div className={classes.container}>
      <Algorithms />
    </div>
  );
}

export default App;
