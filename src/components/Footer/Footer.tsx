import { Link, useNavigate } from 'react-router-dom';
import { getCurrentLanguage } from 'store/selectors/languageSelector';
import { Link as AnchorLink } from 'react-scroll';

import { ROUTE } from 'router';
import { logoIcon } from 'assets';

import { navs } from 'shared';

import { changeLanguage, LANGUAGES, useAppDispatch, useAppSelector } from 'store';

import styles from './index.module.scss';

import { footerRoutes, socials } from './config/routes';

export const Footer = () => {
  const dispatch = useAppDispatch();
  const selectedLanguage = useAppSelector(getCurrentLanguage);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeLanguage(event.target.value));
  };

  const navigate = useNavigate();

  const handleLinkClick = (to: string) => {
    window.scrollTo(0, 0);
    navigate(to);
  };
  return (
    <footer className={styles.footer}>
      <div className="containerWrapper">
        <div className={styles.wrapperLogo}>
          <Link to={ROUTE.HOME}>
            <img src={logoIcon} className={styles.logo} alt="Townsend logo" />
          </Link>
        </div>
        <div className={styles.wrapperUp}>
          <ul className={styles.wrapper}>
            {navs.map(({ to, text }) => (
              <li key={text} onClick={() => handleLinkClick(to)}>
                <Link to={to} className={styles.links}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.right}>
            <ul className={styles.wrapper}>
              {footerRoutes.map(({ to, text }) => (
                <li key={text}>
                  <AnchorLink to={to} className={styles.links} offset={-140}>
                    {text}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.wrapperDown}>
          <div className={styles.dropdown}>
            <select className={styles.lang} defaultValue={selectedLanguage} onChange={handleLanguageChange}>
              <option value={LANGUAGES.RU}>{LANGUAGES.RU}</option>
              <option value={LANGUAGES.EN}>{LANGUAGES.EN}</option>
            </select>
          </div>

          <ul className={styles.social_block__container}>
            {socials.map(({ img, to }) => {
              const Img = img;
              return (
                <li key={to}>
                  <a href={to}>
                    <Img />
                  </a>
                </li>
              );
            })}
          </ul>
          <div className={styles.copyright}>© 2023 Townsend </div>
        </div>
      </div>
    </footer>
  );
};
