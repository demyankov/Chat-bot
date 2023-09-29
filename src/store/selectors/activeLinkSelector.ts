import { RootState } from 'store/types/types';

export const getActiveLink = (state: RootState) => state.activeLink.id;
