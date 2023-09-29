import { createSlice } from '@reduxjs/toolkit';
import { SortType } from 'modules/Admin/config';
import { AdminPlatformsState } from 'store';

import { setAdminPlatformsAction } from '../actions';

const initialState: AdminPlatformsState = {
  platforms: [],
  loadingState: 'idle',
  error: null,
  isLoaderVisible: true,
  loadingMessage: '',
  isKeyButtonActive: true,
  sortKey: '',
  sortDirection: SortType.ACSENDING,
};

const adminPlatformsSlice = createSlice({
  name: 'adminPlatforms',
  initialState,
  reducers: {
    setSortKey: (state, action) => {
      state.sortKey = action.payload;
    },
    setSortDirection: (state, { payload }) => {
      state.sortDirection = payload;
    },
    setIsKeyButtonActive: (state, { payload }) => {
      state.isKeyButtonActive = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(setAdminPlatformsAction.pending, (state, action) => {
        state.loadingState = action.meta.requestStatus;
        state.isLoaderVisible = true;
        state.loadingMessage = '';
      })
      .addCase(setAdminPlatformsAction.fulfilled, (state, { payload, meta }) => {
        state.loadingState = meta.requestStatus;
        state.isLoaderVisible = false;
        state.isKeyButtonActive = true;
        state.platforms = payload;
        if (payload.length === 0) {
          state.loadingMessage = 'No search results';
        }
      })
      .addCase(setAdminPlatformsAction.rejected, (state, { error, meta }) => {
        state.loadingState = meta.requestStatus;
        state.isLoaderVisible = false;
        state.isKeyButtonActive = true;
        state.loadingMessage = 'Something went wrong';
        state.error = error;
      });
  },
});

export const {
  reducer: adminPlatformsReducer,
  actions: { setSortKey, setSortDirection, setIsKeyButtonActive },
} = adminPlatformsSlice;
