import axios from 'axios';

import { baseURL, LocalStorage } from 'shared';

export const authUserAxiosInstance = axios.create({ baseURL });

authUserAxiosInstance.interceptors.request.use((requestConfigArgs) => {
  const requestConfig = requestConfigArgs;
  const accessToken = localStorage.getItem(LocalStorage.AccessToken);
  requestConfig.headers = requestConfig.headers || {};

  if (accessToken) {
    requestConfig.headers.Authorization = `Bearer ${accessToken}`;
  }
  return requestConfig;
});
