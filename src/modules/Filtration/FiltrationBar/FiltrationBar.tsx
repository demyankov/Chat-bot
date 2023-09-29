import { useEffect, useRef } from 'react';
import { useAppDispatch, filtersSelector, useAppSelector, setPlatformsAction, updateFormState } from 'store';

import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { getTopFiltersAction } from 'store/actions/filters';

import { Loading, Alert } from 'sharedComponents';

import { ROUTE } from 'router';

import styles from './styles.module.scss';

import { Filters } from '../Filters/Filters';
import { getActiveFiltersId, getResetFormState } from '../../../helpers/filtration';

export const FiltrationBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const buttonRef = useRef<HTMLInputElement>(null);
  const { topPriorityFilters, isTopFiltersError, isTopFiltersLoading, formState } = useAppSelector(filtersSelector);

  const methods = useForm<Record<string, string | boolean>>({ defaultValues: formState });

  const onSubmit = (formData: Record<string, string | boolean>) => {
    const idFilterItems = getActiveFiltersId(formData);
    dispatch(
      setPlatformsAction({
        amount: '1',
        type: 'asc',
        idFilterItems,
      }),
    );
    dispatch(updateFormState(formData));
  };

  const handleFormChange = () => {
    buttonRef.current?.click();
  };

  const handleFormReset = () => {
    const resetFormState = getResetFormState(methods.getValues());

    methods.reset(resetFormState);
    dispatch(updateFormState(resetFormState));
    dispatch(
      setPlatformsAction({
        amount: '1',
        type: 'asc',
        idFilterItems: [],
      }),
    );
  };

  useEffect(() => {
    dispatch(getTopFiltersAction());
  }, [dispatch]);

  if (isTopFiltersLoading) {
    return (
      <div className={styles.wrapper}>
        <Loading size="s" />
      </div>
    );
  }

  if (isTopFiltersError) {
    return (
      <div className={styles.wrapper}>
        <Alert message="Ошибка загрузки фильтров" />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} onChange={handleFormChange}>
          <button type="button" onClick={handleFormReset}>
            Сбросить фильтры
          </button>
          <input type="submit" hidden ref={buttonRef} name="submit" />
          {topPriorityFilters.map((filtersData) => (
            <Filters filtersData={filtersData} key={filtersData.id} />
          ))}
        </form>
      </FormProvider>
      <button
        className="button buttonSecondary"
        type="button"
        onClick={() => {
          navigate(ROUTE.FILTERS);
          window.scrollTo(0, 0);
        }}
      >
        Все фильтры
      </button>
    </div>
  );
};
