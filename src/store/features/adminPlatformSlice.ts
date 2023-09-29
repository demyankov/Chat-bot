import { createSlice } from '@reduxjs/toolkit';
import { getMainOptionsAdminAction } from 'store/actions/platformMainOptions';

export interface IAdminPlatform {
  isModalOpen: boolean;
  isLoading: boolean;
  message: string;
  isActive: boolean;
}

const initialState: IAdminPlatform = {
  isModalOpen: false,
  isLoading: false,
  message: '',
  isActive: false,
};

const createPlatformSlice = createSlice({
  name: 'createPlatform',
  initialState,
  reducers: {
    toggleActivePlatform: (state) => {
      state.isActive = !state.isActive;
    },
    setIsPlafromActive: (state, { payload }) => {
      state.isActive = payload;
    },
    setIsModalOpen: (state, { payload }) => {
      state.isModalOpen = payload;
    },
    setMessage: (state, { payload }) => {
      state.message = payload;
    },
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMainOptionsAdminAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMainOptionsAdminAction.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getMainOptionsAdminAction.rejected, (state, { payload }) => {
        state.message = payload || '';
        state.isLoading = false;
        state.isModalOpen = true;
      });
  },
});

export const {
  reducer: adminPlatformReducer,
  actions: { toggleActivePlatform, setIsPlafromActive, setIsModalOpen, setMessage, setIsLoading },
} = createPlatformSlice;
