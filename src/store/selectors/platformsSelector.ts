import { RootState } from 'store/types/types';

export const getPlatforms = (state: RootState) => state.platforms.platforms.rows;

export const getTotalPlatformsCount = (state: RootState) => state.platforms.platforms.countRows;

export const getTotalPages = (state: RootState) => state.platforms.platforms.numberOfPages;

export const getLoadingState = (state: RootState) => state.platforms.loadingState;

export const getIsLoaderVisible = (state: RootState) => state.platforms.isLoaderVisible;

export const getFavoritePlatforms = (state: RootState) => state.platforms.favoritePlatforms;

export const getViewedPlatforms = (state: RootState) => state.platforms.viewedPlatforms;

export const getLoadingMessage = (state: RootState) => state.platforms.loadingMessage;

export const getPlatform = (state: RootState) => state.platform;

export const getCharacteristics = (state: RootState) => state.platform.characteristics;

export const getPlatformSolutions = (state: RootState) => state.platform.solutions;

export const getPlatformReviews = (state: RootState) => state.platform.reviews;

export const getSortPlatforms = (state: RootState) => state.sortPlatforms;

export const getPlatformsForDeletingFromViewed = (state: RootState) => state.platforms.platformsForDeletingFromViewed;

export const getCountOfPlatformsForDeletingFromViewed = (state: RootState) =>
  state.platforms.platformsForDeletingFromViewed.length;

export const getIsSelectMode = (state: RootState) => state.platforms.isSelectMode;
