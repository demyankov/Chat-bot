import { RootState } from 'store/types/types';

export const getAdminPlatformsFilters = (state: RootState) => state.adminPlatformsFilters.filters;

export const getDeleteFilterMessage = (state: RootState) => state.adminPlatformsFilters.deleteFilterMessage;

export const getIsDeleteFormOpen = (state: RootState) => state.adminPlatformsFilters.isDeleteFormOpen;

export const getIsFilterLoaderVisible = (state: RootState) => state.adminPlatformsFilters.isLoaderVisible;

export const getAdminFiltersLoadingMessage = (state: RootState) => state.adminPlatformsFilters.loadingMessage;
