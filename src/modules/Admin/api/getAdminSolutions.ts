import { authUserAxiosInstance } from 'api';
import { SolutionCard } from 'store';

import { endpoints } from './endpoints';

import { SortingType } from '../types';

export const getAdminSolutions = (name?: string, type: SortingType = 'asc'): Promise<SolutionCard[]> => {
  const query = {
    name,
    type,
  };

  return authUserAxiosInstance
    .get(endpoints.solutions, {
      params: query,
    })
    .then(({ data }) => data);
};
