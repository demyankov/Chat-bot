import { FilterGroup, Filters } from 'store/types';

import { authUserAxiosInstance } from './authUserAxiosInstance';
import { endpoints } from './endpoints';

export const getAllFilters = (): Promise<FilterGroup[]> =>
  authUserAxiosInstance.get(endpoints.filters).then(({ data }) => data);

export const getTopFilters = (): Promise<Filters[]> =>
  authUserAxiosInstance.get(endpoints.topFilters).then(({ data }) => data);
