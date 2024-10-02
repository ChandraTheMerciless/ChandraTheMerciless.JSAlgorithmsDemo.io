import React from 'react';

import Accordion from 'components/Accordion/Accordion';
import AlgorithmGroup from 'components/Algorithms/AlgorithmGroup';
import classes from 'components/Algorithms/Algorithms.module.css';

export default function Algorithms() {
  return (
    <>
      <h1 className={classes['page-header']}>Give these a try!</h1>
      <div className={classes.algorithms}>
        <Accordion title="Comparisons">
          <AlgorithmGroup algorithm="42 == '42'" />
          <AlgorithmGroup algorithm="42 === '42'" />
          <AlgorithmGroup algorithm="true == 'true'" />
          <AlgorithmGroup algorithm="![] == []" />
        </Accordion>

        <Accordion title="Calculations">
          <AlgorithmGroup algorithm="true + false" />
          <AlgorithmGroup algorithm="!5 + !5" />
          <AlgorithmGroup algorithm="1 + 2 + '3'" />
        </Accordion>

        <Accordion title="Weird results from calculations">
          <AlgorithmGroup algorithm="parseInt(0.0000008)" />
          <AlgorithmGroup algorithm="0.1 + 0.2" />
        </Accordion>

        <Accordion title="Working with NaN">
          <AlgorithmGroup algorithm="NaN == NaN" />
          <AlgorithmGroup algorithm="NaN != NaN" />
          <AlgorithmGroup algorithm="typeof NaN" />
          <AlgorithmGroup algorithm="isNaN(NaN)" />
        </Accordion>

        <Accordion title="Working with null">
          <AlgorithmGroup algorithm="null === null" />
          <AlgorithmGroup algorithm="null > 0" />
          <AlgorithmGroup algorithm="null == 0" />
          <AlgorithmGroup algorithm="null >= 0" />
          <AlgorithmGroup algorithm="null <= 0" />
        </Accordion>
      </div>
    </>
  );
}
