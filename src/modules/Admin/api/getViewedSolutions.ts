import { authUserAxiosInstance } from 'api';
import { SolutionCard } from 'store';

import { endpoints } from './endpoints';

interface GetViewedSolutionsResponse {
  solutionsViewed: SolutionCard[];
}

export const getViewedSolutions = (): Promise<GetViewedSolutionsResponse> =>
  authUserAxiosInstance.get(endpoints.viewedSolutions).then(({ data }) => data);
