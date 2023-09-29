import { PlatfromCard } from 'store';

import { authUserAxiosInstance } from './authUserAxiosInstance';
import { endpoints } from './endpoints';

interface FavoritePlatformsResponse {
  platformsFavorites: PlatfromCard[];
}

export const getFavoritePlatforms = (): Promise<FavoritePlatformsResponse> =>
  authUserAxiosInstance.get(endpoints.favoritePlatforms).then(({ data }) => data);
