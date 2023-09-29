import { ProfileIcon } from 'assets';
import { FaqIcon, HistoryIcon, FavoritesIcon } from 'modules/Profile/assets';
import { ROUTE } from 'router';

const ProfileRoute = (path: string) => `${ROUTE.PROFILE}/${path}`;

export const routes = [
  {
    to: ProfileRoute(ROUTE.PROFILE_SETTINGS),
    text: 'Персональные данные',
    icon: ProfileIcon,
  },
  {
    to: ProfileRoute(ROUTE.PROFILE_HISTORY),
    text: 'История просмотра',
    icon: HistoryIcon,
  },
  {
    to: ProfileRoute(ROUTE.PROFILE_FAVORITES),
    text: 'Избранное',
    icon: FavoritesIcon,
  },
  {
    to: ProfileRoute(ROUTE.PROFILE_FAQ),
    text: 'FAQ',
    icon: FaqIcon,
  },
];
