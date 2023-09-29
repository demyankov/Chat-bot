import { CrossIcon } from 'modules/Admin/assets';
import { deleteOption, useAppDispatch } from 'store';

import styles from './styles.module.scss';

interface FilterOptionItemProps {
  filterItemName: string;
  id: string;
  setButtonActive: (isActive: boolean) => void;
}

export const FilterOptionItem = ({ filterItemName, id, setButtonActive }: FilterOptionItemProps) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(deleteOption(id));
    setButtonActive(true);
  };

  return (
    <div className={styles.wrapper} onClick={handleDelete} id={id}>
      {filterItemName}
      <button type="button">
        <CrossIcon />
      </button>
    </div>
  );
};
