import { LocalStorage } from 'shared';

import { authAxiosInstance } from './authAxiosInstance';

import { endpoints } from './endpoints';

interface QuerryParamsType {
  email: string;
  password: string;
}

export const getToken = async (querryParams: QuerryParamsType): Promise<string> => {
  const params = {
    email: querryParams.email.trim(),
    password: querryParams.password.trim(),
  };

  const token: string = await authAxiosInstance.post(endpoints.signIn, params).then(({ data: { value } }) => value);
  localStorage.setItem(LocalStorage.AccessToken, token);

  return token;
};
