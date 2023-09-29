import { Tabs } from 'modules/Admin/components';
import { Outlet } from 'react-router';

import { adminPlatformsTabsList } from './config';
import styles from './styles.module.scss';

export const PlatformsLayout = () => (
  <>
    <div className={styles.tabsWrapper}>
      <Tabs tabs={adminPlatformsTabsList} />
    </div>
    <Outlet />
  </>
);
