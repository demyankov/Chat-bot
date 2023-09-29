import { useEffect, useRef, useState } from 'react';

import { ArrowDownIcon, ArrowLeft, ArrowUpIcon, Clear, DescriptionIcon } from 'assets';

import {
  filtersSelector,
  getTotalPlatformsCount,
  setPlatformsAction,
  updateFormState,
  useAppDispatch,
  useAppSelector,
} from 'store';

import { useNavigate } from 'react-router';

import { FormProvider, useForm } from 'react-hook-form';

import styles from './styles.module.scss';

import { SyntheticEvent } from '../types';
import { ROUTE } from '../../../router/routes';
import { getAllFiltersAction } from '../../../store/actions/filters';
import { Loading } from '../../../sharedComponents';
import { Alert } from '../../../sharedComponents/Alert/Alert';
import { Filters } from '../Filters/Filters';
import { getActiveFiltersId, getResetFormState } from '../../../helpers/filtration';

export const AllFilters = () => {
  const dispatch = useAppDispatch();
  const buttonRef = useRef<HTMLInputElement>(null);
  const { allFilters, isAllFiltersError, isAllFiltersLoading, formState } = useAppSelector(filtersSelector);
  const platformsCount = useAppSelector(getTotalPlatformsCount);

  const methods = useForm<Record<string, string | boolean>>({ defaultValues: formState });

  const [closedFilters, setClosedFilters] = useState<Array<string>>([]);
  const navigate = useNavigate();

  const onSubmit = (formData: Record<string, string | boolean>) => {
    dispatch(updateFormState(formData));
    const idFilterItems = getActiveFiltersId(formData);
    dispatch(
      setPlatformsAction({
        amount: '1',
        type: 'asc',
        idFilterItems,
      }),
    );
  };

  const isClosed = (id: string): boolean => closedFilters.includes(id);

  const toggleOpen = ({ currentTarget: { id } }: SyntheticEvent<HTMLButtonElement>) =>
    isClosed(id)
      ? setClosedFilters(closedFilters.filter((item) => item !== id))
      : setClosedFilters([...closedFilters, id]);

  const handleClearFilters = () => {
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

  const handleFormChange = () => {
    buttonRef.current?.click();
  };

  useEffect(() => {
    if (!allFilters.length) {
      dispatch(getAllFiltersAction());
    }
  }, [dispatch, allFilters.length]);

  if (isAllFiltersLoading) {
    return (
      <div className={styles.wrapper}>
        <Loading />
      </div>
    );
  }

  if (isAllFiltersError) {
    return (
      <div className={styles.wrapper}>
        <Alert message="Ошибка загрузки фильтров" />
      </div>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.allFilters}>
        <h4>Все фильтры</h4>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} onChange={handleFormChange}>
            <input type="submit" hidden ref={buttonRef} name="submit" />
            <div className={styles.wrapper}>
              {allFilters.map((filterGroup) => (
                <div className={styles.filterGroup} key={filterGroup.id}>
                  <h6 className={styles.groupName}>{filterGroup.filterGroupName}</h6>
                  {filterGroup.filtersForPlatforms.map((filter, index) => (
                    <div key={`Input ${index}`}>
                      <div className={styles.groupItem}>
                        {filter.inputType !== 'text' && (
                          <button type="button" className={styles.filterName} id={filter.id} onClick={toggleOpen}>
                            {isClosed(filter.id) ? <ArrowDownIcon /> : <ArrowUpIcon />}
                            <span className={styles.filterNameText}>{filter.filterName}</span>
                            {filter.descriptionShort && <DescriptionIcon />}
                          </button>
                        )}
                        {!isClosed(filter.id) && (
                          <div className={styles.filterOptions}>
                            <Filters filtersData={filter} showTitle={false} showFullList />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className={styles.buttonWrapper}>
              <button
                type="button"
                onClick={() => {
                  navigate(ROUTE.PLATFORMS);
                  window.scrollTo(0, 0);
                }}
              >
                <ArrowLeft />
                &nbsp; Вернуться к платформам
              </button>
              <button
                className="button buttonSecondary"
                type="button"
                onClick={() => {
                  navigate(ROUTE.PLATFORMS);
                  window.scrollTo(0, 0);
                }}
              >
                Показать результат ({platformsCount})
              </button>
              <button type="button" onClick={handleClearFilters}>
                Сбросить фильтры &nbsp;
                <Clear />
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};
