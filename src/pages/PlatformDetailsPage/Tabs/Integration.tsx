import { Link } from 'react-router-dom';
// import { getPlatform, useAppSelector } from 'store';

import styles from '../styles.module.scss';

export const Integration = () => (
  // const platform = useAppSelector(getPlatform);
  <div className={styles.descriptionSection}>
    <div className={styles.descriptionWrapper}>
      <div className={styles.descriptionColumn}>
        <div>
          <h6>CRM:</h6>
          {/* <p>{platform.CRM}</p> */}
        </div>
        <div>
          <h6>Сервисы интеграторы:</h6>
          {/* <p>{platform.services.join(', ')}</p> */}
        </div>
        <div>
          <h6>Голосовые помощники:</h6>
          {/* <p>{platform.voiceHelpers.join(', ')}</p> */}
        </div>
      </div>
      <div className={styles.descriptionColumn}>
        <div>
          <h6>Забота с API:</h6>
          {/* <p>{platform.API}</p> */}
        </div>
        <div>
          <h6>Платежные системы:</h6>
          {/* <p>{platform.paymentSystems}</p> */}
        </div>
      </div>
    </div>
    <p>
      Ознакомиться подробнее с имеющимися интеграциями можно&nbsp;
      <Link className={styles.link} to="/">
        здесь
      </Link>
    </p>
  </div>
);
