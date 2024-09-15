import { ReactNode, useState } from 'react';
import classes from './AlgorithmAccordion.module.css';

interface AlgorithmAccordionProps {
  title: string;
  children: ReactNode;
}

export default function AlgorithmAccordion({
  title,
  children,
}: AlgorithmAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={classes.accordion}>
      <h2 className={classes.header} onClick={onOpenClick}>
        {title}
      </h2>

      <div
        className={
          isOpen
            ? `${classes.expandable} ${classes.active}`
            : classes.expandable
        }
      >
        <div className={classes.content}>{children}</div>
      </div>
    </div>
  );
}
