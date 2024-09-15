import AlgorithmAccordion from './AlgorithmAccordion';
import AlgorithmGroup from './AlgorithmGroup';

import classes from './Algorithms.module.css';

export default function Algorithms() {
  return (
    <div className={classes.algorithms}>
      <AlgorithmAccordion title="Comparisons">
        <AlgorithmGroup algorithm="42 == '42'" />
        <AlgorithmGroup algorithm="42 === '42'" />
        <AlgorithmGroup algorithm="true == 'true'" />
        <AlgorithmGroup algorithm="![] == []" />
      </AlgorithmAccordion>

      <AlgorithmAccordion title="Calculations">
        <AlgorithmGroup algorithm="true + false" />
        <AlgorithmGroup algorithm="!5 + !5" />
        <AlgorithmGroup algorithm="1 + 2 + '3'" />
      </AlgorithmAccordion>

      <AlgorithmAccordion title="Weird results from calculations">
        <AlgorithmGroup algorithm="parseInt(0.0000008)" />
        <AlgorithmGroup algorithm="0.1 + 0.2" />
      </AlgorithmAccordion>

      <AlgorithmAccordion title="Working with NaN">
        <AlgorithmGroup algorithm="NaN == NaN" />
        <AlgorithmGroup algorithm="NaN != NaN" />
        <AlgorithmGroup algorithm="typeof NaN" />
        <AlgorithmGroup algorithm="isNaN(NaN)" />
      </AlgorithmAccordion>

      <AlgorithmAccordion title="Working with null">
        <AlgorithmGroup algorithm="null > 0" />
        <AlgorithmGroup algorithm="null == null" />
        <AlgorithmGroup algorithm="null === null" />
        <AlgorithmGroup algorithm="null === 0" />
        <AlgorithmGroup algorithm="null >= 0" />
        <AlgorithmGroup algorithm="null <= 0" />
      </AlgorithmAccordion>
    </div>
  );
}
