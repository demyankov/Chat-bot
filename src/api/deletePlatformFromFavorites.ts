import { authUserAxiosInstance } from './authUserAxiosInstance';
import { endpoints } from './endpoints';

export const deletePlatformFromFavorites = (userId: string, platformId: string): Promise<void> =>
  authUserAxiosInstance.delete(`${endpoints.platforms}/${platformId}/favorites`, { data: { userId } });
