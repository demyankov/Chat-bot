import { createRoutesFromElements, Route } from 'react-router';
import { IUser } from 'store/types';

import { AdminPlatformRoutes, AdminSolutionRoutes, ROUTE, TabsRoutes } from './routes';

import {
  DashboardPage,
  PlatformsWorkPage,
  SettingsPage,
  SolutionsPage,
  UsersPage,
  UsersLkPage,
  MainPage,
  AdminsPage,
  FiltersDirectoryPage,
  SolutionsFiltersDirectoryPage,
  SolutionMainOptionPage,
  SettingSolutionFiltersPage,
  SettingSolutionImagesPage,
  SettingSolutionVideoPage,
  SettingSolutionTasksPage,
  SettingSolutionEventsPage,
  SettingSolutionReviewsPage,
} from '../pages';
import {
  ProtectedAdmin,
  AdminPlatform,
  PlatformMainOptions,
  AdminReviews,
  PlatformFiltersOptions,
  SolutionFilterOptions,
} from '../components';

import { AdminPlatformPath, PlatformsTabs } from '../types';
import {
  AdminLayout,
  PlatformsLayout,
  SolutionSettingsLayout,
  SolutionsLayout,
  SolutionsFiltersLayout,
} from '../layout';
import { SolutionsTabs } from '../layout/SolutionsLayout/config';

