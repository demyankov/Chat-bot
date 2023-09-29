import * as Yup from 'yup';

import {
  EMAIL_PATTERN,
  USERNAME_PATTERN,
  TEXT_PATTERN,
  REVIEW_TEXT_PATTERN,
  REVIEWNAME_PATTERN,
} from './regularExpressions';

export const passwordValidation = Yup.string()
  .matches(/^\S*$/, 'Пароль не может содержать символы пробела')
  .matches(/^[\x00-\x7F]*$/, 'Пароль не может содержать буквы кириллицы')
  .min(5, 'Число символов должно быть не менее 5')
  .matches(/[A-Z]/, 'Пароль должен содержать заглавную букву')
  .matches(/[a-z]/, 'Пароль должен содержать прописную букву')
  .matches(/\d/, 'Пароль должен содержать цифру')
  .matches(/[^a-zA-Z\d]/, 'Пароль должен содержать специальный символ')
  .required('Обязательное для заполнения поле');

export const textValidation = Yup.string()
  .matches(TEXT_PATTERN, 'Допускаются только буквы, цифры и "-"')
  .max(30, 'Число символов должно быть не более 30');

export const textDescriptionValidation = Yup.string().matches(TEXT_PATTERN, 'Допускаются только буквы, цифры и "-"');

export const emailValidation = Yup.string()
  .matches(EMAIL_PATTERN, 'Некорректный email')
  .min(4, 'Число символов должно быть не менее 4')
  .required('Обязательное для заполнения поле');

export const nameValidation = Yup.string()
  .matches(USERNAME_PATTERN, 'Некорректное имя')
  .min(2, 'Число символов должно быть не менее 2')
  .max(25, 'Число символов должно быть не более 25')
  .required('Обязательное для заполнения поле');

export const phoneValidation = Yup.string()
  .matches(/^\+\d{1}\s\d{3}\s\d{3}\s\d{4}$/, 'Некорректный формат номера телефона')
  .min(8, 'Номер телефона должен содержать не менее 8 цифр')
  .max(17, 'Номер телефона должен содержать не более 17 цифр')
  .required('Обязательное для заполнения поле');

export const reviewValidation = Yup.string()
  .matches(REVIEW_TEXT_PATTERN, 'Введите отзыв')
  .max(200, 'Число символов должно быть не более 200')
  .required('Обязательное для заполнения поле');

export const namReviewValidation = Yup.string()
  .matches(REVIEWNAME_PATTERN, 'Некорректное имя')
  .min(2, 'Число символов должно быть не менее 2')
  .max(25, 'Число символов должно быть не более 25')
  .required('Обязательное для заполнения поле');
