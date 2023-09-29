import { TargetPortal } from 'shared';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IProps {
  children: ReactNode;
  target: TargetPortal;
}

export const Portal = ({ children, target }: IProps) => {
  const container = document.getElementById(target) as HTMLElement;
  return createPortal(children, container);
};
