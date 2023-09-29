import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ROUTE } from 'router';
import { useState } from 'react';
import { Input } from 'sharedComponents';

import { FacebookIcon, GoogleIcon, VKIcon, ErrorIcon } from '../assets';
import styles from '../styles.module.scss';
import buttonStyles from '../UI/buttonStyles/button.styles.module.scss';
import { schema } from '../data/registrationScheme';
import { RegisterUserType } from '../types';
import { isFormFilled } from '../utils/isFormFilled';
import { userRegistration } from '../api';

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<RegisterUserType>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const [password, setPassword] = useState<string>('');
  const [registrationError, setRegistrationError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RegisterUserType> = (data) => {
    setIsLoading(true);

    userRegistration(data)
      .then(() => {
        navigate(ROUTE.SIGN_IN);
        setIsLoading(false);
      })
      .catch((error) => {
        setRegistrationError(error.response.data.message);
        setIsLoading(false);
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <h3>Регистрация</h3>
      <div className={styles.inputGroupWrapper}>
        <Input register={register} id="email" iconStart placeholder="Email" error={errors.email?.message || null} />
        <Input register={register} id="name" iconStart placeholder="Имя" error={errors.name?.message || null} />
        <Input
          register={register}
          id="fullname"
          iconStart
          placeholder="Фамилия"
          error={errors.fullname?.message || null}
        />
        <Input
          register={register}
          id="password"
          placeholder="Пароль"
          type="password"
          error={errors.password?.message || null}
          value={password}
          onInput={({ currentTarget }) => {
            setPassword(currentTarget.value);
          }}
        />
      </div>
      <button
        className={`${buttonStyles.button} ${buttonStyles.invertButton}`}
        type="submit"
        disabled={!!Object.keys(errors).length || isLoading || !isFormFilled(getValues())}
      >
        Зарегистрироваться
      </button>
      {registrationError && (
        <p className={styles.error}>
          <ErrorIcon />
          {registrationError}
        </p>
      )}
      <p className={styles.sideCenter}>или</p>
      <div className={styles.socialWrapper}>
        <button className={buttonStyles.button} type="button">
          <GoogleIcon /> Google
        </button>
        <button className={buttonStyles.button} type="button">
          <FacebookIcon />
          Facebook
        </button>
        <button className={buttonStyles.button} type="button">
          <VKIcon /> VK
        </button>
      </div>
      <p className={styles.text}>
        Нажимая “Зарегистрироваться”, Вы соглашаетесь с условиями{' '}
        <NavLink to="/" className={styles.license}>
          лицензионного договора, политикой конфиденциальности
        </NavLink>
        и предоставляете согласие на обработку персональных данных
      </p>
      <p className={styles.enter}>
        Уже есть аккаунт? <Link to={ROUTE.SIGN_IN}>Войти</Link>
      </p>
    </form>
  );
};
