import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from 'router';
import { Input } from 'sharedComponents';

import { buttonStyles } from '../UI';
import styles from '../styles.module.scss';
import { ErrorIcon, PlaneIcon } from '../assets';
import { isFormFilled } from '../utils/isFormFilled';
import { schema } from '../data/emailScheme';
import { sendEmail } from '../api/sendEmail';

export interface ResetPasswordFormsType {
  email: string;
}

export const ResetPasswordForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<ResetPasswordFormsType>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const onSubmit: SubmitHandler<ResetPasswordFormsType> = () => {
    const form = getValues();
    const requestParams = { to: form.email };
    sendEmail(requestParams)
      .then(() => {
        setIsLoading(false);
        setIsSuccess(true);
        reset();
      })
      .catch((errorResponse) => {
        setIsLoading(false);
        setIsSuccess(false);
        setError(errorResponse.response.data.error);
      });
  };

  return !isSuccess ? (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2>Зaбыли свой пароль?</h2>
      <p>
        Введите email, указанный при регистрации. <br />
        Мы отправим письмо для сброса пароля
      </p>
      <div className={styles.inputGroupWrapper}>
        <Input
          register={register}
          label="Email"
          id="email"
          iconStart
          placeholder="Email"
          error={errors.email?.message || null}
          value={email}
          onInput={({ currentTarget }) => {
            setEmail(currentTarget.value);
          }}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <button
          className={`${buttonStyles.button} ${buttonStyles.invertButton}`}
          type="submit"
          disabled={!!Object.keys(errors).length || isLoading || !isFormFilled(getValues())}
        >
          Отправить письмо
        </button>
        <Link to={ROUTE.SIGN_IN} className={styles.buttonSecondary}>
          Войти в систему
        </Link>
      </div>
      {error && (
        <p className={styles.error}>
          <ErrorIcon />
          {error}
        </p>
      )}
    </form>
  ) : (
    <form className={styles.form}>
      <h3>Восстановление пароля</h3>
      <p> Проверьте свою электронную почту для получения инструкций о том, как cбросить пароль</p>
      <p>
        <PlaneIcon /> {getValues().email}
      </p>

      <div className={styles.buttonWrapper}>
        <button
          className={`${buttonStyles.button} ${buttonStyles.invertButton}`}
          type="button"
          onClick={() => setIsSuccess(false)}
        >
          Не видишь этого? Попробовать снова
        </button>
      </div>
    </form>
  );
};
