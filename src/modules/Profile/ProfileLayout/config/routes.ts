import { FunctionComponent, SVGProps } from 'react';
import { ROUTE } from 'router';

import { HistoryIcon, FaqIcon, FavoritesIcon, MyPageIcon } from '../../assets';

export interface INavBar {
  to: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  text: string;
}

export const routes: INavBar[] = [
  {
    to: ROUTE.PROFILE_SETTINGS,
    icon: MyPageIcon,
    text: 'Персональные данные',
  },
  {
    to: ROUTE.PROFILE_HISTORY,
    icon: HistoryIcon,
    text: 'История просмотра',
  },
  {
    to: ROUTE.PROFILE_FAVORITES,
    icon: FavoritesIcon,
    text: 'Избранное',
  },
  {
    to: ROUTE.PROFILE_FAQ,
    icon: FaqIcon,
    text: 'FAQ',
  },
];
