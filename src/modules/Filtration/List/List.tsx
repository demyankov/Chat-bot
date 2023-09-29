import { Checkbox, Radio } from 'components';
import { IFilter, INPUTTYPE } from 'mocks';

interface IList {
  filter: IFilter;
  option: string;
  index: number;
}

export const List = ({ filter, option, index }: IList) => (
  <>
    {filter.type === INPUTTYPE.CHECKBOX && <Checkbox name={option} text={option} id={filter.id + index} />}
    {filter.type === INPUTTYPE.RADIO && (
      <Radio text={option} id={filter.id + index} name={filter.title} defaultChecked={index === 0} />
    )}
  </>
);
