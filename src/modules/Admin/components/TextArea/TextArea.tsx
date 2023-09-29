import { UseFormRegister, FieldError } from 'react-hook-form';
import { ChangeEvent } from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';

import { ErrorIcon } from '../../assets/index';

export interface ITextAreaProps {
  id: string;
  name: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  maxLength?: number;
  label?: string;
  value?: string;
  defaultValue?: string;
  error?: FieldError;
  className: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = ({
  id,
  name,
  placeholder,
  label,
  register,
  defaultValue,
  error,
  className,
  maxLength = 1000,
  onChange,
}: ITextAreaProps) => {
  const textareaStyle = cn(styles.textarea, className, {
    [styles.inputError]: error,
  });
  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(event);
    }
  };
  return (
    <label htmlFor={id} className={styles.label}>
      {label && <span>{label}</span>}
      {onChange ? (
        <textarea
          id={id}
          placeholder={placeholder}
          {...register(name)}
          className={textareaStyle}
          defaultValue={defaultValue}
          maxLength={maxLength}
          onChange={handleMessageChange}
        />
      ) : (
        <textarea
          id={id}
          placeholder={placeholder}
          {...register(name)}
          className={textareaStyle}
          defaultValue={defaultValue}
          maxLength={maxLength}
        />
      )}
      {error && (
        <span className={styles.errorMessage}>
          <ErrorIcon />
          {error?.message && ` (${error.message})`}
        </span>
      )}
    </label>
  );
};
