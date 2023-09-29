import { textDescriptionValidation, textValidation } from 'shared/validationRules/validationRules';
import * as Yup from 'yup';

import { SolutionsFilterFormFields } from '../components/SolutionFilterOptions/config';

export const solutionsFilterScheme = Yup.object().shape({
  [SolutionsFilterFormFields.filterName]: textValidation.required('Обязательное для заполнения поле'),
  [SolutionsFilterFormFields.descriptionLong]: textDescriptionValidation
    .max(500, 'Число символов должно быть не более 500')
    .nullable(),
  [SolutionsFilterFormFields.filterItemName]: textValidation,
});
