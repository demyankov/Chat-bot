import { createAsyncThunk } from '@reduxjs/toolkit';
import { getViewedSolutions } from 'modules/Admin/api';

export const setViewedSolutionsAction = createAsyncThunk<Awaited<ReturnType<typeof getViewedSolutions>>>(
  'solutions/setViewedSolutionsAction',
  getViewedSolutions,
);
