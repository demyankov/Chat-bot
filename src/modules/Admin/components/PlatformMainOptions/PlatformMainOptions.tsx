import { useForm, SubmitHandler, Controller } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import {
  CreatePlatformFields,
  CreatePlatformFieldsName,
  MainOptionsFielsdId,
  MainOptionsRequest,
  MainOptionsFormFiels,
} from 'modules/Admin/types/platformsTypes';

import { createPlatform } from 'modules/Admin/api/createPlatform';

import {
  useAppDispatch,
  useAppSelector,
  setMessage,
  setIsModalOpen,
  setIsPlafromActive,
  setIsLoading,
  toggleActivePlatform,
} from 'store';

import { getIsLoading, getIsModalOpen, getIsPlatformActive, getMessage } from 'store/selectors/adminPlatformSelector';

import { createPlatformScheme } from 'modules/Admin/data';

import { useNavigate, useParams } from 'react-router';

import { TabsRoutes } from 'modules/Admin/router/routes';

import cn from 'classnames';

import { ChangeEvent, useEffect, useState } from 'react';

import { editPlatformMainOptions } from 'store/actions/platformMainOptions';

import { Loading, ModalInfo, TextArea } from 'sharedComponents';

import { getErrorMessage, convertToCreatePlatformDTO, initFormValues } from './helpers';

import styles from './styles.module.scss';

import { FileInput } from '../FileInput/FileInput';

import { TextInput } from '../TextInput/TextInput';
import { NumberInput } from '../NumberInput/NumberInput';

import { ROUTE } from '../../router/routes';

import buttonStyle from '../../../../styles/button.style.module.scss';
import { SwitchBtn } from '../SwitchBtn/SwitchBtn';

