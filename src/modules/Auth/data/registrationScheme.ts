import { emailValidation, nameValidation, passwordValidation } from 'shared/validationRules/validationRules';

import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: nameValidation,
  email: emailValidation,
  password: passwordValidation,
});
