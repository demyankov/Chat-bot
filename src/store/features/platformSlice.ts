import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setPlatformDetailsAction, getPlatformFavoriteAction } from 'store/actions';

import { PlatformDetailsState, PlatformDetailsResponse } from 'store/types';

const initialState: PlatformDetailsState = {
  platform: {
    id: '123',
    name: 'Без имени',
    description: 'Описание',
    fileUrl: '',
    urlWebsite: '',
    isFavorites: false,
  },
  solutions: [],
  reviews: [],
  characteristics: [],
  loadingStatus: 'idle',
  isLoading: false,
  error: null,
  isFavoriteLoading: false,
};

const platformSlice = createSlice({
  name: 'platform',
  initialState,
  reducers: {
    setError: (state, { payload }) => {
      state.error = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(setPlatformDetailsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        setPlatformDetailsAction.fulfilled,
        (state, { payload }: PayloadAction<PlatformDetailsResponse | undefined>) => {
          if (payload) {
            state.platform = payload.platform;
            state.solutions = payload.solutions;
            state.reviews = payload.reviews;
            state.characteristics = payload.characteristics;
          }
          state.isLoading = false;
        },
      )
      .addCase(setPlatformDetailsAction.rejected, (state, { meta, payload }) => {
        state.loadingStatus = meta.requestStatus;
        state.isLoading = false;
        state.error = payload || null;
      })
      .addCase(getPlatformFavoriteAction.pending, (state) => {
        state.isFavoriteLoading = true;
      })
      .addCase(getPlatformFavoriteAction.fulfilled, (state, { payload }: PayloadAction<boolean>) => {
        state.platform.isFavorites = payload;
        state.isFavoriteLoading = false;
      })
      .addCase(getPlatformFavoriteAction.rejected, (state, { meta, payload }) => {
        state.loadingStatus = meta.requestStatus;
        state.error = payload || null;
        state.isFavoriteLoading = false;
      });
  },
});

export const {
  reducer: platformReducer,
  actions: { setError },
} = platformSlice;
