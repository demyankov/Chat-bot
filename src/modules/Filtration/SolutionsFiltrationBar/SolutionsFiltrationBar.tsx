import { useEffect, useRef } from 'react';
import {
  useAppDispatch,
  filtersSelector,
  useAppSelector,
  setPlatformsAction,
  updateFormState,
  getSolutionsFiltersSelector,
  isShowSolutionsFiltersLoaderSelector,
  getSolutionsFiltersMessageSelector,
  setSolutionsFiltersAction,
} from 'store';

import { useForm, FormProvider } from 'react-hook-form';

import { Loading, Alert } from 'sharedComponents';

import styles from '../FiltrationBar/styles.module.scss';

import { SolutionFilters } from '../SolutionsFilters/SolutionsFilters';
import { getActiveFiltersId, getResetFormState } from '../../../helpers/filtration';

export const SolutionsFiltrationBar = () => {
  const dispatch = useAppDispatch();
  const buttonRef = useRef<HTMLInputElement>(null);
  const solutionsFilters = useAppSelector(getSolutionsFiltersSelector);
  const isSolutionsLoading = useAppSelector(isShowSolutionsFiltersLoaderSelector);
  const solutionFilterMessage = useAppSelector(getSolutionsFiltersMessageSelector);
  const { formState } = useAppSelector(filtersSelector);

  const methods = useForm<Record<string, string | boolean>>({ defaultValues: formState });
  const { reset, getValues, handleSubmit } = methods;

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
    const resetFormState = getResetFormState(getValues());

    reset(resetFormState);
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
    dispatch(setSolutionsFiltersAction());
  }, [dispatch]);

  if (isSolutionsLoading) {
    return (
      <div className={styles.wrapper}>
        <Loading size="s" />
      </div>
    );
  }

  if (solutionFilterMessage) {
    return (
      <div className={styles.wrapper}>
        <Alert message={solutionFilterMessage} />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} onChange={handleFormChange}>
          <input type="submit" hidden ref={buttonRef} name="submit" />
          {solutionsFilters.map((filtersData) => (
            <SolutionFilters filtersData={filtersData} key={filtersData.id} />
          ))}
        </form>
      </FormProvider>
      <button className="button buttonSecondary" type="button" onClick={handleFormReset}>
        Очистить все
      </button>
    </div>
  );
};
