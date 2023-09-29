import { createAsyncThunk } from '@reduxjs/toolkit';
import { getFilterForSolutions } from 'modules/Admin/api';

import { SolutionFilter } from 'store';

export const setSolutionsFilterByIdAction = createAsyncThunk<SolutionFilter, string>(
  'filters/setSolutionsFilterById',
  (filterId) => getFilterForSolutions(filterId),
);
