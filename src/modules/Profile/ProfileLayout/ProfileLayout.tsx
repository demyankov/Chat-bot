import { Outlet } from 'react-router-dom';

import { routes } from './config/routes';
import styles from './styles.module.scss';

import { NavBar } from '../components';

export const ProfileLayout = () => (
  <div className={styles.wrapper}>
    <h3 className={styles.title}>Личный кабинет</h3>

    <div className={styles.content}>
      <NavBar routes={routes} />
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  </div>
);
