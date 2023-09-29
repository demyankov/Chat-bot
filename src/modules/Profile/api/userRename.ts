import { LocalStorage } from 'shared';

import { authAxiosInstance } from './authAxiosInstance';

interface UserData {
  name: string;
  fullname: string;
}

export const userRename = async (user: UserData, id: number | string | null) => {
  const apiPath = `/users/${id}/update/`;
  const accessToken = localStorage.getItem(LocalStorage.AccessToken);
  return accessToken && authAxiosInstance.patch(apiPath, user).then(({ data }) => data);
};
