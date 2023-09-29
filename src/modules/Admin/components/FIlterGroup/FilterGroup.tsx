import { IFiltersForPlatforms } from 'modules/Admin/types';
import { useFormContext } from 'react-hook-form';
import { Checkbox } from 'sharedComponents';

import styles from './styles.module.scss';

export const FilterGroup = ({ filtersForPlatforms }: IFiltersForPlatforms) => {
  const { register } = useFormContext();

  return (
    <div className={styles.filtersForPlatformsWrapper}>
      {filtersForPlatforms.map((filterForPlatform) => (
        <div key={filterForPlatform.id}>
          <div className={styles.checkboxGroup}>
            <div className={styles.filterName}>{filterForPlatform.filterName}</div>
            <div>
              {filterForPlatform.filterItemsForPlatforms.map((filterGroupItem) => (
                <Checkbox
                  key={filterGroupItem.id}
                  {...register(filterGroupItem.id)}
                  name={filterGroupItem.id}
                  text={filterGroupItem.filterItemName}
                  id={filterGroupItem.id}
                  value={filterGroupItem.id}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
