import { RootState } from 'store/types/types';

export const getAdminSolutions = (state: RootState) => state.adminSolutions.solutions;

export const getAdminSolutionsLoadingState = (state: RootState) => state.adminSolutions.loadingState;

export const getIsAdminSolutionsLoaderVisible = (state: RootState) => state.adminSolutions.isLoaderVisible;

export const getIsSearchButtonActive = (state: RootState) => state.adminSolutions.isSearchButtonActive;

export const getAdminSolutionsLoadingMessage = (state: RootState) => state.adminSolutions.loadingMessage;

export const deleteSolutionErrorMessage = (state: RootState) => state.adminSolutions.deleteSolutionErrorMessage;

export const getAdminSolutionSortDirection = (state: RootState) => state.adminSolutions.sortSolutionDirection;

export const getAdminSolutionSortKey = (state: RootState) => state.adminSolutions.sortSolutionKey;

export const getAdminActiveSolutionId = (state: RootState) => state.adminSolutions.activeItemId;
