import { Characteristic } from 'store';

import { CharacteristicItemFilter } from 'components/CharacteristicItemFilter/CharacteristicItemFilter';

import { FC } from 'react';

import styles from './styles.module.scss';

type CharacteristicProps = Omit<Characteristic, 'id'>;

export const CharacteristicsListItem: FC<CharacteristicProps> = ({ filterGroupName, filtersForPlatforms }) => (
  <div className={styles.filterWrapper}>
    <div className={styles.filterTitle}>{filterGroupName}</div>
    <div className={styles.characteristicsListItem}>
      {filtersForPlatforms?.map(({ filterName, filterItemsForPlatforms, id }) => (
        <CharacteristicItemFilter key={id} filterName={filterName} filterItemsForPlatforms={filterItemsForPlatforms} />
      ))}
    </div>
  </div>
);
