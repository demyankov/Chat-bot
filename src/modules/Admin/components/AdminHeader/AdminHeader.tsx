import { logoIcon } from 'assets';
import { Link } from 'react-router-dom';
import { ROUTE } from 'router';
import { getUser, useAppSelector } from 'store';

import styles from './styles.module.scss';

export const AdminHeader = () => {
  const { name } = useAppSelector(getUser);

  return (
    <header className={styles.header}>
      <Link to={ROUTE.HOME}>
        <img src={logoIcon} className={styles.logo} alt="Townsend logo" />
      </Link>
      <p>{name || 'Admin'}</p>
    </header>
  );
};
