import { RootState } from 'store/types/types';

export const getUser = (state: RootState) => state.user;

export const getRole = (state: RootState) => state.user.role?.role;
