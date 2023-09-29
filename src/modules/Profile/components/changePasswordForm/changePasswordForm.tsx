import { yupResolver } from '@hookform/resolvers/yup';
import { isFormFilled } from 'modules/Auth/utils/isFormFilled';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { changePassword } from '../../api';
import { passwordScheme } from '../../data';
import styles from '../../styles/styles.module.scss';
import { ChangePasswordType } from '../../types';
import { Input } from '../../UI';

export const ChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<ChangePasswordType>({
    mode: 'onChange',
    resolver: yupResolver(passwordScheme),
  });

  const [messageResponse, setMessageResponse] = useState<string>('');

  const onSubmit: SubmitHandler<ChangePasswordType> = (data) => {
    const querryParams = { newPassword: data.password };
    changePassword(querryParams)
      .then(({ message }) => {
        reset();
        setMessageResponse(message);
      })
      .catch((error) => setMessageResponse(error.response.data.message));
  };

  const isFormInvalid = Object.keys(errors).length > 0 || isFormFilled(getValues());

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputGroupWrapper}>
        <Input
          register={register}
          id="password"
          label="Новый пароль"
          type="password"
          error={errors.password?.message}
        />
        <Input
          register={register}
          id="passwordConfirm"
          label="Подтверждение нового пароля"
          type="password"
          error={errors.passwordConfirm?.message}
        />
      </div>
      <button type="submit" className={styles.button} disabled={!isFormInvalid}>
        Сохранить
      </button>
      {messageResponse && (
        <p className={messageResponse === 'success' ? styles.success : styles.error}>{messageResponse}</p>
      )}
    </form>
  );
};
