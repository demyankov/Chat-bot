import { RouterProvider } from 'react-router';
import { router } from 'router';
import { getUser, signInAction, useAppDispatch, useAppSelector } from 'store';
import { Global } from '@emotion/react';
import { getGlobalStyles } from 'styles/globalStyles';
import { useEffect } from 'react';

export const App = () => {
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(signInAction());
  }, [dispatch]);

  const isReady = user.loadingState === 'rejected' || user.loadingState === 'fulfilled';

  return (
    <>
      <Global styles={getGlobalStyles()} />
      {isReady && <RouterProvider router={router(user || null)} />}
    </>
  );
};
