import { authUserAxiosInstance } from 'api';
import { SolutionFilter } from 'store';

import { endpoints } from './endpoints';

export const getFiltersForSolutions = (): Promise<SolutionFilter[]> =>
  authUserAxiosInstance.get(endpoints.filtersForSolutions).then(({ data }) => data);
