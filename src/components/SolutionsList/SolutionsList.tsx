import { SolutionCardItem } from 'components';
import { SolutionCard, getUser, useAppSelector } from 'store';
import { ROLES } from 'shared';

import styles from '../PlatformList/styles.module.scss';

interface SolutionsListProps {
  solutions: SolutionCard[];
}

export const SolutionsList = ({ solutions }: SolutionsListProps) => {
  const { isAuth, role } = useAppSelector(getUser);
  const isAuthAsUser = isAuth && role?.role === ROLES.USER;

  return (
    <div className={styles.platformList}>
      {solutions.map((solution) => {
        const { description, name, id, priceMin, platform, isFavorite } = solution;

        return (
          <SolutionCardItem
            isAuth={isAuthAsUser}
            isFavorite={isFavorite}
            description={description}
            name={name}
            key={id}
            platformName={platform.name}
            platformLogoLink={platform.fileUrl}
            priceMin={+priceMin}
          />
        );
      })}
    </div>
  );
};
