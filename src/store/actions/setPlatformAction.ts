import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPlatformDetails, addPlatformInViewed } from 'api';
import { AxiosError } from 'axios';
import { PlatformDetailsResponse } from 'store/types';

interface SetPlatformDetailsActionProps {
  id?: string;
  platformId: string;
}

interface GetPlatformFavoriteProps {
  platformId: string;
}

export const setPlatformDetailsAction = createAsyncThunk<
  PlatformDetailsResponse,
  SetPlatformDetailsActionProps,
  { rejectValue: string }
>('platform/setPlatformDetailsAction', async ({ id, platformId }, { rejectWithValue }) => {
  try {
    const platformDetails = await getPlatformDetails(platformId);
    if (id) {
      addPlatformInViewed(id, platformId);
    }
    return platformDetails;
  } catch (e) {
    const error = e as AxiosError;
    return rejectWithValue(error.message);
  }
});

export const getPlatformFavoriteAction = createAsyncThunk<boolean, GetPlatformFavoriteProps, { rejectValue: string }>(
  'platform/getPlatformFavoriteAction',
  async ({ platformId }, { rejectWithValue }) => {
    try {
      const platformDetails = await getPlatformDetails(platformId);
      const { isFavorites } = platformDetails.platform;
      return isFavorites;
    } catch (e) {
      const error = e as AxiosError;
      return rejectWithValue(error.message);
    }
  },
);
