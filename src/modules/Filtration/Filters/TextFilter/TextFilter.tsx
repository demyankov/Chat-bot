import { useFormContext } from 'react-hook-form';

import { FilterItem, Filters, SolutionFilter } from 'store';

import styles from './styles.module.scss';

interface TextFilterProps {
  filter: Filters | SolutionFilter;
}

export const TextFilter = ({ filter }: TextFilterProps) => {
  let items: FilterItem[];
  const { register } = useFormContext();

  if ('filterItemsForPlatforms' in filter) {
    items = filter.filterItemsForPlatforms;
  } else {
    items = filter.filterItemsForSolutions;
  }

  return (
    <>
      <p className={styles.inputTextTitle}>{filter.filterName}</p>
      <div className={styles.inputWrapper}>
        {items.map((item) => {
          const { id } = item;

          return <input className="input" id={id} key={id} type="text" {...register(id)} />;
        })}
      </div>
    </>
  );
};
