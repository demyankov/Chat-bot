import { AdminPlatformsFilter } from 'store';
import { Dispatch, SetStateAction } from 'react';

import { FilterLine } from '../FilterLine/FilterLine';

interface FiltersGroupProps {
  filterGroupName: string;
  filters: AdminPlatformsFilter[];
  setActiveId: Dispatch<SetStateAction<string>>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  handleOpenChangeForm: (isOpen: boolean, id: string) => void;
}

export const FiltersGroup = ({
  filterGroupName,
  filters,
  setActiveId,
  setIsModalOpen,
  handleOpenChangeForm,
}: FiltersGroupProps) => (
  <>
    {filters.map((filter) => (
      <FilterLine
        key={filter.id}
        filterGroupName={filterGroupName}
        filter={filter}
        setActiveId={setActiveId}
        setIsModalOpen={setIsModalOpen}
        handleOpenChangeForm={handleOpenChangeForm}
      />
    ))}
  </>
);
