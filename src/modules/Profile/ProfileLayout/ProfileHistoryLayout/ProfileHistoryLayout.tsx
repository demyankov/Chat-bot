import { CleanHistory } from 'modules/Profile/components/CleanHistory/CleanHistory';
import { CleanTarget } from 'modules/Profile/components/CleanHistory/config';
import { Tab } from 'modules/Profile/components/Tab/tab';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ROUTE } from 'router';
import { getViewedPlatforms, useAppSelector } from 'store';

import styles from './styles.module.scss';

export const ProfileHistoryLayout = () => {
  const [target, setTarget] = useState(CleanTarget.PLATFORMS);
  const viewedPlatforms = useAppSelector(getViewedPlatforms);

  // позже добавить по платформам
  const isShow = target === CleanTarget.PLATFORMS ? !!viewedPlatforms.length : false;

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <nav className={styles.tabsWrapper}>
          <Tab
            text="Платформы"
            url={ROUTE.PROFILE_HISTORY_PLATFORMS}
            onClick={() => setTarget(CleanTarget.PLATFORMS)}
          />
          <Tab text="Решения" url={ROUTE.PROFILE_HISTORY_SOLUTIONS} onClick={() => setTarget(CleanTarget.SOLUTIONS)} />
        </nav>
        {isShow && <CleanHistory target={target} />}
      </div>
      <Outlet />
    </div>
  );
};
