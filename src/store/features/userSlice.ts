import { createSlice } from '@reduxjs/toolkit';
import { LocalStorage, ROLES } from 'shared';
import { renameAction, signInAction } from 'store/actions';
import { IUser } from 'store/types';

const initialState: IUser = {
  id: null,
  email: null,
  password: null,
  name: null,
  fullname: null,
  telegram: null,
  phone: null,
  createAt: null,
  updateAt: null,
  role: null,
  isAuth: false,
  loadingState: 'idle',
  error: null,
  isShowFavoriteIcon: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.email = null;
      state.name = null;
      state.fullname = null;
      state.role = null;
      state.isAuth = false;
      state.isShowFavoriteIcon = false;
      localStorage.removeItem(LocalStorage.AccessToken);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signInAction.pending, (state, action) => {
        state.loadingState = action.meta.requestStatus;
        state.email = null;
        state.name = null;
        state.fullname = null;
        state.id = null;
        state.role = null;
        state.isAuth = false;
        state.error = null;
        state.createAt = null;
        state.updateAt = null;
      })
      .addCase(signInAction.fulfilled, (state, { payload, meta }) => {
        state.loadingState = meta.requestStatus;
        if (payload) {
          const { email, name, fullname, id, role, createAt, updateAt } = payload;
          state.email = email;
          state.name = name;
          state.fullname = fullname;
          state.id = id;
          if (role) {
            state.role = {
              id: role.id,
              role: role.role,
            };
          }
          state.createAt = createAt;
          state.updateAt = updateAt;
          state.isAuth = true;
          state.error = null;
          state.isShowFavoriteIcon = state.role?.role === ROLES.USER;
        }
      })
      .addCase(signInAction.rejected, (state, action) => {
        state.loadingState = action.meta.requestStatus;
        state.error = action.error;
      });
    builder
      .addCase(renameAction.pending, (state, action) => {
        state.loadingState = action.meta.requestStatus;
      })
      .addCase(renameAction.fulfilled, (state, { payload, meta }) => {
        state.loadingState = meta.requestStatus;
        state.fullname = payload.fullname;
        state.name = payload.name;
      })
      .addCase(renameAction.rejected, (state, { error, meta }) => {
        state.loadingState = meta.requestStatus;
        state.error = error;
      });
  },
});

export const {
  reducer: userReducer,
  actions: { logout },
} = userSlice;
