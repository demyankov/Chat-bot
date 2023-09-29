import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  deleteSolutionErrorMessage,
  getAdminSolutions,
  getAdminSolutionsLoadingMessage,
  getAdminSolutionSortDirection,
  getAdminSolutionSortKey,
  getIsAdminSolutionsLoaderVisible,
  useAppDispatch,
  useAppSelector,
} from 'store';
import {
  deleteAdminSolutionAction,
  setAdminSolutionsAction,
  updateAdminSolutionAction,
  UpdateSolutionDataProps,
} from 'store/actions';
import { Loading, Modal, LoadingMessage } from 'sharedComponents';

import styles from './styles.module.scss';

import { SolutionLine } from '../SolutionLine/SolutionLine';

export const SolutionsList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deletingSolutionId, setDeletingSolutionId] = useState<string>('');

  const solutions = useAppSelector(getAdminSolutions);
  const sortDirection = useAppSelector(getAdminSolutionSortDirection);
  const sortKey = useAppSelector(getAdminSolutionSortKey);
  const deleteErrorMessage = useAppSelector(deleteSolutionErrorMessage);
  const isLoaderVisible = useAppSelector(getIsAdminSolutionsLoaderVisible);
  const loadingMessage = useAppSelector(getAdminSolutionsLoadingMessage);

  const dispatch = useAppDispatch();

  const reloadCardList = useCallback(
    () => dispatch(setAdminSolutionsAction({ type: sortDirection, name: sortKey })),
    [sortDirection, sortKey, dispatch],
  );

  const handleToggle = useCallback(
    (isActive: boolean, activeSolutionId: string) => {
      const props: UpdateSolutionDataProps = {
        data: { isActive },
        activeSolutionId,
      };
      dispatch(updateAdminSolutionAction(props));
    },
    [reloadCardList], // eslint-disable-line  react-hooks/exhaustive-deps
  );

  const handleDeleteSolution = async () => {
    await dispatch(deleteAdminSolutionAction(deletingSolutionId));
    setIsModalOpen(false);
  };

  useEffect(() => {
    reloadCardList();
  }, [reloadCardList]);

  const PlatformRows = useMemo(
    () =>
      solutions.map((solution) => (
        <SolutionLine
          key={solution.id}
          solution={solution}
          handleToggle={handleToggle}
          setDeletingSolutionId={setDeletingSolutionId}
          setIsModalOpen={setIsModalOpen}
        />
      )),
    [solutions, handleToggle],
  );

  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.title}>Название решения</p>
        <p className={styles.title}>Платформа</p>
        {PlatformRows}
      </div>
      {isLoaderVisible && solutions.length === 0 && <Loading delay={300} />}
      <LoadingMessage message={loadingMessage} />
      {isModalOpen && (
        <Modal setIsActiveModal={setIsModalOpen} handleclick={handleDeleteSolution} isDisabled={!!deleteErrorMessage}>
          <>
            <p className="error">{deleteErrorMessage}</p>
            <p>Вы уверены, что хотите удалить решение?</p>
          </>
        </Modal>
      )}
    </>
  );
};
