import { SolutionCard } from 'store';
import { BasketIcon, PencilIcon } from 'modules/Admin/assets';
import { Dispatch, SetStateAction, useState } from 'react';
import { CustomLogo } from 'components/CustomLogo/CustomLogo';

import { Link } from 'react-router-dom';

import { ROUTE, TabsRoutes } from 'modules/Admin/router/routes';

import styles from './styles.module.scss';

import { SwitchBtn } from '../SwitchBtn/SwitchBtn';

interface SolutionLineProps {
  solution: SolutionCard;
  handleToggle: (isActive: boolean, solutionId: string) => void;
  setDeletingSolutionId: (id: string) => void;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const SolutionLine = ({ solution, handleToggle, setDeletingSolutionId, setIsModalOpen }: SolutionLineProps) => {
  const {
    name,
    isActive,
    id,
    platform: { fileUrl, name: platformName },
  } = solution;
  const [imageLoadError, setImageLoadError] = useState(false);

  const handleImageLoadError = () => setImageLoadError(true);

  const handleSwitch = (isToggled: boolean) => handleToggle(isToggled, id);

  return (
    <>
      <p className={styles.platformName}>{name}</p>
      <div className={styles.imageWrapper}>
        <span className={styles.image}>
          {!fileUrl || imageLoadError ? (
            <CustomLogo title={platformName} />
          ) : (
            <img src={`http://${fileUrl}`} onError={handleImageLoadError} alt="Platform icon" />
          )}
        </span>
        <p className={styles.platformName}>{platformName}</p>
      </div>
      <SwitchBtn
        isToggled={isActive}
        setIsToggled={handleSwitch}
        id={id}
        unActiveText="Неактивна"
        activeText="Активна"
      />
      <Link to={`${ROUTE.ADMIN}/${ROUTE.SOLUTIONS}/${id}/${TabsRoutes.mainOptions}`}>
        <PencilIcon />
      </Link>
      <button
        type="button"
        onClick={() => {
          setDeletingSolutionId(id);
          setIsModalOpen(true);
        }}
      >
        <BasketIcon />
      </button>
    </>
  );
};
