import { StarIcon, StarEmptyIcon } from 'assets';

import { useState, useRef } from 'react';

import { SliderCardLink } from 'components/SliderCardLink/SliderCardLink';

import { useComputeHeight } from 'hooks/useMultilineTextWidth';

import { CustomLogo } from 'components/CustomLogo/CustomLogo';

import styles from './styles.module.scss';

import arrow_right from '../../assets/icons/slider_buttons/arrow_right.svg';

export interface SolutionCardProps {
  isAuth: boolean;
  platformName: string;
  platformLogoLink: string;
  name: string;
  description: string;
  priceMin: number;
  isFavorite: boolean;
}

/**
 * TODO добавить ссылку на страницу описания решения в Link
 */

const SolutionCardItem = ({
  platformLogoLink,
  platformName,
  name,
  description,
  priceMin,
  isAuth,
  isFavorite = false,
}: SolutionCardProps) => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  const [solutionText, setSolutionText] = useState(description);

  const [imageLoadError, setImageLoadError] = useState(false);

  const textRef = useRef<HTMLParagraphElement>(null);

  useComputeHeight({
    fullText: description,
    containerElement: textRef.current,
    setText: setSolutionText,
  });

  const starIcon = isFavorite ? <StarIcon /> : <StarEmptyIcon />;
  const favorite = isAuth ? <div className={styles.favoriteIcon}>{starIcon}</div> : null;
  const linkStyle = isMouseEnter ? styles.linkVisible : styles.linkHidden;
  const imageError = !platformLogoLink || imageLoadError;

  const handleMouseEnter = () => {
    setIsMouseEnter(true);
  };

  const handleMouseLeave = () => {
    setIsMouseEnter(false);
  };

  const handleImageLoadError = () => {
    setImageLoadError(true);
  };

  return (
    <SliderCardLink to="/" className={styles.card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={styles.wrap}>
        <div className={styles.list}>
          <div className={styles.title}>{name}</div>
          {favorite}
        </div>
        <div className={styles.iconWrapper}>
          {imageError ? (
            <CustomLogo title={name} small />
          ) : (
            <img
              className={styles.icon}
              src={platformLogoLink}
              onError={handleImageLoadError}
              alt={`logo card ${name}`}
            />
          )}

          <span className={styles.iconText}>{platformName}</span>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.descriptionWrapper}>
          <div ref={textRef} className={styles.text}>
            {solutionText}
          </div>
          <div className={styles.price}>Стоимость от {priceMin} ₽</div>
        </div>
        <div className={linkStyle}>
          <img className={styles.arrow} src={arrow_right} alt="forward icon" />
          <span className={styles.link_desc}>Подробнее</span>
        </div>
      </div>
    </SliderCardLink>
  );
};

export { SolutionCardItem };
