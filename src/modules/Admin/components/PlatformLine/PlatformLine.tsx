import { PlatfromCard } from 'store';
import { BasketIcon, PencilIcon } from 'modules/Admin/assets';
import { Dispatch, SetStateAction, useState } from 'react';
import { CustomLogo } from 'components/CustomLogo/CustomLogo';

import { Link } from 'react-router-dom';

import { ROUTE, TabsRoutes } from 'modules/Admin/router/routes';

import styles from './styles.module.scss';

import { SwitchBtn } from '../SwitchBtn/SwitchBtn';

interface PlatformLineProps {
  platform: PlatfromCard;
  handleToggle: (isActive: boolean, platformId: string) => Promise<void>;
  setActiveId: Dispatch<SetStateAction<string>>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setErrorMessage: Dispatch<SetStateAction<string>>;
}

export const PlatformLine = ({
  platform,
  handleToggle,
  setActiveId,
  setIsModalOpen,
  setErrorMessage,
}: PlatformLineProps) => {
  const { fileUrl, name, isActive, numberOfSolution, id } = platform;
  const [imageLoadError, setImageLoadError] = useState(false);

  const handleImageLoadError = () => setImageLoadError(true);

  const handleSwitch = (isToggled: boolean) => handleToggle(isToggled, id);

  return (
    <>
      <div className={styles.imageWrapper}>
        <span className={styles.image}>
          {!fileUrl || imageLoadError ? (
            <CustomLogo title={name} />
          ) : (
            <img src={`http://${fileUrl}`} onError={handleImageLoadError} alt="Platform icon" />
          )}
        </span>
      </div>
      <span className={styles.platformName}>{name}</span>
      <span className={styles.solutions}>{numberOfSolution}</span>
      <SwitchBtn
        isToggled={isActive}
        setIsToggled={handleSwitch}
        id={id}
        unActiveText="Неактивна"
        activeText="Активна"
      />
      <Link to={`${ROUTE.ADMIN}/${ROUTE.PLATFORMS}/${id}/${TabsRoutes.mainOptions}`}>
        <PencilIcon />
      </Link>
      <button
        type="button"
        onClick={() => {
          setActiveId(id);
          setErrorMessage('');
          setIsModalOpen(true);
        }}
      >
        <BasketIcon />
      </button>
    </>
  );
};
