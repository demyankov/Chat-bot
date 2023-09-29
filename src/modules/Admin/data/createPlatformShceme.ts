import * as Yup from 'yup';

import { CreatePlatformFieldsName } from '../types/platformsTypes';

export const createPlatformScheme = Yup.object().shape({
  [CreatePlatformFieldsName.name]: Yup.string().required('Обязательное для заполнения поле'),
  [CreatePlatformFieldsName.platfomLink]: Yup.string().required('Обязательное для заполнения поле'),
  [CreatePlatformFieldsName.description]: Yup.string().required('Обязательное для заполнения поле'),
  [CreatePlatformFieldsName.priceFrom]: Yup.number()
    .required('Обязательное для заполнения поле')
    .min(0, 'Значение должно быть положительным числом')
    .test(
      CreatePlatformFieldsName.priceFrom,
      'Минимальное значение цены должно быть меньше максимального',
      function isValidPrice(value) {
        const priceTo = this.parent[CreatePlatformFieldsName.priceTo];
        return Number(priceTo) >= Number(value);
      },
    )
    .typeError('Значение должно быть положительным числом'),
  [CreatePlatformFieldsName.priceTo]: Yup.number()
    .required('Обязательное для заполнения поле')
    .min(0, 'Значение должно быть положительным числом')
    .test(
      CreatePlatformFieldsName.priceFrom,
      'Минимальное значение цены должно быть меньше максимального',
      function isValidPrice(value) {
        const priceFrom = this.parent[CreatePlatformFieldsName.priceFrom];
        return Number(priceFrom) <= Number(value);
      },
    )
    .typeError('Значение должно быть положительным числом'),
  [CreatePlatformFieldsName.downloadFile]: Yup.mixed().test(
    'file',
    'Неверный формат файла. Пожалуйста загрузите JPEG или PNG формат.',
    function checkFile(value) {
      if (!value) return true;
      const supportedFormats = ['image/jpeg', 'image/jpg', 'image/png'];
      return supportedFormats.includes(value.type);
    },
  ),
});
