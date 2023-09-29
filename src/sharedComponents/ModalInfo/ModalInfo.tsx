import { Dispatch, SetStateAction } from 'react';
import { Portal } from 'components';
import { TargetPortal } from 'shared';
import cn from 'classnames';

import styles from './styles.module.scss';

import buttonStyle from '../../styles/button.style.module.scss';

interface ModalProps {
  message: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  handleClick?: () => void;
  isOpen: boolean;
}

export const ModalInfo = ({ message, setIsOpen, handleClick, isOpen }: ModalProps) => {
  const handleOkBtn = () => {
    setIsOpen(false);
    if (handleClick) handleClick();
  };

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    if (target.classList.contains(styles.modal) || target.classList.contains(buttonStyle.button)) {
      setIsOpen(false);
      if (handleClick) handleClick();
    }
  };

  const modalStyle = cn(styles.modal, {
    [styles.hidden]: !isOpen,
  });

  const contentStyle = cn(styles.content, {
    [styles.hidden]: !isOpen,
  });

  return (
    <Portal target={TargetPortal.MODAL}>
      <div className={modalStyle} onClick={handleModalClick}>
        <div className={contentStyle}>
          <div className={styles.message}>{message}</div>
          <div>
            <button className={buttonStyle.invertButton} onClick={handleOkBtn} type="button">
              Ok
            </button>
          </div>
        </div>
      </div>
    </Portal>
  );
};
