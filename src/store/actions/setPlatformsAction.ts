import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPlatformCards } from 'api';
import { GetPlatformsResponse } from 'store/types';

interface UserData {
  amount: string;
  count?: string;
  type: 'asc' | 'desc';
  idFilterItems: string[];
}

export const setPlatformsAction = createAsyncThunk<GetPlatformsResponse, UserData>(
  'platforms/setPlatformsAction',
  getPlatformCards,
);
