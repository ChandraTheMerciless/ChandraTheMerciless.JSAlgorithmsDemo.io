import React from 'react';
import classes from 'App.module.css';
import Algorithms from 'components/Algorithms/Algorithms';
import Nav from 'components/Nav/Nav';
import { NumberAnsweredProvider } from 'contexts/NumberAnsweredContext';

function App() {
  return (
    <NumberAnsweredProvider>
      <header>
        <Nav />
      </header>
      <main>
        <div className={classes.container}>
          <Algorithms />
        </div>
      </main>
    </NumberAnsweredProvider>
  );
}

export default App;
