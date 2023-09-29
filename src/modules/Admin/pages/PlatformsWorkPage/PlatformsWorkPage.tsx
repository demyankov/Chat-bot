import styles from './styles.module.scss';

import { PlatformsList, PlatformsWorkHeaderPanel } from '../../components';

export const PlatformsWorkPage = () => (
  <div className={styles.wrapper}>
    <PlatformsWorkHeaderPanel />
    <PlatformsList />
  </div>
);
