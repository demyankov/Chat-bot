import { createSlice } from '@reduxjs/toolkit';

export enum LANGUAGES {
  RU = 'Русский',
  EN = 'English',
}

export interface ILang {
  value: LANGUAGES.RU | LANGUAGES.EN;
}

const initialState: ILang = {
  value: LANGUAGES.RU,
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const {
  reducer: languageReducer,
  actions: { changeLanguage },
} = languageSlice;
