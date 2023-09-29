import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getAllFiltersAction, getTopFiltersAction } from '../actions/filters';

import type { FilterGroup, Filters } from '../types';

interface IFilterSlice {
  activeFilters: [];
  allFilters: FilterGroup[];
  formState: Record<string, string | boolean>;
  topPriorityFilters: Filters[];
  isAllFiltersLoading: boolean;
  isAllFiltersError: boolean;
  isTopFiltersLoading: boolean;
  isTopFiltersError: boolean;
}

const initialState: IFilterSlice = {
  activeFilters: [],
  topPriorityFilters: [],
  allFilters: [],
  formState: {},
  isAllFiltersLoading: false,
  isAllFiltersError: false,
  isTopFiltersLoading: false,
  isTopFiltersError: false,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateFormState: (state, action: PayloadAction<Record<string, string | boolean>>) => {
      state.formState = {
        ...state.formState,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllFiltersAction.pending, (state) => {
      state.isAllFiltersLoading = true;
    });
    builder.addCase(getAllFiltersAction.fulfilled, (state, action) => {
      state.isAllFiltersLoading = false;
      state.allFilters = action.payload;
    });
    builder.addCase(getAllFiltersAction.rejected, (state) => {
      state.isAllFiltersLoading = false;
      state.isAllFiltersError = true;
    });
    builder.addCase(getTopFiltersAction.pending, (state) => {
      state.isTopFiltersLoading = true;
    });
    builder.addCase(getTopFiltersAction.fulfilled, (state, action) => {
      state.isTopFiltersLoading = false;
      state.topPriorityFilters = action.payload;
    });
    builder.addCase(getTopFiltersAction.rejected, (state) => {
      state.isTopFiltersLoading = false;
      state.isTopFiltersError = true;
    });
  },
});

export const {
  reducer: filtersReducer,
  actions: { updateFormState },
} = filtersSlice;
