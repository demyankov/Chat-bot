import { AdminPlatformsFilter } from 'store';
import { BasketIcon, PencilIcon } from 'modules/Admin/assets';
import { Dispatch, SetStateAction } from 'react';

import styles from './styles.module.scss';

interface FilterLineProps {
  filterGroupName: string;
  filter: AdminPlatformsFilter;
  setActiveId: Dispatch<SetStateAction<string>>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  handleOpenChangeForm: (isOpen: boolean, id: string) => void;
}

export const FilterLine = ({
  filterGroupName,
  filter,
  setActiveId,
  setIsModalOpen,
  handleOpenChangeForm,
}: FilterLineProps): JSX.Element => {
  const { filterName, id } = filter;

  return (
    <>
      <span className={styles.filterName}>{filterName}</span>
      <span className={styles.filterName}>{filterGroupName}</span>
      <button type="button" onClick={() => handleOpenChangeForm(true, id)}>
        <PencilIcon />
      </button>
      <button
        type="button"
        onClick={() => {
          setActiveId(id);
          setIsModalOpen(true);
        }}
      >
        <BasketIcon />
      </button>
    </>
  );
};
