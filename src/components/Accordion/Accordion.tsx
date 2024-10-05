import React, {
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import { NumberAnsweredContext } from 'contexts/NumberAnsweredContext';

import classes from 'components/Accordion/Accordion.module.css';
import { ReactComponent as Chevron } from 'assets/8665193_chevron_down_icon.svg';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

interface AccordionProps {
  title: string;
  children: ReactNode;
}

export default function Accordion({ title, children }: AccordionProps) {
  const windowSize = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState('0px');
  const contentRef = useRef<HTMLDivElement>(null);
  const numberAnswered = useContext(NumberAnsweredContext);

  const onOpenClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen, numberAnswered, windowSize]);

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
