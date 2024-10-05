import React, { useContext, useState } from 'react';
import { NumberAnsweredDispatchContext } from 'contexts/NumberAnsweredContext';

import classes from 'components/Algorithms/AlgorithmGroup.module.css';

interface AlgorithmGroupProps {
  algorithm: string;
}

export default function AlgorithmGroup({ algorithm }: AlgorithmGroupProps) {
  const [answer, setAnswer] = useState();
  const [isAnswered, setIsAnswered] = useState(false);

  const dispatch = useContext(NumberAnsweredDispatchContext);

  const getAnswer = () => {
    // eslint-disable-next-line no-eval
    const parsed = eval(algorithm);
    setAnswer(typeof parsed === 'boolean' ? parsed.toString() : parsed);
    setIsAnswered(true);

    dispatch?.({ type: 'increment' });
    // setNumberAnswered((prev) => prev + 1);
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
