import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  useAppDispatch,
  useAppSelector,
  getSolutionsFiltersSelector,
  setSolutionsFiltersAction,
  isShowSolutionsFiltersLoaderSelector,
  getSolutionsFiltersMessageSelector,
  getIsDeleteModalOpen,
  setIsDeleteModalOpen,
  deleteSolutionsFilterAction,
  getDeleteSolutionsFilterMessageSelector,
} from 'store';
import { Loading, LoadingMessage, Modal } from 'sharedComponents';

import styles from './styles.module.scss';

import { SolutionFilterLine } from '../SolutionFilterLine/SolutionFilterLine';

export const SolutionsFiltersList = () => {
  const [activeId, setActiveId] = useState('');
  const isDeleteModalOpen = useAppSelector(getIsDeleteModalOpen);
  const deleteFilterMessage = useAppSelector(getDeleteSolutionsFilterMessageSelector);
  const loadingMessage = useAppSelector(getSolutionsFiltersMessageSelector);
  const isLoaderVisible = useAppSelector(isShowSolutionsFiltersLoaderSelector);
  const dispatch = useAppDispatch();
  const solutionsFilters = useAppSelector(getSolutionsFiltersSelector);

  useEffect(() => {
    dispatch(setSolutionsFiltersAction());
  }, [dispatch]);

  const handleFilterDelete = useCallback(() => {
    dispatch(deleteSolutionsFilterAction({ id: activeId }));
  }, [activeId, dispatch]);

  const handleOpenModal = useCallback(
    (isOpen: boolean) => {
      dispatch(setIsDeleteModalOpen(isOpen));
    },
    [dispatch],
  );

  const filters = useMemo(
    () =>
      solutionsFilters.map((filter) => (
        <SolutionFilterLine
          key={filter.id}
          filter={filter}
          setActiveId={setActiveId}
          setIsModalOpen={handleOpenModal}
        />
      )),
    [solutionsFilters, setActiveId, handleOpenModal],
  );

  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.title}>Наименование фильтра</p>
        {filters}
      </div>

      {isLoaderVisible && <Loading delay={300} />}
      {loadingMessage && <LoadingMessage message={loadingMessage} />}

      {isDeleteModalOpen && (
        <Modal setIsActiveModal={handleOpenModal} handleclick={handleFilterDelete}>
          <>
            {!!deleteFilterMessage && <LoadingMessage message={deleteFilterMessage} />}
            <p>Восстановить фильтр после удаления будет невозможно. Вы уверены, что хотите удалить фильтр?</p>
          </>
        </Modal>
      )}
    </>
  );
};
