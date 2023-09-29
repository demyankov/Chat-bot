import { IFilter } from 'mocks';

import styles from '../styles.module.scss';

export const InputFilter = ({ filter }: { filter: IFilter }) => (
  <div className={styles.inputWrapper}>
    {filter.placeholders &&
      filter.placeholders.map((placeholder, index) => (
        <input
          className="input"
          placeholder={placeholder}
          id={filter.id + index}
          key={filter.id + index}
          type={filter.type}
        />
      ))}
  </div>
);
