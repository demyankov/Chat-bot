import { getFavoritePlatforms } from 'api/getFavoritePlatforms';
import { PlatformList } from 'components';
import { useEffect, useState } from 'react';
import { PlatfromCard } from 'store';

export const ProfileFavoritePlatformsPage = () => {
  const [favoritePlatforms, setFavoritePlatforms] = useState<PlatfromCard[]>([]);
  const reloadCardList = () =>
    getFavoritePlatforms().then((data) => {
      setFavoritePlatforms(data.platformsFavorites || []);
    });

  useEffect(() => {
    reloadCardList();
  }, []);

  return (
    <div>
      <PlatformList platforms={favoritePlatforms} onlyFavorites reloadCardList={reloadCardList} />
    </div>
  );
};
