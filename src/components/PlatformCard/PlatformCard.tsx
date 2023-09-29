import { MouseEvent, useState } from 'react';
import { generatePath, Link } from 'react-router-dom';
import { ROUTE } from 'router';
import { PlatfromCard, togglePlatformForDeletingFromViewed, useAppDispatch } from 'store';
import { CheckedIcon, NotCheckedIcon, FavoriteIcon } from 'assets';
import cn from 'classnames';

import styles from './styles.module.scss';

import { CustomLogo } from '../CustomLogo/CustomLogo';

interface PlaformCardProps {
  platform: PlatfromCard;
  isShowFavoriteIcon: boolean;
  isSelectMode?: boolean;
  isSelected?: boolean;
  onlyFavorites?: boolean;
  toggleFavorite: (isFavorite: boolean, cardId: string) => void;
}

export const PlatformCard = ({
  platform,
  isShowFavoriteIcon,
  isSelectMode = false,
  isSelected = false,
  onlyFavorites = false,
  toggleFavorite,
}: PlaformCardProps) => {
  const { name, description, id, fileUrl, isFavorites, numberOfSolution } = platform;
  const [imageLoadError, setImageLoadError] = useState(false);
  const dispatch = useAppDispatch();

  const currentIsFavorite = isFavorites || onlyFavorites;

  const handleImageLoadError = () => {
    setImageLoadError(true);
  };

  const handleSelectPlatform = () => {
    if (isSelectMode) {
      dispatch(togglePlatformForDeletingFromViewed(id));
    }
  };

  const handleFavorite = (e: MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    toggleFavorite(currentIsFavorite, id);
  };

  const cardStyle = cn(styles.card, {
    [styles.checkedCard]: isSelected,
  });
  const selectIcon = isSelected ? <CheckedIcon /> : <NotCheckedIcon />;

  return (
    <div className={cardStyle} onClick={handleSelectPlatform}>
      <div className={styles.header}>
        <div className={styles.image}>
          {!fileUrl || imageLoadError ? (
            <CustomLogo title={name} />
          ) : (
            <img src={`http://${fileUrl}`} onError={handleImageLoadError} alt={`logo platform ${name}`} />
          )}
        </div>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.solution}>Готовых решений ({numberOfSolution})</p>
        </div>
        {isShowFavoriteIcon && (
          <button className={styles.flag} type="button">
            <FavoriteIcon
              className={currentIsFavorite ? styles.favorite : styles.notFavorite}
              onClick={handleFavorite}
            />
          </button>
        )}
      </div>
      <p className={styles.text}>{description}</p>
      <div className={styles.linkWrapper}>
        <Link className={styles.link} to={generatePath(ROUTE.PLATFORMS_DETAILS, { platformId: id })}>
          Подробнее
        </Link>
      </div>
      {isSelectMode && (
        <button type="button" className={styles.selectIconWrapper}>
          {selectIcon}
        </button>
      )}
    </div>
  );
};
