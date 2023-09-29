import { RootState } from 'store/types/types';

export const getSolutionsFiltersSelector = (state: RootState) => state.solutionsFilters.solutionsFilters;

export const isShowSolutionsFiltersLoaderSelector = (state: RootState) =>
  state.solutionsFilters.isShowSolutionsFiltersLoader;

export const getSolutionsFiltersMessageSelector = (state: RootState) => state.solutionsFilters.solutionsFiltersMessage;

export const getIsDeleteModalOpen = (state: RootState) => state.solutionsFilters.isDeleteModalOpen;

export const getDeleteSolutionsFilterMessageSelector = (state: RootState) =>
  state.solutionsFilters.deleteSolutionsFilterMessage;
