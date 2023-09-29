import { Collapse } from 'sharedComponents/Collapse/Collapse';
import { CollapseArrowDown, CollapseArrowUp, cancelBtnIcon } from 'assets';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { Characteristic } from 'store';
import { useParams } from 'react-router';

import { getActivePlatformFilters } from 'modules/Admin/api/getAllPosibleFilters';

import { FieldValues, FormProvider, SubmitHandler, UseFormReturn, useForm } from 'react-hook-form';

import { updatePlatformFilters } from 'modules/Admin/api';

import cn from 'classnames';

import { FiltersIdStatus } from 'modules/Admin/types';

import { createActiveFilters } from 'modules/Admin/utils/helpers';

import { Loading, ModalInfo } from 'sharedComponents';

import styles from './styles.module.scss';

import buttonsStyles from '../../../../styles/button.style.module.scss';
import { FilterGroup } from '../FIlterGroup/FilterGroup';

interface GetPlatformFiltersProps {
  platformId: string;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setAllFilters: Dispatch<SetStateAction<Characteristic[]>>;
  setInfoMessage: Dispatch<SetStateAction<string>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  methods: UseFormReturn<FieldValues>;
}

const createFilterFields = async (currentPlatformId: string): Promise<[Characteristic[], FiltersIdStatus]> => {
  const platformFilters = await getActivePlatformFilters(currentPlatformId);
  const defaultFiltersValue = createActiveFilters(platformFilters);
  return [platformFilters, defaultFiltersValue];
};

const getPlatformFilters = ({
  platformId,
  setIsModalOpen,
  setAllFilters,
  setInfoMessage,
  setIsLoading,
  methods,
}: GetPlatformFiltersProps) => {
  setIsLoading(true);
  createFilterFields(platformId)
    .then((filters) => {
      setAllFilters(filters[0]);
      methods.reset(filters[1]);
    })
    .catch((e: Error) => {
      setInfoMessage(e.message);
      setIsModalOpen(true);
    })
    .finally(() => {
      setIsLoading(false);
    });
};

export const PlatformFiltersOptions = () => {
  const { platformId } = useParams();

  const [allFilters, setAllFilters] = useState<Characteristic[]>([]);
  const [infoMessage, setInfoMessage] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const methods = useForm();

  useEffect(() => {
    if (platformId) {
      getPlatformFilters({ platformId, setIsModalOpen, setAllFilters, setInfoMessage, setIsLoading, methods });
    }
  }, [platformId, methods]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const activeFiltersRequest = Object.entries(data)
      .filter((filter) => filter[1])
      .map((curFilter) => curFilter[0]);
    if (platformId) {
      updatePlatformFilters({ idFilterItems: activeFiltersRequest }, platformId)
        .then(() => {
          setInfoMessage('Фильтры успешно сохранены');
          setIsModalOpen(true);
          getPlatformFilters({ platformId, setIsModalOpen, setAllFilters, setInfoMessage, setIsLoading, methods });
        })
        .catch((e: Error) => {
          setInfoMessage(e.message);
          setIsModalOpen(true);
        });
    }
  };

  const { isDirty } = methods.formState;
  const submitBtnStyle = cn(buttonsStyles.invertButton, styles.submitBtn);

  const layout = isLoading ? (
    <Loading delay={0} />
  ) : (
    <>
      <p className={styles.title}>Отметьте фильтры, которые необходимо отобразить у платформы.</p>
      <FormProvider {...methods}>
        <form className={styles.filtersWrapper} onSubmit={methods.handleSubmit(onSubmit)}>
          {allFilters.map((filter) => (
            <Collapse
              title={filter.filterGroupName}
              openIcon={CollapseArrowDown}
              closeIcon={CollapseArrowUp}
              key={filter.id}
            >
              <FilterGroup filtersForPlatforms={filter.filtersForPlatforms} filterName={filter.filterGroupName} />
            </Collapse>
          ))}
          <div className={styles.controlButtons}>
            <button
              className={styles.resetFiltersBtn}
              type="button"
              disabled={!isDirty}
              onClick={() => {
                methods.reset();
              }}
            >
              Сбросить фильтры
              <img className={styles.cancelBtnIcon} src={cancelBtnIcon} alt={`Изображение ${cancelBtnIcon}`} />
            </button>
            <button className={submitBtnStyle} disabled={!isDirty} type="submit">
              Сохранить
            </button>
          </div>
        </form>
      </FormProvider>
      <ModalInfo message={infoMessage} setIsOpen={setIsModalOpen} isOpen={isModalOpen} />
    </>
  );

  return layout;
};
