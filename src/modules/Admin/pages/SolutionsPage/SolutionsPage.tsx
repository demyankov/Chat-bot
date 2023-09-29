import { SolutionsList, SolutionsWorkHeaderPanel } from 'modules/Admin/components';

import styles from './styles.module.scss';

export const SolutionsPage = () => (
  <div className={styles.wrapper}>
    <SolutionsWorkHeaderPanel />
    <SolutionsList />
  </div>
);
