import axios from 'axios';

import { endpoints } from './endpoints';

import { SendEmailRequestType } from '../types/sendEmailType';

export const sendEmail = (querryParams: SendEmailRequestType): Promise<void> =>
  axios.post(endpoints.sendEmail, querryParams);
