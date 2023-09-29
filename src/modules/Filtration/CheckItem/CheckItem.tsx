import { Checkbox, Radio } from 'components';

import type { FilterItem } from '../../../store';

interface CheckItemProps {
  filter: FilterItem;
  index: number;
  type: 'checkbox' | 'radio';
  filterName: string;
}

export const CheckItem = ({ filter, type, filterName, index }: CheckItemProps) => (
  <>
    {type === 'checkbox' && <Checkbox text={filter.filterItemName} id={filter.id} name={filter.id} />}
    {type === 'radio' && (
      <>
        {index === 0 && <Radio text="Любое" value="" id={`default_${filterName}`} defaultChecked name={filterName} />}
        <Radio text={filter.filterItemName} value={filter.id} id={filter.id} name={filterName} />
      </>
    )}
  </>
);
