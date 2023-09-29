import { DescriptionIcon } from 'assets';

import styles from './styles.module.scss';

interface ICheckbox extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string;
  id: string;
  icon?: boolean;
}

export const Checkbox = ({ text, id, icon, ...other }: ICheckbox) => (
  <li>
    <label htmlFor={id} className={styles.label}>
      <input className={styles.input} id={id} type="checkbox" {...other} />
      <span className={styles.span}>{text}</span>
      {icon && <DescriptionIcon />}
    </label>
  </li>
);
