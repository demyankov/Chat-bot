import { dataArray } from './data/dataArray';

import { DataAdvantagesType } from './types/dataAdvantagesType';
import advantageImage from './assets/rocket_1.jpg';

import styles from './styles.module.scss';

export const AdvantagesCard = ({ title, picture }: DataAdvantagesType) => (
  <li className={styles.listElement}>
    <div className={styles.lisElementIcon}>
      <img src={picture} alt="icon" />
    </div>
    <div className={styles.listElementTitle}>
      <p>{title}</p>
    </div>
  </li>
);

export const AdvantagesSection = () => (
  <section className={styles.section}>
    <div className={styles.wrapper}>
      <div className={styles.cardTitle}>
        <h3>Преимущества работы сервиса Townsend</h3>
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.cardImage}>
          <img src={advantageImage} alt="advantageImage" />
        </div>
        <ul className={styles.list}>
          {dataArray.map((article) => (
            <AdvantagesCard {...article} key={article.id} />
          ))}
        </ul>
      </div>
    </div>
  </section>
);
