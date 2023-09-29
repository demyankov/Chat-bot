import { nameValidation } from 'shared';
import * as Yup from 'yup';

export const nameScheme = Yup.object().shape({
  name: nameValidation,
  fullname: nameValidation,
});
