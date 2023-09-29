import { TabsRoutes } from 'modules/Admin/router/routes';

import { SolutionsTabsList } from 'modules/Admin/types';

export enum SolutionsTabs {
  workWithSolutions = 'Работа с решениями',
  workWithSolutionsFilter = 'Работа с фильтром решения',
  filtersDirectory = 'Справочник фильтров',
  mainOptions = 'Основные настройки',
  filtersOptions = 'Настройки фильтров',
  reviews = 'Отзывы',
  createSolutionFilter = 'Создание фильтра решения',
}

export const adminSolutionsTabsList: SolutionsTabsList[] = [
  {
    id: 1,
    tabName: SolutionsTabs.workWithSolutions,
    tabLink: TabsRoutes.workWithPlatforms,
  },
  {
    id: 2,
    tabName: SolutionsTabs.filtersDirectory,
    tabLink: TabsRoutes.filtersDirectory,
  },
];
