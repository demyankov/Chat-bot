import { GetPlatformsResponse } from 'store';

import { authUserAxiosInstance } from './authUserAxiosInstance';
import { endpoints } from './endpoints';

type SortingType = 'desc' | 'asc' | undefined;

interface GetPlatformCardsParams {
  amount: string;
  count?: string;
  type: SortingType;
  idFilterItems: string[];
}

const DEFAULTS_ELEMENTS_FOR_PAGE = '24';
export const getPlatformCards = ({
  amount,
  count = DEFAULTS_ELEMENTS_FOR_PAGE,
  type = 'asc',
  idFilterItems,
}: GetPlatformCardsParams): Promise<GetPlatformsResponse> => {
  const params = {
    pageNumber: amount,
    numberOfPlatformsPerPage: count,
    type,
  };
  return authUserAxiosInstance
    .post(
      endpoints.getFilteredPlatforms,
      { idFilterItems },
      {
        params,
      },
    )
    .then(({ data }) => data);
};
