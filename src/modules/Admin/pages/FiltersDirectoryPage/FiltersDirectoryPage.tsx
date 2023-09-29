import { useState } from 'react';
import { Modal } from 'sharedComponents';

import styles from './styles.module.scss';

import { FiltersList } from '../../components';

export const FiltersDirectoryPage = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const openModal = () => setIsCreateModalOpen(true);

  // временная заглушка
  const handleClick = () => {};

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.buttonWrapper}>
          <button type="button" className="button buttonSecondary" onClick={openModal}>
            Добавить фильтр
          </button>
        </div>
        <FiltersList />
      </div>
      {isCreateModalOpen && (
        <Modal setIsActiveModal={setIsCreateModalOpen} handleclick={handleClick}>
          <div>Тут будет форма для создания фильтра</div>
        </Modal>
      )}
    </>
  );
};
