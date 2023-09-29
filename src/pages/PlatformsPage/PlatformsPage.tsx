import {
  useAppSelector,
  useAppDispatch,
  getPlatforms,
  getIsLoaderVisible,
  getTotalPages,
  getLoadingMessage,
  filtersSelector,
} from 'store';
import { PlatformList, Pagination, Sort, BreadCrumbs } from 'components';
import { FiltrationBar } from 'modules';
import { useEffect } from 'react';
import { setPlatformsAction } from 'store/actions';
import { useSearchParams } from 'react-router-dom';
import { Loading, LoadingMessage } from 'sharedComponents';

import styles from './styles.module.scss';

import { getActiveFiltersId } from '../../helpers/filtration';

const ELEMENTS_FOR_PAGE = '24';

export const PlatformsPage = () => {
  const platforms = useAppSelector(getPlatforms);
  const isLoaderVisible = useAppSelector(getIsLoaderVisible);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page') || '1';
  const totalPages = +useAppSelector(getTotalPages);
  const loadingMessage = useAppSelector(getLoadingMessage);
  const { formState } = useAppSelector(filtersSelector);

  const handlePageChange = (pageNumber: number) => {
    setSearchParams(`page=${pageNumber}`);

    if (pageNumber === 1 || pageNumber === totalPages) {
      document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const reloadCardList = () => {
    const idFilterItems = getActiveFiltersId(formState);

    dispatch(
      setPlatformsAction({
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
    document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  // проверка на то, что значение текущей страницы в пределах от 1 до максимального в соответствии с пагинацией (при вводе номера страницы вручную в URL)
  useEffect(() => {
    if (totalPages !== 1 && +currentPage > totalPages) {
      setSearchParams(`page=1`);
    } // eslint-disable-next-line
    document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPages]);

  return (
    <section className={styles.section}>
      <div className={styles.contentWrapper}>
        <div className={styles.wrapper}>
          <BreadCrumbs />
          <h4>Платформы</h4>
          <p>
            Платформа это конструктор чат-ботов, который помогает бизнесу автоматизировать процесс коммуникации с
            клиентами по продуманному сценарию. С помощью чат-бота можно отправлять новости, напоминания или обновления,
            обрабатывать заказы, обеспечивать поддержку клиентов круглосуточно и многое другое.
          </p>
          <Sort />
          <div className={styles.content}>
            <FiltrationBar />
            <div className={styles.cardsWrapper}>
              {isLoaderVisible && platforms.length === 0 && <Loading delay={500} />}
              <LoadingMessage message={loadingMessage} />
              <PlatformList platforms={platforms} reloadCardList={reloadCardList} />
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
