import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteSolutionsFilter } from 'modules/Admin/api';

import { setSolutionsFiltersAction } from './setSolutionsFiltersAction';

interface UserData {
  id: string;
}

export const deleteSolutionsFilterAction = createAsyncThunk<void, UserData>(
  'solutions/deleteSolutionsFilterAction',
  async ({ id }, { dispatch }) => {
    await deleteSolutionsFilter(id);
    dispatch(setSolutionsFiltersAction());
  },
);
