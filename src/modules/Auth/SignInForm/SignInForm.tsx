import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTE } from 'router';
import { useEffect, useState } from 'react';
import { getUser, signInAction, useAppDispatch, useAppSelector } from 'store';
import { Input } from 'sharedComponents';

import { buttonStyles } from '../UI';
import styles from '../styles.module.scss';
import { FacebookIcon, GoogleIcon, VKIcon, ErrorIcon } from '../assets';
import { isFormFilled } from '../utils/isFormFilled';
import { getToken } from '../api/getToken';
import { SignInUserType } from '../types';
import { schema } from '../data/signInScheme';

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignInUserType>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const [password, setPassword] = useState<string>('');
  const [tokenError, setTokenError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { isAuth } = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<SignInUserType> = (data) => {
    setIsLoading(true);
    getToken(data)
      .then(() => {
        dispatch(signInAction());
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setTokenError(error.data?.message || error.response?.data?.message);
      });
  };

  useEffect(() => {
    if (isAuth) {
      navigate(`${ROUTE.HOME}`, { replace: true });
    }
  }, [isAuth, navigate]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h3>Вход в аккаунт</h3>
      <div className={styles.inputGroupWrapper}>
        <Input
          register={register}
          defaultChecked
          id="email"
          iconStart
          placeholder="Email"
          error={errors.email?.message || null}
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

        <div className={styles.remindPasswordWrapper}>
          <Link to={ROUTE.RESET_PASSWORD} className={styles.remindPassword}>
            Забыли пароль?
          </Link>
        </div>
      </div>
      <button
        className={`${buttonStyles.button} ${buttonStyles.invertButton}`}
        type="submit"
        disabled={!!Object.keys(errors).length || isLoading || !isFormFilled(getValues())}
      >
        Войти
      </button>
      {tokenError && (
        <p className={styles.error}>
          <ErrorIcon />
          {tokenError}
        </p>
      )}
      <p className={styles.sideCenter}>Войти с помощью</p>
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
      <p className={styles.enter}>
        <span>Нет аккаунта? </span>
        <Link to={ROUTE.SIGN_UP}>Зарегистрироваться</Link>
      </p>
    </form>
  );
};
