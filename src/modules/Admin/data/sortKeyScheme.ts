import { textValidation } from 'shared/validationRules/validationRules';
import * as Yup from 'yup';

export const sortKeyScheme = Yup.object().shape({
  sortKey: textValidation,
});
