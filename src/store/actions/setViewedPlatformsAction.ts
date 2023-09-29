import { createAsyncThunk } from '@reduxjs/toolkit';
import { getViewedPlatforms } from 'modules/Admin/api';

export const setViewedPlatformsAction = createAsyncThunk<Awaited<ReturnType<typeof getViewedPlatforms>>>(
  'platforms/setViewedPlatformsAction',
  () => getViewedPlatforms(),
);
