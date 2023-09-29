import { Link } from 'react-router-dom';

import { ROUTE } from 'router';

import { NewPasswordForm } from 'modules/Auth';

import styles from '../styles.module.scss';

import { logoIcon } from '../../../assets';

export const NewPasswordPage = () => (
  <main className={styles.main}>
    <div className={styles.wrapper}>
      <Link to={ROUTE.HOME} className={styles.logo}>
        <img src={logoIcon} className={styles.logo} alt="Townsend logo" />
      </Link>
      <div className={styles.auth}>
        <NewPasswordForm />
      </div>
    </div>
    <div className={styles.bgReset} />
  </main>
);
