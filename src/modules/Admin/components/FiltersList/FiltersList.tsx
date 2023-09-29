import { SetStateAction, useEffect, useState } from 'react';
import {
  deleteFilterPlatformAdminAction,
  setAdminPlatformsFiltersAction,
  setDeleteFormOpen,
  useAppDispatch,
  useAppSelector,
  getAdminPlatformsFilters,
  getDeleteFilterMessage,
  getIsDeleteFormOpen,
  getIsFilterLoaderVisible,
  getAdminFiltersLoadingMessage,
} from 'store';
import { Loading, LoadingMessage, Modal } from 'sharedComponents';

import styles from './styles.module.scss';

import { FiltersGroup } from '../FiltersGroup/FiltersGroup';

export const FiltersList = () => {
  const [activeId, setActiveId] = useState('');
  const [changeFilterId, setChangeFilterId] = useState('');
  const [isChangeFormOpen, setIsChangeFormOpen] = useState(false);
  const isDeleteModalOpen = useAppSelector(getIsDeleteFormOpen);
  const deleteFilterMessage = useAppSelector(getDeleteFilterMessage);
  const loadingMessage = useAppSelector(getAdminFiltersLoadingMessage);
  const isLoaderVisible = useAppSelector(getIsFilterLoaderVisible);
  const dispatch = useAppDispatch();
  const adminFilters = useAppSelector(getAdminPlatformsFilters);

  useEffect(() => {
    dispatch(setAdminPlatformsFiltersAction());
  }, [dispatch]);

  const handleFilterDelete = () => dispatch(deleteFilterPlatformAdminAction({ id: activeId }));

  const handleOpenChangeForm = (isOpen: boolean, id: string) => {
    setChangeFilterId(id);
    setIsChangeFormOpen(isOpen);
  };

  const handleOpenDeleteForm = (isOpen: SetStateAction<boolean>) => {
    dispatch(setDeleteFormOpen(isOpen));
  };

  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.title}>Наименование фильтра</p>
        <p className={styles.title}>Категория</p>
        {adminFilters.map(({ id, filterGroupName, filtersForPlatforms }) => (
          <FiltersGroup
            key={id}
            filterGroupName={filterGroupName}
            filters={filtersForPlatforms}
            setActiveId={setActiveId}
            setIsModalOpen={handleOpenDeleteForm}
            handleOpenChangeForm={handleOpenChangeForm}
          />
        ))}
      </div>
      {isLoaderVisible && <Loading delay={300} />}
      {!!loadingMessage && <LoadingMessage message={loadingMessage} />}
      {isChangeFormOpen && (
        <Modal setIsActiveModal={setIsChangeFormOpen} handleclick={() => {}}>
          <p>Тут будет форма редактирования фильтра id = {changeFilterId}</p>
        </Modal>
      )}
      {isDeleteModalOpen && (
        <Modal setIsActiveModal={handleOpenDeleteForm} handleclick={handleFilterDelete}>
          <>
            {!!deleteFilterMessage && <LoadingMessage message={deleteFilterMessage} />}
            <p>Восстановить фильтр после удаления будет невозможно. Вы уверены, что хотите удалить фильтр?</p>
          </>
        </Modal>
      )}
    </>
  );
};
