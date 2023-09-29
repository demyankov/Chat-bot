import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAdminSolutions } from 'modules/Admin/api/getAdminSolutions';
import { SortingType } from 'modules/Admin/types';
import { SolutionCard } from 'store/types';

interface UserData {
  type: SortingType;
  name?: string;
}

export const setAdminSolutionsAction = createAsyncThunk<SolutionCard[], UserData>(
  'adminSolutions/setAdminSolutionsAction',
  async ({ type, name }) => getAdminSolutions(name, type),
);
