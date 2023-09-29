import { SolutionFilter } from 'store';
import { BasketIcon, PencilIcon } from 'modules/Admin/assets';
import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { AdminSolutionRoutes, ROUTE } from 'modules/Admin/router/routes';

import styles from './styles.module.scss';

interface FilterLineProps {
  filter: SolutionFilter;
  setActiveId: Dispatch<SetStateAction<string>>;
  setIsModalOpen: (isOpen: boolean) => void;
}

export const SolutionFilterLine = ({ filter, setActiveId, setIsModalOpen }: FilterLineProps) => {
  const { filterName, id } = filter;

  return (
    <>
      <span className={styles.filterName}>{filterName}</span>
      <Link to={`${ROUTE.ADMIN}/${ROUTE.SOLUTIONS}/${AdminSolutionRoutes.workWithFilter}/${id}`}>
        <PencilIcon />
      </Link>
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
