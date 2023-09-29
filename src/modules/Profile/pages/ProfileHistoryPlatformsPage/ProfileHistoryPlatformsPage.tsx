import { addPlatformInFavorites, deletePlatformFromFavorites } from 'api';
import { PlatformCard } from 'components';
import { errorHandler } from 'helpers/errorHandler';
import { isIncluded } from 'helpers/isInclude';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Loading, LoadingMessage } from 'sharedComponents';
import {
  clearPlatformsForDeletingFromViewed,
  getIsLoaderVisible,
  getIsSelectMode,
  getLoadingMessage,
  getPlatformsForDeletingFromViewed,
  getUser,
  getViewedPlatforms,
  setViewedPlatformsAction,
  useAppDispatch,
  useAppSelector,
} from 'store';

import styles from './styles.module.scss';

export const ProfileHistoryPlatformsPage = () => {
  const { id, isShowFavoriteIcon } = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const selectedCards = useAppSelector(getPlatformsForDeletingFromViewed);
  const isSelectMode = useAppSelector(getIsSelectMode);
  const viewedPlatforms = useAppSelector(getViewedPlatforms);
  const isLoaderVisible = useAppSelector(getIsLoaderVisible);
  const loadingMessage = useAppSelector(getLoadingMessage);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const reloadCardList = useCallback(() => {
    dispatch(setViewedPlatformsAction());
  }, [dispatch]);

  useEffect(() => {
    reloadCardList();

    return () => {
      dispatch(clearPlatformsForDeletingFromViewed());
    };
  }, [reloadCardList, dispatch]);

  const toggleFavorite = useCallback(
    (isFavorite: boolean, cardId: string) => {
      try {
        if (id) {
          if (isFavorite) {
            deletePlatformFromFavorites(id, cardId).then(() => reloadCardList());
          } else {
            addPlatformInFavorites(id, cardId).then(() => reloadCardList());
          }
        }
      } catch (e: any) {
        const message = errorHandler(e, 'Ошибка загрузки истории просмотра платформ');
        setErrorMessage(message);
      }
    },
    [reloadCardList, id],
  );

  const PlatformsList = useMemo(
    () => (
      <>
        {viewedPlatforms.map((platform) => {
          const { id: platformId } = platform;
          const isSelected = isIncluded(selectedCards, platformId);

          return (
            <PlatformCard
              key={platformId}
              platform={platform}
              isShowFavoriteIcon={isShowFavoriteIcon}
              toggleFavorite={toggleFavorite}
              isSelected={isSelected}
              isSelectMode={isSelectMode}
            />
          );
        })}
      </>
    ),
    [toggleFavorite, viewedPlatforms, isShowFavoriteIcon, isSelectMode, selectedCards],
  );

  return (
    <div className={styles.wrapper}>
      {/* Добавить кастомный компонент Alert? после того как будет замержена задача №222 */}
      {errorMessage && <p>{errorMessage}</p>}
      {isLoaderVisible && viewedPlatforms.length === 0 && <Loading delay={300} />}
      {loadingMessage && <LoadingMessage message={loadingMessage} />}
      {PlatformsList}
    </div>
  );
};
