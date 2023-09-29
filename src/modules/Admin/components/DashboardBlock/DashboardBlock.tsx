import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

interface IProps {
  text: string;
  url: string;
  image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  id: string;
  setActiveLink: (e: MouseEvent<HTMLAnchorElement>) => void;
  handleDeleteActiveLink: () => void;
}

export const DashboardBlock = ({ text, url, image, id, setActiveLink, handleDeleteActiveLink }: IProps) => {
  const Image = image;

  return (
    <Link
      to={`/admin/${url}`}
      className={styles.wrapper}
      id={id}
      onMouseEnter={setActiveLink}
      onMouseLeave={handleDeleteActiveLink}
    >
      <Image />
      <p className={styles.text}>{text}</p>
    </Link>
  );
};
