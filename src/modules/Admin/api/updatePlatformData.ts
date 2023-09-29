import { authUserAxiosInstance } from 'api';

import { endpoints } from './endpoints';

import { FilterItemsRequest, FilterItemsResponse } from '../types';

export interface UpdatePlatformRequest {
  isActive?: boolean;
  name?: string;
  description?: string;
  urlWebsite?: string;
  priceMin?: number;
  priceMax?: number;
  file?: File;
}

export interface UpdatePlatformDataProps {
  params: UpdatePlatformRequest;
  platformId: string;
}

export const updatePlatformData = (params: UpdatePlatformRequest, activeId: string): Promise<void> =>
  authUserAxiosInstance.patch(`${endpoints.platforms}/${activeId}`, params, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

export const updatePlatformFilters = (params: FilterItemsRequest, platformId: string): Promise<FilterItemsResponse> =>
  authUserAxiosInstance.put(`${endpoints.platforms}/${platformId}/filters`, params);
