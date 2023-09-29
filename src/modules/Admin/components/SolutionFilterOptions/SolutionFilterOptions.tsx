import { yupResolver } from '@hookform/resolvers/yup';
import { isMultipleChoice } from 'helpers';
import { useToogle } from 'hooks';
import { PlusIcon } from 'modules/Admin/assets';
import { FilterOptionItem } from 'modules/Admin/components';
import { solutionsFilterScheme } from 'modules/Admin/data/solutionsFilterScheme';
import { ISolutionFilterForm } from 'modules/Admin/types';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';
import { Input, TextArea, Checkbox, Modal, ErrorNotification, SuccessNotification } from 'sharedComponents';
import {
  addOption,
  changeCurrentSolutionsFilter,
  clearCurrentSolutionsFilter,
  getCurrentSolutionsFilterSelector,
  getSolutionsFilterOptionsSelector,
  isSaveModalOpenSelector,
  getSolutionsFilterErrorSelector,
  setIsSaveModalOpen,
  setSolutionsFilterByIdAction,
  updateSolutionsFilterAction,
  useAppDispatch,
  useAppSelector,
  solutionsFilterLoadingMessageSelector,
  clearMessages,
} from 'store';

import { SolutionsFilterFormFields } from './config';
import styles from './styles.module.scss';

export const SolutionFilterOptions = () => {
  const navigate = useNavigate();
  const options = useAppSelector(getSolutionsFilterOptionsSelector);
  const isSaveModalOpen = useAppSelector(isSaveModalOpenSelector);
  const errorMessage = useAppSelector(getSolutionsFilterErrorSelector);
  const successMessage = useAppSelector(solutionsFilterLoadingMessageSelector);
  const [value, setValue] = useToogle();
  const [isCancelModalOpen, setCancelModalOpen] = useState(false);
  const currentFilter = useAppSelector(getCurrentSolutionsFilterSelector);
  const { filterName, inputType, topPriority, descriptionLong, id: currentId } = currentFilter;
  const multiplicity = isMultipleChoice(inputType);
  const { id: filterId } = useParams();
  const dispatch = useAppDispatch();

  const initialState = useMemo(
    () => ({
      filterName,
      topPriority,
      descriptionLong,
      multiplicity,
    }),
    [filterName, topPriority, descriptionLong, multiplicity],
  );

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<ISolutionFilterForm>({
    mode: 'onChange',
    defaultValues: useMemo(() => initialState, [initialState]),
    resolver: yupResolver(solutionsFilterScheme),
  });

  const isDisabled = (!isDirty && !value) || !isValid || !options.length;

  const handleAddOption = (): any => {
    const { filterItemName } = getValues();

    if (filterItemName) {
      dispatch(addOption(filterItemName));
    }
  };

  const handleCancelModalOpen = () => {
    setCancelModalOpen(true);
  };

  const onSubmit = () => {
    dispatch(setIsSaveModalOpen(true));
  };

  const handleSaveChanges = async () => {
    await dispatch(updateSolutionsFilterAction(currentFilter));
    navigate(-1);
    // return <SuccessNotification message="Изменения успешно сохранены" />;
  };

  const handleSaveModalOpen = (isOpen: boolean) => {
    dispatch(setIsSaveModalOpen(isOpen));
  };

  const handleQuit = () => {
    setCancelModalOpen(false);
    navigate(-1);
  };

  useEffect(() => {
    dispatch(clearMessages());

    if (filterId) {
      dispatch(setSolutionsFilterByIdAction(filterId));
    }
    return () => {
      dispatch(clearCurrentSolutionsFilter());
    };
    // eslint-disable-next-line
  }, [dispatch, filterId]);

  useEffect(() => {
    reset(initialState);
    // eslint-disable-next-line
  }, [currentId]);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        onChange={() => {
          dispatch(changeCurrentSolutionsFilter(getValues()));
        }}
        className={styles.form}
      >
        <div className={styles.wrapper}>
          <div className={styles.itemWrapper}>
            <Input
              id={SolutionsFilterFormFields.filterName}
              name={SolutionsFilterFormFields.filterName}
              label="Наименование фильтра"
              register={register}
              error={errors[SolutionsFilterFormFields.filterName]?.message}
            />

            <TextArea
              id={SolutionsFilterFormFields.descriptionLong}
              name={SolutionsFilterFormFields.descriptionLong}
              label="Текст подсказки к фильтру"
              maxLength={500}
              defaultValue={initialState[SolutionsFilterFormFields.descriptionLong]}
              register={register}
              error={errors[SolutionsFilterFormFields.descriptionLong]?.message}
              className={styles.textArea}
            />
          </div>
          <div className={styles.itemWrapper}>
            <div className={styles.optionsInputWrapper}>
              <p>Параметры к фильтру</p>
              <div className={styles.options}>
                <Input
                  id={SolutionsFilterFormFields.filterItemName}
                  register={register}
                  error={errors[SolutionsFilterFormFields.filterItemName]?.message}
                />
                <div className={styles.plusIconWrapper} onClick={handleAddOption}>
                  <PlusIcon />
                </div>
              </div>
              <div className={styles.optionsWrapper}>
                {options.map(({ filterItemName, id }) => (
                  <FilterOptionItem filterItemName={filterItemName} id={id} key={id} setButtonActive={setValue} />
                ))}
              </div>
            </div>
            <ul className={styles.checkboxWrapper}>
              <Checkbox
                id={SolutionsFilterFormFields.multiplicity}
                text="Множественность выбора"
                {...register(SolutionsFilterFormFields.multiplicity)}
              />
              <Checkbox
                id={SolutionsFilterFormFields.topPriority}
                text="Отображать на главной странице"
                {...register(SolutionsFilterFormFields.topPriority)}
              />
            </ul>
          </div>
        </div>
        <div className={styles.buttonsWrapper}>
          <button className=" button buttonWithoutBorder" type="button" onClick={handleQuit}>
            Отмена
          </button>
          <button className="button buttonSecondary" type="submit" disabled={isDisabled}>
            Добавить фильтр
          </button>
        </div>
      </form>
      {isCancelModalOpen && (
        <Modal setIsActiveModal={setCancelModalOpen} submitButtonText="Выйти" handleclick={handleCancelModalOpen}>
          <p>Восстановить изменения будет невозможно. Вы уверены, что хотите выйти?</p>
        </Modal>
      )}
      {isSaveModalOpen && (
        <Modal setIsActiveModal={handleSaveModalOpen} handleclick={handleSaveChanges} submitButtonText="Сохранить">
          <p>Отменить изменения будет невозможно. Вы уверены, что хотите сохранить изменения?</p>
        </Modal>
      )}
      {errorMessage && <ErrorNotification message={errorMessage} />}
      {successMessage && <SuccessNotification message={successMessage} />}
    </>
  );
};
