import { PlatformsTabsList } from 'modules/Admin/types/platformsTypes';
import { NavLink, generatePath } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import { SolutionsFiltersTabsList, SolutionsTabsList, SolutionSettingsTabsList } from 'modules/Admin/types';
import cn from 'classnames';

import styles from './styles.module.scss';

const createlinkStyle = ({ isActive }: { isActive: boolean }) => `${styles.tabLink} ${isActive ? styles.active : ''}`;

type TabsType = PlatformsTabsList | SolutionsTabsList | SolutionsFiltersTabsList | SolutionSettingsTabsList;

export interface TabsProps {
  tabs: TabsType[];
  linkId?: string;
  setActiveTab?: Dispatch<SetStateAction<number | null>>;
  disabledTabs?: number[];
}

export const Tabs = ({ tabs, linkId, setActiveTab, disabledTabs = [] }: TabsProps) => {
  const disabledLinkStyle = cn(styles.tabLink, styles.disabled);
  return (
    <div className={styles.tabs}>
      <ul className={styles.linksWrapper}>
        {tabs.map(({ id, tabName, tabLink }, currentTabIdx: number) => {
          const isLinkDisabled = disabledTabs?.includes(currentTabIdx);

          const link = linkId ? generatePath(tabLink, { id: linkId }) : tabLink;

          const linkLayout = isLinkDisabled ? (
            <div key={id} className={disabledLinkStyle}>
              {tabName}
            </div>
          ) : (
            <NavLink
              to={link}
              key={id}
              className={createlinkStyle}
              onClick={() => {
                if (setActiveTab) setActiveTab(id);
              }}
            >
              {tabName}
            </NavLink>
          );
          return linkLayout;
        })}
      </ul>
    </div>
  );
};
