import { NavLink } from 'react-router-dom';

import { ExitProfileIcon } from 'assets';
import { logout, useAppDispatch } from 'store';

import styles from './styles.module.scss';

import { INavBar } from '../../ProfileLayout/config/routes';

export const NavBar = ({ routes }: { routes: INavBar[] }) => {
  const dispatch = useAppDispatch();
  const onLogout = () => dispatch(logout());
  return (
    <nav className={styles.nav}>
      {routes.map(({ to, icon: Icon, text }) => (
        <NavLink to={to} className={styles.link} key={text}>
          <Icon width="24" height="24" />
          {text}
        </NavLink>
      ))}
      <button className={styles.link} type="button" onClick={onLogout}>
        <ExitProfileIcon width="24" height="24" />
        Выйти
      </button>
    </nav>
  );
};
