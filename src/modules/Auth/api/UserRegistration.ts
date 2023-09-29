import axios, { AxiosResponse } from 'axios';

import { endpoints } from './endpoints';

export interface UserRegistrationType {
  email: string;
  name: string;
  fullname: string;
  password: string;
}

export const userRegistration = async (querryParams: UserRegistrationType): Promise<AxiosResponse> => {
  const params = {
    email: querryParams.email.trim(),
    name: querryParams.name.trim(),
    fullname: querryParams.fullname.trim(),
    password: querryParams.password.trim(),
  };
  return axios.post(endpoints.signUp, params);
};
