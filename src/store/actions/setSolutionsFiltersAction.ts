import { createAsyncThunk } from '@reduxjs/toolkit';
import { getFiltersForSolutions } from 'modules/Admin/api';
import { SolutionFilter } from 'store';

export const setSolutionsFiltersAction = createAsyncThunk<SolutionFilter[]>(
  'filters/solutionsFilters',
  getFiltersForSolutions,
);
