import styles from './styles.module.scss';

export const LoadingMessage = ({ message }: { message: string }) => (
  <div className={styles.wrapper}>
    <span className={styles.message}>{message}</span>
  </div>
);
