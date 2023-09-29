import { useCookies } from 'react-cookie';
import { CookieConsent } from 'components';

import { MainSection, AdvantagesSection, OpportunitySection, FaqSection } from '.';

import styles from './styles.module.scss';

export const HomePage = () => {
  const [cookies, setCookie] = useCookies(['cookieConsent']);
  const isConsent = cookies.cookieConsent;

  const setCookieConsent = () => setCookie('cookieConsent', 'true');

  return (
    <main className={styles.main}>
      <MainSection />
      <AdvantagesSection />
      <OpportunitySection />
      <FaqSection />
      {!isConsent && <CookieConsent setCookieConsent={setCookieConsent} />}
    </main>
  );
};
