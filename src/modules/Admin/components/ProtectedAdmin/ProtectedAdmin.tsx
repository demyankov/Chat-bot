import { Navigate, Outlet } from 'react-router-dom';

import { IUser } from 'store/types';

import { ROUTE } from 'router';

interface IProps {
  redirectPage?: string;
  user?: IUser;
}

export const ProtectedAdmin = ({ redirectPage = ROUTE.SIGN_IN, user }: IProps) => {
  if (user?.isAuth && user?.role?.role === 'SuperAdmin') {
    return <Outlet />;
  }

  return <Navigate to={redirectPage} replace />;
};
