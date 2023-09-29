import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteSolution } from 'modules/Admin/api';
import { store } from 'store/store';

import { setAdminSolutionsAction } from './setAdminSolutionsAction';

export const deleteAdminSolutionAction = createAsyncThunk<void, string>(
  'adminSolutions/deleteSolutionAction',
  async (id, { dispatch }) => {
    await deleteSolution(id);
    const name = store.getState().adminSolutions.sortSolutionKey;
    const type = store.getState().adminSolutions.sortSolutionDirection;
    dispatch(setAdminSolutionsAction({ name, type }));
  },
);
