import { createSlice } from '@reduxjs/toolkit';
import { NAVID } from 'modules/Admin/config/navId';

export interface IActiveLink {
  id: string;
}

const initialState: IActiveLink = {
  id: NAVID.DEFAULT,
};

const activeLinkSlice = createSlice({
  name: 'activeLink',
  initialState,
  reducers: {
    changeActiveLink: (state, { payload }) => {
      state.id = payload;
    },
    deleteActiveLink: (state) => {
      state.id = '';
    },
  },
});

export const {
  reducer: activeLinkReducer,
  actions: { changeActiveLink, deleteActiveLink },
} = activeLinkSlice;
