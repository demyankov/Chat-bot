import { authUserAxiosInstance } from 'api';
import { PlatfromCard } from 'store';

import { endpoints } from './endpoints';

import { SortingType } from '../types';

export const getAdminPlatformsRequest = (name?: string, type: SortingType = 'asc'): Promise<PlatfromCard[]> => {
  const query = {
    name,
    type,
  };

  return authUserAxiosInstance
    .get(endpoints.platforms, {
      params: query,
    })
    .then(({ data }) => data);
};