export const PlatformMainOptions = () => {
  const [imageLink, setImageLink] = useState<string>('');
  const { platformId: currentPlatformId } = useParams();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsLoading);
  const message = useAppSelector(getMessage);
  const isModalOpen = useAppSelector(getIsModalOpen);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
    reset,
    trigger,
    setValue,
  } = useForm<MainOptionsFormFiels>({
    mode: 'onChange',
    defaultValues: initFormValues(dispatch, setIsPlafromActive, setImageLink, currentPlatformId),
    resolver: yupResolver(createPlatformScheme),
  });

  const isActivePlatform = useAppSelector(getIsPlatformActive);

  const navigate = useNavigate();

  const watchPriceFrom = watch(CreatePlatformFieldsName.priceFrom);
  const watchPriceTo = watch(CreatePlatformFieldsName.priceTo);

  useEffect(() => {
    if (watchPriceFrom) trigger('priceMax');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchPriceFrom]);

  useEffect(() => {
    if (watchPriceTo) trigger('priceMin');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchPriceTo]);

  const onSubmit: SubmitHandler<MainOptionsFormFiels> = async (data) => {
    dispatch(setMessage(''));
    dispatch(setIsLoading(true));
    try {
      const platformDTO: MainOptionsRequest = convertToCreatePlatformDTO(data, isActivePlatform);
      if (!currentPlatformId) {
        const { id: platformId } = await createPlatform(platformDTO);
        const editPlatformOptionsPath = `${ROUTE.ADMIN}/${ROUTE.PLATFORMS}/${platformId}/${TabsRoutes.filtersOptions}`;
        navigate(editPlatformOptionsPath);
      } else {
        if (platformDTO.file === null || typeof platformDTO.file === 'string') {
          delete platformDTO.file;
        }
        platformDTO.isActive = isActivePlatform;
        await editPlatformMainOptions(currentPlatformId, platformDTO);

        const newData = await initFormValues(dispatch, setIsPlafromActive, setImageLink, currentPlatformId)();
        reset(newData);
        dispatch(setMessage('Данные успешно сохранены.'));
        dispatch(setIsModalOpen(true));
      }
    } catch (e: unknown) {
      dispatch(setIsLoading(false));
      const errorMessage = getErrorMessage(e);
      dispatch(setMessage(errorMessage));
      dispatch(setIsModalOpen(true));
    }
  };

  const handleCloseModal = (): void => {
    dispatch(setIsModalOpen(false));
  };

  const handleOnchangePrice = (fieldName: CreatePlatformFieldsName) => (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    /** обрабатываем значения в формате "1e1 | 000001 | .0" убирая e и 0 */
    const newVal = Number.isNaN(parseFloat(value)) ? value : parseFloat(value);
    setValue(fieldName, newVal);
    trigger(fieldName);
  };

  const handleActivePlatform = () => {
    dispatch(toggleActivePlatform());
  };

  const disableSaveBtn = isLoading || Object.values(errors).some((err) => Object.keys(err).length);

  const saveButtonStyle = cn(buttonStyle.invertButton, styles.saveBtn);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <div className={styles.switcherBtnContainer}>
        <SwitchBtn
          isToggled={isActivePlatform}
          setIsToggled={handleActivePlatform}
          id="switcher-btn-platform-1"
          unActiveText="Неактивна"
          activeText="Активна"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.name}>
          <TextInput
            name={CreatePlatformFieldsName.name}
            id={MainOptionsFielsdId.nameId}
            register={register}
            label={CreatePlatformFields.name}
            error={errors[CreatePlatformFieldsName.name]}
          />
        </div>
        <div className={styles.link}>
          <TextInput
            name={CreatePlatformFieldsName.platfomLink}
            id={MainOptionsFielsdId.linkId}
            register={register}
            label={CreatePlatformFields.platfomLink}
            error={errors[CreatePlatformFieldsName.platfomLink]}
          />
        </div>
        <div className={styles.description}>
          <TextArea
            name={CreatePlatformFieldsName.description}
            id={MainOptionsFielsdId.descriptionId}
            register={register}
            label={CreatePlatformFields.description}
            error={errors[CreatePlatformFieldsName.description]?.message}
            maxLength={400}
            className={styles.field}
          />
        </div>
        <div className={styles.priceWrapper}>
          <div className={styles.priceLabel}>
            {CreatePlatformFields.price}
            <div className={styles.price}>
              <Controller
                control={control}
                name={CreatePlatformFieldsName.priceFrom}
                render={({ field: { value, onChange, ...field } }) => (
                  <NumberInput
                    {...field}
                    size="m"
                    id={MainOptionsFielsdId.priceFromId}
                    register={register}
                    error={errors[CreatePlatformFieldsName.priceFrom]}
                    inputPrefix="от"
                    onChange={handleOnchangePrice(CreatePlatformFieldsName.priceFrom)}
                  />
                )}
              />
              <Controller
                control={control}
                name={CreatePlatformFieldsName.priceTo}
                render={({ field: { value, onChange, ...field } }) => (
                  <NumberInput
                    {...field}
                    size="m"
                    id={MainOptionsFielsdId.priceToid}
                    register={register}
                    defaultValue=""
                    error={errors[CreatePlatformFieldsName.priceTo]}
                    inputPrefix="до"
                    onChange={handleOnchangePrice(CreatePlatformFieldsName.priceTo)}
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div className={styles.file}>
          <Controller
            control={control}
            name={CreatePlatformFieldsName.downloadFile}
            rules={{ required: 'Recipe picture is required' }}
            render={({ field: { value, onChange, ...field } }) => (
              <FileInput
                {...field}
                label="Логотип платформы"
                value={value as File}
                id={MainOptionsFielsdId.fileId}
                onChange={onChange}
                error={errors[CreatePlatformFieldsName.downloadFile]}
                imageLink={imageLink}
              />
            )}
          />
        </div>
        <button className={saveButtonStyle} type="submit" disabled={disableSaveBtn}>
          Сохранить
        </button>
      </form>
      <ModalInfo message={message} setIsOpen={setIsModalOpen} isOpen={isModalOpen} handleClick={handleCloseModal} />
    </>
  );
};
