import { UseFormRegister } from 'react-hook-form';
import { ChangeEvent, useEffect, useState } from 'react';
import { textarea } from 'assets';
import cn from 'classnames';
import { WarningIcon } from 'modules/Auth/assets';

import styles from './styles.module.scss';

export interface ITextAreaProps {
  id: string;
  name: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  maxLength?: number;
  label?: string;
  value?: string;
  defaultValue?: string;
  error?: string;
  className?: string;
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
  ...otherProps
}: ITextAreaProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [messageLength, setMessageLength] = useState(0);
  const textAreaStyle = cn(
    styles.textarea,
    {
      [styles.inputError]: error,
    },
    {
      [styles.expanded]: isExpanded,
    },
    className,
  );

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessageLength(event.target.value.length);
  };

  useEffect(() => {
    setMessageLength(defaultValue?.length || 0);
  }, [defaultValue]);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper}>
        <label htmlFor={id} className={styles.label}>
          {label && <span>{label}</span>}
          <textarea
            id={id}
            placeholder={placeholder}
            {...register(id)}
            className={textAreaStyle}
            defaultValue={defaultValue}
            maxLength={maxLength}
            onInput={handleMessageChange}
            {...otherProps}
          />
        </label>
        <button type="button" className={styles.button}>
          <img src={textarea} alt="arrows" onClick={handleToggleExpand} />
        </button>
      </div>
      <div className={styles.count}>
        {messageLength}/{maxLength}
      </div>
      {error && (
        <span className={styles.warningText}>
          <WarningIcon />
          {error}
        </span>
      )}
    </div>
  );
};
