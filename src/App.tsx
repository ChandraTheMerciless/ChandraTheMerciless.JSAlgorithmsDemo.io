import React from 'react';
import classes from 'App.module.css';
import Algorithms from 'components/Algorithms/Algorithms';
import Nav from 'components/Nav/Nav';

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <div className={classes.container}>
          <Algorithms />
        </div>
      </main>
    </>
  );
}

export default App;
