import { burgerIcon, cancelIcon, girl } from 'assets';
import { MenuNav, Portal } from 'components';
import { TargetPortal } from 'shared';
import { useToogle } from 'hooks';

import { useEffect } from 'react';

import styles from './styles.module.scss';

export const BurgerMenu = () => {
  const [isOpen, toogleMenu] = useToogle();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else document.body.style.overflow = '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className={styles.burgerMenu}>
      <div className={styles.burger} onClick={toogleMenu}>
        {isOpen ? (
          <img src={cancelIcon} alt="Cancel" />
        ) : (
          <img src={burgerIcon} alt="BurgerMenu" className={styles.burgerIcon} />
        )}
      </div>

      {isOpen && (
        <Portal target={TargetPortal.BURGER_MENU}>
          <div className={styles.menu}>
            <MenuNav />
            <img src={girl} alt="girl with notebook" />
          </div>
        </Portal>
      )}
    </div>
  );
};
