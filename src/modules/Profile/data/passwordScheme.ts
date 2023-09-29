import { passwordValidation } from 'shared';
import * as Yup from 'yup';

export const passwordScheme = Yup.object().shape({
  password: passwordValidation,
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password')], 'Пароли должны совпадать')
    .required('Подтвердите новый пароль'),
});
