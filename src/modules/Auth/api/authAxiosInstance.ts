import axios, { AxiosError } from 'axios';

import { baseURL, LocalStorage } from 'shared';

import { refreshToken } from './refreshToken';

export const authAxiosInstance = axios.create({ baseURL });

authAxiosInstance.interceptors.request.use((requestConfigArgs) => {
  const requestConfig = requestConfigArgs;
  const accessToken = localStorage.getItem(LocalStorage.AccessToken);
  requestConfig.headers = requestConfig.headers || {};

  if (accessToken) {
    requestConfig.headers.Authorization = `Bearer ${accessToken}`;
  }
  return requestConfig;
});

let refreshQuerryCount = 0;

authAxiosInstance.interceptors.response.use(undefined, async (error: AxiosError) => {
  if (error.response) {
    const { status, config } = error.response;
    const accessToken = localStorage.getItem(LocalStorage.AccessToken);

    if (status === 401 && accessToken && refreshQuerryCount < 2) {
      await refreshToken();
      refreshQuerryCount += 1;
      return authAxiosInstance(config);
    }

    return Promise.reject(error.response);
  }
  if (error.request) {
    return Promise.reject(error.request);
  }

  return Promise.reject(error);
});
