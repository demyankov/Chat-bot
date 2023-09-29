import { close } from 'assets';

import { TargetPortal } from 'shared';
import { Portal } from 'components/Portal/Portal';

import { useEffect, useState } from 'react';

import styles from './styles.module.scss';

interface ModalProps {
  message?: string;
  displayTime?: number;
  closeModal?: () => void;
}

export const ErrorNotification = ({
  closeModal,
  message = 'Действие не может быть выполнено',
  displayTime = 3000,
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
          <div className={styles.circle}>!</div>
          <div className={styles.wrapper}>
            <div className={styles.title}>Ошибка</div>
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
