import { MouseEventHandler } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

interface TabsProps {
  text: string;
  url: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const Tab = ({ text, url, onClick, ...other }: TabsProps) => (
  <NavLink to={url} className={styles.tab} {...other} onClick={onClick}>
    {text}
  </NavLink>
);
