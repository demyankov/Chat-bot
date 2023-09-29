import { ArrowUpIcon } from 'assets';

import styles from './styles.module.scss';

export const ButtonHide = ({ ...other }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className={styles.button} type="button" {...other}>
    Скрыть
    <ArrowUpIcon />
  </button>
);
