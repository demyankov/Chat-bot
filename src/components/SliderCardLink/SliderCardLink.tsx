import { ReactNode, MouseEvent, TouchEvent, useState } from 'react';

import { Link, LinkProps } from 'react-router-dom';

interface SliderCardLinkProps extends LinkProps {
  children: ReactNode;
}

const SliderCardLink = ({ to, children, ...rest }: SliderCardLinkProps) => {
  const [dragging, setDragging] = useState(false);

  const handleClick = (e: MouseEvent<HTMLAnchorElement> | TouchEvent<HTMLAnchorElement>) => {
    if (dragging) {
      e.preventDefault();
      setDragging(false);
    }
  };

  const handleMouseUp = (e: MouseEvent<HTMLAnchorElement> | TouchEvent<HTMLAnchorElement>) => {
    if (dragging) {
      e.preventDefault();
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.buttons === 1) {
      setDragging(true);
    }
  };

  const handleMouseDown = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  return (
    <Link
      to={to}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      {...rest}
    >
      {children}
    </Link>
  );
};

export { SliderCardLink };
