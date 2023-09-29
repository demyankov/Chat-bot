import { Link } from 'react-router-dom';

import { ROUTE } from 'router';

import { RegistrationForm } from 'modules/Auth';

import { logoIcon } from 'assets';

import styles from '../styles.module.scss';

export const RegistrationPage = () => (
  <main className={styles.main}>
    <Link to={ROUTE.HOME} className={styles.logo}>
      <img src={logoIcon} className={styles.logo} alt="Townsend logo" />
    </Link>
    <div className={styles.auth}>
      <RegistrationForm />
    </div>
  </main>
);
