import { PlatformsTabsList, PlatformsTabs } from 'modules/Admin/types';

import { TabsRoutes } from 'modules/Admin/router/routes';

export const platformsTabsList: PlatformsTabsList[] = [
  {
    id: 1,
    tabName: PlatformsTabs.mainOptions,
    tabLink: TabsRoutes.mainOptions,
  },
  {
    id: 2,
    tabName: PlatformsTabs.filtersOptions,
    tabLink: TabsRoutes.filtersOptions,
  },
  {
    id: 3,
    tabName: PlatformsTabs.reviews,
    tabLink: TabsRoutes.reviewsOptions,
  },
];
