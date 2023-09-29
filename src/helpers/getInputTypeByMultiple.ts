import { INPUTTYPE } from 'mocks';

type Props = keyof typeof INPUTTYPE;

export const getInputTypeByMultiple = (isMultiple: boolean): Props => {
  const type = isMultiple ? INPUTTYPE.CHECKBOX : INPUTTYPE.RADIO;

  return type as Props;
};
