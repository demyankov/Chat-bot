import { createAsyncThunk } from '@reduxjs/toolkit';
import { getFiltersForPlatformsAdmin } from 'modules/Admin/api/getFiltersForPlatformsAdmin';

import { AdminPlatformsFiltersResponse } from 'store/types';

export const setAdminPlatformsFiltersAction = createAsyncThunk<AdminPlatformsFiltersResponse[]>(
  'adminPlatformsFilters/setAdminPlatformsFiltersAction',
  () => getFiltersForPlatformsAdmin(),
);
