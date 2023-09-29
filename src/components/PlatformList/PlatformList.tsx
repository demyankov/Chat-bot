import { addPlatformInFavorites, deletePlatformFromFavorites } from 'api';
import { PlatformCard } from 'components';
import { getUser, PlatfromCard, useAppSelector } from 'store';

import styles from './styles.module.scss';

interface PlatformListProps {
  platforms: PlatfromCard[];
  reloadCardList: () => void;
  onlyFavorites?: boolean;
}

export const PlatformList = ({ platforms, onlyFavorites = false, reloadCardList }: PlatformListProps) => {
  const { id, isShowFavoriteIcon } = useAppSelector(getUser);

  const toggleFavorite = (isFavorite: boolean, cardId: string) => {
    if (id) {
      if (isFavorite) {
        deletePlatformFromFavorites(id, cardId).then(() => reloadCardList());
      } else {
        addPlatformInFavorites(id, cardId).then(() => reloadCardList());
      }
    }
  };

  return (
    <div className={styles.platformList}>
      {platforms.map((platform) => (
        <PlatformCard
          platform={platform}
          isShowFavoriteIcon={isShowFavoriteIcon}
          key={platform.id}
          onlyFavorites={onlyFavorites}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};
