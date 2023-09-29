import styles from './styles.module.scss';

import buttonStyles from '../../styles/button.style.module.scss';

interface CookieConsentProps {
  setCookieConsent: () => void;
}

export const CookieConsent = ({ setCookieConsent }: CookieConsentProps) => (
  <div className={styles.wrapper}>
    <p className={styles.text}>
      Мы используем cookie. Это позволяет нам анализировать взаимодействие посетителей с сайтом и делать его лучше.
      Продолжая пользоваться сайтом, Вы соглашаетесь с иcпользованием файлов cookie
    </p>
    <div>
      <button type="button" className={buttonStyles.buttonBright} onClick={setCookieConsent}>
        Согласен
      </button>
    </div>
  </div>
);
