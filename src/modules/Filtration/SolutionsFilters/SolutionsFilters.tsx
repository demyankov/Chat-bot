import { DescriptionIcon } from 'assets';

import { useToogle } from 'hooks';

import { INPUTTYPE } from 'mocks';

import styles from '../Filters/styles.module.scss';

import { TextFilter } from '../Filters/TextFilter/TextFilter';

import { ToggleButton } from '../ToggleButton/ToggleButton';

import { CheckItem } from '../CheckItem/CheckItem';

import type { SolutionFilter as SolutionFilterType } from 'store/types';

const VISIBLE_ITEMS = 4; // количество видимых элементов в группе

interface FiltersGroupProps {
  filtersData: SolutionFilterType;
  showFullList?: boolean;
  showTitle?: boolean;
}

enum InputTypes {
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
  TEXT = 'text',
  NUMBER = 'number',
}

export const SolutionFilters = ({ filtersData, showFullList = false, showTitle = true }: FiltersGroupProps) => {
  const [isOpen, toggleOpen] = useToogle(false);

  const { id, inputType, filterName, descriptionLong, filterItemsForSolutions } = filtersData;
  const filterItemsCount = filterItemsForSolutions.length;
  const toggleButtonThreshold = !showFullList && filterItemsCount > VISIBLE_ITEMS;

  if (inputType === INPUTTYPE.TEXT) {
    return <TextFilter filter={filtersData} />;
  }

  return (
    <div className={styles.filterGroup}>
      {showTitle && (
        <h6 className={styles.filterName}>
          {filterName}
          {descriptionLong && <DescriptionIcon />}
        </h6>
      )}
      <ul className={styles.filterOptions}>
        {filterItemsForSolutions.map((option, index) => {
          const checkItemThreshold = showFullList || isOpen || index + 1 <= VISIBLE_ITEMS;
          const { id: optionId } = option;

          return (
            checkItemThreshold && (
              <CheckItem
                filterName={id}
                type={inputType as InputTypes.CHECKBOX | InputTypes.RADIO}
                filter={option}
                index={index}
                key={optionId}
              />
            )
          );
        })}
      </ul>
      {toggleButtonThreshold && (
        <ToggleButton moreItem={filterItemsCount - VISIBLE_ITEMS} isOpen={isOpen} onClick={toggleOpen} />
      )}
    </div>
  );
};
