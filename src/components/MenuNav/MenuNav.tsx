import { logoIcon } from 'assets';
import { useWindowSize } from 'hooks';
import { Link } from 'react-router-dom';
import { ROUTE } from 'router';

import { ReactNode, useState } from 'react';

import { navs } from 'shared';

import { ModalSolution } from 'components';

import styles from './styles.module.scss';

import buttonStyle from '../../styles/button.style.module.scss';

interface IProps {
  children?: ReactNode;
}

export const MenuNav = ({ children }: IProps) => {
  const { width } = useWindowSize();
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prevState) => !prevState);
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <div className={styles.menu__container}>
      <nav className={styles.menu__nav}>
        {width && width > 768 && (
          <Link to={ROUTE.HOME}>
            <img src={logoIcon} className={styles.logo} alt="Townsend logo" />
          </Link>
        )}
        <ul>
          {navs.map(({ to, text }) => (
            <li key={text}>
              <Link to={to} className={styles.links}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.infoButton}>
        <button className={buttonStyle.buttonBright} type="button" onClick={toggleModal}>
          Подобрать решение
        </button>
        {isModalOpen && <ModalSolution closeModal={toggleModal} />}
      </div>
      {children}
    </div>
  );
};
