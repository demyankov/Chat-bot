import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllFilters, getTopFilters } from 'api';

export const getAllFiltersAction = createAsyncThunk('filters/setAllFiltersAction', getAllFilters);

export const getTopFiltersAction = createAsyncThunk('filters/setTopFiltersAction', getTopFilters);
