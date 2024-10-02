import React from 'react';
import classes from 'App.module.css';
import Algorithms from './components/Algorithms/Algorithms';

function App(foo) {
  return (
    <div className={classes.container}>
      <Algorithms />
    </div>
  );
}

export default App;
