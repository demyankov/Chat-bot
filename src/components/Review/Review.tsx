import { ReviewCardResp } from 'store/types';
import { useToogle } from 'hooks';
import { useRef, useState, useEffect } from 'react';

import { useComputeHeight, UseComputeHeightProps } from 'hooks/useMultilineTextWidth';

import styles from './styles.module.scss';

export const Review = ({ author, text, date }: ReviewCardResp) => {
  const [isOpen, toggleText] = useToogle();
  const [isVisibleShowMore, setIsVisibleShowMore] = useState(false);
  const [reviewText, setReviewText] = useState(text);

  const textRef = useRef<HTMLParagraphElement>(null);

  const computedHeightParams: UseComputeHeightProps = {
    fullText: text,
    containerElement: textRef.current,
    setText: setReviewText,
    setVisibleBtn: setIsVisibleShowMore,
    isOpenFullText: isOpen,
  };

  useComputeHeight(computedHeightParams);

  useEffect(() => {
    /**
     * ориентируясь на смену местоположения карточки в слайдере
     * сворачиваем открытый полный текст, то есть сворачиваем
     * при прокрутке слайдера, чтобы на других карточках не было
     * пустого пространства до кнопок для переключения между слайдами
     */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting && isOpen) {
          toggleText();
        }
      });
    });

    const currentTextRef = textRef.current;

    if (currentTextRef) {
      observer.observe(currentTextRef);
    }

    return () => {
      if (currentTextRef) {
        observer.unobserve(currentTextRef);
      }
    };
  }, [isOpen, toggleText]);

  const classForText = isOpen ? styles.textOpened : styles.partialText;
  const btnText = isOpen ? 'Скрыть' : 'Читать далее';

  const styleFooter = isVisibleShowMore ? styles.footerWithButton : styles.footerWithoutButton;

  const btn = isVisibleShowMore ? (
    <button onClick={toggleText} className={styles.openTextBtn} type="button">
      {btnText}
    </button>
  ) : null;

  return (
    <div className={styles.review}>
      <p className={styles.author}>{author}</p>
      <p className={classForText} ref={textRef}>
        {reviewText}
      </p>
      <div className={styleFooter}>
        {btn}
        <span className={styles.date}>{date}</span>
      </div>
    </div>
  );
};
