import { NAVID } from './navId';

import { MonitorIcon, ThumbsUpIcon, UsersIcon, SettingsIcon, DashboardIcon, UsersLkIcon, MainIcon } from '../assets';
import { ROUTE } from '../router/routes';

export interface MenuListType {
  text: string;
  to: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  id: string;
}

export const menuList: MenuListType[] = [
  { text: 'Дашборд', to: ROUTE.DASHBOARD, icon: DashboardIcon, id: 'dashdoard' },
  { text: 'Главная страница', to: ROUTE.MAIN, icon: MainIcon, id: NAVID.MAIN },
  { text: 'Пользователи', to: ROUTE.USERS, icon: UsersIcon, id: NAVID.USERS },
  { text: 'Личный каб. польз.', to: ROUTE.USERSLK, icon: UsersLkIcon, id: NAVID.USERSLK },
  { text: 'Платформы', to: ROUTE.PLATFORMS, icon: MonitorIcon, id: NAVID.PLATFORMS },
  { text: 'Решения', to: ROUTE.SOLUTIONS, icon: ThumbsUpIcon, id: NAVID.SOLUTIONS },
  { text: 'Настройки', to: ROUTE.SETTINGS, icon: SettingsIcon, id: NAVID.SETTINGS },
];
