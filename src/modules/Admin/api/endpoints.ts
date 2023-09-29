import { baseURL } from 'shared';

export const endpoints = {
  createPlatform: `${baseURL}/platforms`,
  platforms: 'platforms',
  filtersForPlatformsAdmin: 'filter-for-platforms/admin',
  deleteFilterForPlatformsAdmin: 'filter-for-platforms',
  viewedPlatforms: 'users/platforms-viewed',
  solutions: 'solutions',
  filtersForSolutions: 'filter-for-solutions',
  viewedSolutions: 'users/solutions-viewed',
};
