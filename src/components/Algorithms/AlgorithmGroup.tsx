import React, { useState } from 'react';

import classes from 'components/Algorithms/AlgorithmGroup.module.css';

interface AlgorithmGroupProps {
  algorithm: string;
}

export default function AlgorithmGroup({ algorithm }: AlgorithmGroupProps) {
  const [answer, setAnswer] = useState();
  const [isAnswered, setIsAnswered] = useState(false);

  const getAnswer = () => {
    // eslint-disable-next-line no-eval
    const parsed = eval(algorithm);
    setAnswer(typeof parsed === 'boolean' ? parsed.toString() : parsed);
    setIsAnswered(true);
  };

  return (
    <div className={classes['algorithm-group']}>
      <div className={classes.content}>
        <p>{algorithm}</p>
        {isAnswered ? (
          <p className={classes.answer}>{`// ${answer}`}</p>
        ) : (
          <div>
            <button
              aria-label={`${algorithm} equals`}
              data-testid="calculateButton"
              onClick={getAnswer}
            >
              =
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
