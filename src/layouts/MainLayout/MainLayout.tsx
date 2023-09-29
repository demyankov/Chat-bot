import { Outlet } from 'react-router-dom';

import { Footer, Header } from 'components';

import styles from './styles.module.scss';

export const MainLayout = () => (
  <div className={styles.main}>
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
    <Footer />
  </div>
);
