/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/require-default-props */
import { useState } from 'react';

import styles from './input.styles.module.scss';

import { InputType } from './input.type';

import { WarningIcon, VisibilityIcon, VisibilityOffIcon } from '../../modules/Auth/assets';

export const Input = ({
  children,
  label,
  error,
  Icon,
  iconStart = false,
  register,
  id,
  placeholder = '',
  type = 'text',
  ...otherProps
}: InputType) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(type !== 'password');

  const handleClick = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className={styles.wrapper}>
      {children}
      {label && <label htmlFor={id}>{label}</label>}
      <div className={error ? `${styles.inputWrapper} ${styles.warningInput}` : styles.inputWrapper}>
        {Icon && iconStart && <span className={styles.marginRight}>{Icon}</span>}
        <input
          className={styles.input}
          id={id}
          placeholder={placeholder}
          autoComplete={type === 'password' ? 'new-password' : 'on'}
          type={
            // eslint-disable-next-line no-nested-ternary
            type !== 'password' ? type : isShowPassword ? 'text' : 'password'
          }
          {...otherProps}
          {...register(id)}
        />
        {Icon && !iconStart && <span className={styles.marginLeft}>{Icon}</span>}
        {type === 'password' && (
          <span className={`${styles.iconEnd} ${styles.iconColor}`} onClick={handleClick}>
            {isShowPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </span>
        )}

        {error && (
          <span className={styles.warningText} onClick={handleClick}>
            <WarningIcon /> {error}
          </span>
        )}
      </div>
    </div>
  );
};
