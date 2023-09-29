import {
  useAppSelector,
  useAppDispatch,
  filtersSelector,
  getSolutions,
  getIsSolutionsLoaderVisible,
  getSolutionsTotalPages,
  getSolutionsLoadingMessage,
} from 'store';
import { Pagination, Sort, BreadCrumbs, SolutionsList } from 'components';
import { SolutionsFiltrationBar } from 'modules';
import { useEffect } from 'react';
import { setSolutionsAction } from 'store/actions';
import { useSearchParams } from 'react-router-dom';
import { Loading, LoadingMessage } from 'sharedComponents';

import styles from '../PlatformsPage/styles.module.scss';

import { getActiveFiltersId } from '../../helpers/filtration';

const ELEMENTS_FOR_PAGE = '24';

export const SolutionsPage = () => {
  const solutions = useAppSelector(getSolutions);
  const isLoaderVisible = useAppSelector(getIsSolutionsLoaderVisible);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page') || '1';
  const totalPages = +useAppSelector(getSolutionsTotalPages);
  const loadingMessage = useAppSelector(getSolutionsLoadingMessage);
  const { formState } = useAppSelector(filtersSelector);
  const isLoading = isLoaderVisible && solutions.length === 0;

  const handlePageChange = (pageNumber: number) => {
    setSearchParams(`page=${pageNumber}`);
    document.body.scrollIntoView({ behavior: 'smooth' });
  };

  const reloadCardList = () => {
    const idFilterItems = getActiveFiltersId(formState);

    dispatch(
      setSolutionsAction({
        amount: currentPage,
        count: ELEMENTS_FOR_PAGE,
        type: 'asc',
        idFilterItems,
      }),
    );
  };

  useEffect(() => {
    // проверка на то, что значение текущей страницы является числом  больше или равно 1 (при вводе номера страницы вручную в URL)
    if (!Number.isNaN(+currentPage) && +currentPage >= 1) {
      reloadCardList();
    } else {
      setSearchParams(`page=1`);
    } // eslint-disable-next-line
  }, [currentPage]);

  // проверка на то, что значение текущей страницы в пределах от 1 до максимального в соответствии с пагинацией (при вводе номера страницы вручную в URL)
  useEffect(() => {
    if (totalPages !== 1 && +currentPage > totalPages) {
      setSearchParams(`page=1`);
    } // eslint-disable-next-line
  }, [totalPages]);

  return (
    <section className={styles.section}>
      <div className={styles.contentWrapper}>
        <div className={styles.wrapper}>
          <BreadCrumbs />
          <h4>Решения</h4>
          <p>
            Решения - это готовый сценарий, реализованный с помощью одной или нескольких Платформ. Наличие готовых
            решений упрощает и ускоряет процесс выбора Платформ для дальнейшего взаимодействия.
          </p>
          <Sort />
          <div className={styles.content}>
            <SolutionsFiltrationBar />
            <div className={styles.cardsWrapper}>
              {isLoading && <Loading delay={500} />}
              <LoadingMessage message={loadingMessage} />
              <SolutionsList solutions={solutions} />
              {totalPages > 1 && (
                <Pagination currentPage={Number(currentPage)} totalPages={totalPages} onPageChange={handlePageChange} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
