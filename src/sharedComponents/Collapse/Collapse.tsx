import cn from 'classnames';

import { useToogle } from 'hooks';

import React from 'react';

import styles from './styles.module.scss';

interface CollapseProps {
  title: string;

  expanded?: boolean;

  children?: React.ReactNode;

  className?: string;

  closeIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;

  openIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
export const Collapse = ({ children, title, expanded = false, className, closeIcon, openIcon }: CollapseProps) => {
  const [isOpen, setIsOpen] = useToogle(expanded);

  const Icon = isOpen ? closeIcon : openIcon;
  const wrapperStyle = cn(styles.collapse, className);
  const headerStyle = cn(styles.title);
  const iconStyle = cn(styles.icon, { [styles.expandedIcon]: isOpen });
  const childrenStyles = cn(styles.child, {
    [styles.expandedChild]: isOpen,
  });

  return (
    <div className={wrapperStyle}>
      <div className={headerStyle} onClick={setIsOpen}>
        <div className={styles.titleText}>{title}</div>
        {Icon && <Icon className={iconStyle} />}
      </div>
      <div className={childrenStyles}>{children}</div>
    </div>
  );
};
