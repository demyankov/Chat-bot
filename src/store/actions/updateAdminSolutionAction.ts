import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateSolutionData, UpdateSolutionData } from 'modules/Admin/api';
import { store } from 'store/store';

import { setAdminSolutionsAction } from './setAdminSolutionsAction';

export interface UpdateSolutionDataProps {
  data: UpdateSolutionData;
  activeSolutionId: string;
}

export const updateAdminSolutionAction = createAsyncThunk<void, UpdateSolutionDataProps>(
  'adminSolutions/updateSolutionAction',
  async ({ data, activeSolutionId }, { dispatch }) => {
    await updateSolutionData(data, activeSolutionId);

    const name = store.getState().adminSolutions.sortSolutionKey;
    const type = store.getState().adminSolutions.sortSolutionDirection;
    dispatch(setAdminSolutionsAction({ name, type }));
  },
);
