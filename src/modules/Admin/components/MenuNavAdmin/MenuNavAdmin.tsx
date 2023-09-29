import { menuList } from 'modules/Admin/config';
import { logout, setIsModalProfileOpen, useAppDispatch } from 'store';

import styles from './styles.module.scss';

import { MenuNavItem } from '../MenuNavItem/MenuNavItem';
import { ExitIcon } from '../../assets';

export const MenuNavAdmin = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(setIsModalProfileOpen(false));
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.linksWrapper}>
        {menuList.map((item) => (
          <MenuNavItem item={item} key={item.id} />
        ))}
      </ul>
      <button className={styles.exit} type="button" onClick={handleLogout}>
        <ExitIcon />
        <span>Выйти</span>
      </button>
    </nav>
  );
};
