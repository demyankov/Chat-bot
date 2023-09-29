import { PlatformFilter } from 'store';

import { FC } from 'react';

import styles from './styles.module.scss';

type CharacteristicProps = Omit<PlatformFilter, 'id'>;

export const CharacteristicItemFilter: FC<CharacteristicProps> = ({ filterName, filterItemsForPlatforms }) => {
  const filtersList: string = filterItemsForPlatforms.length
    ? filterItemsForPlatforms.reduce((acc, filter) => {
        acc += `${acc ? ', ' : ''}${filter.filterItemName}`;
        return acc;
      }, '')
    : 'Нет';
  return (
    <div className={styles.filterItemWrapper}>
      <div className={styles.name}>
        <div className={styles.filterGroupName}>{filterName}</div>
        <div className={styles.delimeterWrapper}>
          <div className={styles.delimeter} />
        </div>
      </div>
      <div className={styles.filters}>
        <span className={styles.filterName}>{filtersList}</span>
      </div>
    </div>
  );
};
