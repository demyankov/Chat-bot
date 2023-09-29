import cn from 'classnames';

import styles from './styles.module.scss';

const DEFAULT_ERROR_MESSAGE = 'Что-то пошло не так...';

interface ErrorProps {
  message?: string;
  className?: string;
  view?: 'error' | 'info';
}
export const Alert = ({ message, className, view = 'error' }: ErrorProps) => (
  <div className={cn(styles.alert, styles[view], className)}>
    <p className={cn(styles.message, styles[view])}>{message || DEFAULT_ERROR_MESSAGE}</p>
  </div>
);
