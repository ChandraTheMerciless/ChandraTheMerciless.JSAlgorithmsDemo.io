import React, { ReactNode, useEffect, useRef, useState } from 'react';
import classes from 'components/Accordion/Accordion.module.css';
import { ReactComponent as Chevron } from 'assets/8665193_chevron_down_icon.svg';

interface AccordionProps {
  title: string;
  children: ReactNode;
}

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState('0px');
  const contentRef = useRef<HTMLDivElement>(null);

  const onOpenClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  });

  return (
    <div className={classes.accordion}>
      <div className={classes.header} onClick={onOpenClick}>
        <h2 className={classes['header-title']}>{title}</h2>
        <Chevron className={isOpen ? classes.active : ''} />
      </div>

      <div
        className={
          isOpen
            ? `${classes.expandable} ${classes.active}`
            : classes.expandable
        }
        style={{ maxHeight }}
      >
        <div className={classes.content} ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  );
}
