import { close } from 'assets';
import { buttonStyles } from 'modules/Auth/UI';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from 'modules/Auth/data/modalSchema';
import { useState, MouseEvent, useEffect } from 'react';
import InputMask from 'react-input-mask';
import { Portal } from 'components/Portal/Portal';
import { TargetPortal } from 'shared';
import { Input, TextArea } from 'sharedComponents';
import { findSolutionRequest, UserModalDataType } from 'api';
import cn from 'classnames';

import styles from './styles.module.scss';

interface ModalProps {
  closeModal: () => void;
}

export const ModalSolution = ({ closeModal }: ModalProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState(false);
  const [serverError, setServerError] = useState<string>('');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleCloseModal = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    closeModal();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserModalDataType>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: UserModalDataType) => {
    setIsLoading(true);
    try {
      await findSolutionRequest(data);
      setIsLoading(false);
      setShowMessage(true);
    } catch (error: any) {
      setIsLoading(false);
      if (error.response && error.response.data) {
        setServerError(error.response.data.message);
      } else {
        setServerError('Неизвестная ошибка');
      }
    }
  };
  const buttonClasses = cn(buttonStyles.button, buttonStyles.invertButton, styles.btn);
  const isSubmitDisabled = !!Object.keys(errors).length || isLoading;

  return (
    <Portal target={TargetPortal.MODAL}>
      <div className={styles.modal}>
        <div className={styles.content}>
          <button type="button" onClick={handleCloseModal}>
            <img className={styles.picture} src={close} alt="close" />
          </button>
          <h3 className={styles.title}>
            Оставьте свои контактные данные и мы подберем <br />
            подходящее для Вас решение
          </h3>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <div className={styles.wrap}>
              <div className={styles.text}>
                Имя<span className={styles.star}>*</span>
              </div>
              <Input register={register} id="name" error={errors.name?.message || null} className={styles.input} />
            </div>
            <div className={styles.wrap}>
              <div className={styles.text}>
                Email<span className={styles.star}>*</span>
              </div>
              <Input register={register} id="email" error={errors.email?.message || null} className={styles.input} />
            </div>
            <div className={styles.wrap}>
              <div className={styles.text}>
                Номер телефона<span className={styles.star}>*</span>
              </div>
              <div className={styles.container}>
                <InputMask
                  mask="+7 999 999 9999"
                  maskChar="_"
                  {...register('phone')}
                  id="phone"
                  placeholder="+7 ___ ___ ____"
                  className={styles.inputMask}
                />
                {errors.phone && <div className={styles.error}>{errors.phone.message}</div>}
              </div>
            </div>
            <div className={styles.wrap}>
              <div className={styles.text}>Сообщение</div>
              <TextArea
                name="message"
                id="message"
                placeholder="Подробно опишите, какие задачи должна решать платформа (до 200 символов)"
                register={register}
                error={errors.message?.message}
                maxLength={200}
                className={styles.field}
              />
            </div>
            {serverError && <div className={styles.error}>Ошибка: {serverError}</div>}
            <div className={styles.wrapper}>
              <button className={buttonClasses} type="submit" disabled={isSubmitDisabled}>
                Отправить
              </button>
              <div className={styles.agreement}>
                Нажимая кнопку, Вы соглашаетесь с условиями&nbsp;
                <a href="https://example.com" className={styles.license}>
                  лицензионного договора, политикой конфиденциальности&nbsp;
                </a>
                и предоставляете согласие на обработку персональных данных
              </div>
            </div>
          </form>
          {showMessage && (
            <div className={styles.message}>
              <button type="button" onClick={handleCloseModal}>
                <img className={styles.picture} src={close} alt="close" />
              </button>
              <h1 className={styles.titleMes}>Спасибо!</h1>
              <h6 className={styles.subtitle}>
                Ваше сообщение
                <br />
                успешно отправлено
              </h6>
            </div>
          )}
        </div>
      </div>
    </Portal>
  );
};
