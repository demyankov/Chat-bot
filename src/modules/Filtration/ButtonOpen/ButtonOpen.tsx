import { ArrowDownIcon } from 'assets';

import styles from './styles.module.scss';

export interface ButtonOpenType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  count: number;
}

export const ButtonOpen = ({ count, ...other }: ButtonOpenType) => (
  <button className={styles.button} type="button" {...other}>
    Ещё {count}
    <ArrowDownIcon />
  </button>
);
