import {
  getIsSearchButtonActive,
  setIsSearchButtonActive,
  setSortSolutionsDirection,
  setSortSolutionsKey,
  useAppDispatch,
  useAppSelector,
} from 'store';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from 'sharedComponents';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AdminSolutionRoutes, ROUTE } from 'modules/Admin/router/routes';

import styles from './styles.module.scss';

import { SortAscIcon, SortDescIcon, SearchIcon } from '../../assets';
import { SortType } from '../../config';
import { sortKeyScheme } from '../../data';

// Порядок поиска и сортировки следующий:
// 1 Считываем sortDirection и sortKey из query при их наличии.
// 2 Записываем их в начальное состояние объекта запроса.
// 3 При клике по кнопке сортировки или кнопке поиска обновляем содержимое объекта запроса
// 4 Обновляем query (из объекта запроса)
// 5 Обновляем данные в store при изменении любого из параметров в query
// 6 При изменении sortDirection или sortKey в store идет запрос на сервер, происходит обновление данных о платформах в store, ререндер списка платформ

export const SolutionsWorkHeaderPanel = () => {
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm<{ sortKey: string }>({
    mode: 'onChange',
    resolver: yupResolver(sortKeyScheme),
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const sortKeyQuery = searchParams.get('sortKey') || '';
  const sortDirectionQuery = searchParams.get('sortDirection') || SortType.ACSENDING;
  const [params, setParams] = useState({ sortKey: sortKeyQuery, sortDirection: sortDirectionQuery });
  const dispatch = useAppDispatch();
  const isKeyButtonActive = useAppSelector(getIsSearchButtonActive);

  const navigate = useNavigate();

  // обновление sortDirection в объектe запроса
  const handleClickSortDirection = () =>
    setParams({
      ...params,
      sortDirection: sortDirectionQuery === SortType.ACSENDING ? SortType.DECSENDING : SortType.ACSENDING,
    });

  // обработка события click по кнопке поиска (обновление sortKey в объектe запроса, disabled кнопки)
  const handleClickSortKey = () => {
    const { sortKey } = getValues();
    if (sortKeyQuery !== sortKey.trim()) {
      setParams({
        ...params,
        sortKey: sortKey.trim(),
      });
      dispatch(setIsSearchButtonActive(false));
    }
  };

  // обновление query из объекта запроса при изменении одного из ключей
  useEffect(() => setSearchParams(params), [params.sortKey, params.sortDirection]); // eslint-disable-line  react-hooks/exhaustive-deps

  // обновление sortKey в store при его изменении в query
  useEffect(() => {
    dispatch(setSortSolutionsKey(sortKeyQuery));
  }, [sortKeyQuery, dispatch]);

  // обновление sortDirection в store при его изменении в query
  useEffect(() => {
    dispatch(setSortSolutionsDirection(sortDirectionQuery));
  }, [sortDirectionQuery, dispatch]);

  const handleClick = () => {
    const newPath = `${ROUTE.ADMIN}/${ROUTE.SOLUTIONS}/${AdminSolutionRoutes.create}`;
    navigate(newPath);
  };

  return (
    <div className={styles.wrapper}>
      <button type="button" onClick={handleClickSortDirection} className={styles.sortButton}>
        {sortDirectionQuery === SortType.ACSENDING ? <SortAscIcon /> : <SortDescIcon />}
      </button>
      <form onSubmit={handleSubmit(handleClickSortKey)} className={styles.wrapper}>
        <Input
          register={register}
          defaultChecked
          defaultValue={sortKeyQuery}
          id="sortKey"
          Icon={<SearchIcon />}
          iconStart
          error={errors.sortKey?.message || null}
        />
        <button className="button buttonSecondary" type="submit" disabled={!isKeyButtonActive}>
          Поиск
        </button>
      </form>
      <div className={styles.buttonWrapper}>
        <button className="button buttonSecondary" type="button" onClick={handleClick}>
          Добавить решение
        </button>
      </div>
    </div>
  );
};
