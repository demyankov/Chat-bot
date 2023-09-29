import { createSlice } from '@reduxjs/toolkit';
import { toggle } from 'helpers/toggle';
import { SortType } from 'modules/Admin/config/sort';
import { setPlatformsAction, setViewedPlatformsAction } from 'store/actions';
import { PlatformsState } from 'store/types';

const initialState: PlatformsState = {
  platforms: {
    numberOfPages: '1',
    rows: [],
    countRows: 0,
    pageNumber: 0,
  },
  favoritePlatforms: [],
  viewedPlatforms: [],
  platformsForDeletingFromViewed: [],
  isSelectMode: false,
  loadingState: 'idle',
  loadingMessage: '',
  error: null,
  isLoaderVisible: true,
  sortKey: 'name',
  sortDirection: SortType.ACSENDING,
};

const platformsSlice = createSlice({
  name: 'platforms',
  initialState,
  reducers: {
    setSortKey: (state, action) => {
      state.sortKey = action.payload;
    },
    setSortDirection: (state, action) => {
      state.sortDirection = action.payload;
    },
    setLoadingMessage: (state, { payload }) => {
      state.loadingMessage = payload;
    },
    togglePlatformForDeletingFromViewed: (state, { payload: platformId }) => {
      state.platformsForDeletingFromViewed = toggle(state.platformsForDeletingFromViewed, platformId);
    },
    toggleSelectMode: (state) => {
      state.isSelectMode = !state.isSelectMode;
    },
    clearPlatformsForDeletingFromViewed: (state) => {
      state.isSelectMode = false;
      state.platformsForDeletingFromViewed = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(setPlatformsAction.pending, (state, action) => {
        state.loadingState = action.meta.requestStatus;
        state.isLoaderVisible = true;
        state.loadingMessage = '';
      })
      .addCase(setPlatformsAction.fulfilled, (state, { payload, meta }) => {
        state.loadingState = meta.requestStatus;
        state.isLoaderVisible = false;
        state.platforms.numberOfPages = payload.numberOfPages;
        state.platforms.rows = payload.rows;
        state.platforms.countRows = payload.countRows;
        if (payload.rows.length === 0) {
          state.loadingMessage = 'Нет платформ';
        }
      })
      .addCase(setPlatformsAction.rejected, (state, { error, meta }) => {
        state.loadingState = meta.requestStatus;
        state.error = error;
        state.isLoaderVisible = false;
        state.loadingMessage = 'Ошибка запроса';
      })
      .addCase(setViewedPlatformsAction.pending, (state, action) => {
        state.loadingState = action.meta.requestStatus;
        state.isLoaderVisible = true;
        state.loadingMessage = '';
      })
      .addCase(setViewedPlatformsAction.fulfilled, (state, { payload, meta }) => {
        state.loadingState = meta.requestStatus;
        state.isLoaderVisible = false;
        state.viewedPlatforms = payload.platformsViewed;
        if (payload.platformsViewed.length === 0) {
          state.loadingMessage = 'Пусто';
        }
      })
      .addCase(setViewedPlatformsAction.rejected, (state, { error, meta }) => {
        state.loadingState = meta.requestStatus;
        state.error = error;
        state.loadingMessage = error.message || 'Ошибка запроса';
        state.isLoaderVisible = false;
      });
  },
});

export const {
  reducer: platformsReducer,
  actions: {
    setLoadingMessage,
    togglePlatformForDeletingFromViewed,
    toggleSelectMode,
    clearPlatformsForDeletingFromViewed,
  },
} = platformsSlice;
