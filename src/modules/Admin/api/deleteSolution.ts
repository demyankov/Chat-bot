import { authUserAxiosInstance } from 'api';

import { endpoints } from './endpoints';

export const deleteSolution = (id: string): Promise<void> =>
  authUserAxiosInstance.delete(`${endpoints.solutions}/${id}`);
