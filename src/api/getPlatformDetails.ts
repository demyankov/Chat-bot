import { PlatformDetailsResponse } from 'store';

import { authUserAxiosInstance } from './authUserAxiosInstance';
import { endpoints } from './endpoints';

export const getPlatformDetails = (platformId: string): Promise<PlatformDetailsResponse> =>
  authUserAxiosInstance.get(`/${endpoints.platforms}/${platformId}`).then(({ data }) => data);
