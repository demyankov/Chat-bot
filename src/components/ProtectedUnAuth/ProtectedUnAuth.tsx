import { Navigate, Outlet } from 'react-router';
import { ROUTE } from 'router';

import { IUser } from 'store/types';

interface IProps {
  redirectPage?: string;
  user: IUser;
}

export const ProtectedUnAuth = ({ redirectPage = ROUTE.HOME, user }: IProps) => {
  if (user.isAuth) {
    return <Navigate to={redirectPage} replace />;
  }

  return <Outlet />;
};
