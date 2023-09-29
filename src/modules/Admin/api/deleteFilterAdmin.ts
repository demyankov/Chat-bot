import { authUserAxiosInstance } from 'api';

import { endpoints } from './endpoints';

export const deleteFilterAdmin = (id: string): Promise<void> =>
  authUserAxiosInstance.delete(`${endpoints.deleteFilterForPlatformsAdmin}/${id}`);
