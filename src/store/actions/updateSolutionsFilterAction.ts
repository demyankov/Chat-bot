import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSolutionsFilter, updateSolutionsFilter } from 'modules/Admin/api';

import { SolutionFilter } from 'store';

export const updateSolutionsFilterAction = createAsyncThunk<void, SolutionFilter>(
  'filters/solutionsFilters',
  async (filter) => {
    if (filter.id) {
      await updateSolutionsFilter(filter);
      return;
    }
    createSolutionsFilter(filter);
  },
);
