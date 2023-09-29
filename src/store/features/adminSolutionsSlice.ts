import { createSlice } from '@reduxjs/toolkit';
import { SortType } from 'modules/Admin/config';
import { isAxiosError, isAxiosResponseError } from 'modules/Admin/types';
import { AdminSolutionsState } from 'store';

import { deleteAdminSolutionAction, setAdminSolutionsAction } from '../actions';

const initialState: AdminSolutionsState = {
  solutions: [],
  loadingState: 'idle',
  error: null,
  deleteSolutionErrorMessage: '',
  isLoaderVisible: true,
  loadingMessage: '',
  sortSolutionKey: '',
  activeItemId: '',
  isSearchButtonActive: true,
  sortSolutionDirection: SortType.ACSENDING,
};

const adminSolutionsSlice = createSlice({
  name: 'adminSolutions',
  initialState,
  reducers: {
    setSortSolutionsKey: (state, action) => {
      state.sortSolutionKey = action.payload;
    },
    setSortSolutionsDirection: (state, { payload }) => {
      state.sortSolutionDirection = payload;
    },
    setIsSearchButtonActive: (state, { payload }) => {
      state.isSearchButtonActive = payload;
    },
    setActiveItemId: (state, { payload }) => {
      state.activeItemId = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(setAdminSolutionsAction.pending, (state, action) => {
        state.loadingState = action.meta.requestStatus;
        state.isLoaderVisible = true;
        state.loadingMessage = '';
      })
      .addCase(setAdminSolutionsAction.fulfilled, (state, { payload, meta }) => {
        state.loadingState = meta.requestStatus;
        state.isLoaderVisible = false;
        state.solutions = payload;
        state.isSearchButtonActive = true;
        if (payload.length === 0) {
          state.loadingMessage = 'Решений не найдено';
        }
      })
      .addCase(setAdminSolutionsAction.rejected, (state, { error, meta }) => {
        state.loadingState = meta.requestStatus;
        state.isLoaderVisible = false;
        state.isSearchButtonActive = true;
        state.loadingMessage = 'Что-то пошло не так';
        state.error = error;
      })
      .addCase(deleteAdminSolutionAction.fulfilled, (state) => {
        state.deleteSolutionErrorMessage = '';
      })
      .addCase(deleteAdminSolutionAction.rejected, (state, { error: e }) => {
        if (isAxiosResponseError(e)) {
          const { error, message } = e.data;
          state.deleteSolutionErrorMessage = `Error: ${error || ''}, message: ${message || ''}`;
        } else if (isAxiosError(e)) {
          const { message } = e;
          state.deleteSolutionErrorMessage = `Message: ${message || ''}`;
        } else {
          state.deleteSolutionErrorMessage = 'Что-то пошло не так.';
        }
      });
  },
});

export const {
  reducer: adminSolutionsReducer,
  actions: { setSortSolutionsKey, setSortSolutionsDirection, setIsSearchButtonActive, setActiveItemId },
} = adminSolutionsSlice;
