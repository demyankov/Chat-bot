import { NAVID } from './navId';

import { MonitorIcon, ThumbsUpIcon, UsersIcon, SettingsIcon, UsersLkIcon, MainIcon } from '../assets';
import { ROUTE } from '../router/routes';

export interface DashboardsListType {
  text: string;
  to: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  id: string;
}

export const dashboardsList: DashboardsListType[] = [
  { text: 'Работа с главной страницей', to: ROUTE.MAIN, icon: MainIcon, id: NAVID.MAIN },
  { text: 'Работа с пользователями', to: ROUTE.USERS, icon: UsersIcon, id: NAVID.USERS },
  { text: 'Работа с личным каб. польз.', to: ROUTE.USERSLK, icon: UsersLkIcon, id: NAVID.USERSLK },
  { text: 'Работа с платформами', to: ROUTE.PLATFORMS, icon: MonitorIcon, id: NAVID.PLATFORMS },
  { text: 'Работа с решениями', to: ROUTE.SOLUTIONS, icon: ThumbsUpIcon, id: NAVID.SOLUTIONS },
  { text: 'Настройки', to: ROUTE.SETTINGS, icon: SettingsIcon, id: NAVID.SETTINGS },
];
