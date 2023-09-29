import { MouseEvent, ReactElement } from 'react';

import styles from './styles.module.scss';

export enum SliderArrowsDirection {
  left = 'left',
  right = 'right',
}

interface ISliderArrow {
  direction: SliderArrowsDirection;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}
const SliderArrow = ({ onClick, direction }: ISliderArrow): ReactElement => {
  const className = direction === SliderArrowsDirection.left ? styles.prevArrow : styles.nextArrow;
  return <div className={className} onClick={onClick} />;
};

export { SliderArrow };
