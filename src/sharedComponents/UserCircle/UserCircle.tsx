import { getUser, useAppSelector } from 'store';

import styles from './styles.module.scss';

export const UserCircle = () => {
  const { name } = useAppSelector(getUser);
  return (
    <div className={styles.profileName}>
      <span>{name && name[0]}</span>
    </div>
  );
};
