import { RootState } from 'store/types/types';

export const getIsPlatformActive = (state: RootState) => state.adminPlatform.isActive;

export const getMessage = (state: RootState) => state.adminPlatform.message;

export const getIsLoading = (state: RootState) => state.adminPlatform.isLoading;

export const getIsModalOpen = (state: RootState) => state.adminPlatform.isModalOpen;
