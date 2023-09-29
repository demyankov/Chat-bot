import axios from 'axios';

import { endpoints } from './endpoints';

import { ResetPasswordRequestType } from '../types/resetPasswordType';

export const resetPassword = (querryParams: ResetPasswordRequestType): Promise<void> =>
  axios.post(endpoints.resetPassword, querryParams);
