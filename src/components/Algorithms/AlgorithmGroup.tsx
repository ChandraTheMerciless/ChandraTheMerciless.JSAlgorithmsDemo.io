import React, { useState } from 'react';

import classes from 'components/Algorithms/AlgorithmGroup.module.css';

interface AlgorithmGroupProps {
  algorithm: string;
}

export default function AlgorithmGroup({ algorithm }: AlgorithmGroupProps) {
  const [answer, setAnswer] = useState();

  const getAnswer = () => {
    // eslint-disable-next-line no-eval
    const parsed = eval(algorithm);
    setAnswer(typeof parsed === 'boolean' ? parsed.toString() : parsed);
  };

  return (
    <div className={classes['algorithm-group']}>
      <div className={classes.content}>
        <p>{algorithm}</p>
        <button data-testid="calculateButton" onClick={getAnswer}>
          =
        </button>
        <p>{answer}</p>
      </div>
    </div>
  );
}
