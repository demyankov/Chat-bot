import { useWindowSize } from 'hooks';
import debounce from 'lodash.debounce';
import { Link } from 'react-router-dom';
import { getCurrentLanguage } from 'store/selectors/languageSelector';
import { ROUTE } from 'router';
import { logoIcon, phoneIcon, StarIcon } from 'assets';
import { BurgerMenu, MenuNav, Profile } from 'components';
import { useState, useEffect } from 'react';
import {
  changeLanguage,
  isModalProfileOpen,
  getUser,
  LANGUAGES,
  logout,
  toggleOpen,
  useAppDispatch,
  useAppSelector,
  setIsModalProfileOpen,
} from 'store';
import cnBind from 'classnames/bind';
import { ROLES } from 'shared';
import { scrollPosition } from 'helpers';
import { DEFAULT_OFFSET } from 'styles/shared/variables';
import { UserCircle } from 'sharedComponents';

import styles from './styles.module.scss';

const cx = cnBind.bind(styles);

export const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { width } = useWindowSize();
  const { isAuth, role, name, email } = useAppSelector(getUser);

  const headerClasses = cx('header', { hide: !isOpen });

  const dispatch = useAppDispatch();
  const selectedLanguage = useAppSelector(getCurrentLanguage);
  const isOpenProfile = useAppSelector(isModalProfileOpen);
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeLanguage(event.target.value));
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(setIsModalProfileOpen(false));
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
    dispatch(toggleOpen());
  };
  useEffect(() => {
    let lastScroll = 0;
    const handleOpen = debounce(() => {
      if (scrollPosition() > lastScroll && scrollPosition() > DEFAULT_OFFSET) {
        setIsOpen(false);
      } else if (scrollPosition() < lastScroll) {
        setIsOpen(true);
      }
      lastScroll = scrollPosition();
    }, 100);
    window.addEventListener('scroll', handleOpen);
    return () => window.removeEventListener('scroll', handleOpen);
  }, []);

  return (
    <header className={`${headerClasses} containerWrapper`}>
      {width && width <= 768 ? (
        <div className={styles.header__wrapper}>
          <Link to={ROUTE.HOME}>
            <img src={logoIcon} className={styles.logo} alt="Townsend logo" />
          </Link>
          <BurgerMenu />
        </div>
      ) : (
        <>
          <div className={styles.subheader}>
            <div className={styles.phoneWrapper}>
              <img src={phoneIcon} alt="Phone logo" />
              <p>+375(29) 874-59-80</p>
            </div>
            {!isAuth ? (
              <div className={styles.linkWrapper}>
                <div className={styles.dropdown}>
                  <select className={styles.lang} defaultValue={selectedLanguage} onChange={handleLanguageChange}>
                    <option value={LANGUAGES.RU}>{LANGUAGES.RU}</option>
                    <option value={LANGUAGES.EN}>{LANGUAGES.EN}</option>
                  </select>
                </div>
                <Link to={ROUTE.SIGN_IN} className={styles.signIn} type="button">
                  Вход
                </Link>
                <Link to={ROUTE.SIGN_UP} className={styles.signUp} type="button">
                  Регистрация
                </Link>
              </div>
            ) : (
              <div className={styles.linkWrapper}>
                <div className={styles.dropdown}>
                  <select className={styles.lang} defaultValue={selectedLanguage} onChange={handleLanguageChange}>
                    <option value={LANGUAGES.RU}>{LANGUAGES.RU}</option>
                    <option value={LANGUAGES.EN}>{LANGUAGES.EN}</option>
                  </select>
                </div>
                {role?.role === ROLES.USER && (
                  <Link to={`${ROUTE.PROFILE}/${ROUTE.PROFILE_FAVORITES}`} className={styles.signUp} type="button">
                    <StarIcon className={styles.star} /> Избранное
                  </Link>
                )}

                <button type="button" className={styles.button} onClick={handleClick} id="toggleModalButton">
                  <UserCircle />
                  {name || email}
                </button>
                {isAuth && isOpenProfile && <Profile onLogout={handleLogout} />}
              </div>
            )}
          </div>
          <MenuNav />
        </>
      )}
    </header>
  );
};
