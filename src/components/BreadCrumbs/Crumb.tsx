import { NavLink } from 'react-router-dom';
import { BreadcrumbsArrow } from 'assets';

import styles from './styles.module.scss';

interface ICrumb {
  path: string;
  name: string;
  isLastCrumb: boolean;
}

export const Crumb = ({ path, name, isLastCrumb }: ICrumb) => {
  const styleLatLink = `${styles.crumbLink} ${styles.lastLink}`;
  const linkItem = isLastCrumb ? (
    <span className={styleLatLink}>{name}</span>
  ) : (
    <NavLink className={styles.crumbLink} to={path}>
      {name}
    </NavLink>
  );

  return (
    <li className={styles.crumbItem}>
      {linkItem}
      {!isLastCrumb && <BreadcrumbsArrow />}
    </li>
  );
};
