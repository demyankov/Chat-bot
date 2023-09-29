import { namReviewValidation, reviewValidation } from 'shared';
import * as Yup from 'yup';

export const reviewFormSchema = Yup.object().shape({
  date: Yup.date().required('Дата обязательна для заполнения'),
  author: namReviewValidation,
  text: reviewValidation,
});