export const adminModule = (user: IUser) =>
  createRoutesFromElements(
    <Route id="protect-admin" element={<ProtectedAdmin user={user} />}>
      <Route
        id="admin-layout"
        path={ROUTE.ADMIN}
        element={<AdminLayout />}
        handle={{
          crumb: { path: ROUTE.ADMIN, name: 'Дашборд' },
        }}
      >
        <Route id="admin" index element={<DashboardPage />} />
        <Route id="admin-dashboard" path={ROUTE.DASHBOARD} element={<DashboardPage />} />
        <Route id="admin-main" path={ROUTE.MAIN} element={<MainPage />} />
        <Route id="admin-admins" path={ROUTE.ADMINS} element={<AdminsPage />} />
        <Route id="admin-userlk" path={ROUTE.USERSLK} element={<UsersLkPage />} />
        <Route id="admin-platforms" path={ROUTE.PLATFORMS} element={<PlatformsLayout />}>
          <Route index element={<PlatformsWorkPage />} />
          <Route
            id="admin-work-with-platforms"
            path={TabsRoutes.workWithPlatforms}
            element={<PlatformsWorkPage />}
            handle={{
              crumb: { path: TabsRoutes.workWithPlatforms, name: PlatformsTabs.workWithPlatforms },
            }}
          />
          <Route
            id="admin-platform-filter-directory"
            path={TabsRoutes.filtersDirectory}
            element={<FiltersDirectoryPage />}
            handle={{
              crumb: { path: TabsRoutes.filtersDirectory, name: PlatformsTabs.filtersDirectory },
            }}
          />
        </Route>
        <Route
          id="admin-platform-create"
          path={`${ROUTE.PLATFORMS}/${AdminPlatformRoutes.create}`}
          element={<AdminPlatform />}
          handle={{
            crumb: {
              path: `${ROUTE.ADMIN}/${ROUTE.PLATFORMS}`,
              name: AdminPlatformPath.platforms,
            },
          }}
        >
          <Route
            index
            element={<PlatformMainOptions />}
            handle={{
              crumb: {
                path: TabsRoutes.mainOptions,
                name: `${AdminPlatformPath.createPlatform}(${PlatformsTabs.mainOptions})`,
              },
            }}
          />
        </Route>
        <Route
          id="admin-platform"
          path={`${ROUTE.PLATFORMS}/${AdminPlatformRoutes.platform}`}
          element={<AdminPlatform />}
          handle={{
            crumb: { path: `${ROUTE.ADMIN}/${ROUTE.PLATFORMS}`, name: AdminPlatformPath.platforms },
          }}
        >
          <Route
            index
            id="admin-platform-main-options-edit"
            path={TabsRoutes.mainOptions}
            element={<PlatformMainOptions />}
            handle={{
              crumb: { path: TabsRoutes.mainOptions, name: PlatformsTabs.mainOptions },
            }}
          />
          <Route
            id="admin-platform-filters-options"
            path={TabsRoutes.filtersOptions}
            element={<PlatformFiltersOptions />}
            handle={{
              crumb: { path: TabsRoutes.filtersOptions, name: PlatformsTabs.filtersOptions },
            }}
          />
          <Route
            id="admin-platform-reviews-link"
            path={TabsRoutes.reviewsOptions}
            element={<AdminReviews />}
            handle={{
              crumb: { path: TabsRoutes.reviewsOptions, name: PlatformsTabs.reviews },
            }}
          />
        </Route>
        <Route id="admin-settings" path={ROUTE.SETTINGS} element={<SettingsPage />} />

        <Route id="users" path={ROUTE.USERS} element={<UsersPage />} />

        <Route id="admin-solutions" path={ROUTE.SOLUTIONS} element={<SolutionsLayout />}>
          <Route index element={<SolutionsPage />} />
          <Route
            id="admin-work-with-solutions"
            path={TabsRoutes.workWithSolutions}
            element={<SolutionsPage />}
            handle={{
              crumb: { path: TabsRoutes.workWithSolutions, name: SolutionsTabs.workWithSolutions },
            }}
          />
          <Route
            id="admin-solution-filter-directory"
            path={TabsRoutes.filtersDirectory}
            element={<SolutionsFiltersDirectoryPage />}
            handle={{
              crumb: { path: TabsRoutes.filtersDirectory, name: SolutionsTabs.filtersDirectory },
            }}
          />
        </Route>

        <Route
          id="admin-solutions-filters-work"
          path={`${ROUTE.SOLUTIONS}/${AdminSolutionRoutes.workWithFilter}/${AdminSolutionRoutes.id}`}
          element={<SolutionsFiltersLayout />}
          handle={{
            crumb: { path: AdminSolutionRoutes.workWithFilter, name: SolutionsTabs.workWithSolutionsFilter },
          }}
        >
          <Route id="admin-solution-filter-change" index element={<SolutionFilterOptions />} />
          <Route
            id="admin-solution-filter-change-tab"
            path={TabsRoutes.mainOptions}
            element={<SolutionFilterOptions />}
          />
        </Route>
        <Route
          id="admin-solutions-filter-create"
          path={`${ROUTE.SOLUTIONS}/${AdminSolutionRoutes.workWithFilter}/${AdminSolutionRoutes.create}`}
          element={<SolutionsFiltersLayout />}
          handle={{
            crumb: { path: AdminSolutionRoutes.workWithFilter, name: SolutionsTabs.workWithSolutionsFilter },
          }}
        >
          <Route id="admin-solution-filter-create" index element={<SolutionFilterOptions />} />
          <Route
            id="admin-solution-filter-create-tab"
            path={TabsRoutes.mainOptions}
            element={<SolutionFilterOptions />}
          />
        </Route>

        <Route
          id="setting-solution-create-layout"
          path={`${ROUTE.SOLUTIONS}/${AdminSolutionRoutes.create}`}
          element={<SolutionSettingsLayout />}
        >
          <Route index id="setting-solution-create" element={<SolutionMainOptionPage />} />
        </Route>

        <Route
          id="admin-solution-settings"
          path={`${ROUTE.SOLUTIONS}/${AdminSolutionRoutes.id}`}
          element={<SolutionSettingsLayout />}
        >
          <Route
            id="setting-solution-main-options"
            path={TabsRoutes.mainOptions}
            element={<SolutionMainOptionPage />}
          />
          <Route
            id="setting-solution-filters"
            path={TabsRoutes.filtersOptions}
            element={<SettingSolutionFiltersPage />}
          />
          <Route id="setting-solution-images" path={TabsRoutes.imagesOptions} element={<SettingSolutionImagesPage />} />
          <Route id="setting-solution-video" path={TabsRoutes.videoOptions} element={<SettingSolutionVideoPage />} />
          <Route id="setting-solution-tasks" path={TabsRoutes.tasksOptions} element={<SettingSolutionTasksPage />} />
          <Route id="setting-solution-events" path={TabsRoutes.eventsOptions} element={<SettingSolutionEventsPage />} />
          <Route
            id="setting-solution-reviews"
            path={TabsRoutes.reviewsOptions}
            element={<SettingSolutionReviewsPage />}
          />
        </Route>
      </Route>
    </Route>,
  );
