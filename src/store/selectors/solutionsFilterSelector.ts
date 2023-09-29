import { RootState } from 'store/types/types';

export const getSolutionsFilterOptionsSelector = (state: RootState) => state.solutionsFilter.solutionsFilterOptions;

export const solutionsFilterLoadingMessageSelector = (state: RootState) =>
  state.solutionsFilter.solutionsFilterLoadingMessage;

export const isSolutionsFilterLoadingSelector = (state: RootState) => state.solutionsFilter.isSolutionsFilterLoading;

export const getSolutionsFilterErrorSelector = (state: RootState) => state.solutionsFilter.solutionsFilterErrorMessage;

export const getCurrentSolutionsFilterSelector = (state: RootState) => state.solutionsFilter.currentFilter;

export const isSaveModalOpenSelector = (state: RootState) => state.solutionsFilter.isSaveModalOpen;
