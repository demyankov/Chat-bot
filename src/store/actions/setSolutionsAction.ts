import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSolutionCards } from 'api';
import { SortType } from 'modules/Admin/config';
import { GetSolutionsResponse } from 'store/types';

interface UserData {
  amount: string;
  count?: string;
  type: `${SortType}`;
  idFilterItems: string[];
}

export const setSolutionsAction = createAsyncThunk<GetSolutionsResponse, UserData>(
  'solutions/setSolutionsAction',
  getSolutionCards,
);
