import { UseFormRegister, FieldError } from 'react-hook-form';

import cn from 'classnames';

import { ChangeEvent, LegacyRef, forwardRef, useState } from 'react';

import styles from './styles.module.scss';

import { ErrorIcon } from '../../assets/index';

export interface INumberInputProps {
  id: string;
  name: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  label?: string;
  value?: string;
  defaultValue?: string;
  error?: FieldError;
  inputPrefix?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  size?: 'm' | '';
}

export const NumberInput = forwardRef(
  (
    {
      id,
      name,
      placeholder,
      label,
      register,
      defaultValue,
      error,
      inputPrefix = '',
      onChange,
      value,
      size = '',
      ...other
    }: INumberInputProps,
    ref: LegacyRef<HTMLInputElement> | undefined,
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleInputFocus = () => {
      setIsFocused(true);
    };

    const handleInputBlur = () => {
      setIsFocused(false);
    };

    const customInputStyle = cn(styles.customInput, {
      [styles.inputError]: error,
      [styles.inputActive]: isFocused,
      [styles[size]]: size,
    });

    const prefixStyle = cn(styles.prefix, {
      [styles.prefixHide]: !inputPrefix,
    });
    const inputStyle = cn(styles.input, {
      [styles.inputWithPrefix]: inputPrefix,
    });
    return (
      <label htmlFor={id} className={styles.label}>
        {label && <span>{label}</span>}

        <div className={customInputStyle}>
          {inputPrefix && <span className={prefixStyle}>{inputPrefix}</span>}
          <input
            id={id}
            placeholder={placeholder}
            {...register(name)}
            className={inputStyle}
            defaultValue={defaultValue}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            type="number"
            ref={ref}
            onChange={onChange}
            value={value}
            {...other}
          />
        </div>
        {error && (
          <span className={styles.errorMessage}>
            <ErrorIcon />
            {error?.message && ` (${error.message})`}
          </span>
        )}
      </label>
    );
  },
);
