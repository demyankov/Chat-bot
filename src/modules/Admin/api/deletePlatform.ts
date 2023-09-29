import { authUserAxiosInstance } from 'api';

import { endpoints } from './endpoints';

export const deletePlatform = (id: string): Promise<void> =>
  authUserAxiosInstance.delete(`${endpoints.platforms}/${id}`);
