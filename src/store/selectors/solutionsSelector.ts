import { RootState } from 'store/types/types';

export const getSolutions = (state: RootState) => state.solutions.solutions.rows;

export const getTotalSolutionsCount = (state: RootState) => state.solutions.solutions.countRows;

export const getSolutionsTotalPages = (state: RootState) => state.solutions.solutions.numberOfPages;

export const getSolutionsLoadingState = (state: RootState) => state.solutions.loadingState;

export const getIsSolutionsLoaderVisible = (state: RootState) => state.solutions.isLoaderVisible;

export const getFavoriteSolutions = (state: RootState) => state.solutions.favoriteSolutions;

export const getViewedSolutions = (state: RootState) => state.solutions.viewedSolutions;

export const getSolutionsLoadingMessage = (state: RootState) => state.solutions.loadingMessage;
