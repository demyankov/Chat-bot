import { createSlice } from '@reduxjs/toolkit';
import { isAxiosResponseError } from 'modules/Admin/types';
import { isAxiosError } from 'axios';

import { AdminPlatformsFiltersSlice } from '../types';
import { deleteFilterPlatformAdminAction, setAdminPlatformsFiltersAction } from '../actions';

const initialState: AdminPlatformsFiltersSlice = {
  filters: [
    {
      id: '',
      filterGroupName: '',
      filtersForPlatforms: [],
    },
  ],
  loadingState: 'idle',
  error: null,
  isLoaderVisible: true,
  loadingMessage: '',
  deleteFilterMessage: '',
  isDeleteFormOpen: false,
};

const adminPlatformsFiltersSlice = createSlice({
  name: 'adminPlatformsFilters',
  initialState,
  reducers: {
    setDeleteFormOpen: (state, { payload }) => {
      state.isDeleteFormOpen = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(setAdminPlatformsFiltersAction.pending, (state, action) => {
        state.loadingState = action.meta.requestStatus;
        if (state.filters.length === 0) {
          state.isLoaderVisible = true;
        }
        state.loadingMessage = '';
      })
      .addCase(setAdminPlatformsFiltersAction.fulfilled, (state, { payload, meta }) => {
        state.loadingState = meta.requestStatus;
        state.isLoaderVisible = false;
        state.filters = payload;
        if (payload.length === 0) {
          state.loadingMessage = 'Фильтры не найдены';
        }
      })
      .addCase(setAdminPlatformsFiltersAction.rejected, (state, { error, meta }) => {
        state.loadingState = meta.requestStatus;
        state.isLoaderVisible = false;
        state.loadingMessage = 'Что-то пошло не так. Ошибка запроса';
        state.error = error;
      })
      .addCase(deleteFilterPlatformAdminAction.fulfilled, (state) => {
        state.isDeleteFormOpen = false;
      })
      .addCase(deleteFilterPlatformAdminAction.rejected, (state, { error: e }) => {
        state.isDeleteFormOpen = true;
        if (isAxiosResponseError(e)) {
          const { error, message } = e.data;
          state.deleteFilterMessage = `Error: ${error || ''}, message: ${message || ''}`;
        } else if (isAxiosError(e)) {
          const { message } = e;
          state.deleteFilterMessage = `Message: ${message || ''}`;
        } else {
          state.deleteFilterMessage = 'Что-то пошло не так. Ошибка запроса.';
        }
      });
  },
});

export const {
  reducer: adminPlatformsFiltersReducer,
  actions: { setDeleteFormOpen },
} = adminPlatformsFiltersSlice;
