import { Characteristic, PlatformFilterItem, PlatformFilter } from 'store';

import { FiltersIdStatus } from '../types';

const processFilterItems = (filterItems: PlatformFilterItem[], filtersId: FiltersIdStatus): void => {
  filterItems.forEach((filterItem) => {
    filtersId[filterItem.id] = filterItem.selected ? filterItem.id : false;
  });
};

const processPlatformFilters = (platformFilters: PlatformFilter[], filtersId: FiltersIdStatus): void => {
  platformFilters.forEach((platformFilter) => {
    processFilterItems(platformFilter.filterItemsForPlatforms, filtersId);
  });
};

export const createActiveFilters = (allFilters: Characteristic[]): FiltersIdStatus => {
  const filtersId: FiltersIdStatus = {};

  allFilters.forEach((filter) => {
    processPlatformFilters(filter.filtersForPlatforms, filtersId);
  });

  return filtersId;
};
