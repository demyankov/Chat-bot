import { SignInForm } from 'modules/Auth';

import { Link } from 'react-router-dom';

import { ROUTE } from 'router';

import styles from '../styles.module.scss';

import { logoIcon } from '../../../assets';

export const SignInPage = () => (
  <main className={styles.main}>
    <Link to={ROUTE.HOME} className={styles.logo}>
      <img src={logoIcon} className={styles.logo} alt="Townsend logo" />
    </Link>
    <div className={styles.auth}>
      <SignInForm />
    </div>
  </main>
);
