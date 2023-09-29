import { TabsRoutes } from 'modules/Admin/router/routes';
import { SolutionsFiltersTabsList } from 'modules/Admin/types';

export enum SolutionsFiltersTabs {
  filtersDirectory = 'Справочник фильтров',
}

export const adminSolutionsTabsList: SolutionsFiltersTabsList[] = [
  {
    id: 1,
    tabName: SolutionsFiltersTabs.filtersDirectory,
    tabLink: TabsRoutes.mainOptions,
  },
];
