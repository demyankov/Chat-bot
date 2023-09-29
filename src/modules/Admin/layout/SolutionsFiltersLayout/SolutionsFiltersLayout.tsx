import { Tabs } from 'modules/Admin/components';
import { Outlet } from 'react-router';

import { adminSolutionsTabsList } from './config';
import styles from './styles.module.scss';

export const SolutionsFiltersLayout = () => (
  <>
    <div className={styles.tabsWrapper}>
      <Tabs tabs={adminSolutionsTabsList} />
    </div>
    <Outlet />
  </>
);
