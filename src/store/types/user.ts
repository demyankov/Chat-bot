import { SerializedError } from '@reduxjs/toolkit';

type Role = 'User' | 'SuperAdmin' | 'Admin';

interface IRole {
  id: string;
  role: Role;
}

export interface IUser {
  id: string | null;
  email: string | null;
  password: string | null;
  name: string | null;
  fullname: string | null;
  telegram: string | null;
  phone: string | null;
  createAt: string | null;
  updateAt: string | null;
  role: IRole | null;
  isAuth: boolean;
  loadingState: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: SerializedError | null;
  isShowFavoriteIcon: boolean;
}
