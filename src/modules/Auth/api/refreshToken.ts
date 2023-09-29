import axios from 'axios';
import { LocalStorage } from 'shared';

import { endpoints } from './endpoints';

export const refreshToken = async (): Promise<void> => {
  await axios.get(endpoints.refreshToken).then(({ data }) => {
    localStorage.setItem(LocalStorage.AccessToken, data);
  });
};
