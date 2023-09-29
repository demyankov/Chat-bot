import { Tab } from 'modules/Profile/components/Tab/tab';
import { Outlet } from 'react-router-dom';
import { ROUTE } from 'router';

import styles from './styles.module.scss';

export const ProfileFavoriteLayout = () => (
  <div className={styles.wrapper}>
    <nav className={styles.tabsWrapper}>
      <Tab text="Платформы" url={ROUTE.PROFILE_FAVORITES_PLATFORMS} />
      <Tab text="Решения" url={ROUTE.PROFILE_FAVORITES_SOLUTIONS} />
    </nav>
    <Outlet />
  </div>
);
