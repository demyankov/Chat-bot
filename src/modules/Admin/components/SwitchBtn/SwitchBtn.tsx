import cn from 'classnames';
import { Dispatch, SetStateAction } from 'react';

import styles from './styles.module.scss';

interface ISwitchBtn {
  isToggled: boolean;
  setIsToggled: Dispatch<SetStateAction<boolean>> | ((isToggled: boolean) => void);
  id: string;
  unActiveText?: string;
  activeText?: string;
}

export const SwitchBtn = ({ isToggled, setIsToggled, id, unActiveText = '', activeText = '' }: ISwitchBtn) => {
  const switcherStyle = cn(styles.switcher, {
    [styles.toggled]: isToggled,
  });
  const prefixStyle = cn(styles.prefix, {
    [styles.toggledPrefix]: isToggled,
  });

  const handleCheckboxClick: React.MouseEventHandler<HTMLInputElement> = () => {
    setIsToggled(!isToggled);
  };

  const prefix = <span className={prefixStyle}>{isToggled ? activeText : unActiveText}</span>;
  return (
    <div className={styles.wrapper}>
      {prefix}
      <label htmlFor={id} className={switcherStyle}>
        <input id={id} type="checkbox" className={styles.input} onClick={handleCheckboxClick} />
      </label>
    </div>
  );
};
