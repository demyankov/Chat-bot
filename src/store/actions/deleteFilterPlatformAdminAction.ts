import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteFilterAdmin } from 'modules/Admin/api/deleteFilterAdmin';

import { setAdminPlatformsFiltersAction } from './setAdminPlatformsFiltersAction';

interface UserData {
  id: string;
}

export const deleteFilterPlatformAdminAction = createAsyncThunk<void, UserData>(
  'platforms/deleteFilterPlatformAdminAction',
  async ({ id }, { dispatch }) => {
    await deleteFilterAdmin(id);
    dispatch(setAdminPlatformsFiltersAction());
  },
);
