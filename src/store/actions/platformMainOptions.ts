import { createAsyncThunk } from '@reduxjs/toolkit';

import { authUserAxiosInstance } from 'api';

import { authAxiosInstance } from 'modules/Profile/api/authAxiosInstance';

import { AxiosError } from 'axios';

import { endpoints } from '../../modules/Admin/api/endpoints';

import { MainOptionsRequest, MainOptionsResponse } from '../../modules/Admin/types';

export const getPlatformMainOptions = (platformId: string): Promise<MainOptionsResponse> =>
  authUserAxiosInstance.get(`${endpoints.platforms}/${platformId}/main-options`).then(({ data }) => data);

export const getMainOptionsAdminAction = createAsyncThunk<MainOptionsResponse, string, { rejectValue: string }>(
  'createPlatform/getMainOptions',
  async (platfromId: string, { rejectWithValue }) => {
    try {
      const response = await getPlatformMainOptions(platfromId);
      return response;
    } catch (e: unknown) {
      const axiosError = e as AxiosError;
      return rejectWithValue(axiosError.message);
    }
  },
);

export const editPlatformMainOptions = (
  platformId: string,
  mainOptions: MainOptionsRequest,
): Promise<MainOptionsResponse> => authAxiosInstance.patchForm(`${endpoints.platforms}/${platformId}`, mainOptions);
