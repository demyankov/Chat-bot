import styles from './styles.module.scss';

interface IProps {
  name: string;
  fullname: string;
  // eslint-disable-next-line react/require-default-props
  avatar?: string;
}

export const ProfileIcon = ({ name, fullname, avatar }: IProps) => (
  <div className={styles.profile}>
    <p className={styles.name}>
      {name} {fullname}
    </p>
    {avatar ? (
      <img src={avatar} alt={`${name} avatar`} width="56" height="56" />
    ) : (
      <div className={styles.icon}>{name[0].toUpperCase()}</div>
    )}
  </div>
);
