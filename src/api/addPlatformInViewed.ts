import { authUserAxiosInstance } from './authUserAxiosInstance';
import { endpoints } from './endpoints';

export const addPlatformInViewed = (userId: string, platformId: string): Promise<void> =>
  authUserAxiosInstance.put(`${endpoints.platforms}/${platformId}/viewed`, { userId });
