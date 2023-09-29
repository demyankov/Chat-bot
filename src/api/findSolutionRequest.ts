import { endpoints } from 'api/endpoints';
import { AxiosResponse } from 'axios';
import { authAxiosInstance } from 'modules/Profile/api/authAxiosInstance';

export interface UserModalDataType {
  name: string;
  email: string;
  phone: string;
  message: string;
  isBuying: boolean;
}

export const findSolutionRequest = async (data: UserModalDataType): Promise<AxiosResponse> => {
  const body = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    comment: data.message.trim() || '',
    isBuying: false,
  };

  return authAxiosInstance.post(endpoints.orders, body);
};
