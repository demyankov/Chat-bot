import { createAsyncThunk } from '@reduxjs/toolkit';
import { userSignIn } from 'modules/Auth';

export const signInAction = createAsyncThunk<Awaited<ReturnType<typeof userSignIn>>>('user/signInAction', () =>
  userSignIn(),
);
