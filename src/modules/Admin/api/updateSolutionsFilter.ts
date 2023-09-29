import { authUserAxiosInstance } from 'api';
import { SolutionFilter, UpdateSolutionFilter } from 'store';

import { endpoints } from './endpoints';

export const updateSolutionsFilter = (filter: SolutionFilter): Promise<void> => {
  const { topPriority, filterName, descriptionLong, id, filterItemsForSolutions: options, inputType } = filter;

  const filterItemsForSolutions = options.map(({ filterItemName }) => filterItemName);

  const updatedFilter: UpdateSolutionFilter = {
    inputType,
    topPriority,
    filterName,
    descriptionLong,
    filterItemsForSolutions,
  };

  return authUserAxiosInstance.put(`${endpoints.filtersForSolutions}/${id}`, updatedFilter);
};
