import { useState } from 'react';
import { ModalSolution } from 'components';

import styles from './styles.module.scss';

import blogging from './assets/blogging.jpg';

import chat from './assets/chat.svg';

import buttonStyle from '../../../../styles/button.style.module.scss';

export const MainSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.infoText}>
            <h1>Собрали все платформы для удобного поиска</h1>
            <p>Подберем лучшее решение для бизнеса и реализуем его на платформе с чат-ботом</p>
          </div>
          <div className={styles.infoButton}>
            <button className={buttonStyle.buttonBright} type="button" onClick={openModal}>
              Подобрать решение
            </button>
            {isModalOpen && <ModalSolution closeModal={closeModal} />}
          </div>
        </div>
        <div className={styles.blogging}>
          <div className={styles.bloggingImage}>
            <img src={blogging} alt="bloggingImage" />
          </div>
          <div className={styles.bloggingLiveChat}>
            <button className={styles.bloggingLiveChatButton} type="button">
              <img src={chat} alt="chatButton" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
