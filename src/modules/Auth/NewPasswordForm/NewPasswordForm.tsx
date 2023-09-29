import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ROUTE } from 'router';
import { useSearchParams } from 'react-router-dom';
import { Input } from 'sharedComponents';

import styles from '../styles.module.scss';
import buttonStyles from '../UI/buttonStyles/button.styles.module.scss';
import { scheme } from '../data/newPasswordScheme';
import { NewPasswordType, ResetPasswordRequestType } from '../types';
import { isFormFilled } from '../utils/isFormFilled';
import { resetPassword } from '../api/resetPassword';
import { ErrorIcon } from '../assets';

export const NewPasswordForm = () => {
  const [error, setError] = useState();
  const [searchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<NewPasswordType>({
    mode: 'onChange',
    resolver: yupResolver(scheme),
  });
  const [newPassword, setNewPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<NewPasswordType> = () => {
    setIsLoading(true);
    const email = searchParams.get('email');
    const secret = searchParams.get('code');
    if (email && secret) {
      const requestParams: ResetPasswordRequestType = {
        email,
        secret,
        ...getValues(),
      };
      resetPassword(requestParams)
        .then(() => {
          navigate(ROUTE.SIGN_IN);
          setIsLoading(false);
        })
        .catch((errorResponse) => {
          setError(errorResponse.response.data.error);
          setIsLoading(false);
        });
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h3>Восстановление пароля</h3>
      <div className={styles.inputGroupWrapper}>
        <Input
          register={register}
          id="password"
          label="Пароль"
          placeholder="******"
          type="password"
          error={errors?.password?.message || null}
        />
        <Input
          register={register}
          id="newPassword"
          label="Подтвердите пароль"
          placeholder="******"
          type="password"
          error={errors?.newPassword?.message || null}
          value={newPassword}
          onInput={({ currentTarget }) => {
            setNewPassword(currentTarget.value);
          }}
        />
      </div>
      <button
        className={`${buttonStyles.button} ${buttonStyles.invertButton}`}
        type="submit"
        disabled={!!Object.keys(errors).length || isLoading || !isFormFilled(getValues())}
      >
        Восстановить
      </button>
      {error && (
        <p className={styles.error}>
          <ErrorIcon />
          {error}
        </p>
      )}
    </form>
  );
};
