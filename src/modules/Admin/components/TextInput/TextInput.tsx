import { UseFormRegister, FieldError } from 'react-hook-form';
import cn from 'classnames';
import { WarningIcon } from 'modules/Auth/assets';

import styles from './styles.module.scss';

export interface ITextInputProps {
  id: string;
  name: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  label?: string;
  value?: string;
  defaultValue?: string;
  error?: FieldError;
}

export const TextInput = ({ id, name, placeholder, label, register, defaultValue, error }: ITextInputProps) => {
  const inputStyle = cn(styles.input, {
    [styles.inputError]: error,
  });
  return (
    <label htmlFor={id} className={styles.label}>
      {label && <span>{label}</span>}
      <input
        id={id}
        placeholder={placeholder}
        {...register(name)}
        className={inputStyle}
        defaultValue={defaultValue}
        type="text"
      />
      {error && (
        <span className={styles.errorMessage}>
          <WarningIcon />
          {error?.message && ` (${error.message})`}
        </span>
      )}
    </label>
  );
};
