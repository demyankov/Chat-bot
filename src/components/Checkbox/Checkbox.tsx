import { DescriptionIcon } from 'assets';

import { useFormContext } from 'react-hook-form';

import styles from './styles.module.scss';

interface ICheckbox extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string;
  id: string;
  icon?: boolean;
  name: string;
}

export const Checkbox = ({ text, id, icon, name, ...restProps }: ICheckbox) => {
  const { register } = useFormContext();
  return (
    <li>
      <label htmlFor={id} className={styles.label}>
        <input className={styles.input} id={id} type="checkbox" {...restProps} {...register(name)} />
        <span className={styles.span}>{text}</span>
        {icon && <DescriptionIcon />}
      </label>
    </li>
  );
};
