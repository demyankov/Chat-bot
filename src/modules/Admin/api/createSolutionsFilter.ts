import { authUserAxiosInstance } from 'api';
import { SolutionFilter, UpdateSolutionFilter } from 'store';

import { endpoints } from './endpoints';

export const createSolutionsFilter = (filter: SolutionFilter): Promise<void> => {
  const { topPriority, filterName, descriptionLong, filterItemsForSolutions: options, inputType } = filter;

  const filterItemsForSolutions = options.map(({ filterItemName }) => filterItemName);

  const newFilter: UpdateSolutionFilter = {
    inputType,
    topPriority,
    filterName,
    descriptionLong,
    filterItemsForSolutions,
  };

  return authUserAxiosInstance.post(`${endpoints.filtersForSolutions}`, newFilter);
};
