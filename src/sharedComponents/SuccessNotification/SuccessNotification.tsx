import { close } from 'assets';

import { TargetPortal } from 'shared';
import { Portal } from 'components/Portal/Portal';

import { useEffect, useState } from 'react';

import styles from './styles.module.scss';

interface ModalProps {
  closeModal?: () => void;
  message?: string;
  displayTime?: number;
}

export const SuccessNotification = ({
  closeModal,
  message = 'Платформа удалена из списка',
  displayTime = 5000,
}: ModalProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, displayTime);

    return () => {
      clearTimeout(timer);
    };
  }, [displayTime, closeModal]);

  if (!isVisible) {
    return null;
  }

  return (
    <Portal target={TargetPortal.MODAL}>
      <div className={styles.notification}>
        <div className={styles.wrap}>
          <div className={styles.checkmark}>✔</div>
          <div className={styles.wrapper}>
            <div className={styles.title}>Успех</div>
            <div className={styles.text}>{message}</div>
          </div>
        </div>
        {closeModal && (
          <button type="button" onClick={closeModal}>
            <img className={styles.picture} src={close} alt="close" />
          </button>
        )}
      </div>
    </Portal>
  );
};
