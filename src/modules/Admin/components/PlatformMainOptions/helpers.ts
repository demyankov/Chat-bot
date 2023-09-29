import { ActionCreatorWithPayload, unwrapResult } from '@reduxjs/toolkit';
import { getMainOptionsAdminAction } from 'store/actions/platformMainOptions';
import { MainOptionsFormFiels, MainOptionsRequest, isAxiosResponseError } from 'modules/Admin/types/platformsTypes';
import { Dispatch } from 'react';
import { AppDispatch } from 'store';
import { isAxiosError } from 'axios';

export const convertToCreatePlatformDTO = (
  formData: MainOptionsFormFiels,
  isActive: boolean = true,
): MainOptionsRequest => {
  const { urlWebsite, priceMin, priceMax, file = null, ...restFields } = formData;
  return {
    file,
    isActive,
    urlWebsite,
    priceMin: Number(priceMin),
    priceMax: Number(priceMax),
    ...restFields,
  };
};

const initialMainInfo = {
  name: '',
  description: '',
  urlWebsite: '',
  priceMin: 0,
  priceMax: 0,
  file: null,
};

export const initFormValues =
  (
    dispatch: AppDispatch,
    setPlatformStatus: ActionCreatorWithPayload<boolean>,
    setImageLink: Dispatch<React.SetStateAction<string>>,
    platformId?: string,
  ) =>
  async (): Promise<MainOptionsFormFiels> => {
    try {
      if (platformId) {
        const optionsResponse = await dispatch(getMainOptionsAdminAction(platformId));
        const mainOptions = unwrapResult(optionsResponse);
        const { isActive, id, ...options } = mainOptions;
        const { fileUrl } = options;
        dispatch(setPlatformStatus(isActive));
        if (typeof fileUrl === 'string') {
          const imageLink = `http://${fileUrl}`;
          setImageLink(imageLink);
        }
        const convertedOptions: MainOptionsFormFiels = {
          ...options,
          file: null,
        };
        delete convertedOptions.fileUrl;
        return convertedOptions;
      }
      return initialMainInfo;
    } catch {
      return initialMainInfo;
    }
  };

export const getErrorMessage = (err: unknown) => {
  let message = 'Что-то пошло не так...';
  if (isAxiosResponseError(err)) {
    const { error, message: errorMessage } = err.data;
    message = `Error: ${error || ''}, message: ${errorMessage || ''}`;
  } else if (isAxiosError(err)) {
    const { message: errorMessage } = err;
    message = `Message: ${errorMessage || ''}`;
  }
  return message;
};
