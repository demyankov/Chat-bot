import { DescriptionIcon } from 'assets';
import { LegacyRef, forwardRef } from 'react';

import styles from './styles.module.scss';

interface ICheckbox extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string;
  id: string;
  icon?: boolean;
}

export const Checkbox = forwardRef(
  ({ text, id, icon, ...other }: ICheckbox, ref: LegacyRef<HTMLInputElement> | undefined) => (
    <li>
      <label htmlFor={id} className={styles.label}>
        <input className={styles.input} id={id} type="checkbox" {...other} ref={ref} />
        <span className={styles.span}>{text}</span>
        {icon && <DescriptionIcon />}
      </label>
    </li>
  ),
);
