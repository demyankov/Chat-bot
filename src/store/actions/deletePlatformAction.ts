import { createAsyncThunk } from '@reduxjs/toolkit';
import { deletePlatform } from 'modules/Admin/api';

interface UserData {
  id: string;
}

export const deletePlatformAction = createAsyncThunk<void, UserData>('platforms/deletePlatformAction', async ({ id }) =>
  deletePlatform(id),
);
