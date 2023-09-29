import { Characteristic } from 'store';
import { CharacteristicsListItem } from 'components/CharacteristicListItem/CharacteristicsListItem';

import { FC } from 'react';

import styles from './styles.module.scss';

interface CharacteristicsListProps {
  characteristics: Characteristic[];
  title: string;
}

export const CharacteristicsList: FC<CharacteristicsListProps> = ({ characteristics, title }) => (
  <div className={styles.characteristicsWrapper}>
    <div className={styles.characteristicsTitle}>{title}</div>
    <div className={styles.characteristicsList}>
      {characteristics?.map(({ filterGroupName, filtersForPlatforms, id }) => (
        <CharacteristicsListItem key={id} filterGroupName={filterGroupName} filtersForPlatforms={filtersForPlatforms} />
      ))}
    </div>
  </div>
);
