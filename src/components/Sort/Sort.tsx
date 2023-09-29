import { useState } from 'react';
import Select from 'react-select';

import styles from './styles.module.scss';

const options = [
  { value: 'asc', label: 'A - Z' },
  { value: 'desc', label: 'Z - A' },
];

export const Sort = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSortChange = () => {
    setSelectedOption(selectedOption);
  };
  return (
    <div className={styles.sort}>
      <Select
        value={selectedOption}
        onChange={handleSortChange}
        options={options}
        placeholder="A - Z"
        styles={{
          control: (provided) => ({
            ...provided,
            border: '1px solid #ECECEC',
            borderRadius: '8px',
          }),
          indicatorSeparator: (provided) => ({
            ...provided,
            background: 'none',
          }),
        }}
      />
    </div>
  );
};
