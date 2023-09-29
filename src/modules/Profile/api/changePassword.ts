import { authAxiosInstance } from './authAxiosInstance';

const apiPath = `/users/refresh-password/`;

interface ChangePasswordType {
  newPassword?: string;
}
interface ChangePasswordResponseType {
  message: string;
}

export const changePassword = async (querryParams: ChangePasswordType): Promise<ChangePasswordResponseType> =>
  authAxiosInstance.post(apiPath, querryParams);
