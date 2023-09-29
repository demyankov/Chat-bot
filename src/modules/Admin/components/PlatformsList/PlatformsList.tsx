import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  getAdminLoadingMessage,
  getAdminPlatforms,
  getAdminSortDirection,
  getAdminSortKey,
  getIsAdminLoaderVisible,
  useAppDispatch,
  useAppSelector,
} from 'store';
import { setAdminPlatformsAction } from 'store/actions';
import { Loading, Modal, LoadingMessage } from 'sharedComponents';
import { isAxiosError } from 'axios';
import { isAxiosResponseError } from 'modules/Admin/types';

import styles from './styles.module.scss';

import { PlatformLine } from '../PlatformLine/PlatformLine';

import { deletePlatform, updatePlatformData } from '../../api';

export const PlatformsList = () => {
  const platforms = useAppSelector(getAdminPlatforms);
  const sortDirection = useAppSelector(getAdminSortDirection);
  const sortKey = useAppSelector(getAdminSortKey);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const dispatch = useAppDispatch();
  const isLoaderVisible = useAppSelector(getIsAdminLoaderVisible);
  const loadingMessage = useAppSelector(getAdminLoadingMessage);

  const reloadCardList = useCallback(
    () => dispatch(setAdminPlatformsAction({ type: sortDirection, name: sortKey })),
    [sortDirection, sortKey, dispatch],
  );

  const handleToggle = useCallback(
    async (isActive: boolean, platformId: string) => {
      try {
        await updatePlatformData({ isActive }, platformId);
        reloadCardList();
      } catch (e) {
        if (isAxiosResponseError(e)) {
          const { error, message } = e.data;
          setErrorMessage(`Error: ${error || ''}, message: ${message || ''}`);
        } else if (isAxiosError(e)) {
          const { message } = e;
          setErrorMessage(`Message: ${message || ''}`);
        } else {
          setErrorMessage('Something went wrong.');
        }
      }
    },
    [reloadCardList],
  );

  const handleDelete = useCallback(async () => {
    try {
      await deletePlatform(activeId);
      setIsModalOpen(false);
      reloadCardList();
    } catch (e) {
      if (isAxiosResponseError(e)) {
        const { error, message } = e.data;
        setErrorMessage(`Error: ${error || ''}, message: ${message || ''}`);
      } else if (isAxiosError(e)) {
        const { message } = e;
        setErrorMessage(`Message: ${message || ''}`);
      } else {
        setErrorMessage('Something went wrong.');
      }
    }
  }, [activeId]); // eslint-disable-line  react-hooks/exhaustive-deps

  useEffect(() => {
    reloadCardList();
  }, [reloadCardList]);

  const PlatformRows = useMemo(
    () =>
      platforms.map((platform) => (
        <PlatformLine
          key={platform.id}
          platform={platform}
          handleToggle={handleToggle}
          setActiveId={setActiveId}
          setIsModalOpen={setIsModalOpen}
          setErrorMessage={setErrorMessage}
        />
      )),
    [platforms, handleToggle],
  );

  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.title}>Название платформы</p>
        <p className={styles.title}>Количество решений</p>
        {PlatformRows}
      </div>
      {isLoaderVisible && platforms.length === 0 && <Loading delay={300} />}
      <LoadingMessage message={loadingMessage} />
      {isModalOpen && (
        <Modal setIsActiveModal={setIsModalOpen} handleclick={handleDelete} isDisabled={!!errorMessage}>
          <>
            <p className="error">{errorMessage}</p>
            <p>Вы уверены, что хотите удалить платформу?</p>
          </>
        </Modal>
      )}
    </>
  );
};
