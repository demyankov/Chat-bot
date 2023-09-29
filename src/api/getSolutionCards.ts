import { GetSolutionsResponse } from 'store';

import { authUserAxiosInstance } from './authUserAxiosInstance';
import { endpoints } from './endpoints';

type SortingType = 'desc' | 'asc' | undefined;

interface GetSolutionCardsParams {
  amount: string;
  count?: string;
  type: SortingType;
  idFilterItems: string[];
}

const DEFAULTS_ELEMENTS_FOR_PAGE = '24';
export const getSolutionCards = ({
  amount,
  count = DEFAULTS_ELEMENTS_FOR_PAGE,
  type = 'asc',
  idFilterItems,
}: GetSolutionCardsParams): Promise<GetSolutionsResponse> => {
  const params = {
    pageNumber: amount,
    numberOfSolutionsPerPage: count,
    type,
  };
  return authUserAxiosInstance
    .post(
      endpoints.getFilteredSolutions,
      { idFilterItems },
      {
        params,
      },
    )
    .then(({ data }) => data);
};
