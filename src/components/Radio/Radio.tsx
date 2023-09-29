import { useFormContext } from 'react-hook-form';

import styles from './styles.module.scss';

interface IRadio extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string;
  name: string;
}

export const Radio = ({ text, id, name, ...restProps }: IRadio) => {
  const { register } = useFormContext();
  return (
    <li>
      <label htmlFor={id} className={styles.label}>
        <input className={styles.input} id={id} type="radio" {...restProps} {...register(name)} />
        <span className={styles.span}>{text}</span>
      </label>
    </li>
  );
};
