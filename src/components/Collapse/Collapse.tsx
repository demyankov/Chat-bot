import cn from 'classnames';

import styles from './styles.module.scss';

import { PlusIcon, ChevronIcon } from './assets';

interface CollapseProps {
  /**
   * Заголовок / вопрос
   *
   */
  title: string;

  /**
   * Вид компонента
   *
   */
  view?: 'primary' | 'secondary';

  /**
   * Состояние компонента
   *
   */
  expanded: boolean;

  /**
   * Дочерние элементы `Collapse`
   */
  children?: React.ReactNode;

  /**
   * Дополнительный класс обертки
   */
  className?: string;

  /**
   * Идентификатор элемента
   */
  id: string | number;

  /**
   * Обработчик клика по шапке
   */
  onClick: (id: string | number) => void;
}

export const Collapse = ({
  children,
  onClick,
  title,
  expanded = false,
  className,
  id,
  view = 'primary',
}: CollapseProps) => {
  const handleClick = () => onClick(id);

  const Icon = view === 'primary' ? PlusIcon : ChevronIcon;

  return (
    <div className={cn(styles.collapse, className)} key={id}>
      <div className={cn(styles.title, styles[view], { [styles.expandedTitle]: expanded })} onClick={handleClick}>
        <div className={styles.titleText}>{title}</div>
        <Icon className={cn(styles.icon, styles[view], { [styles.expandedIcon]: expanded })} />
      </div>
      <div className={cn(styles.child, { [styles.expandedChild]: expanded })}>{children}</div>
    </div>
  );
};
