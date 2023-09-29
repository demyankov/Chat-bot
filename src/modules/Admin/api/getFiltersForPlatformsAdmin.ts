import { authUserAxiosInstance } from 'api';
import { AdminPlatformsFiltersResponse } from 'store';

import { endpoints } from './endpoints';

export const getFiltersForPlatformsAdmin = (): Promise<AdminPlatformsFiltersResponse[]> =>
  authUserAxiosInstance.get(endpoints.filtersForPlatformsAdmin).then(({ data }) => data);
