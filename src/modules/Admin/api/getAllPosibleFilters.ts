import { authUserAxiosInstance } from 'api';

import { Characteristic } from 'store';

import { endpoints } from './endpoints';

export const getActivePlatformFilters = (pladformId: string): Promise<Characteristic[]> =>
  authUserAxiosInstance.get(`${endpoints.platforms}/${pladformId}/filters`).then(({ data }) => data);
