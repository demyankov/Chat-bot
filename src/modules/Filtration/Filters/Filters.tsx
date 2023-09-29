import { useState } from 'react';

import { DescriptionIcon } from 'assets';

import styles from './styles.module.scss';

import { TextFilter } from './TextFilter/TextFilter';

import { ToggleButton } from '../ToggleButton/ToggleButton';

import { CheckItem } from '../CheckItem/CheckItem';

import type { Filters as FiltersType } from 'store/types';

const VISIBLE_ITEMS = 4; // количество видимых элементов в группе

interface FiltersGroupProps {
  filtersData: FiltersType;
  showFullList?: boolean;
  showTitle?: boolean;
}

export const Filters = ({ filtersData, showFullList = false, showTitle = true }: FiltersGroupProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prevState) => !prevState);
  const filterItemsCount = filtersData.filterItemsForPlatforms.length;

  if (filtersData.inputType === 'text') {
    return <TextFilter filter={filtersData} />;
  }

  return (
    <div className={styles.filterGroup}>
      {showTitle && (
        <h6 className={styles.filterName}>
          {filtersData.filterName}
          {filtersData.descriptionShort && <DescriptionIcon />}
        </h6>
      )}
      <ul className={styles.filterOptions}>
        {filtersData.filterItemsForPlatforms.map(
          (option, index) =>
            (showFullList || isOpen || index + 1 <= VISIBLE_ITEMS) && (
              <CheckItem
                filterName={filtersData.id}
                type={filtersData.inputType as 'checkbox' | 'radio'}
                filter={option}
                index={index}
                key={option.id}
              />
            ),
        )}
      </ul>
      {!showFullList && filterItemsCount > VISIBLE_ITEMS && (
        <ToggleButton moreItem={filterItemsCount - VISIBLE_ITEMS} isOpen={isOpen} onClick={toggleOpen} />
      )}
    </div>
  );
};
