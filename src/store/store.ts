import { configureStore } from '@reduxjs/toolkit';

import {
  filtersReducer,
  platformReducer,
  platformsReducer,
  userReducer,
  languageReducer,
  modalProfileReducer,
  adminPlatformReducer,
  adminPlatformsReducer,
  adminPlatformsFiltersReducer,
  adminSolutionsReducer,
  activeLinkReducer,
  solutionsFiltersReducer,
  solutionsReducer,
  solutionsFilterReducer,
} from './features';

export const store = configureStore({
  reducer: {
    user: userReducer,
    platforms: platformsReducer,
    platform: platformReducer,
    sortPlatforms: platformsReducer,
    filters: filtersReducer,
    language: languageReducer,
    modalProfile: modalProfileReducer,
    activeLink: activeLinkReducer,
    adminPlatform: adminPlatformReducer,
    adminPlatforms: adminPlatformsReducer,
    solutions: solutionsReducer,
    sortSolutions: platformsReducer,
    solutionsFilters: solutionsFiltersReducer,
    adminPlatformsFilters: adminPlatformsFiltersReducer,
    adminSolutions: adminSolutionsReducer,
    solutionsFilter: solutionsFilterReducer,
  },
});
