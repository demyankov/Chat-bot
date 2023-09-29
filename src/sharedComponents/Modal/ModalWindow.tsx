import { ReactElement } from 'react';
import { Portal } from 'components';
import { TargetPortal } from 'shared';

import styles from './styles.module.scss';

import buttonStyle from '../../styles/button.style.module.scss';

interface ModalProps {
  setIsActiveModal: (isOpen: boolean) => void;
  handleclick: () => void;
  isDisabled?: boolean;
  children: ReactElement;
  submitButtonText?: string;
}

export const Modal = ({
  setIsActiveModal,
  handleclick,
  isDisabled = false,
  submitButtonText = 'Удалить',
  children,
}: ModalProps) => (
  <Portal target={TargetPortal.MODAL}>
    <div className={styles.modal} onClick={() => setIsActiveModal(false)}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
        <div>
          <button className={buttonStyle.button} onClick={() => setIsActiveModal(false)} type="button">
            Отмена
          </button>
          <button className={buttonStyle.buttonDark} onClick={handleclick} type="button" disabled={isDisabled}>
            {submitButtonText}
          </button>
        </div>
      </div>
    </div>
  </Portal>
);
