import { authUserAxiosInstance } from 'api';

import { endpoints } from './endpoints';

export const deleteSolutionsFilter = (id: string): Promise<void> =>
  authUserAxiosInstance.delete(`${endpoints.filtersForSolutions}/${id}`);
