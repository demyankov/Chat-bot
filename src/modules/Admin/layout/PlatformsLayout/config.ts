import { TabsRoutes } from 'modules/Admin/router/routes';
import { PlatformsTabsList, PlatformsTabs } from 'modules/Admin/types';

export const adminPlatformsTabsList: PlatformsTabsList[] = [
  {
    id: 1,
    tabName: PlatformsTabs.workWithPlatforms,
    tabLink: TabsRoutes.workWithPlatforms,
  },
  {
    id: 2,
    tabName: PlatformsTabs.filtersDirectory,
    tabLink: TabsRoutes.filtersDirectory,
  },
];
