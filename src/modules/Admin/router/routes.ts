export enum ROUTE {
  HOME = '/',
  ADMIN = '/admin',
  MAIN = 'main',
  SETTINGS = 'settings',
  DASHBOARD = 'dashboard',
  USERS = 'users',
  USERSLK = 'users-lk',
  SOLUTIONS = 'solutions',
  ADMINS = 'admins',
  PLATFORMS = 'platforms',
  FILTERS_DIRECTORY = 'filters-directory',
}
export enum TabsRoutes {
  mainOptions = 'main-options',
  filtersOptions = 'filters-options',
  reviewsOptions = 'reviews-options',
  tasksOptions = 'tasks-options',
  eventsOptions = 'events-options',
  videoOptions = 'video-options',
  imagesOptions = 'images-options',
  workWithPlatforms = 'work',
  workWithSolutions = 'work',
  filtersDirectory = 'filters-directory',
}

export enum AdminPlatformRoutes {
  platform = ':platformId',
  create = 'create',
}

export enum AdminSolutionRoutes {
  id = ':id',
  mainOptions = 'main-options',
  settings = 'settings',
  create = 'create',
  workWithFilter = 'work-with-filter',
  filterDirectory = 'filter-directory',
}
