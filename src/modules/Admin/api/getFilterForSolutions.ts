import { authUserAxiosInstance } from 'api';
import { SolutionFilter } from 'store';

import { endpoints } from './endpoints';

export const getFilterForSolutions = (filterId: string): Promise<SolutionFilter> =>
  authUserAxiosInstance.get(`${endpoints.filtersForSolutions}/${filterId}`).then(({ data }) => data);
