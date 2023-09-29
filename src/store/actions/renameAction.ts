import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { userRename } from 'modules';
import { RootState } from 'store';

interface UserInfo {
  email: string;
  name: string;
  fullname: string;
  id: number;
  roles: [] | null;
}

interface UserData {
  name: string;
  fullname: string;
}

export const renameAction = createAsyncThunk<UserInfo, UserData, { rejectValue: string; state: RootState }>(
  'user/rename',
  async (data, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const { id } = state.user;
      return await userRename(data, id);
    } catch (error) {
      const axiosError = error as AxiosError;
      return rejectWithValue(axiosError.message);
    }
  },
);
