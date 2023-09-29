import { Link } from 'react-router-dom';

import { ROUTE } from 'router';

import { dataArray } from './data/dataArray';

import styles from './styles.module.scss';

import { DataOpportunityType } from './types/dataOpportunityType';

import buttonStyle from '../../../../styles/button.style.module.scss';

export const OpportunityCardEven = ({ title, description, picture }: DataOpportunityType) => (
  <div className={styles.card}>
    <div className={styles.cardImage}>
      <img src={picture} alt="opportunity" />
    </div>
    <div className={styles.cardInfo}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);

export const OpportunityCardOdd = ({ title, description, picture }: DataOpportunityType) => (
  <div className={styles.card}>
    <div className={styles.cardInfo}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
    <div className={styles.cardImage}>
      <img src={picture} alt="opportunity" />
    </div>
  </div>
);

export const OpportunitySection = () => (
  <section className={styles.section}>
    <div className={styles.wrapper}>
      {dataArray.map((article: DataOpportunityType, i) =>
        i % 2 === 0 ? (
          <OpportunityCardEven {...article} key={article.id} />
        ) : (
          <OpportunityCardOdd {...article} key={article.id} />
        ),
      )}
      <div className={styles.infoButton}>
        <Link to={ROUTE.PLATFORMS} className={buttonStyle.buttonBright} type="button">
          Подобрать решение
        </Link>
      </div>
    </div>
  </section>
);
