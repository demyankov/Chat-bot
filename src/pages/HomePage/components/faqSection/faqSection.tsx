import { FaqPage } from 'sharedComponents';
import { FooterAnchors } from 'pages';

import styles from './styles.module.scss';

import question from '../mainSection/assets/question.jpg';

export const FaqSection = () => (
  <section className={styles.section} id={FooterAnchors.FAQ}>
    <div className="containerWrapper">
      <div className={styles.title}>
        <h4>FAQ</h4>
      </div>
    </div>
    <div className={styles.faq}>
      <div className="containerWrapper">
        <div className={styles.info}>
          <div className={styles.photo}>
            <img src={question} alt="questionImage" />
          </div>
          <div className={styles.content}>
            <FaqPage />
          </div>
        </div>
      </div>
    </div>
  </section>
);
