import { createSlice } from '@reduxjs/toolkit';
import { errorHandler } from 'helpers/errorHandler';
import { setSolutionsFiltersAction } from 'store/actions';
import { deleteSolutionsFilterAction } from 'store/actions/deleteSolutionsFilterAction';

import type { SolutionFilter } from '../types';

interface ISolutionsFiltersSlice {
  activeFilters: [];
  solutionsFilters: SolutionFilter[];
  topPriorityFilters: SolutionFilter[];
  isShowSolutionsFiltersLoader: boolean;
  isDeleteModalOpen: boolean;
  solutionsFiltersMessage: string;
  deleteSolutionsFilterMessage: string;
}

const initialState: ISolutionsFiltersSlice = {
  activeFilters: [],
  topPriorityFilters: [],
  solutionsFilters: [],
  isShowSolutionsFiltersLoader: false,
  isDeleteModalOpen: false,
  solutionsFiltersMessage: '',
  deleteSolutionsFilterMessage: '',
};

const solutionsFiltersSlice = createSlice({
  name: 'solutionsFilters',
  initialState,
  reducers: {
    setIsDeleteModalOpen: (state, { payload }) => {
      state.isDeleteModalOpen = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setSolutionsFiltersAction.pending, (state) => {
        if (!state.solutionsFilters.length) {
          state.isShowSolutionsFiltersLoader = true;
        }
        state.solutionsFiltersMessage = '';
      })
      .addCase(setSolutionsFiltersAction.fulfilled, (state, { payload }) => {
        const filters = payload || [];

        state.isShowSolutionsFiltersLoader = false;
        state.solutionsFilters = filters;

        if (!state.solutionsFilters.length) {
          state.solutionsFiltersMessage = 'Для данного раздела фильтры отсутствуют';

          return;
        }
        state.solutionsFiltersMessage = '';
      })
      .addCase(setSolutionsFiltersAction.rejected, (state, { error }) => {
        state.isShowSolutionsFiltersLoader = false;
        state.solutionsFiltersMessage = errorHandler(error, 'Ошибка получения фильтров');
      })
      .addCase(deleteSolutionsFilterAction.fulfilled, (state) => {
        state.isDeleteModalOpen = false;
        state.deleteSolutionsFilterMessage = '';
      })
      .addCase(deleteSolutionsFilterAction.rejected, (state, { error }) => {
        state.deleteSolutionsFilterMessage = errorHandler(error, 'Ошибка удаления фильтра');
      });
  },
});

export const {
  reducer: solutionsFiltersReducer,
  actions: { setIsDeleteModalOpen },
} = solutionsFiltersSlice;
