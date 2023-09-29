import { passwordValidation } from 'shared/validationRules/validationRules';
import * as Yup from 'yup';

export const scheme = Yup.object().shape({
  password: passwordValidation,
  newPassword: Yup.string()
    .required('Обязательное для заполнения поле')
    .oneOf([Yup.ref('password')], 'Пароли должны совпадать'),
});
