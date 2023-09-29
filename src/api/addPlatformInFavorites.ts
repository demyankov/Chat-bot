import { authUserAxiosInstance } from './authUserAxiosInstance';
import { endpoints } from './endpoints';

export const addPlatformInFavorites = (userId: string, platformId: string): Promise<void> =>
  authUserAxiosInstance.put(`${endpoints.platforms}/${platformId}/favorites`, { userId });
