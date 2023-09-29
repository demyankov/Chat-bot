import { useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';
import { getRole, isModalProfileOpen, setIsModalProfileOpen, toggleOpen, useAppDispatch, useAppSelector } from 'store';
import { ROLES } from 'shared';
import { ExitProfileIcon } from 'assets';
import { menuList } from 'modules/Admin/config';
import { ROUTE } from 'router';

import { routes } from './config/routes';
import styles from './styles.module.scss';

interface IProps {
  onLogout: () => void;
}

export const Profile = ({ onLogout }: IProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const isOpenProfile = useAppSelector(isModalProfileOpen);
  const role = useAppSelector(getRole);

  const handleLinkClick = () => dispatch(setIsModalProfileOpen(false));

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (
        isOpenProfile &&
        modalRef.current &&
        event.target.id !== 'toggleModalButton' &&
        !modalRef.current.contains(event.target)
      ) {
        dispatch(toggleOpen());
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => window.removeEventListener('click', handleOutsideClick);
  }, [dispatch, isOpenProfile, modalRef]);

  const currentRoute = role === ROLES.SUPERADMIN ? menuList : routes;

  return (
    <div className={styles.dropdown} ref={modalRef}>
      {currentRoute.map(({ icon, text, to }) => {
        const Icon = icon;
        const link = role === ROLES.SUPERADMIN ? `${ROUTE.ADMIN_BASE}/${to}` : to;

        return (
          <Link className={styles.link} to={link} key={text} onClick={handleLinkClick}>
            <div>
              <Icon width="20" height="20" />
            </div>
            {text}
          </Link>
        );
      })}
      <button className={styles.button} type="button" onClick={onLogout}>
        <ExitProfileIcon width="20" height="20" />
        Выйти
      </button>
    </div>
  );
};
