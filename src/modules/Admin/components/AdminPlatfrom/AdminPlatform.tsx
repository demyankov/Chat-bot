import { Outlet, useParams } from 'react-router-dom';
import { Tabs } from 'modules/Admin/components/Tabs/Tabs';

import styles from './styles.module.scss';
import { platformsTabsList } from './platforms';

export const AdminPlatform = () => {
  const { platformId } = useParams();

  const disabledTabs = platformId ? [] : [0, 1, 2];

  return (
    <div className={styles.platformsWrapper}>
      <Tabs tabs={platformsTabsList} linkId={platformId} disabledTabs={disabledTabs} />
      <Outlet />
    </div>
  );
};
