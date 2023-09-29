import { SolutionsFiltersList } from 'modules/Admin/components';
import { AdminSolutionRoutes, ROUTE } from 'modules/Admin/router/routes';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export const SolutionsFiltersDirectoryPage = () => (
  <div className={styles.wrapper}>
    <div className={styles.buttonWrapper}>
      <Link
        to={`${ROUTE.ADMIN}/${ROUTE.SOLUTIONS}/${AdminSolutionRoutes.workWithFilter}/${AdminSolutionRoutes.create}`}
        className="button buttonSecondary"
      >
        Добавить фильтр
      </Link>
    </div>
    <SolutionsFiltersList />
  </div>
);
