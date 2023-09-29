import { Collapse } from 'components/Collapse/Collapse';
import { useState } from 'react';

import { FAQ_CONTENT } from './faq-content';

import styles from './styles.module.scss';

export const FaqPage = () => {
  const [expandedItem, setExpandedItem] = useState(-1);

  const toggleAccordion = (id: string | number) => {
    if (id === expandedItem) {
      setExpandedItem(-1);
      return;
    }
    setExpandedItem(Number(id));
  };

  return (
    <div className={styles.wrapper}>
      {FAQ_CONTENT.map(({ question, answer, id }) => (
        <Collapse title={question} expanded={expandedItem === id} onClick={toggleAccordion} id={id} key={id}>
          <div className={styles.answer}>{answer}</div>
        </Collapse>
      ))}
    </div>
  );
};
