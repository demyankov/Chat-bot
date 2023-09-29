import { useEffect, useState } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface LoadingProps {
  delay?: number;
  size?: 'm' | 's' | 'xs';
  className?: string;
}

export const Loading = ({ delay = 0, size = 'm', className }: LoadingProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // отложенное отображение loader
    const timeout = setTimeout(() => {
      setIsActive(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return isActive ? (
    <div className={cn(styles.loading, className)}>
      <div className={cn(styles.spinner, styles[size])} />
    </div>
  ) : null;
};
