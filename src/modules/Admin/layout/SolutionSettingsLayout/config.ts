import { TabsRoutes } from 'modules/Admin/router/routes';
import { SolutionSettingsTabsList } from 'modules/Admin/types';

export enum SolutionSettingsTabs {
  main = 'Основные настройки',
  filters = 'Настройки фильтров',
  images = 'Изображения',
  video = 'Видео/анимация',
  tasks = 'Задачи',
  events = 'Мероприятия',
  reviews = 'Отзывы',
}

export const solutionSettingsTabsList: SolutionSettingsTabsList[] = [
  {
    id: 1,
    tabName: SolutionSettingsTabs.main,
    tabLink: TabsRoutes.mainOptions,
  },
  {
    id: 2,
    tabName: SolutionSettingsTabs.filters,
    tabLink: TabsRoutes.filtersOptions,
  },
  {
    id: 3,
    tabName: SolutionSettingsTabs.images,
    tabLink: TabsRoutes.imagesOptions,
  },
  {
    id: 4,
    tabName: SolutionSettingsTabs.video,
    tabLink: TabsRoutes.videoOptions,
  },
  {
    id: 5,
    tabName: SolutionSettingsTabs.tasks,
    tabLink: TabsRoutes.tasksOptions,
  },
  {
    id: 6,
    tabName: SolutionSettingsTabs.events,
    tabLink: TabsRoutes.eventsOptions,
  },
  {
    id: 7,
    tabName: SolutionSettingsTabs.reviews,
    tabLink: TabsRoutes.reviewsOptions,
  },
];
