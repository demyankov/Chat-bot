import { RootState } from 'store/types/types';

export const getCurrentLanguage = (state: RootState) => state.language.value;
