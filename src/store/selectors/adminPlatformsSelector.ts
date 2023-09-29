import { RootState } from 'store/types/types';

export const getAdminPlatforms = (state: RootState) => state.adminPlatforms.platforms;

export const getAdminLoadingState = (state: RootState) => state.adminPlatforms.loadingState;

export const getIsAdminLoaderVisible = (state: RootState) => state.adminPlatforms.isLoaderVisible;

export const getIsKeyButtonActive = (state: RootState) => state.adminPlatforms.isKeyButtonActive;

export const getAdminLoadingMessage = (state: RootState) => state.adminPlatforms.loadingMessage;

export const getAdminSortDirection = (state: RootState) => state.adminPlatforms.sortDirection;

export const getAdminSortKey = (state: RootState) => state.adminPlatforms.sortKey;
