import { createSlice } from '@reduxjs/toolkit';

interface IModalProfileState {
  isOpen: boolean;
}

const initialState: IModalProfileState = {
  isOpen: false,
};

const modalProfileSlice = createSlice({
  name: 'modalProfile',
  initialState,
  reducers: {
    toggleOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
    setIsModalProfileOpen: (state, { payload }) => {
      state.isOpen = payload.isOpen;
    },
  },
});

export const {
  reducer: modalProfileReducer,
  actions: { toggleOpen, setIsModalProfileOpen },
} = modalProfileSlice;
