import { ProtectedAuth, ProtectedUnAuth } from 'components';
import { MainLayout } from 'layouts';
import {
  ProfileDashboardPage,
  ProfileFavoritePlatformsPage,
  ProfileLayout,
  ProfileSettingsPage,
  ProfileHistoryPlatformsPage,
  ProfileFavoriteSolutionsPage,
  ProfileFavoriteLayout,
  ProfileHistorySolutionsPage,
  ProfileHistoryLayout,
} from 'modules/Profile';
import { adminModule } from 'modules/Admin';
import {
  HomePage,
  NewPasswordPage,
  RegistrationPage,
  ResetPasswordPage,
  SignInPage,
  PlatformsPage,
  PlatformDetailsPage,
  PlatformSubscribers,
  SolutionsPage,
  AdditionalFunctional,
  Integration,
  PaymentSystems,
} from 'pages';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { IUser } from 'store/types';

import { FaqPage } from 'sharedComponents';

import { ROUTE } from './routes';

import { AllFilters } from '../modules';

const routes = (user: IUser) => [
  ...adminModule(user),
  ...createRoutesFromElements(
    <>
      <Route
        id="home"
        path={ROUTE.HOME}
        element={<MainLayout />}
        handle={{
          crumb: { path: ROUTE.HOME, name: 'Главная' },
        }}
      >
        <Route id="home-layout" index element={<HomePage />} />
        <Route
          id="platfoms"
          path={ROUTE.PLATFORMS}
          element={<PlatformsPage />}
          handle={{
            crumb: { path: ROUTE.PLATFORMS, name: 'Платформы' },
          }}
        />
        <Route
          id="solutions"
          path={ROUTE.SOLUTIONS}
          element={<SolutionsPage />}
          handle={{
            crumb: { path: ROUTE.SOLUTIONS, name: 'Готовые решения' },
          }}
        />
        <Route
          id="filters"
          path={ROUTE.FILTERS}
          element={<AllFilters />}
          handle={{
            crumb: { path: ROUTE.FILTERS, name: 'Все фильтры' },
          }}
        />
        <Route id="protect-auth" element={<ProtectedAuth user={user} />}>
          <Route id="profile-layout" path={ROUTE.PROFILE} element={<ProfileLayout />}>
            <Route id="profile" index element={<ProfileDashboardPage />} />
            <Route id="profile-favorite" path={ROUTE.PROFILE_FAVORITES} element={<ProfileFavoriteLayout />}>
              <Route id="default-favorites-platforms" index element={<ProfileFavoritePlatformsPage />} />
              <Route
                id="favorites-platforms"
                path={ROUTE.PROFILE_FAVORITES_PLATFORMS}
                element={<ProfileFavoritePlatformsPage />}
              />
              <Route
                id="favorites-solutions"
                path={ROUTE.PROFILE_FAVORITES_SOLUTIONS}
                element={<ProfileFavoriteSolutionsPage />}
              />
            </Route>
            <Route id="profile-history" path={ROUTE.PROFILE_HISTORY} element={<ProfileHistoryLayout />}>
              <Route id="default-history-platforms" index element={<ProfileHistoryPlatformsPage />} />
              <Route
                id="history-platforms"
                path={ROUTE.PROFILE_HISTORY_PLATFORMS}
                element={<ProfileHistoryPlatformsPage />}
              />
              <Route
                id="history-solutions"
                path={ROUTE.PROFILE_HISTORY_SOLUTIONS}
                element={<ProfileHistorySolutionsPage />}
              />
            </Route>

            <Route id="profile-settings" path={ROUTE.PROFILE_SETTINGS} element={<ProfileSettingsPage />} />
            <Route id="profile-faq" path={ROUTE.PROFILE_FAQ} element={<FaqPage />} />
          </Route>
        </Route>
        <Route
          id="platfoms-details"
          path={ROUTE.PLATFORMS_DETAILS}
          element={<PlatformDetailsPage />}
          handle={{
            crumb: { path: ROUTE.PLATFORMS, name: 'Платформы' },
          }}
        >
          <Route id="integration" index element={<Integration />} />
          <Route id="tab-1" path="tab=1" element={<Integration />} />
          <Route id="tab-2" path="tab=2" element={<PaymentSystems />} />
          <Route id="tab-3" path="tab=3" element={<AdditionalFunctional />} />
          <Route id="tab-4" path="tab=4" element={<PlatformSubscribers />} />
          <Route id="tab-5" path="tab=5" element={<AdditionalFunctional />} />
        </Route>
      </Route>

      <Route id="un-auth" element={<ProtectedUnAuth user={user} />}>
        <Route id="sign-up" path={ROUTE.SIGN_UP} element={<RegistrationPage />} />
        <Route id="sign-in" path={ROUTE.SIGN_IN} element={<SignInPage />} />
        <Route id="reset-password" path={ROUTE.RESET_PASSWORD} element={<ResetPasswordPage />}>
          <Route id="reset-password-add" path={`${ROUTE.RESET_PASSWORD}/:params`} element={<SignInPage />} />
        </Route>
        <Route id="new-password" path={ROUTE.NEW_PASSWORD} element={<NewPasswordPage />} />
      </Route>
    </>,
  ),
];

export const router = (user: IUser) => createBrowserRouter(routes(user));
