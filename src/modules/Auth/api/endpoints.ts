import { baseURL } from 'shared';

export const endpoints = {
  signIn: 'auth/login',
  signUp: `${baseURL}/auth/registration`,
  refreshToken: `${baseURL}/auth/refresh`,
  sendEmail: `${baseURL}/email/refresh-password-request`,
  resetPassword: `${baseURL}/email/refresh-password-answer-code`,
  modalData: `${baseURL}/platforms`,
};
