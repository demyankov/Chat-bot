import { authUserAxiosInstance } from 'api';
import { PlatfromCard } from 'store';

import { endpoints } from './endpoints';

interface GetViewedPlatformsPesponse {
  platformsViewed: PlatfromCard[];
}

export const getViewedPlatforms = (): Promise<GetViewedPlatformsPesponse> =>
  authUserAxiosInstance.get(endpoints.viewedPlatforms).then(({ data }) => data);
