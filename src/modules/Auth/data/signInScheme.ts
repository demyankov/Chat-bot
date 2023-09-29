import * as Yup from 'yup';

import { emailValidation, passwordValidation } from 'shared/validationRules/validationRules';

export const schema = Yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
});
