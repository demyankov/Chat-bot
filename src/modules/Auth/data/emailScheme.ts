import { emailValidation } from 'shared/validationRules/validationRules';
import * as Yup from 'yup';

export const schema = Yup.object().shape({
  email: emailValidation,
});
