import { NavLink } from 'react-router-dom';
import cnBind from 'classnames/bind';
import { MenuListType } from 'modules/Admin/config';
import { useAppSelector } from 'store';
import { getActiveLink } from 'store/selectors/activeLinkSelector';

import styles from './styles.module.scss';

interface IMenuItem {
  item: MenuListType;
}

const cx = cnBind.bind(styles);

export const MenuNavItem = ({ item: { to, id, text, icon } }: IMenuItem) => {
  const Image = icon;
  const activeLink = useAppSelector(getActiveLink);

  return (
    <NavLink
      to={to}
      key={id}
      className={({ isActive }) => cx('links', { active: isActive }, { activeSecondary: activeLink === id })}
    >
      <Image /> {text}
    </NavLink>
  );
};
