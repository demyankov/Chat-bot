import { SerializedError } from '@reduxjs/toolkit';
import { isAxiosError } from 'modules/Admin/types';

export const errorHandler = (e: SerializedError, errorMessage: string = 'Что-то пошло не так.') => {
  if (isAxiosError(e)) {
    const { message } = e;
    return `Message: ${message || ''}`;
  }

  return errorMessage;
};
