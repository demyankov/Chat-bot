import { MenuListType } from 'modules/Admin/config';
import { useAppDispatch, changeActiveLink, deleteActiveLink } from 'store';
import { MouseEvent, useCallback, useEffect } from 'react';

import styles from './styles.module.scss';

import { DashboardBlock } from '../DashboardBlock/DashboardBlock';

interface IProps {
  dashboardsList: MenuListType[];
}

export const DashboardList = ({ dashboardsList }: IProps) => {
  const dispatch = useAppDispatch();

  const setActiveLink = useCallback(
    ({ currentTarget }: MouseEvent<HTMLAnchorElement>) => {
      const id = currentTarget?.id;
      dispatch(changeActiveLink(id));
    },
    [dispatch],
  );

  const handleDeleteActiveLink = useCallback(() => dispatch(deleteActiveLink()), [dispatch]);

  useEffect(
    () => () => {
      handleDeleteActiveLink();
    },
    [handleDeleteActiveLink],
  );

  return (
    <ul className={styles.list}>
      {dashboardsList.map(({ id, to, text, icon }) => (
        <DashboardBlock
          key={id}
          url={to}
          text={text}
          image={icon}
          id={id}
          setActiveLink={setActiveLink}
          handleDeleteActiveLink={handleDeleteActiveLink}
        />
      ))}
    </ul>
  );
};
