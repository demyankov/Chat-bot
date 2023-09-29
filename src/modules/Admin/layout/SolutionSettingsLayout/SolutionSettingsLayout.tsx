import { Tabs } from 'modules/Admin/components';
import { Outlet, useParams } from 'react-router';

import { solutionSettingsTabsList } from './config';
import styles from './styles.module.scss';

export const SolutionSettingsLayout = () => {
  const { id } = useParams();
  const disabledTabs = id ? [] : solutionSettingsTabsList.map(({ id: tabId }) => tabId - 1);

  return (
    <>
      <div className={styles.tabsWrapper}>
        <Tabs tabs={solutionSettingsTabsList} disabledTabs={disabledTabs} />
      </div>
      <Outlet />
    </>
  );
};
