import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAdminPlatformsRequest } from 'modules/Admin/api/getAdminPlatforms';
import { SortingType } from 'modules/Admin/types';

import { PlatfromCard } from 'store/types';

interface UserData {
  type: SortingType;
  name?: string;
}

export const setAdminPlatformsAction = createAsyncThunk<PlatfromCard[], UserData>(
  'adminPlatforms/setAdminPlatformsAction',
  async ({ type, name }) => getAdminPlatformsRequest(name, type),
);
