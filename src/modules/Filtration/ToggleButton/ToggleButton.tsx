import { ArrowDownIcon, ArrowUpIcon } from 'assets';

import styles from './styles.module.scss';

export interface ButtonOpenType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  moreItem: number;
  isOpen: boolean;
  id?: string;
}

export const ToggleButton = ({ moreItem, isOpen, onClick, id }: ButtonOpenType) => (
  <button className={styles.button} id={id} onClick={onClick} type="button">
    {isOpen ? (
      <>
        Скрыть
        <ArrowUpIcon />
      </>
    ) : (
      <>
        Ещё {moreItem} <ArrowDownIcon />
      </>
    )}
  </button>
);
