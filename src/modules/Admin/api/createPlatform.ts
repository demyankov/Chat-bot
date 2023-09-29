import { endpoints } from './endpoints';

import { MainOptionsRequest } from '../types/platformsTypes';

import { authAxiosInstance } from '../../Auth/api/authAxiosInstance';

interface CreatePlatformResponse {
  id: string;
  url: string;
}

export const createPlatform = (newPlatform: MainOptionsRequest): Promise<CreatePlatformResponse> =>
  authAxiosInstance.postForm(endpoints.createPlatform, newPlatform).then(({ data }) => data);
