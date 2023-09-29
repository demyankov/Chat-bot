import { authUserAxiosInstance } from 'api';

import { endpoints } from './endpoints';

export interface UpdateSolutionData {
  isActive?: boolean;
  name?: string;
  description?: string;
  type?: string;
  priceMin?: number;
  eventPlan?: string;
}

export const updateSolutionData = (params: UpdateSolutionData, activeId: string): Promise<void> =>
  authUserAxiosInstance.patch(`${endpoints.solutions}/${activeId}`, params);
